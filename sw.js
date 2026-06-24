/* 离线缓存 service worker（苹果 Safari / iOS / iPadOS / macOS 兼容）
 * 更新题目后：把下面 CACHE 的版本号 +1（如 v2），用户重开一次 App 即自动更新。 */
const CACHE = 'bjt-pwa-v5';
const ASSETS = [
  './', './index.html', './questions.js', './manifest.webmanifest',
  './icon-180.png', './icon-192.png', './icon-512.png', './icon-512-maskable.png'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(() => {})));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // 页面导航：联网优先，断网回退到缓存的 index.html
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return r; })
        .catch(() => caches.match(req).then(c => c || caches.match('./index.html')))
    );
    return;
  }

  // 题库：联网优先（拿到最新题），断网用缓存
  if (url.pathname.endsWith('questions.js')) {
    e.respondWith(
      fetch(req)
        .then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return r; })
        .catch(() => caches.match(req))
    );
    return;
  }

  // 其它静态资源（壳/图标）：缓存优先
  e.respondWith(
    caches.match(req).then(c => c || fetch(req).then(r => {
      const cp = r.clone(); caches.open(CACHE).then(ca => ca.put(req, cp)); return r;
    }).catch(() => c))
  );
});
