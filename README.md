# 贸易实务检定 C级 练习 / 貿易実務検定C級 練習サイト

一个纯静态的手机端练习网站，面向 2026/12/6（第116回）C级考试。

- 日语出题，汉字带平假名注音（可一键开关），每题下方附中文翻译
- 答题即时反馈：每个选项都有「对/错」解析，答错时单独说明你选错的理由
- 自动记录答对/答错数、错题本、按天进度（保存在你手机浏览器本地）
- 按「主题日」循序渐进，支持「只练错题」
- 无需后端、无需安装，手机浏览器打开即用

## 文件结构

```
boueki-c-quiz/
├── index.html      # 网站本体（界面+逻辑），单文件
├── questions.js    # 题库（每天新增题目改这里）
└── README.md
```

## 本地试用

直接用浏览器打开 `index.html` 即可（双击）。手机上可先看效果，正式随时访问请按下方部署到 GitHub Pages。

## 每天新增题目（“每日新增”玩法）

打开 `questions.js`，把新题对象追加到数组里，`day` 设成新的一天，网站会**自动**识别新天数并显示在首页。模板：

```js
{
  id:"d7q1", day:7, topic:"复习", type:"3択",
  q:`日语题干，汉字用 <ruby>漢字<rt>かんじ</rt></ruby> 注音`,
  qzh:"题目的中文翻译",
  opts:[
    {t:`选项A（日语，可带<ruby>注音<rt>ちゅうおん</rt></ruby>）`, zh:"选项A中文"},
    {t:`选项B`, zh:"选项B中文"},
    {t:`选项C`, zh:"选项C中文"}
  ],
  ans:0,                       // 正确选项下标，从0开始（0=A）
  optExp:[                     // 数量必须和 opts 一致，每项解释对/错
    "A正确的理由……",
    "B错误的理由……",
    "C错误的理由……"
  ],
  note:"（可选）知识点补充"
},
```

注意：`optExp` 条数要和选项数一致；`ans` 不要超范围；`<ruby>…<rt>…</rt></ruby>` 成对出现。

## 部署到 GitHub，用手机访问（免费）

### 方法一：网页上传（最简单，不用命令行）

1. 电脑登录 https://github.com → 右上「+」→ **New repository**。
2. 仓库名填 `boueki-c-quiz`，选 **Public**，点 **Create repository**。
3. 进入空仓库页面，点 **uploading an existing file**，把 `index.html`、`questions.js`、`README.md` 拖进去 → **Commit changes**。
4. 仓库页 **Settings → Pages** → Source 选 **Deploy from a branch** → 分支选 `main`、目录 `/ (root)` → **Save**。
5. 等 1–2 分钟，页面顶部会出现网址：
   `https://<你的用户名>.github.io/boueki-c-quiz/`
6. 手机浏览器打开这个网址即可使用；建议「添加到主屏幕」，像 App 一样用。

以后改题：回到仓库网页，点开 `questions.js` → 铅笔图标编辑 → Commit，约 1 分钟后网站自动更新。

### 方法二：命令行（已会 Git 的话）

本文件夹已是一个 Git 仓库并完成首次提交。在 GitHub 新建空仓库后执行：

```bash
git remote add origin https://github.com/<你的用户名>/boueki-c-quiz.git
git branch -M main
git push -u origin main
```

然后同样在 **Settings → Pages** 开启（main / root）。之后每次改题：

```bash
git add -A && git commit -m "add day N questions" && git push
```

## 小提示

- 进度保存在「这台设备的这个浏览器」里，换手机或清缓存会清空（C级自用足够；若要跨设备同步需加后端，可后续再做）。
- 题库为原创练习题，按官方考纲与题型（語群選択 / 2択 / 3択 / 英文和訳）编写，用于熟悉知识点与题感；与真题难度可能略有差异。
