/* 贸易实务检定 C级 练习题库
 * 每个对象字段说明：
 *   id      : 唯一编号
 *   day     : 第几天（用于“每日新增 / 循序渐进”）
 *   topic   : 主题分类
 *   type    : 题型（3択 / 2択 / 語群選択）
 *   q       : 日语题目（汉字用 <ruby>汉字<rt>假名</rt></ruby> 标注读音）
 *   qzh     : 题目中文翻译
 *   opts    : 选项数组，t=日语(带假名)，zh=中文
 *   ans     : 正确选项的下标（从0开始）
 *   optExp  : 每个选项的解析（中文，说明为何对/错）
 *   note    : 知识点补充（中文，可选）
 *
 * ★ 每天新增题目：把新题对象按同样格式追加到下面数组，并把 day 设为新的一天即可，
 *   网站会自动识别新天数并显示进度。
 */
const QUESTIONS = [
/* ============ Day 1：贸易流程・形态・环境・经济 ============ */
{
  id:"d1q1", day:1, topic:"贸易的流程", type:"3択",
  q:`<ruby>直接<rt>ちょくせつ</rt></ruby><ruby>貿易<rt>ぼうえき</rt></ruby>の<ruby>説明<rt>せつめい</rt></ruby>として<ruby>正<rt>ただ</rt></ruby>しいものはどれか。`,
  qzh:"关于“直接贸易”的说明，正确的是哪一项？",
  opts:[
    {t:`<ruby>商社<rt>しょうしゃ</rt></ruby>などの<ruby>仲介<rt>ちゅうかい</rt></ruby><ruby>業者<rt>ぎょうしゃ</rt></ruby>を<ruby>通<rt>とお</rt></ruby>さず、<ruby>輸出者<rt>ゆしゅつしゃ</rt></ruby>と<ruby>輸入者<rt>ゆにゅうしゃ</rt></ruby>が<ruby>直接<rt>ちょくせつ</rt></ruby><ruby>取引<rt>とりひき</rt></ruby>すること`, zh:"不经过商社等中介，由出口商与进口商直接交易"},
    {t:`<ruby>商社<rt>しょうしゃ</rt></ruby>を<ruby>通<rt>とお</rt></ruby>して<ruby>取引<rt>とりひき</rt></ruby>すること`, zh:"通过商社进行交易"},
    {t:`<ruby>第三国<rt>だいさんごく</rt></ruby>を<ruby>経由<rt>けいゆ</rt></ruby>して<ruby>取引<rt>とりひき</rt></ruby>すること`, zh:"经由第三国进行交易"}
  ],
  ans:0,
  optExp:[
    "正确。直接贸易＝出口商与进口商不经中介、直接签约交易。",
    "错误。经过商社等中介的是“间接贸易”。",
    "错误。经第三国中介的是“三国间贸易（仲介贸易）”。"
  ],
  note:"对比记忆：直接贸易 / 间接贸易 / 三国间贸易。"
},
{
  id:"d1q2", day:1, topic:"贸易的流程", type:"2択",
  q:`<ruby>並行<rt>へいこう</rt></ruby><ruby>輸入<rt>ゆにゅう</rt></ruby>とは、<ruby>正規<rt>せいき</rt></ruby><ruby>代理店<rt>だいりてん</rt></ruby>を<ruby>通<rt>とお</rt></ruby>さずに<ruby>真正<rt>しんせい</rt></ruby><ruby>商品<rt>しょうひん</rt></ruby>を<ruby>輸入<rt>ゆにゅう</rt></ruby>することである。`,
  qzh:"“并行进口”是指不经过正规代理店而进口正品（真品）。这种说法对吗？",
  opts:[ {t:`<ruby>正<rt>ただ</rt></ruby>しい（○）`, zh:"正确（○）"}, {t:`<ruby>誤<rt>あやま</rt></ruby>り（×）`, zh:"错误（×）"} ],
  ans:0,
  optExp:[
    "正确。并行进口指绕开正规代理渠道、进口真正商品（非假货），属合法。",
    "错误。并行进口的商品是真品而非仿冒品，说法本身成立。"
  ]
},
{
  id:"d1q3", day:1, topic:"贸易的流程", type:"3択",
  q:`<ruby>為替<rt>かわせ</rt></ruby><ruby>手形<rt>てがた</rt></ruby>に<ruby>船積<rt>ふなづみ</rt></ruby><ruby>書類<rt>しょるい</rt></ruby>を<ruby>添付<rt>てんぷ</rt></ruby>し、<ruby>銀行<rt>ぎんこう</rt></ruby><ruby>経由<rt>けいゆ</rt></ruby>で<ruby>代金<rt>だいきん</rt></ruby>を<ruby>回収<rt>かいしゅう</rt></ruby>する<ruby>決済<rt>けっさい</rt></ruby><ruby>方法<rt>ほうほう</rt></ruby>を<ruby>何<rt>なに</rt></ruby>というか。`,
  qzh:"在汇票上附上装船单据、经由银行回收货款的结算方式叫什么？",
  opts:[
    {t:`<ruby>荷為替<rt>にがわせ</rt></ruby><ruby>手形<rt>てがた</rt></ruby><ruby>決済<rt>けっさい</rt></ruby>`, zh:"跟单汇票结算（荷为替手形决济）"},
    {t:`<ruby>送金<rt>そうきん</rt></ruby><ruby>決済<rt>けっさい</rt></ruby>`, zh:"汇款结算"},
    {t:`ネッティング`, zh:"轧差（netting）"}
  ],
  ans:0,
  optExp:[
    "正确。附装船单据的汇票经银行托收/买取，即跟单汇票（荷为替手形）结算。",
    "错误。送金结算是直接汇款，不附单据走汇票。",
    "错误。netting 是把多笔债权债务相互抵销，并非本题方式。"
  ]
},
{
  id:"d1q4", day:1, topic:"贸易与环境", type:"3択",
  q:`ワシントン<ruby>条約<rt>じょうやく</rt></ruby>が<ruby>規制<rt>きせい</rt></ruby><ruby>対象<rt>たいしょう</rt></ruby>とするものはどれか。`,
  qzh:"《华盛顿公约》规制的对象是哪一项？",
  opts:[
    {t:`<ruby>絶滅<rt>ぜつめつ</rt></ruby>のおそれのある<ruby>野生<rt>やせい</rt></ruby><ruby>動植物<rt>どうしょくぶつ</rt></ruby>の<ruby>国際<rt>こくさい</rt></ruby><ruby>取引<rt>とりひき</rt></ruby>`, zh:"濒危野生动植物的国际交易"},
    {t:`オゾン<ruby>層<rt>そう</rt></ruby>を<ruby>破壊<rt>はかい</rt></ruby>する<ruby>物質<rt>ぶっしつ</rt></ruby>`, zh:"破坏臭氧层的物质"},
    {t:`<ruby>有害<rt>ゆうがい</rt></ruby><ruby>廃棄物<rt>はいきぶつ</rt></ruby>の<ruby>越境<rt>えっきょう</rt></ruby><ruby>移動<rt>いどう</rt></ruby>`, zh:"有害废弃物的越境转移"}
  ],
  ans:0,
  optExp:[
    "正确。华盛顿公约（CITES）管制濒危野生动植物的国际交易。",
    "错误。臭氧层破坏物质由《蒙特利尔议定书》管制。",
    "错误。有害废弃物越境转移由《巴塞尔公约》管制。"
  ],
  note:"三大环境条约：华盛顿＝野生动植物，蒙特利尔＝臭氧层物质，巴塞尔＝有害废弃物。"
},
{
  id:"d1q5", day:1, topic:"贸易与环境", type:"3択",
  q:`オゾン<ruby>層<rt>そう</rt></ruby>を<ruby>破壊<rt>はかい</rt></ruby>する<ruby>物質<rt>ぶっしつ</rt></ruby>（フロン<ruby>等<rt>など</rt></ruby>）を<ruby>規制<rt>きせい</rt></ruby>する<ruby>国際<rt>こくさい</rt></ruby><ruby>的<rt>てき</rt></ruby><ruby>取<rt>と</rt></ruby>り<ruby>決<rt>き</rt></ruby>めはどれか。`,
  qzh:"规制破坏臭氧层物质（氟利昂等）的国际协定是哪一个？",
  opts:[
    {t:`モントリオール<ruby>議定書<rt>ぎていしょ</rt></ruby>`, zh:"蒙特利尔议定书"},
    {t:`バーゼル<ruby>条約<rt>じょうやく</rt></ruby>`, zh:"巴塞尔公约"},
    {t:`ワシントン<ruby>条約<rt>じょうやく</rt></ruby>`, zh:"华盛顿公约"}
  ],
  ans:0,
  optExp:[
    "正确。蒙特利尔议定书规制氟利昂等臭氧层破坏物质。",
    "错误。巴塞尔公约管的是有害废弃物越境转移。",
    "错误。华盛顿公约管的是濒危野生动植物交易。"
  ]
},
{
  id:"d1q6", day:1, topic:"贸易经济知识", type:"3択",
  q:`GATTを<ruby>発展<rt>はってん</rt></ruby><ruby>的<rt>てき</rt></ruby>に<ruby>引<rt>ひ</rt></ruby>き<ruby>継<rt>つ</rt></ruby>ぎ、1995<ruby>年<rt>ねん</rt></ruby>に<ruby>設立<rt>せつりつ</rt></ruby>された<ruby>国際<rt>こくさい</rt></ruby><ruby>機関<rt>きかん</rt></ruby>はどれか。`,
  qzh:"在GATT基础上发展、于1995年成立的国际机构是哪一个？",
  opts:[
    {t:`WTO（<ruby>世界<rt>せかい</rt></ruby><ruby>貿易<rt>ぼうえき</rt></ruby><ruby>機関<rt>きかん</rt></ruby>）`, zh:"WTO（世界贸易组织）"},
    {t:`IMF（<ruby>国際<rt>こくさい</rt></ruby><ruby>通貨<rt>つうか</rt></ruby><ruby>基金<rt>ききん</rt></ruby>）`, zh:"IMF（国际货币基金组织）"},
    {t:`OECD（<ruby>経済<rt>けいざい</rt></ruby><ruby>協力<rt>きょうりょく</rt></ruby><ruby>開発<rt>かいはつ</rt></ruby><ruby>機構<rt>きこう</rt></ruby>）`, zh:"OECD（经济合作与发展组织）"}
  ],
  ans:0,
  optExp:[
    "正确。WTO 于1995年成立，承接并强化了GATT的多边贸易体制。",
    "错误。IMF 负责国际货币与汇率体系，非承接GATT。",
    "错误。OECD 是发达国家经济政策协调机构，与GATT承接无关。"
  ]
},
{
  id:"d1q7", day:1, topic:"贸易与环境", type:"2択",
  q:`バーゼル<ruby>条約<rt>じょうやく</rt></ruby>は、<ruby>特定<rt>とくてい</rt></ruby><ruby>有害<rt>ゆうがい</rt></ruby><ruby>廃棄物<rt>はいきぶつ</rt></ruby>の<ruby>輸出入<rt>ゆしゅつにゅう</rt></ruby>（<ruby>越境<rt>えっきょう</rt></ruby><ruby>移動<rt>いどう</rt></ruby>）を<ruby>規制<rt>きせい</rt></ruby>する<ruby>条約<rt>じょうやく</rt></ruby>である。`,
  qzh:"《巴塞尔公约》是规制特定有害废弃物进出口（越境转移）的条约。对吗？",
  opts:[ {t:`<ruby>正<rt>ただ</rt></ruby>しい（○）`, zh:"正确（○）"}, {t:`<ruby>誤<rt>あやま</rt></ruby>り（×）`, zh:"错误（×）"} ],
  ans:0,
  optExp:[ "正确。巴塞尔公约管制有害废弃物的越境转移。", "错误。其规制对象正是有害废弃物越境转移。" ]
},

/* ============ Day 2：インコタームズ2020（重点） ============ */
{
  id:"d2q1", day:2, topic:"インコタームズ2020", type:"3択",
  q:`インコタームズ2020で、すべての<ruby>輸送<rt>ゆそう</rt></ruby><ruby>手段<rt>しゅだん</rt></ruby>に<ruby>使<rt>つか</rt></ruby>える「<ruby>複合<rt>ふくごう</rt></ruby><ruby>輸送<rt>ゆそう</rt></ruby><ruby>条件<rt>じょうけん</rt></ruby>」に<ruby>分類<rt>ぶんるい</rt></ruby>されるものはどれか。`,
  qzh:"在Incoterms 2020中，属于“适用任何运输方式”的条件是哪一项？",
  opts:[
    {t:`FCA`, zh:"FCA（货交承运人）"},
    {t:`FOB`, zh:"FOB（船上交货）"},
    {t:`CIF`, zh:"CIF（成本加保险费、运费）"}
  ],
  ans:0,
  optExp:[
    "正确。FCA 属“任何运输方式”组，可用于海运、空运、陆运、多式联运。",
    "错误。FOB 仅适用于海运及内陆水运。",
    "错误。CIF 仅适用于海运及内陆水运。"
  ],
  note:"仅限海运/内陆水运的有4个：FAS、FOB、CFR、CIF。其余适用任何运输方式。"
},
{
  id:"d2q2", day:2, topic:"インコタームズ2020", type:"3択",
  q:`FOB（<ruby>本船<rt>ほんせん</rt></ruby><ruby>渡<rt>わた</rt></ruby>し）で、<ruby>貨物<rt>かもつ</rt></ruby>の<ruby>危険<rt>きけん</rt></ruby>（リスク）が<ruby>売主<rt>うりぬし</rt></ruby>から<ruby>買主<rt>かいぬし</rt></ruby>へ<ruby>移転<rt>いてん</rt></ruby>する<ruby>地点<rt>ちてん</rt></ruby>はどこか。`,
  qzh:"在FOB（船上交货）下，货物的风险从卖方转移给买方的地点在哪里？",
  opts:[
    {t:`<ruby>船積港<rt>ふなづみこう</rt></ruby>で<ruby>物品<rt>ぶっぴん</rt></ruby>が<ruby>本船<rt>ほんせん</rt></ruby>の<ruby>船上<rt>せんじょう</rt></ruby>に<ruby>置<rt>お</rt></ruby>かれた<ruby>時<rt>とき</rt></ruby>`, zh:"在装运港货物被放置到船上时"},
    {t:`<ruby>仕向港<rt>しむけこう</rt></ruby>に<ruby>到着<rt>とうちゃく</rt></ruby>した<ruby>時<rt>とき</rt></ruby>`, zh:"货物到达目的港时"},
    {t:`<ruby>買主<rt>かいぬし</rt></ruby>の<ruby>倉庫<rt>そうこ</rt></ruby>に<ruby>搬入<rt>はんにゅう</rt></ruby>された<ruby>時<rt>とき</rt></ruby>`, zh:"货物搬入买方仓库时"}
  ],
  ans:0,
  optExp:[
    "正确。FOB 风险在装运港货物装到船上（on board）时转移。",
    "错误。到目的港才转移的是D组（如DAP等）方向的思路，不符合FOB。",
    "错误。送到买方仓库属DDP等到货类条件，非FOB。"
  ]
},
{
  id:"d2q3", day:2, topic:"インコタームズ2020", type:"3択",
  q:`CIFで<ruby>売主<rt>うりぬし</rt></ruby>が<ruby>負担<rt>ふたん</rt></ruby>する<ruby>義務<rt>ぎむ</rt></ruby>に<ruby>含<rt>ふく</rt></ruby>まれるものはどれか。`,
  qzh:"在CIF下，卖方负担的义务包含哪一项？",
  opts:[
    {t:`<ruby>仕向港<rt>しむけこう</rt></ruby>までの<ruby>運賃<rt>うんちん</rt></ruby>と<ruby>海上<rt>かいじょう</rt></ruby><ruby>保険料<rt>ほけんりょう</rt></ruby>`, zh:"到目的港的运费和海上保险费"},
    {t:`<ruby>輸入<rt>ゆにゅう</rt></ruby><ruby>通関<rt>つうかん</rt></ruby>と<ruby>関税<rt>かんぜい</rt></ruby>`, zh:"进口报关与关税"},
    {t:`<ruby>買主<rt>かいぬし</rt></ruby><ruby>倉庫<rt>そうこ</rt></ruby>までの<ruby>内陸<rt>ないりく</rt></ruby><ruby>輸送<rt>ゆそう</rt></ruby>`, zh:"到买方仓库的内陆运输"}
  ],
  ans:0,
  optExp:[
    "正确。CIF＝Cost + Insurance + Freight，卖方负担到目的港的运费和海上保险费。",
    "错误。进口通关与关税由买方负担。",
    "错误。到买方仓库的内陆运输不在CIF卖方义务内。"
  ],
  note:"注意：CIF下风险在装运港装船时即转移，但费用（运费+保险）卖方付到目的港——风险点≠费用点。"
},
{
  id:"d2q4", day:2, topic:"インコタームズ2020", type:"2択",
  q:`CIFとCFRの<ruby>違<rt>ちが</rt></ruby>いは、<ruby>売主<rt>うりぬし</rt></ruby>に<ruby>海上<rt>かいじょう</rt></ruby><ruby>保険<rt>ほけん</rt></ruby>を<ruby>付保<rt>ふほ</rt></ruby>する<ruby>義務<rt>ぎむ</rt></ruby>があるかどうかである。`,
  qzh:"CIF与CFR的区别在于卖方是否有投保海上保险的义务。对吗？",
  opts:[ {t:`<ruby>正<rt>ただ</rt></ruby>しい（○）`, zh:"正确（○）"}, {t:`<ruby>誤<rt>あやま</rt></ruby>り（×）`, zh:"错误（×）"} ],
  ans:0,
  optExp:[
    "正确。CFR=运费在内但不含保险；CIF=在CFR基础上再加卖方付海上保险。",
    "错误。两者唯一差别就是保险义务，CIF含保险、CFR不含。"
  ]
},
{
  id:"d2q5", day:2, topic:"インコタームズ2020", type:"3択",
  q:`EXW（<ruby>工場<rt>こうじょう</rt></ruby><ruby>渡<rt>わた</rt></ruby>し）について<ruby>正<rt>ただ</rt></ruby>しいものはどれか。`,
  qzh:"关于EXW（工厂交货），正确的是哪一项？",
  opts:[
    {t:`<ruby>売主<rt>うりぬし</rt></ruby>の<ruby>義務<rt>ぎむ</rt></ruby>が<ruby>最<rt>もっと</rt></ruby>も<ruby>軽<rt>かる</rt></ruby>く、<ruby>買主<rt>かいぬし</rt></ruby>の<ruby>負担<rt>ふたん</rt></ruby>が<ruby>最<rt>もっと</rt></ruby>も<ruby>大<rt>おお</rt></ruby>きい`, zh:"卖方义务最轻，买方负担最大"},
    {t:`<ruby>売主<rt>うりぬし</rt></ruby>が<ruby>輸入<rt>ゆにゅう</rt></ruby><ruby>通関<rt>つうかん</rt></ruby>まで<ruby>行<rt>おこな</rt></ruby>う`, zh:"卖方负责到进口报关为止"},
    {t:`<ruby>売主<rt>うりぬし</rt></ruby>が<ruby>仕向港<rt>しむけこう</rt></ruby>まで<ruby>運賃<rt>うんちん</rt></ruby>を<ruby>負担<rt>ふたん</rt></ruby>する`, zh:"卖方负担到目的港的运费"}
  ],
  ans:0,
  optExp:[
    "正确。EXW卖方只需在自己处所备妥货物，义务最轻、买方负担最大。",
    "错误。负责到进口通关的是DDP，不是EXW。",
    "错误。负担运费到目的港属C组条件，EXW卖方不付运费。"
  ]
},
{
  id:"d2q6", day:2, topic:"インコタームズ2020", type:"3択",
  q:`DDP（<ruby>関税<rt>かんぜい</rt></ruby><ruby>込<rt>こ</rt></ruby>み<ruby>持込<rt>もちこみ</rt></ruby><ruby>渡<rt>わた</rt></ruby>し）で、<ruby>輸入<rt>ゆにゅう</rt></ruby><ruby>通関<rt>つうかん</rt></ruby>・<ruby>関税<rt>かんぜい</rt></ruby>を<ruby>負担<rt>ふたん</rt></ruby>するのは<ruby>誰<rt>だれ</rt></ruby>か。`,
  qzh:"在DDP（完税后交货）下，承担进口报关和关税的是谁？",
  opts:[
    {t:`<ruby>売主<rt>うりぬし</rt></ruby>`, zh:"卖方"},
    {t:`<ruby>買主<rt>かいぬし</rt></ruby>`, zh:"买方"},
    {t:`<ruby>運送<rt>うんそう</rt></ruby><ruby>人<rt>にん</rt></ruby>`, zh:"承运人"}
  ],
  ans:0,
  optExp:[
    "正确。DDP是卖方义务最重的条件，连进口通关和关税都由卖方负担。",
    "错误。买方负担最重的是EXW，不是DDP。",
    "错误。承运人只负责运输，不承担通关与关税。"
  ]
},
{
  id:"d2q7", day:2, topic:"インコタームズ2020", type:"3択",
  q:`インコタームズ2020で、CIFとCIPの<ruby>付保<rt>ふほ</rt></ruby><ruby>義務<rt>ぎむ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>記述<rt>きじゅつ</rt></ruby>として<ruby>正<rt>ただ</rt></ruby>しいものはどれか。`,
  qzh:"在Incoterms 2020中，关于CIF与CIP投保义务的叙述，正确的是哪一项？",
  opts:[
    {t:`CIFは<ruby>最小<rt>さいしょう</rt></ruby><ruby>担保<rt>たんぽ</rt></ruby>（ICC(C)<ruby>相当<rt>そうとう</rt></ruby>）、CIPは<ruby>最大<rt>さいだい</rt></ruby><ruby>担保<rt>たんぽ</rt></ruby>（ICC(A)<ruby>相当<rt>そうとう</rt></ruby>）が<ruby>既定<rt>きてい</rt></ruby>`, zh:"CIF为最低险别(ICC(C))，CIP为最高险别(ICC(A))（默认）"},
    {t:`CIF・CIPともに<ruby>最大<rt>さいだい</rt></ruby><ruby>担保<rt>たんぽ</rt></ruby>が<ruby>既定<rt>きてい</rt></ruby>`, zh:"CIF与CIP都默认最高险别"},
    {t:`CIF・CIPともに<ruby>保険<rt>ほけん</rt></ruby><ruby>付保<rt>ふほ</rt></ruby><ruby>義務<rt>ぎむ</rt></ruby>はない`, zh:"CIF与CIP都没有投保义务"}
  ],
  ans:0,
  optExp:[
    "正确。这是Incoterms 2020的重要变更：CIF默认最低险ICC(C)，CIP默认最高险ICC(A)。",
    "错误。只有CIP默认最高险，CIF仍是最低险。",
    "错误。CIF与CIP的“I”即保险，卖方都有投保义务。"
  ],
  note:"2020版区别点（易考）：CIF→ICC(C)最低；CIP→ICC(A)最高。"
},

/* ============ Day 3：信用状・贸易金融 ============ */
{
  id:"d3q1", day:3, topic:"信用状·贸易金融", type:"3択",
  q:`<ruby>信用状<rt>しんようじょう</rt></ruby>（L/C）の<ruby>代金<rt>だいきん</rt></ruby><ruby>支払<rt>しはらい</rt></ruby>を<ruby>最終<rt>さいしゅう</rt></ruby><ruby>的<rt>てき</rt></ruby>に<ruby>確約<rt>かくやく</rt></ruby>しているのは<ruby>誰<rt>だれ</rt></ruby>か。`,
  qzh:"信用证（L/C）下，最终确保付款的是谁？",
  opts:[
    {t:`<ruby>発行<rt>はっこう</rt></ruby><ruby>銀行<rt>ぎんこう</rt></ruby>（<ruby>開設<rt>かいせつ</rt></ruby><ruby>銀行<rt>ぎんこう</rt></ruby>）`, zh:"开证银行（发行银行）"},
    {t:`<ruby>輸入者<rt>ゆにゅうしゃ</rt></ruby>（<ruby>買主<rt>かいぬし</rt></ruby>）`, zh:"进口商（买方）"},
    {t:`<ruby>運送<rt>うんそう</rt></ruby><ruby>人<rt>にん</rt></ruby>`, zh:"承运人"}
  ],
  ans:0,
  optExp:[
    "正确。L/C由开证银行对受益人（出口商）作出独立的付款确约。",
    "错误。进口商是开证申请人，但付款保证来自开证行。",
    "错误。承运人与代金支付确约无关。"
  ]
},
{
  id:"d3q2", day:3, topic:"信用状·贸易金融", type:"3択",
  q:`<ruby>取消<rt>とりけし</rt></ruby><ruby>不能<rt>ふのう</rt></ruby><ruby>信用状<rt>しんようじょう</rt></ruby>（Irrevocable L/C）の<ruby>特徴<rt>とくちょう</rt></ruby>はどれか。`,
  qzh:"不可撤销信用证（Irrevocable L/C）的特征是哪一项？",
  opts:[
    {t:`<ruby>関係<rt>かんけい</rt></ruby><ruby>当事者<rt>とうじしゃ</rt></ruby><ruby>全員<rt>ぜんいん</rt></ruby>の<ruby>同意<rt>どうい</rt></ruby>なしに<ruby>条件<rt>じょうけん</rt></ruby><ruby>変更<rt>へんこう</rt></ruby>・<ruby>取消<rt>とりけし</rt></ruby>ができない`, zh:"未经全部关系当事人同意，不能变更或撤销"},
    {t:`<ruby>発行<rt>はっこう</rt></ruby><ruby>銀行<rt>ぎんこう</rt></ruby>がいつでも<ruby>自由<rt>じゆう</rt></ruby>に<ruby>取消<rt>とりけし</rt></ruby>できる`, zh:"开证行可随时自由撤销"},
    {t:`<ruby>輸出者<rt>ゆしゅつしゃ</rt></ruby>が<ruby>単独<rt>たんどく</rt></ruby>で<ruby>増額<rt>ぞうがく</rt></ruby>できる`, zh:"出口商可单方增额"}
  ],
  ans:0,
  optExp:[
    "正确。不可撤销＝须经各当事人一致同意才能改/撤，对受益人更安全。",
    "错误。可随时撤销的是“可撤销信用证”，现已极少使用。",
    "错误。受益人不能单方变更L/C金额。"
  ]
},
{
  id:"d3q3", day:3, topic:"信用状·贸易金融", type:"2択",
  q:`<ruby>信用状<rt>しんようじょう</rt></ruby><ruby>取引<rt>とりひき</rt></ruby>において、<ruby>銀行<rt>ぎんこう</rt></ruby>は「<ruby>書類<rt>しょるい</rt></ruby>」を<ruby>取<rt>と</rt></ruby>り<ruby>扱<rt>あつか</rt></ruby>い、<ruby>現物<rt>げんぶつ</rt></ruby>の<ruby>貨物<rt>かもつ</rt></ruby>の<ruby>点検<rt>てんけん</rt></ruby>は<ruby>行<rt>おこな</rt></ruby>わない。`,
  qzh:"在信用证交易中，银行处理的是“单据”，不对实际货物进行检验。对吗？",
  opts:[ {t:`<ruby>正<rt>ただ</rt></ruby>しい（○）`, zh:"正确（○）"}, {t:`<ruby>誤<rt>あやま</rt></ruby>り（×）`, zh:"错误（×）"} ],
  ans:0,
  optExp:[
    "正确。这是信用证的“单据交易原则（独立抽象性）”：银行只审单，不管货物实物。",
    "错误。银行只凭单据付款，不点检货物，这是L/C的基本原则。"
  ]
},
{
  id:"d3q4", day:3, topic:"信用状·贸易金融", type:"3択",
  q:`<ruby>輸出者<rt>ゆしゅつしゃ</rt></ruby>が<ruby>船積<rt>ふなづみ</rt></ruby><ruby>後<rt>ご</rt></ruby>、<ruby>為替<rt>かわせ</rt></ruby><ruby>手形<rt>てがた</rt></ruby>と<ruby>船積<rt>ふなづみ</rt></ruby><ruby>書類<rt>しょるい</rt></ruby>を<ruby>銀行<rt>ぎんこう</rt></ruby>に<ruby>持<rt>も</rt></ruby>ち<ruby>込<rt>こ</rt></ruby>み<ruby>代金<rt>だいきん</rt></ruby>を<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>ることを<ruby>何<rt>なに</rt></ruby>というか。`,
  qzh:"出口商在装船后，把汇票和装船单据交到银行而取得货款，这叫什么？",
  opts:[
    {t:`<ruby>荷為替<rt>にがわせ</rt></ruby><ruby>手形<rt>てがた</rt></ruby>の<ruby>買取<rt>かいとり</rt></ruby>`, zh:"跟单汇票的买入（买取／议付）"},
    {t:`<ruby>引受<rt>ひきうけ</rt></ruby>`, zh:"承兑"},
    {t:`<ruby>送金<rt>そうきん</rt></ruby>`, zh:"汇款"}
  ],
  ans:0,
  optExp:[
    "正确。银行买入出口商的跟单汇票、先行付款，即“买取（议付）”。",
    "错误。引受（承兑）是承诺到期付款，不等于当下取得货款。",
    "错误。送金是直接汇款，不经汇票买取。"
  ]
},
{
  id:"d3q5", day:3, topic:"信用状·贸易金融", type:"3択",
  q:`シッパーズ・ユーザンスとは<ruby>何<rt>なに</rt></ruby>か。`,
  qzh:"什么是“Shipper's Usance（出口商授信）”？",
  opts:[
    {t:`<ruby>輸出者<rt>ゆしゅつしゃ</rt></ruby>（<ruby>船積人<rt>ふなづみにん</rt></ruby>）が<ruby>輸入者<rt>ゆにゅうしゃ</rt></ruby>に<ruby>支払<rt>しはらい</rt></ruby><ruby>猶予<rt>ゆうよ</rt></ruby>を<ruby>与<rt>あた</rt></ruby>える<ruby>期限<rt>きげん</rt></ruby><ruby>付<rt>つき</rt></ruby><ruby>手形<rt>てがた</rt></ruby>による<ruby>信用<rt>しんよう</rt></ruby><ruby>供与<rt>きょうよ</rt></ruby>`, zh:"出口商（装船人）通过远期汇票给进口商提供付款宽限的授信"},
    {t:`<ruby>銀行<rt>ぎんこう</rt></ruby>が<ruby>輸入者<rt>ゆにゅうしゃ</rt></ruby>に<ruby>与<rt>あた</rt></ruby>える<ruby>信用<rt>しんよう</rt></ruby><ruby>供与<rt>きょうよ</rt></ruby>`, zh:"银行给进口商提供的授信"},
    {t:`<ruby>輸入者<rt>ゆにゅうしゃ</rt></ruby>が<ruby>前払<rt>まえばら</rt></ruby>いする<ruby>方式<rt>ほうしき</rt></ruby>`, zh:"进口商预付货款的方式"}
  ],
  ans:0,
  optExp:[
    "正确。Shipper's Usance＝由出口商（卖方）通过远期（期限付）汇票向进口商授信。",
    "错误。由银行授信的是Banker's Usance（银行授信）。",
    "错误。预付货款与授信宽限相反。"
  ],
  note:"对比：Shipper's Usance（出口商授信）↔ Banker's Usance（银行授信）。"
},
{
  id:"d3q6", day:3, topic:"信用状·贸易金融", type:"3択",
  q:`<ruby>確認<rt>かくにん</rt></ruby><ruby>信用状<rt>しんようじょう</rt></ruby>（Confirmed L/C）における「<ruby>確認<rt>かくにん</rt></ruby>」を<ruby>加<rt>くわ</rt></ruby>えるのはどれか。`,
  qzh:"保兑信用证（Confirmed L/C）中，加具“保兑”的是哪一方？",
  opts:[
    {t:`<ruby>発行<rt>はっこう</rt></ruby><ruby>銀行<rt>ぎんこう</rt></ruby><ruby>以外<rt>いがい</rt></ruby>の<ruby>銀行<rt>ぎんこう</rt></ruby>（<ruby>確認<rt>かくにん</rt></ruby><ruby>銀行<rt>ぎんこう</rt></ruby>）`, zh:"开证行以外的银行（保兑行）"},
    {t:`<ruby>輸入者<rt>ゆにゅうしゃ</rt></ruby><ruby>自身<rt>じしん</rt></ruby>`, zh:"进口商本人"},
    {t:`<ruby>輸出者<rt>ゆしゅつしゃ</rt></ruby><ruby>自身<rt>じしん</rt></ruby>`, zh:"出口商本人"}
  ],
  ans:0,
  optExp:[
    "正确。保兑由开证行以外的银行（保兑行，常为通知行）再加一层付款保证。",
    "错误。进口商是申请人，不提供保兑。",
    "错误。出口商是受益人，不可能给自己保兑。"
  ]
},

/* ============ Day 4：外国为替・书类・运送 ============ */
{
  id:"d4q1", day:4, topic:"外国为替", type:"3択",
  q:`<ruby>銀行<rt>ぎんこう</rt></ruby>が<ruby>顧客<rt>こきゃく</rt></ruby>に<ruby>外貨<rt>がいか</rt></ruby>を<ruby>売<rt>う</rt></ruby>る（<ruby>顧客<rt>こきゃく</rt></ruby>が<ruby>円<rt>えん</rt></ruby>を<ruby>払<rt>はら</rt></ruby>って<ruby>外貨<rt>がいか</rt></ruby>を<ruby>買<rt>か</rt></ruby>う）<ruby>時<rt>とき</rt></ruby>に<ruby>適用<rt>てきよう</rt></ruby>される<ruby>相場<rt>そうば</rt></ruby>はどれか。`,
  qzh:"银行向客户卖出外汇（客户付日元买外汇）时适用的汇率是哪一个？",
  opts:[
    {t:`TTS（<ruby>電信<rt>でんしん</rt></ruby><ruby>売<rt>うり</rt></ruby><ruby>相場<rt>そうば</rt></ruby>）`, zh:"TTS（电汇卖出汇率）"},
    {t:`TTB（<ruby>電信<rt>でんしん</rt></ruby><ruby>買<rt>かい</rt></ruby><ruby>相場<rt>そうば</rt></ruby>）`, zh:"TTB（电汇买入汇率）"},
    {t:`<ruby>仲値<rt>なかね</rt></ruby>（TTM）`, zh:"中间价（TTM）"}
  ],
  ans:0,
  optExp:[
    "正确。站在银行立场“卖外汇”用TTS（Selling）。",
    "错误。TTB是银行“买入”外汇时用（客户卖外汇换日元）。",
    "错误。TTM是买卖中间基准价，不直接用于实际成交。"
  ],
  note:"记忆：以银行为主语，Selling=TTS，Buying=TTB。"
},
{
  id:"d4q2", day:4, topic:"外国为替", type:"3択",
  q:`<ruby>輸入者<rt>ゆにゅうしゃ</rt></ruby>が<ruby>信用状<rt>しんようじょう</rt></ruby>なしの<ruby>送金<rt>そうきん</rt></ruby>で<ruby>代金<rt>だいきん</rt></ruby>を<ruby>前払<rt>まえばら</rt></ruby>いする<ruby>方式<rt>ほうしき</rt></ruby>はどれか。`,
  qzh:"进口商在没有信用证的情况下，通过汇款预付货款的方式是哪一个？",
  opts:[
    {t:`<ruby>前払<rt>まえばら</rt></ruby><ruby>送金<rt>そうきん</rt></ruby>（T/T<ruby>前払<rt>まえばら</rt></ruby>い）`, zh:"预付汇款（T/T预付）"},
    {t:`<ruby>後払<rt>あとばら</rt></ruby><ruby>送金<rt>そうきん</rt></ruby>`, zh:"货到后付汇款"},
    {t:`<ruby>荷為替<rt>にがわせ</rt></ruby><ruby>手形<rt>てがた</rt></ruby>`, zh:"跟单汇票"}
  ],
  ans:0,
  optExp:[
    "正确。先汇款后发货即“前払送金（预付）”，对出口商最有利。",
    "错误。后払是货到/发货后才付款，对进口商有利。",
    "错误。跟单汇票是凭汇票+单据经银行结算，不是送金前払。"
  ]
},
{
  id:"d4q3", day:4, topic:"外国为替", type:"3択",
  q:`<ruby>為替<rt>かわせ</rt></ruby><ruby>変動<rt>へんどう</rt></ruby>リスクを<ruby>回避<rt>かいひ</rt></ruby>するため、<ruby>将来<rt>しょうらい</rt></ruby>の<ruby>為替<rt>かわせ</rt></ruby>レートをあらかじめ<ruby>確定<rt>かくてい</rt></ruby>する<ruby>取引<rt>とりひき</rt></ruby>はどれか。`,
  qzh:"为规避汇率波动风险、预先确定将来汇率的交易是哪一个？",
  opts:[
    {t:`<ruby>先物<rt>さきもの</rt></ruby><ruby>為替<rt>かわせ</rt></ruby><ruby>予約<rt>よやく</rt></ruby>`, zh:"远期外汇预约"},
    {t:`<ruby>直物<rt>じきもの</rt></ruby><ruby>取引<rt>とりひき</rt></ruby>`, zh:"即期交易"},
    {t:`<ruby>外貨<rt>がいか</rt></ruby><ruby>預金<rt>よきん</rt></ruby>`, zh:"外币存款"}
  ],
  ans:0,
  optExp:[
    "正确。远期外汇预约锁定未来某日的汇率，规避汇率波动风险。",
    "错误。即期（直物）是当下成交，不能锁定未来汇率。",
    "错误。外币存款本身不是规避汇率风险的预约工具。"
  ]
},
{
  id:"d4q4", day:4, topic:"贸易书类·运送", type:"3択",
  q:`<ruby>船会社<rt>ふながいしゃ</rt></ruby>が<ruby>貨物<rt>かもつ</rt></ruby>を<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>ったことを<ruby>証<rt>しょう</rt></ruby>し、<ruby>運送<rt>うんそう</rt></ruby><ruby>契約<rt>けいやく</rt></ruby>・<ruby>権利<rt>けんり</rt></ruby><ruby>証券<rt>しょうけん</rt></ruby>となる<ruby>書類<rt>しょるい</rt></ruby>はどれか。`,
  qzh:"证明船公司已收到货物，并作为运输契约和物权凭证的单据是哪一项？",
  opts:[
    {t:`<ruby>船荷<rt>ふなに</rt></ruby><ruby>証券<rt>しょうけん</rt></ruby>（B/L）`, zh:"提单（B/L）"},
    {t:`インボイス（Invoice）`, zh:"发票（Invoice）"},
    {t:`パッキングリスト（P/L）`, zh:"装箱单（P/L）"}
  ],
  ans:0,
  optExp:[
    "正确。B/L＝货物收据＋运输契约证明＋物权凭证（可转让），三重性质。",
    "错误。Invoice是卖方出具的明细兼请求书，非物权凭证。",
    "错误。Packing List是装箱明细，非物权凭证。"
  ]
},
{
  id:"d4q5", day:4, topic:"贸易书类·运送", type:"2択",
  q:`インボイス（Invoice）は<ruby>売主<rt>うりぬし</rt></ruby>が<ruby>作成<rt>さくせい</rt></ruby>する<ruby>明細<rt>めいさい</rt></ruby><ruby>兼<rt>けん</rt></ruby><ruby>請求書<rt>せいきゅうしょ</rt></ruby>である。`,
  qzh:"发票（Invoice）是卖方制作的明细兼请求书（账单）。对吗？",
  opts:[ {t:`<ruby>正<rt>ただ</rt></ruby>しい（○）`, zh:"正确（○）"}, {t:`<ruby>誤<rt>あやま</rt></ruby>り（×）`, zh:"错误（×）"} ],
  ans:0,
  optExp:[
    "正确。商业发票由卖方出具，载明品名、数量、金额，兼具货物明细与请求付款功能。",
    "错误。Invoice确实由卖方制作并作为请求书，说法成立。"
  ]
},
{
  id:"d4q6", day:4, topic:"贸易书类·运送", type:"3択",
  q:`コンテナ1<ruby>本<rt>ぽん</rt></ruby>に<ruby>満<rt>み</rt></ruby>たない<ruby>小口<rt>こぐち</rt></ruby><ruby>貨物<rt>かもつ</rt></ruby>を、<ruby>複数<rt>ふくすう</rt></ruby>の<ruby>荷主<rt>にぬし</rt></ruby><ruby>分<rt>ぶん</rt></ruby>まとめて<ruby>混載<rt>こんさい</rt></ruby>する<ruby>形態<rt>けいたい</rt></ruby>はどれか。`,
  qzh:"不足一整箱的小货，把多个货主的货拼装在一起的形态叫什么？",
  opts:[
    {t:`LCL<ruby>貨物<rt>かもつ</rt></ruby>（CFSで<ruby>混載<rt>こんさい</rt></ruby>）`, zh:"LCL拼箱货（在CFS拼装）"},
    {t:`FCL<ruby>貨物<rt>かもつ</rt></ruby>（CYで<ruby>引<rt>ひ</rt></ruby>き<ruby>渡<rt>わた</rt></ruby>し）`, zh:"FCL整箱货（在CY交接）"},
    {t:`バルク<ruby>貨物<rt>かもつ</rt></ruby>`, zh:"散装货"}
  ],
  ans:0,
  optExp:[
    "正确。LCL＝Less than Container Load，小口货在CFS拼箱混载。",
    "错误。FCL是单一货主装满整箱，在CY交接。",
    "错误。散装货（bulk）指不入箱的大宗货物。"
  ],
  note:"配套记忆：FCL↔CY，LCL↔CFS。"
},
{
  id:"d4q7", day:4, topic:"贸易书类·运送", type:"3択",
  q:`<ruby>航空<rt>こうくう</rt></ruby><ruby>貨物<rt>かもつ</rt></ruby>の<ruby>運送状<rt>うんそうじょう</rt></ruby>で、B/Lと<ruby>異<rt>こと</rt></ruby>なり「<ruby>有価<rt>ゆうか</rt></ruby><ruby>証券<rt>しょうけん</rt></ruby>（<ruby>権利<rt>けんり</rt></ruby><ruby>証券<rt>しょうけん</rt></ruby>）ではない」ものはどれか。`,
  qzh:"航空货物的运单中，与B/L不同、不属于“有价证券（物权凭证）”的是哪一项？",
  opts:[
    {t:`<ruby>航空<rt>こうくう</rt></ruby><ruby>運送状<rt>うんそうじょう</rt></ruby>（Air Waybill, AWB）`, zh:"航空运单（Air Waybill, AWB）"},
    {t:`<ruby>船荷<rt>ふなに</rt></ruby><ruby>証券<rt>しょうけん</rt></ruby>（B/L）`, zh:"提单（B/L）"},
    {t:`<ruby>倉荷<rt>くらに</rt></ruby><ruby>証券<rt>しょうけん</rt></ruby>`, zh:"仓单"}
  ],
  ans:0,
  optExp:[
    "正确。AWB只是运送收据与契约证明，不可转让，不是物权凭证。",
    "错误。B/L是可转让的物权凭证。",
    "错误。仓单（倉荷証券）属有价证券。"
  ]
},

/* ============ Day 5：通关・关税・保险・营销 ============ */
{
  id:"d5q1", day:5, topic:"通关·关税", type:"3択",
  q:`<ruby>輸入<rt>ゆにゅう</rt></ruby>（<ruby>納税<rt>のうぜい</rt></ruby>）<ruby>申告<rt>しんこく</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>い、<ruby>関税<rt>かんぜい</rt></ruby><ruby>等<rt>とう</rt></ruby>を<ruby>納付<rt>のうふ</rt></ruby>して<ruby>貨物<rt>かもつ</rt></ruby>の<ruby>国内<rt>こくない</rt></ruby><ruby>引取<rt>ひきと</rt></ruby>り<ruby>許可<rt>きょか</rt></ruby>を<ruby>得<rt>え</rt></ruby>る<ruby>手続<rt>てつづ</rt></ruby>きを<ruby>何<rt>なに</rt></ruby>というか。`,
  qzh:"进行进口（纳税）申报、缴纳关税等后取得货物国内提货许可的手续叫什么？",
  opts:[
    {t:`<ruby>輸入<rt>ゆにゅう</rt></ruby><ruby>通関<rt>つうかん</rt></ruby>`, zh:"进口通关"},
    {t:`<ruby>輸出<rt>ゆしゅつ</rt></ruby><ruby>通関<rt>つうかん</rt></ruby>`, zh:"出口通关"},
    {t:`<ruby>保税<rt>ほぜい</rt></ruby><ruby>蔵置<rt>ぞうち</rt></ruby>`, zh:"保税存放"}
  ],
  ans:0,
  optExp:[
    "正确。进口申报+纳税+取得提货许可，整套手续即“进口通关”。",
    "错误。出口通关是发货出境方向的手续。",
    "错误。保税存放是货物暂存保税地域、暂不纳税的状态。"
  ]
},
{
  id:"d5q2", day:5, topic:"通关·关税", type:"3択",
  q:`<ruby>関税<rt>かんぜい</rt></ruby>の<ruby>課税<rt>かぜい</rt></ruby><ruby>標準<rt>ひょうじゅん</rt></ruby>が「<ruby>価格<rt>かかく</rt></ruby>」である<ruby>税率<rt>ぜいりつ</rt></ruby>の<ruby>種類<rt>しゅるい</rt></ruby>はどれか。`,
  qzh:"以“价格”为计税标准的关税税率种类是哪一个？",
  opts:[
    {t:`<ruby>従価税<rt>じゅうかぜい</rt></ruby>`, zh:"从价税"},
    {t:`<ruby>従量税<rt>じゅうりょうぜい</rt></ruby>`, zh:"从量税"},
    {t:`<ruby>混合税<rt>こんごうぜい</rt></ruby>`, zh:"复合税"}
  ],
  ans:0,
  optExp:[
    "正确。从价税＝按货物价格的一定百分比征税。",
    "错误。从量税按数量/重量等课征固定额。",
    "错误。复合税是从价+从量的组合。"
  ]
},
{
  id:"d5q3", day:5, topic:"通关·关税", type:"3択",
  q:`<ruby>特定<rt>とくてい</rt></ruby>の<ruby>貨物<rt>かもつ</rt></ruby><ruby>量<rt>りょう</rt></ruby>（<ruby>重量<rt>じゅうりょう</rt></ruby>・<ruby>個数<rt>こすう</rt></ruby><ruby>等<rt>とう</rt></ruby>）に<ruby>対<rt>たい</rt></ruby>して<ruby>一定<rt>いってい</rt></ruby><ruby>額<rt>がく</rt></ruby>を<ruby>課<rt>か</rt></ruby>す<ruby>関税<rt>かんぜい</rt></ruby>はどれか。`,
  qzh:"对特定货物的数量（重量、件数等）课征固定金额的关税是哪一个？",
  opts:[
    {t:`<ruby>従量税<rt>じゅうりょうぜい</rt></ruby>`, zh:"从量税"},
    {t:`<ruby>従価税<rt>じゅうかぜい</rt></ruby>`, zh:"从价税"},
    {t:`<ruby>特恵<rt>とっけい</rt></ruby><ruby>関税<rt>かんぜい</rt></ruby>`, zh:"特惠关税"}
  ],
  ans:0,
  optExp:[
    "正确。从量税按数量/重量征固定额（如每公斤多少元）。",
    "错误。从价税按价格百分比。",
    "错误。特惠关税是给特定国家的优惠税率，与计税标准分类不同。"
  ]
},
{
  id:"d5q4", day:5, topic:"通关·关税", type:"3択",
  q:`<ruby>保税<rt>ほぜい</rt></ruby><ruby>地域<rt>ちいき</rt></ruby>の<ruby>説明<rt>せつめい</rt></ruby>として<ruby>正<rt>ただ</rt></ruby>しいものはどれか。`,
  qzh:"关于保税地域的说明，正确的是哪一项？",
  opts:[
    {t:`<ruby>外国<rt>がいこく</rt></ruby><ruby>貨物<rt>かもつ</rt></ruby>を<ruby>関税<rt>かんぜい</rt></ruby><ruby>未納<rt>みのう</rt></ruby>のまま<ruby>蔵置<rt>ぞうち</rt></ruby>・<ruby>加工<rt>かこう</rt></ruby><ruby>等<rt>とう</rt></ruby>できる<ruby>場所<rt>ばしょ</rt></ruby>`, zh:"可在未缴关税状态下存放/加工外国货物的场所"},
    {t:`<ruby>関税<rt>かんぜい</rt></ruby>を<ruby>必<rt>かなら</rt></ruby>ず<ruby>納<rt>おさ</rt></ruby>めてからでないと<ruby>入<rt>い</rt></ruby>れられない<ruby>場所<rt>ばしょ</rt></ruby>`, zh:"必须先缴关税才能存入的场所"},
    {t:`<ruby>輸出<rt>ゆしゅつ</rt></ruby><ruby>専用<rt>せんよう</rt></ruby>の<ruby>倉庫<rt>そうこ</rt></ruby>で<ruby>輸入<rt>ゆにゅう</rt></ruby><ruby>貨物<rt>かもつ</rt></ruby>は<ruby>置<rt>お</rt></ruby>けない`, zh:"只能放出口货、不能放进口货的仓库"}
  ],
  ans:0,
  optExp:[
    "正确。保税地域可在关税未纳的状态下暂存、加工、展示外国货物。",
    "错误。保税的意义正是“暂不纳税”即可存放。",
    "错误。保税地域并非仅限出口货。"
  ]
},
{
  id:"d5q5", day:5, topic:"贸易保险", type:"3択",
  q:`<ruby>貨物<rt>かもつ</rt></ruby><ruby>海上<rt>かいじょう</rt></ruby><ruby>保険<rt>ほけん</rt></ruby>で、<ruby>契約<rt>けいやく</rt></ruby><ruby>時<rt>じ</rt></ruby>に<ruby>保険<rt>ほけん</rt></ruby><ruby>金額<rt>きんがく</rt></ruby>や<ruby>条件<rt>じょうけん</rt></ruby>が<ruby>未<rt>み</rt></ruby><ruby>確定<rt>かくてい</rt></ruby>で、<ruby>後日<rt>ごじつ</rt></ruby><ruby>確定<rt>かくてい</rt></ruby>する<ruby>保険<rt>ほけん</rt></ruby>はどれか。`,
  qzh:"货物海上保险中，签约时保额或条件尚未确定、日后再确定的保险是哪一个？",
  opts:[
    {t:`<ruby>予定<rt>よてい</rt></ruby><ruby>保険<rt>ほけん</rt></ruby>`, zh:"预约保险（暂保）"},
    {t:`<ruby>確定<rt>かくてい</rt></ruby><ruby>保険<rt>ほけん</rt></ruby>`, zh:"确定保险"},
    {t:`PL<ruby>保険<rt>ほけん</rt></ruby>`, zh:"产品责任险"}
  ],
  ans:0,
  optExp:[
    "正确。预定保险＝先订立、要素后定（适合尚不知确切船名/数量时）。",
    "错误。确定保险是各要素均已确定的保险。",
    "错误。PL保险是产品责任险，与海上货物预定/确定无关。"
  ]
},
{
  id:"d5q6", day:5, topic:"贸易保险", type:"2択",
  q:`PL<ruby>保険<rt>ほけん</rt></ruby>は、<ruby>製造物<rt>せいぞうぶつ</rt></ruby>の<ruby>欠陥<rt>けっかん</rt></ruby>による<ruby>損害<rt>そんがい</rt></ruby><ruby>賠償<rt>ばいしょう</rt></ruby><ruby>責任<rt>せきにん</rt></ruby>に<ruby>備<rt>そな</rt></ruby>える<ruby>保険<rt>ほけん</rt></ruby>である。`,
  qzh:"PL保险是为产品缺陷导致的损害赔偿责任而准备的保险。对吗？",
  opts:[ {t:`<ruby>正<rt>ただ</rt></ruby>しい（○）`, zh:"正确（○）"}, {t:`<ruby>誤<rt>あやま</rt></ruby>り（×）`, zh:"错误（×）"} ],
  ans:0,
  optExp:[
    "正确。PL（Product Liability）保险承保产品缺陷致第三者损害的赔偿责任。",
    "错误。PL保险正是针对产品责任的，说法成立。"
  ]
},
{
  id:"d5q7", day:5, topic:"市场营销", type:"3択",
  q:`<ruby>取引先<rt>とりひきさき</rt></ruby>の<ruby>信用<rt>しんよう</rt></ruby><ruby>状態<rt>じょうたい</rt></ruby>（<ruby>支払<rt>しはらい</rt></ruby><ruby>能力<rt>のうりょく</rt></ruby><ruby>等<rt>とう</rt></ruby>）を<ruby>調<rt>しら</rt></ruby>べることを<ruby>何<rt>なに</rt></ruby>というか。`,
  qzh:"调查交易对象的信用状况（付款能力等）叫什么？",
  opts:[
    {t:`<ruby>信用<rt>しんよう</rt></ruby><ruby>調査<rt>ちょうさ</rt></ruby>`, zh:"信用调查"},
    {t:`<ruby>市場<rt>しじょう</rt></ruby><ruby>調査<rt>ちょうさ</rt></ruby>`, zh:"市场调查"},
    {t:`<ruby>与信<rt>よしん</rt></ruby><ruby>限度<rt>げんど</rt></ruby>`, zh:"授信额度"}
  ],
  ans:0,
  optExp:[
    "正确。信用调查＝调查对方的资信、付款能力，常借助银行/征信机构（如3C）。",
    "错误。市场调查是了解市场需求/竞争，对象不同。",
    "错误。授信额度是结果性的限额，不是“调查”行为本身。"
  ],
  note:"信用调查常看3C：Character（品格）、Capital（资本）、Capacity（能力）。"
},

/* ============ Day 6：贸易英语 ============ */
{
  id:"d6q1", day:6, topic:"贸易英语", type:"英文和訳3択",
  q:`<ruby>次<rt>つぎ</rt></ruby>の<ruby>英文<rt>えいぶん</rt></ruby>の<ruby>意味<rt>いみ</rt></ruby>として<ruby>最<rt>もっと</rt></ruby>も<ruby>適切<rt>てきせつ</rt></ruby>なものはどれか。「We are pleased to make you an offer as follows.」`,
  qzh:"下列英文最贴切的意思是哪一项？「We are pleased to make you an offer as follows.」",
  opts:[
    {t:`<ruby>下記<rt>かき</rt></ruby>のとおりお<ruby>見積<rt>みつ</rt></ruby>もり（オファー）いたします`, zh:"现按如下内容向您报价（offer）"},
    {t:`ご<ruby>注文<rt>ちゅうもん</rt></ruby>をキャンセルします`, zh:"我们取消您的订单"},
    {t:`<ruby>支払<rt>しはらい</rt></ruby>を<ruby>拒否<rt>きょひ</rt></ruby>します`, zh:"我们拒绝付款"}
  ],
  ans:0,
  optExp:[
    "正确。make an offer＝报价/发盘；as follows＝如下。整句为礼貌地提出报价。",
    "错误。句中无cancel/order之意。",
    "错误。句中无refuse/payment之意。"
  ]
},
{
  id:"d6q2", day:6, topic:"贸易英语", type:"語群選択",
  q:`「<ruby>船積<rt>ふなづみ</rt></ruby><ruby>書類<rt>しょるい</rt></ruby>」を<ruby>表<rt>あらわ</rt></ruby>す<ruby>英語<rt>えいご</rt></ruby>はどれか。`,
  qzh:"表示“装船单据”的英语是哪一个？",
  opts:[
    {t:`shipping documents`, zh:"装船单据"},
    {t:`packing materials`, zh:"包装材料"},
    {t:`customs duty`, zh:"关税"}
  ],
  ans:0,
  optExp:[
    "正确。shipping documents＝装船/货运单据（B/L、Invoice、保险单等）。",
    "错误。packing materials是包装材料。",
    "错误。customs duty是关税。"
  ]
},
{
  id:"d6q3", day:6, topic:"贸易英语", type:"語群選択",
  q:`「Letter of Credit」の<ruby>略称<rt>りゃくしょう</rt></ruby>はどれか。`,
  qzh:"“Letter of Credit”的缩写是哪一个？",
  opts:[
    {t:`L/C`, zh:"L/C（信用证）"},
    {t:`B/L`, zh:"B/L（提单）"},
    {t:`A/W`, zh:"A/W（实重）"}
  ],
  ans:0,
  optExp:[
    "正确。Letter of Credit＝L/C（信用证）。",
    "错误。B/L是Bill of Lading（提单）。",
    "错误。A/W一般指Actual Weight（实际重量）。"
  ]
},
{
  id:"d6q4", day:6, topic:"贸易英语", type:"語群選択",
  q:`「consignee」の<ruby>意味<rt>いみ</rt></ruby>はどれか。`,
  qzh:"“consignee”的意思是哪一个？",
  opts:[
    {t:`<ruby>荷受人<rt>にうけにん</rt></ruby>`, zh:"收货人"},
    {t:`<ruby>荷送人<rt>におくりにん</rt></ruby>`, zh:"发货人"},
    {t:`<ruby>運送人<rt>うんそうにん</rt></ruby>`, zh:"承运人"}
  ],
  ans:0,
  optExp:[
    "正确。consignee＝收货人（荷受人）。",
    "错误。发货人是consignor/shipper（荷送人）。",
    "错误。承运人是carrier（运送人）。"
  ],
  note:"成对记：consignor（发货人）↔ consignee（收货人）。"
},
{
  id:"d6q5", day:6, topic:"贸易英语", type:"英文和訳3択",
  q:`「We would appreciate your prompt reply.」のニュアンスとして<ruby>正<rt>ただ</rt></ruby>しいものはどれか。`,
  qzh:"「We would appreciate your prompt reply.」的语气含义，正确的是哪一项？",
  opts:[
    {t:`<ruby>早急<rt>さっきゅう</rt></ruby>なご<ruby>返信<rt>へんしん</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします（<ruby>丁寧<rt>ていねい</rt></ruby>な<ruby>依頼<rt>いらい</rt></ruby>）`, zh:"恳请尽快回复（礼貌的请求）"},
    {t:`<ruby>返信<rt>へんしん</rt></ruby>は<ruby>不要<rt>ふよう</rt></ruby>です`, zh:"无需回复"},
    {t:`<ruby>返信<rt>へんしん</rt></ruby>が<ruby>遅<rt>おそ</rt></ruby>いと<ruby>抗議<rt>こうぎ</rt></ruby>している`, zh:"在抗议对方回复太慢"}
  ],
  ans:0,
  optExp:[
    "正确。appreciate your prompt reply＝礼貌地希望对方尽快回复。",
    "错误。句意是请求回复，并非不要回复。",
    "错误。语气是礼貌请求，不是抗议。"
  ]
},
{
  id:"d6q6", day:6, topic:"贸易英语", type:"語群選択",
  q:`「invoice」の<ruby>意味<rt>いみ</rt></ruby>はどれか。`,
  qzh:"“invoice”的意思是哪一个？",
  opts:[
    {t:`<ruby>送<rt>おく</rt></ruby>り<ruby>状<rt>じょう</rt></ruby>・<ruby>請求書<rt>せいきゅうしょ</rt></ruby>`, zh:"发票（送货单/请求书）"},
    {t:`<ruby>保険<rt>ほけん</rt></ruby><ruby>証券<rt>しょうけん</rt></ruby>`, zh:"保险单"},
    {t:`<ruby>原産地<rt>げんさんち</rt></ruby><ruby>証明書<rt>しょうめいしょ</rt></ruby>`, zh:"原产地证明书"}
  ],
  ans:0,
  optExp:[
    "正确。invoice＝商业发票（送り状兼请求书）。",
    "错误。保险单是insurance policy。",
    "错误。原产地证明是certificate of origin。"
  ]
},
{
  id:"d6q7", day:6, topic:"贸易英语", type:"語群選択",
  q:`「marine insurance」の<ruby>意味<rt>いみ</rt></ruby>はどれか。`,
  qzh:"“marine insurance”的意思是哪一个？",
  opts:[
    {t:`<ruby>海上<rt>かいじょう</rt></ruby><ruby>保険<rt>ほけん</rt></ruby>`, zh:"海上保险"},
    {t:`<ruby>火災<rt>かさい</rt></ruby><ruby>保険<rt>ほけん</rt></ruby>`, zh:"火灾保险"},
    {t:`<ruby>生命<rt>せいめい</rt></ruby><ruby>保険<rt>ほけん</rt></ruby>`, zh:"人寿保险"}
  ],
  ans:0,
  optExp:[
    "正确。marine insurance＝海上（货物）保险。",
    "错误。火灾保险是fire insurance。",
    "错误。人寿保险是life insurance。"
  ]
},

/* ============ Day 7：实务强化①（条件·信用状·为替） ============ */
{
  id:"d7q1", day:7, topic:"インコタームズ2020", type:"3択",
  q:`<ruby>航空便<rt>こうくうびん</rt></ruby>で<ruby>貨物<rt>かもつ</rt></ruby>を<ruby>輸出<rt>ゆしゅつ</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>に<ruby>使<rt>つか</rt></ruby>うのが<ruby>適切<rt>てきせつ</rt></ruby>なインコタームズの<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせはどれか。`,
  qzh:"用航空运输出口货物时，适合使用的Incoterms组合是哪一项？",
  opts:[
    {t:`FCA・CPT・CIP（<ruby>任意<rt>にんい</rt></ruby>の<ruby>輸送<rt>ゆそう</rt></ruby><ruby>手段<rt>しゅだん</rt></ruby>に<ruby>使<rt>つか</rt></ruby>える）`, zh:"FCA・CPT・CIP（适用任何运输方式）"},
    {t:`FOB・CFR・CIF（<ruby>海上<rt>かいじょう</rt></ruby><ruby>専用<rt>せんよう</rt></ruby>）`, zh:"FOB・CFR・CIF（海运专用）"},
    {t:`DDP のみ`, zh:"只有DDP"}
  ],
  ans:0,
  optExp:[
    "正确。航空运输应选“适用任何运输方式”的条件：FCA / CPT / CIP 等。",
    "错误。FOB・CFR・CIF 是海运/内陆水运专用，不适合航空。",
    "错误。DDP 也能用于航空，但说“只有DDP”不对，FCA组才是典型选择。"
  ],
  note:"海运专用4条件：FAS・FOB・CFR・CIF；其余适用任何运输方式。"
},
{
  id:"d7q2", day:7, topic:"インコタームズ2020", type:"2択",
  q:`FOB<ruby>契約<rt>けいやく</rt></ruby>で、<ruby>売主<rt>うりぬし</rt></ruby>は<ruby>貨物<rt>かもつ</rt></ruby>を<ruby>本船<rt>ほんせん</rt></ruby>に<ruby>積<rt>つ</rt></ruby>み<ruby>込<rt>こ</rt></ruby>むまでの<ruby>費用<rt>ひよう</rt></ruby>と<ruby>危険<rt>きけん</rt></ruby>を<ruby>負担<rt>ふたん</rt></ruby>する。`,
  qzh:"FOB合同下，卖方负担把货物装上船为止的费用和风险。对吗？",
  opts:[ {t:`<ruby>正<rt>ただ</rt></ruby>しい（○）`, zh:"正确（○）"}, {t:`<ruby>誤<rt>あやま</rt></ruby>り（×）`, zh:"错误（×）"} ],
  ans:0,
  optExp:[
    "正确。FOB下卖方负担到“货装上船”为止的费用与风险，之后归买方。",
    "错误。装船为界，正是FOB的分界点，说法成立。"
  ]
},
{
  id:"d7q3", day:7, topic:"インコタームズ2020", type:"3択",
  q:`CFR（<ruby>運賃<rt>うんちん</rt></ruby><ruby>込<rt>こ</rt></ruby>み）<ruby>契約<rt>けいやく</rt></ruby>で、<ruby>海上<rt>かいじょう</rt></ruby><ruby>保険<rt>ほけん</rt></ruby>を<ruby>手配<rt>てはい</rt></ruby>する<ruby>義務<rt>ぎむ</rt></ruby>があるのは<ruby>誰<rt>だれ</rt></ruby>か。`,
  qzh:"CFR（成本加运费）合同下，有义务安排海上保险的是谁？",
  opts:[
    {t:`<ruby>買主<rt>かいぬし</rt></ruby>（<ruby>自<rt>みずか</rt></ruby>ら<ruby>付保<rt>ふほ</rt></ruby>する）`, zh:"买方（自己投保）"},
    {t:`<ruby>売主<rt>うりぬし</rt></ruby>`, zh:"卖方"},
    {t:`<ruby>船会社<rt>ふながいしゃ</rt></ruby>`, zh:"船公司"}
  ],
  ans:0,
  optExp:[
    "正确。CFR不含保险，风险又在装船时转给买方，所以买方需自己投保。",
    "错误。卖方付保的是CIF（CFR＋保险）。",
    "错误。船公司只承运，不负责买方的货物保险。"
  ],
  note:"CFR + 海上保险 = CIF。"
},
{
  id:"d7q4", day:7, topic:"信用状·贸易金融", type:"3択",
  q:`<ruby>信用状<rt>しんようじょう</rt></ruby><ruby>取引<rt>とりひき</rt></ruby>でいう「ディスクレ（discrepancy）」とは<ruby>何<rt>なに</rt></ruby>か。`,
  qzh:"信用证交易中所说的“discrepancy（不符点）”是指什么？",
  opts:[
    {t:`<ruby>船積<rt>ふなづみ</rt></ruby><ruby>書類<rt>しょるい</rt></ruby>が<ruby>信用状<rt>しんようじょう</rt></ruby>の<ruby>条件<rt>じょうけん</rt></ruby>と<ruby>一致<rt>いっち</rt></ruby>しないこと`, zh:"装船单据与信用证条件不一致"},
    {t:`<ruby>為替<rt>かわせ</rt></ruby><ruby>相場<rt>そうば</rt></ruby>が<ruby>急変<rt>きゅうへん</rt></ruby>すること`, zh:"汇率剧烈波动"},
    {t:`<ruby>関税<rt>かんぜい</rt></ruby>を<ruby>滞納<rt>たいのう</rt></ruby>すること`, zh:"拖欠关税"}
  ],
  ans:0,
  optExp:[
    "正确。discrepancy＝单据与L/C条件不符；有不符点银行可拒付。",
    "错误。汇率波动与单据相符与否无关。",
    "错误。关税滞纳与信用证单据审核无关。"
  ]
},
{
  id:"d7q5", day:7, topic:"信用状·贸易金融", type:"3択",
  q:`<ruby>輸出者<rt>ゆしゅつしゃ</rt></ruby>に<ruby>信用状<rt>しんようじょう</rt></ruby>を<ruby>通知<rt>つうち</rt></ruby>し<ruby>書類<rt>しょるい</rt></ruby>を<ruby>取<rt>と</rt></ruby>り<ruby>次<rt>つ</rt></ruby>ぐが、<ruby>自<rt>みずか</rt></ruby>らは<ruby>支払<rt>しはらい</rt></ruby>を<ruby>確約<rt>かくやく</rt></ruby>しない<ruby>銀行<rt>ぎんこう</rt></ruby>はどれか。`,
  qzh:"向出口商通知信用证、转递单据，但自己不作付款确约的银行是哪一个？",
  opts:[
    {t:`<ruby>通知<rt>つうち</rt></ruby><ruby>銀行<rt>ぎんこう</rt></ruby>`, zh:"通知银行"},
    {t:`<ruby>発行<rt>はっこう</rt></ruby><ruby>銀行<rt>ぎんこう</rt></ruby>`, zh:"开证银行"},
    {t:`<ruby>確認<rt>かくにん</rt></ruby><ruby>銀行<rt>ぎんこう</rt></ruby>`, zh:"保兑银行"}
  ],
  ans:0,
  optExp:[
    "正确。通知银行只负责通知与转递，不承担付款责任。",
    "错误。开证银行作出最终付款确约。",
    "错误。保兑银行另外再加一层付款确约。"
  ]
},
{
  id:"d7q6", day:7, topic:"信用状·贸易金融", type:"3択",
  q:`<ruby>呈示<rt>ていじ</rt></ruby>されたら<ruby>直<rt>ただ</rt></ruby>ちに<ruby>支払<rt>しはら</rt></ruby>われる「<ruby>一覧払<rt>いちらんばら</rt></ruby>い」の<ruby>手形<rt>てがた</rt></ruby>を<ruby>何<rt>なに</rt></ruby>というか。`,
  qzh:"一经提示即刻付款的“即期”汇票叫什么？",
  opts:[
    {t:`<ruby>一覧払<rt>いちらんばら</rt></ruby>い<ruby>手形<rt>てがた</rt></ruby>（at sight）`, zh:"即期汇票（at sight）"},
    {t:`<ruby>期限付<rt>きげんつき</rt></ruby><ruby>手形<rt>てがた</rt></ruby>（usance）`, zh:"远期汇票（usance）"},
    {t:`<ruby>自己<rt>じこ</rt></ruby><ruby>宛<rt>あて</rt></ruby><ruby>手形<rt>てがた</rt></ruby>`, zh:"自己为付款人的汇票"}
  ],
  ans:0,
  optExp:[
    "正确。一覧払い（at sight）＝见票即付。",
    "错误。期限付（usance）手形是远期、有付款宽限。",
    "错误。自己宛手形指出票人自己为付款人，与付款期限无关。"
  ]
},
{
  id:"d7q7", day:7, topic:"外国为替", type:"3択",
  q:`<ruby>輸入者<rt>ゆにゅうしゃ</rt></ruby>が<ruby>将来<rt>しょうらい</rt></ruby>の<ruby>支払<rt>しはらい</rt></ruby>に<ruby>備<rt>そな</rt></ruby>え、あらかじめ<ruby>為替<rt>かわせ</rt></ruby><ruby>予約<rt>よやく</rt></ruby>をする<ruby>主<rt>おも</rt></ruby>な<ruby>目的<rt>もくてき</rt></ruby>はどれか。`,
  qzh:"进口商为将来付款而预先做远期外汇预约，主要目的是哪一项？",
  opts:[
    {t:`<ruby>円安<rt>えんやす</rt></ruby><ruby>方向<rt>ほうこう</rt></ruby>の<ruby>為替<rt>かわせ</rt></ruby><ruby>変動<rt>へんどう</rt></ruby>リスクを<ruby>避<rt>さ</rt></ruby>け、コストを<ruby>確定<rt>かくてい</rt></ruby>するため`, zh:"规避日元贬值方向的汇率风险、锁定成本"},
    {t:`<ruby>関税<rt>かんぜい</rt></ruby>を<ruby>減<rt>へ</rt></ruby>らすため`, zh:"为了减少关税"},
    {t:`<ruby>通関<rt>つうかん</rt></ruby>を<ruby>早<rt>はや</rt></ruby>めるため`, zh:"为了加快通关"}
  ],
  ans:0,
  optExp:[
    "正确。远期预约锁定未来汇率，规避（进口商怕的）日元贬值风险、确定成本。",
    "错误。汇率预约与关税多少无关。",
    "错误。汇率预约与通关速度无关。"
  ]
},
{
  id:"d7q8", day:7, topic:"外国为替", type:"3択",
  q:`<ruby>銀行<rt>ぎんこう</rt></ruby>が<ruby>顧客<rt>こきゃく</rt></ruby>から<ruby>外貨<rt>がいか</rt></ruby>を<ruby>買<rt>か</rt></ruby>い<ruby>取<rt>と</rt></ruby>る（<ruby>輸出者<rt>ゆしゅつしゃ</rt></ruby>が<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>った<ruby>外貨<rt>がいか</rt></ruby>を<ruby>円<rt>えん</rt></ruby>に<ruby>換<rt>か</rt></ruby>える）ときに<ruby>適用<rt>てきよう</rt></ruby>される<ruby>相場<rt>そうば</rt></ruby>はどれか。`,
  qzh:"银行从客户处买入外汇（出口商把收到的外汇换成日元）时适用的汇率是哪一个？",
  opts:[
    {t:`TTB（<ruby>電信<rt>でんしん</rt></ruby><ruby>買<rt>かい</rt></ruby><ruby>相場<rt>そうば</rt></ruby>）`, zh:"TTB（电汇买入汇率）"},
    {t:`TTS（<ruby>電信<rt>でんしん</rt></ruby><ruby>売<rt>うり</rt></ruby><ruby>相場<rt>そうば</rt></ruby>）`, zh:"TTS（电汇卖出汇率）"},
    {t:`<ruby>仲値<rt>なかね</rt></ruby>（TTM）`, zh:"中间价（TTM）"}
  ],
  ans:0,
  optExp:[
    "正确。以银行为主语“买入”外汇用TTB。",
    "错误。TTS是银行卖出外汇时用（客户买外汇）。",
    "错误。TTM是中间基准价，不直接用于成交。"
  ],
  note:"以银行为主语：Buying=TTB，Selling=TTS。"
},

/* ============ Day 8：实务强化②（通关·关税·保险·运送·经济） ============ */
{
  id:"d8q1", day:8, topic:"通关·关税", type:"3択",
  q:`<ruby>輸出<rt>ゆしゅつ</rt></ruby><ruby>貨物<rt>かもつ</rt></ruby>は<ruby>原則<rt>げんそく</rt></ruby>として、どの<ruby>状態<rt>じょうたい</rt></ruby>になってから<ruby>本船<rt>ほんせん</rt></ruby>に<ruby>積<rt>つ</rt></ruby>み<ruby>込<rt>こ</rt></ruby>むか。`,
  qzh:"出口货物原则上要在什么状态之后才装船？",
  opts:[
    {t:`<ruby>税関<rt>ぜいかん</rt></ruby>に<ruby>輸出<rt>ゆしゅつ</rt></ruby><ruby>申告<rt>しんこく</rt></ruby>し、<ruby>輸出<rt>ゆしゅつ</rt></ruby><ruby>許可<rt>きょか</rt></ruby>を<ruby>受<rt>う</rt></ruby>けた<ruby>後<rt>あと</rt></ruby>`, zh:"向海关申报、取得出口许可之后"},
    {t:`<ruby>申告<rt>しんこく</rt></ruby>する<ruby>前<rt>まえ</rt></ruby>`, zh:"申报之前"},
    {t:`<ruby>代金<rt>だいきん</rt></ruby>を<ruby>回収<rt>かいしゅう</rt></ruby>した<ruby>後<rt>あと</rt></ruby>`, zh:"收回货款之后"}
  ],
  ans:0,
  optExp:[
    "正确。须先输出申告、取得输出许可（E/P），才能装船出口。",
    "错误。申报前不得擅自装船出口。",
    "错误。是否收款与能否装船的通关程序无关。"
  ]
},
{
  id:"d8q2", day:8, topic:"通关·关税", type:"3択",
  q:`<ruby>日本<rt>にほん</rt></ruby>の<ruby>輸入<rt>ゆにゅう</rt></ruby><ruby>関税<rt>かんぜい</rt></ruby>で「<ruby>従価税<rt>じゅうかぜい</rt></ruby>」の<ruby>課税<rt>かぜい</rt></ruby><ruby>標準<rt>ひょうじゅん</rt></ruby>となる<ruby>価格<rt>かかく</rt></ruby>は、<ruby>原則<rt>げんそく</rt></ruby>としてどれか。`,
  qzh:"日本进口关税中，“从价税”的计税标准价格原则上是哪一个？",
  opts:[
    {t:`CIF<ruby>価格<rt>かかく</rt></ruby>（<ruby>輸入港<rt>ゆにゅうこう</rt></ruby>までの<ruby>運賃<rt>うんちん</rt></ruby>・<ruby>保険料<rt>ほけんりょう</rt></ruby><ruby>込<rt>こ</rt></ruby>み）`, zh:"CIF价格（含到进口港的运费、保险费）"},
    {t:`FOB<ruby>価格<rt>かかく</rt></ruby>`, zh:"FOB价格"},
    {t:`<ruby>国内<rt>こくない</rt></ruby><ruby>小売<rt>こうり</rt></ruby><ruby>価格<rt>かかく</rt></ruby>`, zh:"国内零售价"}
  ],
  ans:0,
  optExp:[
    "正确。日本关税估价原则上以CIF价格为课税标准。",
    "错误。FOB不含运费保险费，不是日本从价税的课税标准。",
    "错误。国内零售价不是进口关税的课税基础。"
  ]
},
{
  id:"d8q3", day:8, topic:"通关·关税", type:"3択",
  q:`<ruby>特恵<rt>とっけい</rt></ruby><ruby>関税<rt>かんぜい</rt></ruby>（GSP）の<ruby>説明<rt>せつめい</rt></ruby>として<ruby>正<rt>ただ</rt></ruby>しいものはどれか。`,
  qzh:"关于特惠关税（GSP）的说明，正确的是哪一项？",
  opts:[
    {t:`<ruby>開発<rt>かいはつ</rt></ruby><ruby>途上国<rt>とじょうこく</rt></ruby>の<ruby>産品<rt>さんぴん</rt></ruby>に<ruby>通常<rt>つうじょう</rt></ruby>より<ruby>低<rt>ひく</rt></ruby>い<ruby>税率<rt>ぜいりつ</rt></ruby>を<ruby>適用<rt>てきよう</rt></ruby>する<ruby>制度<rt>せいど</rt></ruby>`, zh:"对发展中国家产品适用低于一般税率的制度"},
    {t:`<ruby>先進国<rt>せんしんこく</rt></ruby>どうしで<ruby>関税<rt>かんぜい</rt></ruby>をゼロにする<ruby>制度<rt>せいど</rt></ruby>`, zh:"发达国家之间关税归零的制度"},
    {t:`<ruby>輸出品<rt>ゆしゅつひん</rt></ruby>に<ruby>課<rt>か</rt></ruby>す<ruby>税<rt>ぜい</rt></ruby>`, zh:"对出口品课征的税"}
  ],
  ans:0,
  optExp:[
    "正确。特惠关税对发展中国家产品给予低于普通/协定税率的优惠。",
    "错误。那是发达国家间的自由贸易/协定，不是GSP。",
    "错误。特惠关税是进口环节的优惠税率，不是出口税。"
  ]
},
{
  id:"d8q4", day:8, topic:"贸易保险", type:"2択",
  q:`<ruby>海上<rt>かいじょう</rt></ruby><ruby>保険<rt>ほけん</rt></ruby>のICC（<ruby>協会<rt>きょうかい</rt></ruby><ruby>貨物<rt>かもつ</rt></ruby><ruby>約款<rt>やっかん</rt></ruby>）では、ICC(A)が<ruby>最<rt>もっと</rt></ruby>も<ruby>担保<rt>たんぽ</rt></ruby><ruby>範囲<rt>はんい</rt></ruby>が<ruby>広<rt>ひろ</rt></ruby>い。`,
  qzh:"海上保险的ICC（协会货物条款）中，ICC(A)的承保范围最广。对吗？",
  opts:[ {t:`<ruby>正<rt>ただ</rt></ruby>しい（○）`, zh:"正确（○）"}, {t:`<ruby>誤<rt>あやま</rt></ruby>り（×）`, zh:"错误（×）"} ],
  ans:0,
  optExp:[
    "正确。ICC(A)担保范围最广（近似全险），(C)最窄。",
    "错误。(A)最广、(C)最窄，原句成立。"
  ],
  note:"广→窄：ICC(A) > ICC(B) > ICC(C)。"
},
{
  id:"d8q5", day:8, topic:"贸易书类·运送", type:"3択",
  q:`コンテナ<ruby>単位<rt>たんい</rt></ruby>で<ruby>満載<rt>まんさい</rt></ruby>されたFCL<ruby>貨物<rt>かもつ</rt></ruby>の<ruby>受<rt>う</rt></ruby>け<ruby>渡<rt>わた</rt></ruby>しが<ruby>行<rt>おこな</rt></ruby>われる<ruby>場所<rt>ばしょ</rt></ruby>はどれか。`,
  qzh:"以整箱满载的FCL货物，交接在哪个场所进行？",
  opts:[
    {t:`CY（コンテナ・ヤード）`, zh:"CY（集装箱堆场）"},
    {t:`CFS（コンテナ・フレート・ステーション）`, zh:"CFS（集装箱货运站）"},
    {t:`<ruby>上屋<rt>うわや</rt></ruby>`, zh:"码头仓库（上屋）"}
  ],
  ans:0,
  optExp:[
    "正确。FCL（整箱）在CY交接。",
    "错误。CFS是LCL（拼箱）小口货混载/交接的地方。",
    "错误。上屋是在来船杂货的临时存放处，非FCL交接点。"
  ],
  note:"配套记忆：FCL↔CY，LCL↔CFS。"
},
{
  id:"d8q6", day:8, topic:"贸易书类·运送", type:"3択",
  q:`<ruby>貨物<rt>かもつ</rt></ruby>の<ruby>損傷<rt>そんしょう</rt></ruby>や<ruby>数量<rt>すうりょう</rt></ruby>の<ruby>過不足<rt>かぶそく</rt></ruby>を<ruby>示<rt>しめ</rt></ruby>す<ruby>摘要<rt>てきよう</rt></ruby>（リマーク）が<ruby>付<rt>つ</rt></ruby>いた<ruby>船荷<rt>ふなに</rt></ruby><ruby>証券<rt>しょうけん</rt></ruby>を<ruby>何<rt>なに</rt></ruby>というか。`,
  qzh:"附有表示货物破损或数量短溢批注（remark）的提单叫什么？",
  opts:[
    {t:`<ruby>故障付<rt>こしょうつき</rt></ruby><ruby>船荷<rt>ふなに</rt></ruby><ruby>証券<rt>しょうけん</rt></ruby>（Foul B/L）`, zh:"不清洁提单（Foul/Dirty B/L）"},
    {t:`<ruby>無故障<rt>むこしょう</rt></ruby><ruby>船荷<rt>ふなに</rt></ruby><ruby>証券<rt>しょうけん</rt></ruby>（Clean B/L）`, zh:"清洁提单（Clean B/L）"},
    {t:`<ruby>受取<rt>うけとり</rt></ruby><ruby>船荷<rt>ふなに</rt></ruby><ruby>証券<rt>しょうけん</rt></ruby>`, zh:"备运提单（received B/L）"}
  ],
  ans:0,
  optExp:[
    "正确。带瑕疵批注的是故障付（不清洁）提单。",
    "错误。无批注的是无故障（清洁）提单。",
    "错误。受取船荷证券指货物收讫但尚未装船，与有无批注是另一维度。"
  ],
  note:"信用证交易通常要求 Clean B/L（无故障提单）。"
},
{
  id:"d8q7", day:8, topic:"贸易经济知识", type:"3択",
  q:`WTOの「<ruby>最恵国<rt>さいけいこく</rt></ruby><ruby>待遇<rt>たいぐう</rt></ruby>（MFN）」<ruby>原則<rt>げんそく</rt></ruby>の<ruby>説明<rt>せつめい</rt></ruby>として<ruby>正<rt>ただ</rt></ruby>しいものはどれか。`,
  qzh:"关于WTO“最惠国待遇（MFN）”原则的说明，正确的是哪一项？",
  opts:[
    {t:`ある<ruby>加盟国<rt>かめいこく</rt></ruby>に<ruby>与<rt>あた</rt></ruby>えた<ruby>有利<rt>ゆうり</rt></ruby>な<ruby>条件<rt>じょうけん</rt></ruby>を、<ruby>他<rt>た</rt></ruby>の<ruby>全<rt>すべ</rt></ruby>ての<ruby>加盟国<rt>かめいこく</rt></ruby>にも<ruby>等<rt>ひと</rt></ruby>しく<ruby>与<rt>あた</rt></ruby>える`, zh:"给予某成员国的优惠条件，须同等给予所有其他成员国"},
    {t:`<ruby>自国<rt>じこく</rt></ruby><ruby>産業<rt>さんぎょう</rt></ruby>だけを<ruby>優遇<rt>ゆうぐう</rt></ruby>する`, zh:"只优待本国产业"},
    {t:`<ruby>途上国<rt>とじょうこく</rt></ruby>だけを<ruby>優遇<rt>ゆうぐう</rt></ruby>する`, zh:"只优待发展中国家"}
  ],
  ans:0,
  optExp:[
    "正确。MFN＝对一国的优惠须无差别地适用于所有成员国。",
    "错误。只优待本国是与自由贸易相悖的保护主义。",
    "错误。只优待途上国是特惠关税等例外，不是MFN本身。"
  ]
},
{
  id:"d8q8", day:8, topic:"贸易经济知识", type:"3択",
  q:`「<ruby>産業<rt>さんぎょう</rt></ruby>の<ruby>空洞化<rt>くうどうか</rt></ruby>」とは<ruby>何<rt>なに</rt></ruby>か。`,
  qzh:"什么是“产业空心化”？",
  opts:[
    {t:`<ruby>製造業<rt>せいぞうぎょう</rt></ruby>の<ruby>生産<rt>せいさん</rt></ruby><ruby>拠点<rt>きょてん</rt></ruby>が<ruby>海外<rt>かいがい</rt></ruby>へ<ruby>移転<rt>いてん</rt></ruby>し、<ruby>国内<rt>こくない</rt></ruby><ruby>産業<rt>さんぎょう</rt></ruby>が<ruby>衰退<rt>すいたい</rt></ruby>する<ruby>現象<rt>げんしょう</rt></ruby>`, zh:"制造业生产基地转移到海外、国内产业衰退的现象"},
    {t:`<ruby>輸入<rt>ゆにゅう</rt></ruby>が<ruby>減<rt>へ</rt></ruby>って<ruby>黒字<rt>くろじ</rt></ruby>が<ruby>増<rt>ふ</rt></ruby>えること`, zh:"进口减少、顺差增加"},
    {t:`<ruby>関税<rt>かんぜい</rt></ruby>が<ruby>上<rt>あ</rt></ruby>がること`, zh:"关税上升"}
  ],
  ans:0,
  optExp:[
    "正确。空心化＝生产据点外移导致国内制造业衰退、就业流失。",
    "错误。这描述的是贸易收支，不是空心化。",
    "错误。关税升降与产业空心化不是一回事。"
  ]
},

/* ============ Day 9：贸易英语扩充（重点·英文和訳） ============ */
{
  id:"d9q1", day:9, topic:"贸易英语", type:"英文和訳3択",
  q:`<ruby>次<rt>つぎ</rt></ruby>の<ruby>英文<rt>えいぶん</rt></ruby>の<ruby>意味<rt>いみ</rt></ruby>として<ruby>最<rt>もっと</rt></ruby>も<ruby>適切<rt>てきせつ</rt></ruby>なものはどれか。「Please find enclosed our pro forma invoice.」`,
  qzh:"下列英文最贴切的意思是哪一项？「Please find enclosed our pro forma invoice.」",
  opts:[
    {t:`プロフォーマ・インボイス（<ruby>見積<rt>みつ</rt></ruby>もり<ruby>送<rt>おく</rt></ruby>り<ruby>状<rt>じょう</rt></ruby>）を<ruby>同封<rt>どうふう</rt></ruby>いたします`, zh:"随函附上我方形式发票（预估发票）"},
    {t:`<ruby>請求書<rt>せいきゅうしょ</rt></ruby>の<ruby>支払<rt>しはらい</rt></ruby>を<ruby>督促<rt>とくそく</rt></ruby>します`, zh:"催促支付账单"},
    {t:`<ruby>注文<rt>ちゅうもん</rt></ruby>を<ruby>取<rt>と</rt></ruby>り<ruby>消<rt>け</rt></ruby>します`, zh:"取消订单"}
  ],
  ans:0,
  optExp:[
    "正确。find enclosed＝随函附上；pro forma invoice＝形式发票（报价用）。",
    "错误。句中没有催款（demand payment）之意。",
    "错误。句中没有取消订单之意。"
  ]
},
{
  id:"d9q2", day:9, topic:"贸易英语", type:"英文和訳3択",
  q:`「The goods will be shipped by the end of next month.」の<ruby>意味<rt>いみ</rt></ruby>はどれか。`,
  qzh:"「The goods will be shipped by the end of next month.」的意思是哪一项？",
  opts:[
    {t:`<ruby>商品<rt>しょうひん</rt></ruby>は<ruby>来月末<rt>らいげつまつ</rt></ruby>までに<ruby>船積<rt>ふなづ</rt></ruby>みされます`, zh:"货物将在下月底前装运"},
    {t:`<ruby>商品<rt>しょうひん</rt></ruby>は<ruby>来月<rt>らいげつ</rt></ruby><ruby>初<rt>はじ</rt></ruby>めに<ruby>到着<rt>とうちゃく</rt></ruby>します`, zh:"货物将在下月初到达"},
    {t:`<ruby>商品<rt>しょうひん</rt></ruby>は<ruby>出荷<rt>しゅっか</rt></ruby>できません`, zh:"货物无法发运"}
  ],
  ans:0,
  optExp:[
    "正确。be shipped＝被装运；by the end of next month＝下月底前。",
    "错误。是“装运”而非“到达”，时间也是月底前。",
    "错误。句子是肯定将装运，不是不能发运。"
  ]
},
{
  id:"d9q3", day:9, topic:"贸易英语", type:"英文和訳3択",
  q:`「We regret that we cannot accept your claim.」の<ruby>意味<rt>いみ</rt></ruby>はどれか。`,
  qzh:"「We regret that we cannot accept your claim.」的意思是哪一项？",
  opts:[
    {t:`<ruby>残念<rt>ざんねん</rt></ruby>ながら、<ruby>貴社<rt>きしゃ</rt></ruby>のクレームをお<ruby>受<rt>う</rt></ruby>けできません`, zh:"很遗憾，无法接受贵公司的索赔"},
    {t:`<ruby>喜<rt>よろこ</rt></ruby>んでご<ruby>注文<rt>ちゅうもん</rt></ruby>をお<ruby>受<rt>う</rt></ruby>けします`, zh:"乐意接受您的订单"},
    {t:`<ruby>代金<rt>だいきん</rt></ruby>を<ruby>返金<rt>へんきん</rt></ruby>いたします`, zh:"我们将退款"}
  ],
  ans:0,
  optExp:[
    "正确。regret＝遗憾；cannot accept your claim＝无法接受索赔。",
    "错误。句中是拒绝claim，不是接受订单。",
    "错误。句中没有退款之意，反而是拒赔。"
  ],
  note:"claim 在贸易里多指“索赔”，不是“声称”。"
},
{
  id:"d9q4", day:9, topic:"贸易英语", type:"語群選択",
  q:`「<ruby>原産地<rt>げんさんち</rt></ruby><ruby>証明書<rt>しょうめいしょ</rt></ruby>」を<ruby>表<rt>あらわ</rt></ruby>す<ruby>英語<rt>えいご</rt></ruby>はどれか。`,
  qzh:"表示“原产地证明书”的英语是哪一个？",
  opts:[
    {t:`certificate of origin`, zh:"原产地证明书"},
    {t:`bill of lading`, zh:"提单"},
    {t:`insurance policy`, zh:"保险单"}
  ],
  ans:0,
  optExp:[
    "正确。certificate of origin＝原产地证明书。",
    "错误。bill of lading是提单（B/L）。",
    "错误。insurance policy是保险单。"
  ]
},
{
  id:"d9q5", day:9, topic:"贸易英语", type:"語群選択",
  q:`「<ruby>保険<rt>ほけん</rt></ruby><ruby>証券<rt>しょうけん</rt></ruby>」を<ruby>表<rt>あらわ</rt></ruby>す<ruby>英語<rt>えいご</rt></ruby>はどれか。`,
  qzh:"表示“保险单”的英语是哪一个？",
  opts:[
    {t:`insurance policy`, zh:"保险单"},
    {t:`packing list`, zh:"装箱单"},
    {t:`letter of credit`, zh:"信用证"}
  ],
  ans:0,
  optExp:[
    "正确。insurance policy＝保险单（证券）。",
    "错误。packing list是装箱单。",
    "错误。letter of credit是信用证（L/C）。"
  ]
},
{
  id:"d9q6", day:9, topic:"贸易英语", type:"語群選択",
  q:`<ruby>貿易<rt>ぼうえき</rt></ruby><ruby>条件<rt>じょうけん</rt></ruby>でいう「partial shipment」の<ruby>意味<rt>いみ</rt></ruby>はどれか。`,
  qzh:"贸易条款中“partial shipment”的意思是哪一个？",
  opts:[
    {t:`<ruby>分割<rt>ぶんかつ</rt></ruby><ruby>船積<rt>ふなづ</rt></ruby>み`, zh:"分批装运"},
    {t:`<ruby>積<rt>つ</rt></ruby>み<ruby>替<rt>か</rt></ruby>え（transshipment）`, zh:"转运/换船（transshipment）"},
    {t:`<ruby>全量<rt>ぜんりょう</rt></ruby><ruby>一括<rt>いっかつ</rt></ruby><ruby>船積<rt>ふなづ</rt></ruby>み`, zh:"全量一次装运"}
  ],
  ans:0,
  optExp:[
    "正确。partial shipment＝分批（分割）装运。",
    "错误。transshipment是中途转船/转运，不是分批。",
    "错误。全量一次装运与“partial（部分）”相反。"
  ],
  note:"区分：partial shipment（分批）↔ transshipment（转运）。"
},
{
  id:"d9q7", day:9, topic:"贸易英语", type:"英文和訳3択",
  q:`「This offer is subject to our final confirmation.」の<ruby>意味<rt>いみ</rt></ruby>はどれか。`,
  qzh:"「This offer is subject to our final confirmation.」的意思是哪一项？",
  opts:[
    {t:`このオファーは<ruby>当社<rt>とうしゃ</rt></ruby>の<ruby>最終<rt>さいしゅう</rt></ruby><ruby>確認<rt>かくにん</rt></ruby>を<ruby>条件<rt>じょうけん</rt></ruby>とします`, zh:"本报价以我方最终确认为条件（确认后才生效）"},
    {t:`このオファーは<ruby>即時<rt>そくじ</rt></ruby>に<ruby>確定<rt>かくてい</rt></ruby>します`, zh:"本报价立即确定生效"},
    {t:`このオファーは<ruby>無効<rt>むこう</rt></ruby>です`, zh:"本报价无效"}
  ],
  ans:0,
  optExp:[
    "正确。subject to our final confirmation＝以我方最终确认为条件（即“确认条件付”报价）。",
    "错误。带confirmation条件，并非立即确定。",
    "错误。句子说的是附条件，不是无效。"
  ],
  note:"subject to ～＝以～为条件。"
},
{
  id:"d9q8", day:9, topic:"贸易英语", type:"語群選択",
  q:`「freight prepaid」の<ruby>意味<rt>いみ</rt></ruby>はどれか。`,
  qzh:"“freight prepaid”的意思是哪一个？",
  opts:[
    {t:`<ruby>運賃<rt>うんちん</rt></ruby><ruby>前払<rt>まえばら</rt></ruby>い`, zh:"运费预付"},
    {t:`<ruby>運賃<rt>うんちん</rt></ruby><ruby>着払<rt>ちゃくばら</rt></ruby>い（freight collect）`, zh:"运费到付（freight collect）"},
    {t:`<ruby>保険料<rt>ほけんりょう</rt></ruby><ruby>込<rt>こ</rt></ruby>み`, zh:"含保险费"}
  ],
  ans:0,
  optExp:[
    "正确。freight prepaid＝运费预付（出口地已付）。",
    "错误。运费到付是freight collect，正相反。",
    "错误。freight指运费，与保险费无关。"
  ],
  note:"对比：freight prepaid（预付）↔ freight collect（到付）。"
},

/* ============ Day 10：通关·关税 ============ */
{
  id:"d10q1", day:10, topic:"通关·关税", type:"3択",
  q:`<ruby>輸入<rt>ゆにゅう</rt></ruby><ruby>者<rt>しゃ</rt></ruby>が<ruby>関税<rt>かんぜい</rt></ruby>・<ruby>消費税<rt>しょうひぜい</rt></ruby><ruby>等<rt>とう</rt></ruby>を<ruby>納付<rt>のうふ</rt></ruby>し、<ruby>貨物<rt>かもつ</rt></ruby>を<ruby>国内<rt>こくない</rt></ruby>に<ruby>引<rt>ひ</rt></ruby>き<ruby>取<rt>と</rt></ruby>れるようになる<ruby>税関<rt>ぜいかん</rt></ruby>の<ruby>処分<rt>しょぶん</rt></ruby>を<ruby>何<rt>なに</rt></ruby>というか。`,
  qzh:"进口商缴纳关税、消费税等后，可将货物提入国内的海关处分叫什么？",
  opts:[
    {t:`<ruby>輸入<rt>ゆにゅう</rt></ruby><ruby>許可<rt>きょか</rt></ruby>（I/P）`, zh:"进口许可（I/P）"},
    {t:`<ruby>輸出<rt>ゆしゅつ</rt></ruby><ruby>許可<rt>きょか</rt></ruby>（E/P）`, zh:"出口许可（E/P）"},
    {t:`<ruby>保税<rt>ほぜい</rt></ruby><ruby>運送<rt>うんそう</rt></ruby>`, zh:"保税运输"}
  ],
  ans:0,
  optExp:[
    "正确。完税后取得“输入许可（Import Permit）”，才能把货提进国内流通。",
    "错误。输出许可是出口方向的处分。",
    "错误。保税运输是外国货物在保税状态下的转运，不是提货许可。"
  ]
},
{
  id:"d10q2", day:10, topic:"通关·关税", type:"3択",
  q:`<ruby>関税<rt>かんぜい</rt></ruby><ruby>定率法<rt>ていりつほう</rt></ruby>で<ruby>定<rt>さだ</rt></ruby>められた、<ruby>最<rt>もっと</rt></ruby>も<ruby>基本<rt>きほん</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>税率<rt>ぜいりつ</rt></ruby>を<ruby>何<rt>なに</rt></ruby>というか。`,
  qzh:"由关税定率法规定的、最基本的税率叫什么？",
  opts:[
    {t:`<ruby>基本<rt>きほん</rt></ruby><ruby>税率<rt>ぜいりつ</rt></ruby>`, zh:"基本税率"},
    {t:`<ruby>協定<rt>きょうてい</rt></ruby><ruby>税率<rt>ぜいりつ</rt></ruby>`, zh:"协定税率"},
    {t:`<ruby>特恵<rt>とっけい</rt></ruby><ruby>税率<rt>ぜいりつ</rt></ruby>`, zh:"特惠税率"}
  ],
  ans:0,
  optExp:[
    "正确。基本税率是关税定率法规定的、长期适用的基础税率。",
    "错误。协定税率是基于条约（如WTO）对成员国适用的税率。",
    "错误。特惠税率是对发展中国家的优惠税率。"
  ],
  note:"税率适用顺序大致：特恵＞协定＞暂定＞基本（择低/择优适用）。"
},
{
  id:"d10q3", day:10, topic:"通关·关税", type:"3択",
  q:`<ruby>条約<rt>じょうやく</rt></ruby>にもとづき、WTO<ruby>加盟国<rt>かめいこく</rt></ruby><ruby>等<rt>とう</rt></ruby>に<ruby>適用<rt>てきよう</rt></ruby>される<ruby>税率<rt>ぜいりつ</rt></ruby>はどれか。`,
  qzh:"基于条约、对WTO成员国等适用的税率是哪一个？",
  opts:[
    {t:`<ruby>協定<rt>きょうてい</rt></ruby><ruby>税率<rt>ぜいりつ</rt></ruby>`, zh:"协定税率"},
    {t:`<ruby>基本<rt>きほん</rt></ruby><ruby>税率<rt>ぜいりつ</rt></ruby>`, zh:"基本税率"},
    {t:`<ruby>暫定<rt>ざんてい</rt></ruby><ruby>税率<rt>ぜいりつ</rt></ruby>`, zh:"暂定税率"}
  ],
  ans:0,
  optExp:[
    "正确。协定税率＝基于条约对协定国（WTO成员等）适用的税率。",
    "错误。基本税率是国内法规定的基础税率，非基于条约。",
    "错误。暂定税率是临时替代基本税率的国定税率。"
  ]
},
{
  id:"d10q4", day:10, topic:"通关·关税", type:"2択",
  q:`<ruby>協定<rt>きょうてい</rt></ruby><ruby>税率<rt>ぜいりつ</rt></ruby>が<ruby>国定<rt>こくてい</rt></ruby><ruby>税率<rt>ぜいりつ</rt></ruby>より<ruby>低<rt>ひく</rt></ruby>いときは、<ruby>原則<rt>げんそく</rt></ruby>として<ruby>協定<rt>きょうてい</rt></ruby><ruby>税率<rt>ぜいりつ</rt></ruby>が<ruby>適用<rt>てきよう</rt></ruby>される。`,
  qzh:"当协定税率低于国定税率时，原则上适用协定税率。对吗？",
  opts:[ {t:`<ruby>正<rt>ただ</rt></ruby>しい（○）`, zh:"正确（○）"}, {t:`<ruby>誤<rt>あやま</rt></ruby>り（×）`, zh:"错误（×）"} ],
  ans:0,
  optExp:[
    "正确。协定税率低于国定税率时，对协定国适用更低的协定税率。",
    "错误。择低适用是关税适用的基本思路，说法成立。"
  ]
},
{
  id:"d10q5", day:10, topic:"通关·关税", type:"3択",
  q:`<ruby>外国<rt>がいこく</rt></ruby><ruby>貨物<rt>かもつ</rt></ruby>を<ruby>関税<rt>かんぜい</rt></ruby><ruby>未納<rt>みのう</rt></ruby>のまま<ruby>蔵置<rt>ぞうち</rt></ruby>できる、<ruby>税関長<rt>ぜいかんちょう</rt></ruby>が<ruby>許可<rt>きょか</rt></ruby>した<ruby>場所<rt>ばしょ</rt></ruby>はどれか。`,
  qzh:"可在关税未缴状态下存放外国货物、由海关关长许可的场所是哪一个？",
  opts:[
    {t:`<ruby>保税<rt>ほぜい</rt></ruby><ruby>蔵置場<rt>ぞうちじょう</rt></ruby>`, zh:"保税仓库（保税蔵置场）"},
    {t:`CY（コンテナ・ヤード）`, zh:"CY（集装箱堆场）"},
    {t:`<ruby>上屋<rt>うわや</rt></ruby>`, zh:"码头仓库（上屋）"}
  ],
  ans:0,
  optExp:[
    "正确。保税蔵置场是保税地域之一，可在未纳税状态下蔵置外国货物。",
    "错误。CY是集装箱整箱交接场，不是以保税蔵置为目的。",
    "错误。上屋是码头临时存放处，非保税蔵置场。"
  ]
},
{
  id:"d10q6", day:10, topic:"通关·关税", type:"3択",
  q:`<ruby>輸入<rt>ゆにゅう</rt></ruby><ruby>貨物<rt>かもつ</rt></ruby>の<ruby>課税<rt>かぜい</rt></ruby><ruby>価格<rt>かかく</rt></ruby>（CIF<ruby>価格<rt>かかく</rt></ruby>）に<ruby>含<rt>ふく</rt></ruby>まれないものはどれか。`,
  qzh:"进口货物的完税价格（CIF价格）中，不包含的是哪一项？",
  opts:[
    {t:`<ruby>輸入<rt>ゆにゅう</rt></ruby><ruby>後<rt>ご</rt></ruby>の<ruby>国内<rt>こくない</rt></ruby><ruby>運送費<rt>うんそうひ</rt></ruby>`, zh:"进口后的国内运输费"},
    {t:`<ruby>輸入港<rt>ゆにゅうこう</rt></ruby>までの<ruby>海上<rt>かいじょう</rt></ruby><ruby>運賃<rt>うんちん</rt></ruby>`, zh:"到进口港的海运费"},
    {t:`<ruby>海上<rt>かいじょう</rt></ruby><ruby>保険料<rt>ほけんりょう</rt></ruby>`, zh:"海上保险费"}
  ],
  ans:0,
  optExp:[
    "正确。CIF价格算到进口港为止，进口后的国内运费不计入课税价格。",
    "错误。到进口港的海运费包含在CIF里。",
    "错误。海上保险费包含在CIF里。"
  ]
},
{
  id:"d10q7", day:10, topic:"通关·关税", type:"3択",
  q:`<ruby>特定<rt>とくてい</rt></ruby>の<ruby>品目<rt>ひんもく</rt></ruby>の<ruby>輸入<rt>ゆにゅう</rt></ruby>が<ruby>急増<rt>きゅうぞう</rt></ruby>し<ruby>国内<rt>こくない</rt></ruby><ruby>産業<rt>さんぎょう</rt></ruby>に<ruby>損害<rt>そんがい</rt></ruby>を<ruby>与<rt>あた</rt></ruby>えるとき、<ruby>一時<rt>いちじ</rt></ruby><ruby>的<rt>てき</rt></ruby>に<ruby>発動<rt>はつどう</rt></ruby>できる<ruby>緊急<rt>きんきゅう</rt></ruby><ruby>措置<rt>そち</rt></ruby>を<ruby>何<rt>なに</rt></ruby>というか。`,
  qzh:"当某品目进口激增、损害国内产业时，可临时启动的紧急措施叫什么？",
  opts:[
    {t:`セーフガード（<ruby>緊急<rt>きんきゅう</rt></ruby><ruby>輸入<rt>ゆにゅう</rt></ruby><ruby>制限<rt>せいげん</rt></ruby>）`, zh:"保障措施（紧急进口限制）"},
    {t:`ダンピング`, zh:"倾销"},
    {t:`<ruby>特恵<rt>とっけい</rt></ruby><ruby>関税<rt>かんぜい</rt></ruby>`, zh:"特惠关税"}
  ],
  ans:0,
  optExp:[
    "正确。Safeguard＝进口激增损害国内产业时的紧急进口限制。",
    "错误。倾销是以不当低价出口的行为，本身不是救济措施。",
    "错误。特惠关税是给途上国的优惠，与紧急限制相反。"
  ]
},
{
  id:"d10q8", day:10, topic:"通关·关税", type:"3択",
  q:`<ruby>輸入<rt>ゆにゅう</rt></ruby>（<ruby>納税<rt>のうぜい</rt></ruby>）<ruby>申告<rt>しんこく</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>うのは、<ruby>原則<rt>げんそく</rt></ruby>として<ruby>誰<rt>だれ</rt></ruby>か。`,
  qzh:"进行进口（纳税）申报的，原则上是谁？",
  opts:[
    {t:`<ruby>輸入者<rt>ゆにゅうしゃ</rt></ruby>（<ruby>通関<rt>つうかん</rt></ruby><ruby>業者<rt>ぎょうしゃ</rt></ruby>に<ruby>依頼<rt>いらい</rt></ruby>することが<ruby>多<rt>おお</rt></ruby>い）`, zh:"进口商（多委托报关行代办）"},
    {t:`<ruby>船会社<rt>ふながいしゃ</rt></ruby>`, zh:"船公司"},
    {t:`<ruby>輸出国<rt>ゆしゅつこく</rt></ruby>の<ruby>税関<rt>ぜいかん</rt></ruby>`, zh:"出口国海关"}
  ],
  ans:0,
  optExp:[
    "正确。申报纳税义务人是进口商本人，实务上常委托报关行（通関業者）代办。",
    "错误。船公司只负责运输，不做进口纳税申报。",
    "错误。进口申报向本国（进口国）海关进行，不是出口国海关。"
  ]
},
{
  id:"d10q9", day:10, topic:"通关·关税", type:"2択",
  q:`<ruby>従価税<rt>じゅうかぜい</rt></ruby>と<ruby>従量税<rt>じゅうりょうぜい</rt></ruby>を<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせた<ruby>関税<rt>かんぜい</rt></ruby>を「<ruby>混合税<rt>こんごうぜい</rt></ruby>（<ruby>複合税<rt>ふくごうぜい</rt></ruby>）」という。`,
  qzh:"把从价税和从量税组合起来的关税叫“混合税（复合税）”。对吗？",
  opts:[ {t:`<ruby>正<rt>ただ</rt></ruby>しい（○）`, zh:"正确（○）"}, {t:`<ruby>誤<rt>あやま</rt></ruby>り（×）`, zh:"错误（×）"} ],
  ans:0,
  optExp:[
    "正确。从价＋从量并用即混合税（复合税）。",
    "错误。两者并用确实称混合/复合税，说法成立。"
  ]
},

/* ============ Day 11：信用状·结算·为替 ============ */
{
  id:"d11q1", day:11, topic:"信用状·贸易金融", type:"3択",
  q:`<ruby>信用状<rt>しんようじょう</rt></ruby>を<ruby>使<rt>つか</rt></ruby>わず、<ruby>銀行<rt>ぎんこう</rt></ruby>が<ruby>船積<rt>ふなづみ</rt></ruby><ruby>書類<rt>しょるい</rt></ruby><ruby>付<rt>つ</rt></ruby>きの<ruby>手形<rt>てがた</rt></ruby>の<ruby>取立<rt>とりたて</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>決済<rt>けっさい</rt></ruby><ruby>方法<rt>ほうほう</rt></ruby>を<ruby>何<rt>なに</rt></ruby>というか。`,
  qzh:"不使用信用证、由银行办理带装船单据汇票托收的结算方式叫什么？",
  opts:[
    {t:`<ruby>荷為替<rt>にがわせ</rt></ruby><ruby>手形<rt>てがた</rt></ruby>の<ruby>取立<rt>とりたて</rt></ruby>（D/P・D/A）`, zh:"跟单托收（D/P・D/A）"},
    {t:`<ruby>信用状<rt>しんようじょう</rt></ruby><ruby>取引<rt>とりひき</rt></ruby>`, zh:"信用证交易"},
    {t:`<ruby>前払<rt>まえばら</rt></ruby><ruby>送金<rt>そうきん</rt></ruby>`, zh:"预付汇款"}
  ],
  ans:0,
  optExp:[
    "正确。无L/C时的跟单托收（collection），分D/P与D/A。",
    "错误。信用证交易有开证行的付款保证，与无L/C的托收不同。",
    "错误。预付汇款是直接汇款，不经汇票托收。"
  ]
},
{
  id:"d11q2", day:11, topic:"信用状·贸易金融", type:"3択",
  q:`D/P（<ruby>支払<rt>しはらい</rt></ruby><ruby>渡<rt>わた</rt></ruby>し）<ruby>条件<rt>じょうけん</rt></ruby>の<ruby>説明<rt>せつめい</rt></ruby>として<ruby>正<rt>ただ</rt></ruby>しいものはどれか。`,
  qzh:"关于D/P（付款交单）条件的说明，正确的是哪一项？",
  opts:[
    {t:`<ruby>輸入者<rt>ゆにゅうしゃ</rt></ruby>が<ruby>手形<rt>てがた</rt></ruby>を<ruby>支払<rt>しはら</rt></ruby>うのと<ruby>引<rt>ひ</rt></ruby>き<ruby>換<rt>か</rt></ruby>えに<ruby>船積<rt>ふなづみ</rt></ruby><ruby>書類<rt>しょるい</rt></ruby>を<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>る`, zh:"进口商付款的同时换取装船单据"},
    {t:`<ruby>手形<rt>てがた</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>ければ<ruby>書類<rt>しょるい</rt></ruby>を<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>れる`, zh:"承兑汇票即可取得单据"},
    {t:`<ruby>無条件<rt>むじょうけん</rt></ruby>で<ruby>書類<rt>しょるい</rt></ruby>が<ruby>渡<rt>わた</rt></ruby>される`, zh:"无条件交付单据"}
  ],
  ans:0,
  optExp:[
    "正确。D/P＝付款交单：付了款才给单据（凭单提货）。",
    "错误。承兑即交单的是D/A（承兑交单）。",
    "错误。托收都是有条件交单，不会无条件交付。"
  ],
  note:"D/P＝付款交单；D/A＝承兑交单（到期再付）。"
},
{
  id:"d11q3", day:11, topic:"信用状·贸易金融", type:"3択",
  q:`D/A（<ruby>引受<rt>ひきうけ</rt></ruby><ruby>渡<rt>わた</rt></ruby>し）<ruby>条件<rt>じょうけん</rt></ruby>で、<ruby>輸入者<rt>ゆにゅうしゃ</rt></ruby>が<ruby>船積<rt>ふなづみ</rt></ruby><ruby>書類<rt>しょるい</rt></ruby>を<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>れるのはどの<ruby>時点<rt>じてん</rt></ruby>か。`,
  qzh:"在D/A（承兑交单）条件下，进口商在什么时点可取得装船单据？",
  opts:[
    {t:`<ruby>期限付<rt>きげんつき</rt></ruby><ruby>手形<rt>てがた</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けた<ruby>時点<rt>じてん</rt></ruby>（<ruby>支払<rt>しはらい</rt></ruby>は<ruby>満期<rt>まんき</rt></ruby>）`, zh:"承兑远期汇票时（付款在到期日）"},
    {t:`<ruby>代金<rt>だいきん</rt></ruby>を<ruby>全額<rt>ぜんがく</rt></ruby><ruby>支払<rt>しはら</rt></ruby>った<ruby>時点<rt>じてん</rt></ruby>`, zh:"全额付款时"},
    {t:`<ruby>船積<rt>ふなづ</rt></ruby>みされる<ruby>前<rt>まえ</rt></ruby>`, zh:"装船之前"}
  ],
  ans:0,
  optExp:[
    "正确。D/A是承兑（承诺到期付款）即交单，实际付款在汇票到期日。",
    "错误。付款后交单的是D/P。",
    "错误。装船前不会交付单据。"
  ]
},
{
  id:"d11q4", day:11, topic:"信用状·贸易金融", type:"3択",
  q:`<ruby>信用状<rt>しんようじょう</rt></ruby><ruby>取引<rt>とりひき</rt></ruby>の<ruby>国際<rt>こくさい</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>統一<rt>とういつ</rt></ruby><ruby>規則<rt>きそく</rt></ruby>（<ruby>現行<rt>げんこう</rt></ruby>）の<ruby>略称<rt>りゃくしょう</rt></ruby>はどれか。`,
  qzh:"信用证交易的国际统一规则（现行）的简称是哪一个？",
  opts:[
    {t:`UCP600`, zh:"UCP600（跟单信用证统一惯例）"},
    {t:`インコタームズ2020`, zh:"Incoterms 2020"},
    {t:`ワシントン<ruby>条約<rt>じょうやく</rt></ruby>`, zh:"华盛顿公约"}
  ],
  ans:0,
  optExp:[
    "正确。UCP600是国际商会(ICC)的跟单信用证统一惯例（现行版）。",
    "错误。Incoterms 2020是贸易术语规则，不是信用证规则。",
    "错误。华盛顿公约是环境条约，与信用证无关。"
  ]
},
{
  id:"d11q5", day:11, topic:"信用状·贸易金融", type:"2択",
  q:`<ruby>信用状<rt>しんようじょう</rt></ruby>の「<ruby>独立<rt>どくりつ</rt></ruby><ruby>抽象性<rt>ちゅうしょうせい</rt></ruby>」とは、<ruby>信用状<rt>しんようじょう</rt></ruby><ruby>取引<rt>とりひき</rt></ruby>が<ruby>売買<rt>ばいばい</rt></ruby><ruby>契約<rt>けいやく</rt></ruby>とは<ruby>別個<rt>べっこ</rt></ruby>・<ruby>独立<rt>どくりつ</rt></ruby>であるという<ruby>原則<rt>げんそく</rt></ruby>である。`,
  qzh:"信用证的“独立抽象性”是指：信用证交易与买卖合同相互独立、彼此分离的原则。对吗？",
  opts:[ {t:`<ruby>正<rt>ただ</rt></ruby>しい（○）`, zh:"正确（○）"}, {t:`<ruby>誤<rt>あやま</rt></ruby>り（×）`, zh:"错误（×）"} ],
  ans:0,
  optExp:[
    "正确。L/C独立于基础买卖合同，银行只凭单据办事（独立抽象性原则）。",
    "错误。L/C与买卖合同相互独立正是该原则的含义。"
  ]
},
{
  id:"d11q6", day:11, topic:"外国为替", type:"3択",
  q:`<ruby>銀行<rt>ぎんこう</rt></ruby>が<ruby>当日<rt>とうじつ</rt></ruby>の<ruby>対顧客<rt>たいこきゃく</rt></ruby><ruby>相場<rt>そうば</rt></ruby>を<ruby>決<rt>き</rt></ruby>める<ruby>基準<rt>きじゅん</rt></ruby>となる<ruby>中心<rt>ちゅうしん</rt></ruby>レートを<ruby>何<rt>なに</rt></ruby>というか。`,
  qzh:"作为银行当日对客户汇率基准的中心汇率叫什么？",
  opts:[
    {t:`<ruby>仲値<rt>なかね</rt></ruby>（TTM）`, zh:"中间价（TTM）"},
    {t:`TTS（<ruby>電信<rt>でんしん</rt></ruby><ruby>売<rt>うり</rt></ruby><ruby>相場<rt>そうば</rt></ruby>）`, zh:"TTS（电汇卖出价）"},
    {t:`TTB（<ruby>電信<rt>でんしん</rt></ruby><ruby>買<rt>かい</rt></ruby><ruby>相場<rt>そうば</rt></ruby>）`, zh:"TTB（电汇买入价）"}
  ],
  ans:0,
  optExp:[
    "正确。仲值(TTM)是当日基准中心价，TTS/TTB在其上下加减手续费形成。",
    "错误。TTS是在仲值基础上加价的卖出价。",
    "错误。TTB是在仲值基础上减价的买入价。"
  ]
},
{
  id:"d11q7", day:11, topic:"外国为替", type:"3択",
  q:`<ruby>輸出者<rt>ゆしゅつしゃ</rt></ruby>が、<ruby>将来<rt>しょうらい</rt></ruby><ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>る<ruby>外貨<rt>がいか</rt></ruby><ruby>建<rt>だ</rt></ruby>て<ruby>代金<rt>だいきん</rt></ruby>の<ruby>円<rt>えん</rt></ruby><ruby>額<rt>がく</rt></ruby>を<ruby>今<rt>いま</rt></ruby>のうちに<ruby>固定<rt>こてい</rt></ruby>したいとき<ruby>使<rt>つか</rt></ruby>う<ruby>手段<rt>しゅだん</rt></ruby>はどれか。`,
  qzh:"出口商想现在就锁定将来收到的外币货款折合的日元金额时，使用的手段是哪一个？",
  opts:[
    {t:`<ruby>為替<rt>かわせ</rt></ruby><ruby>予約<rt>よやく</rt></ruby>（<ruby>先物<rt>さきもの</rt></ruby><ruby>取引<rt>とりひき</rt></ruby>）`, zh:"远期外汇预约（远期交易）"},
    {t:`<ruby>直物<rt>じきもの</rt></ruby><ruby>取引<rt>とりひき</rt></ruby>`, zh:"即期交易"},
    {t:`L/C の<ruby>開設<rt>かいせつ</rt></ruby>`, zh:"开立信用证"}
  ],
  ans:0,
  optExp:[
    "正确。用远期外汇预约锁定未来汇率，使日元金额提前确定。",
    "错误。即期(直物)是当下成交，锁不住未来汇率。",
    "错误。开L/C解决的是付款保证，不是锁定汇率。"
  ]
},
{
  id:"d11q8", day:11, topic:"信用状·贸易金融", type:"3択",
  q:`<ruby>銀行<rt>ぎんこう</rt></ruby>が<ruby>輸入者<rt>ゆにゅうしゃ</rt></ruby>に<ruby>支払<rt>しはらい</rt></ruby><ruby>猶予<rt>ゆうよ</rt></ruby>（<ruby>信用<rt>しんよう</rt></ruby>）を<ruby>与<rt>あた</rt></ruby>えるユーザンスを<ruby>何<rt>なに</rt></ruby>というか。`,
  qzh:"由银行给进口商提供付款宽限（授信）的usance叫什么？",
  opts:[
    {t:`バンカーズ・ユーザンス`, zh:"银行授信（Banker's Usance）"},
    {t:`シッパーズ・ユーザンス`, zh:"出口商授信（Shipper's Usance）"},
    {t:`<ruby>前払<rt>まえばら</rt></ruby><ruby>送金<rt>そうきん</rt></ruby>`, zh:"预付汇款"}
  ],
  ans:0,
  optExp:[
    "正确。由银行提供的支付宽限是Banker's Usance（银行授信）。",
    "错误。由出口商提供宽限的是Shipper's Usance。",
    "错误。预付汇款是先付款，与授信宽限相反。"
  ],
  note:"对比：Banker's（银行授信）↔ Shipper's（出口商授信）。"
},
{
  id:"d11q9", day:11, topic:"信用状·贸易金融", type:"3択",
  q:`<ruby>輸出者<rt>ゆしゅつしゃ</rt></ruby>が<ruby>荷為替<rt>にがわせ</rt></ruby><ruby>手形<rt>てがた</rt></ruby>を<ruby>銀行<rt>ぎんこう</rt></ruby>に<ruby>買<rt>か</rt></ruby>い<ruby>取<rt>と</rt></ruby>ってもらう<ruby>主<rt>おも</rt></ruby>な<ruby>利点<rt>りてん</rt></ruby>はどれか。`,
  qzh:"出口商让银行买入（议付）跟单汇票，主要好处是哪一项？",
  opts:[
    {t:`<ruby>船積<rt>ふなづ</rt></ruby>み<ruby>後<rt>ご</rt></ruby>すぐに<ruby>代金<rt>だいきん</rt></ruby>を<ruby>回収<rt>かいしゅう</rt></ruby>（<ruby>資金化<rt>しきんか</rt></ruby>）できる`, zh:"装船后能立即回收货款（变现）"},
    {t:`<ruby>関税<rt>かんぜい</rt></ruby>が<ruby>免除<rt>めんじょ</rt></ruby>される`, zh:"免除关税"},
    {t:`<ruby>運賃<rt>うんちん</rt></ruby>が<ruby>無料<rt>むりょう</rt></ruby>になる`, zh:"运费免费"}
  ],
  ans:0,
  optExp:[
    "正确。买取(议付)让出口商在船积后立刻拿到货款，加快资金周转。",
    "错误。买取与关税免除无关。",
    "错误。买取与运费高低无关。"
  ]
},

/* ============ Day 12：运送·书类·保险 ============ */
{
  id:"d12q1", day:12, topic:"贸易书类·运送", type:"3択",
  q:`<ruby>貨物<rt>かもつ</rt></ruby>を<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>った<ruby>旨<rt>むね</rt></ruby>を<ruby>記載<rt>きさい</rt></ruby>し、まだ<ruby>本船<rt>ほんせん</rt></ruby><ruby>積<rt>づ</rt></ruby>み<ruby>込<rt>こ</rt></ruby>み<ruby>前<rt>まえ</rt></ruby>の<ruby>段階<rt>だんかい</rt></ruby>で<ruby>発行<rt>はっこう</rt></ruby>されるB/Lを<ruby>何<rt>なに</rt></ruby>というか。`,
  qzh:"记载已收到货物、但尚在装船之前阶段签发的提单叫什么？",
  opts:[
    {t:`<ruby>受取<rt>うけとり</rt></ruby><ruby>船荷<rt>ふなに</rt></ruby><ruby>証券<rt>しょうけん</rt></ruby>（Received B/L）`, zh:"备运提单（Received B/L）"},
    {t:`<ruby>船積<rt>ふなづみ</rt></ruby><ruby>船荷<rt>ふなに</rt></ruby><ruby>証券<rt>しょうけん</rt></ruby>（Shipped B/L）`, zh:"已装船提单（Shipped B/L）"},
    {t:`<ruby>故障付<rt>こしょうつき</rt></ruby><ruby>船荷<rt>ふなに</rt></ruby><ruby>証券<rt>しょうけん</rt></ruby>`, zh:"不清洁提单"}
  ],
  ans:0,
  optExp:[
    "正确。收货后、装船前签发的是备运提单（Received B/L）。",
    "错误。已实际装船后签发的是已装船提单。",
    "错误。故障付（不清洁）指有瑕疵批注，是另一维度。"
  ]
},
{
  id:"d12q2", day:12, topic:"贸易书类·运送", type:"3択",
  q:`<ruby>実際<rt>じっさい</rt></ruby>に<ruby>本船<rt>ほんせん</rt></ruby>に<ruby>積<rt>つ</rt></ruby>み<ruby>込<rt>こ</rt></ruby>まれたことを<ruby>証<rt>しょう</rt></ruby>し、<ruby>信用状<rt>しんようじょう</rt></ruby><ruby>取引<rt>とりひき</rt></ruby>で<ruby>通常<rt>つうじょう</rt></ruby><ruby>要求<rt>ようきゅう</rt></ruby>されるB/Lはどれか。`,
  qzh:"证明已实际装上船、信用证交易通常要求的提单是哪一个？",
  opts:[
    {t:`<ruby>船積<rt>ふなづみ</rt></ruby><ruby>船荷<rt>ふなに</rt></ruby><ruby>証券<rt>しょうけん</rt></ruby>（Shipped / On Board B/L）`, zh:"已装船提单（Shipped/On Board B/L）"},
    {t:`<ruby>受取<rt>うけとり</rt></ruby><ruby>船荷<rt>ふなに</rt></ruby><ruby>証券<rt>しょうけん</rt></ruby>`, zh:"备运提单"},
    {t:`<ruby>倉荷<rt>くらに</rt></ruby><ruby>証券<rt>しょうけん</rt></ruby>`, zh:"仓单"}
  ],
  ans:0,
  optExp:[
    "正确。已装船提单证明货已上船，L/C通常要求On Board B/L。",
    "错误。备运提单只证明收货、未必已装船。",
    "错误。仓单是仓储凭证，非运输提单。"
  ]
},
{
  id:"d12q3", day:12, topic:"贸易书类·运送", type:"3択",
  q:`<ruby>荷受人<rt>にうけにん</rt></ruby><ruby>欄<rt>らん</rt></ruby>が「to order」<ruby>等<rt>など</rt></ruby>となっており、<ruby>裏書<rt>うらがき</rt></ruby>によって<ruby>譲渡<rt>じょうと</rt></ruby>できるB/Lを<ruby>何<rt>なに</rt></ruby>というか。`,
  qzh:"收货人栏写“to order”等、可通过背书转让的提单叫什么？",
  opts:[
    {t:`<ruby>指図式<rt>さしずしき</rt></ruby><ruby>船荷<rt>ふなに</rt></ruby><ruby>証券<rt>しょうけん</rt></ruby>（order B/L）`, zh:"指示式提单（order B/L）"},
    {t:`<ruby>記名式<rt>きめいしき</rt></ruby><ruby>船荷<rt>ふなに</rt></ruby><ruby>証券<rt>しょうけん</rt></ruby>`, zh:"记名提单"},
    {t:`<ruby>故障付<rt>こしょうつき</rt></ruby><ruby>船荷<rt>ふなに</rt></ruby><ruby>証券<rt>しょうけん</rt></ruby>`, zh:"不清洁提单"}
  ],
  ans:0,
  optExp:[
    "正确。指示式提单（to order）可凭背书转让，流通性强。",
    "错误。记名式提单指定收货人，原则上不可背书流通。",
    "错误。故障付指带瑕疵批注，与可否转让是另一回事。"
  ]
},
{
  id:"d12q4", day:12, topic:"贸易书类·运送", type:"3択",
  q:`<ruby>船<rt>ふね</rt></ruby>・<ruby>鉄道<rt>てつどう</rt></ruby>・トラック<ruby>等<rt>など</rt></ruby><ruby>複数<rt>ふくすう</rt></ruby>の<ruby>輸送<rt>ゆそう</rt></ruby><ruby>手段<rt>しゅだん</rt></ruby>を<ruby>通<rt>つう</rt></ruby>じた<ruby>全<rt>ぜん</rt></ruby><ruby>区間<rt>くかん</rt></ruby>をカバーする<ruby>運送<rt>うんそう</rt></ruby><ruby>証券<rt>しょうけん</rt></ruby>はどれか。`,
  qzh:"覆盖船、铁路、卡车等多种运输方式全程区间的运输单证是哪一个？",
  opts:[
    {t:`<ruby>複合<rt>ふくごう</rt></ruby><ruby>運送<rt>うんそう</rt></ruby><ruby>証券<rt>しょうけん</rt></ruby>（Combined Transport B/L）`, zh:"多式联运提单（Combined Transport B/L）"},
    {t:`<ruby>航空<rt>こうくう</rt></ruby><ruby>運送状<rt>うんそうじょう</rt></ruby>（AWB）`, zh:"航空运单（AWB）"},
    {t:`<ruby>保険<rt>ほけん</rt></ruby><ruby>証券<rt>しょうけん</rt></ruby>`, zh:"保险单"}
  ],
  ans:0,
  optExp:[
    "正确。多式联运提单覆盖多种运输方式的全程。",
    "错误。AWB只针对航空区段。",
    "错误。保险单是保险凭证，不是运输单证。"
  ]
},
{
  id:"d12q5", day:12, topic:"贸易保险", type:"2択",
  q:`<ruby>海上<rt>かいじょう</rt></ruby><ruby>保険<rt>ほけん</rt></ruby>では、<ruby>通常<rt>つうじょう</rt></ruby>CIF<ruby>価格<rt>かかく</rt></ruby>に<ruby>希望<rt>きぼう</rt></ruby><ruby>利益<rt>りえき</rt></ruby>10％を<ruby>加<rt>くわ</rt></ruby>えた110％で<ruby>付保<rt>ふほ</rt></ruby>する。`,
  qzh:"海上保险通常按CIF价格加上10%预期利润、即110%投保。对吗？",
  opts:[ {t:`<ruby>正<rt>ただ</rt></ruby>しい（○）`, zh:"正确（○）"}, {t:`<ruby>誤<rt>あやま</rt></ruby>り（×）`, zh:"错误（×）"} ],
  ans:0,
  optExp:[
    "正确。惯例按CIF×110%投保（含10%希望利润）。",
    "错误。110%（CIF+10%）是惯例保额，说法成立。"
  ]
},
{
  id:"d12q6", day:12, topic:"贸易保险", type:"3択",
  q:`<ruby>海上<rt>かいじょう</rt></ruby><ruby>保険<rt>ほけん</rt></ruby>で、<ruby>保険<rt>ほけん</rt></ruby>の<ruby>目的<rt>もくてき</rt></ruby>（<ruby>貨物<rt>かもつ</rt></ruby>）が<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>滅失<rt>めっしつ</rt></ruby>した<ruby>損害<rt>そんがい</rt></ruby>を<ruby>何<rt>なに</rt></ruby>というか。`,
  qzh:"海上保险中，保险标的（货物）全部灭失的损害叫什么？",
  opts:[
    {t:`<ruby>全損<rt>ぜんそん</rt></ruby>`, zh:"全损"},
    {t:`<ruby>分損<rt>ぶんそん</rt></ruby>`, zh:"部分损失（分损）"},
    {t:`<ruby>共同<rt>きょうどう</rt></ruby><ruby>海損<rt>かいそん</rt></ruby>`, zh:"共同海损"}
  ],
  ans:0,
  optExp:[
    "正确。货物全部灭失＝全损。",
    "错误。一部分受损是分损。",
    "错误。共同海损是为共同安全故意牺牲、由各方分担的特殊损害。"
  ]
},
{
  id:"d12q7", day:12, topic:"贸易保险", type:"3択",
  q:`<ruby>船<rt>ふね</rt></ruby>と<ruby>積荷<rt>つみに</rt></ruby>の<ruby>共同<rt>きょうどう</rt></ruby>の<ruby>危険<rt>きけん</rt></ruby>を<ruby>避<rt>さ</rt></ruby>けるため<ruby>故意<rt>こい</rt></ruby>に<ruby>一部<rt>いちぶ</rt></ruby>の<ruby>貨物<rt>かもつ</rt></ruby>を<ruby>犠牲<rt>ぎせい</rt></ruby>にした<ruby>損害<rt>そんがい</rt></ruby>を、<ruby>関係者<rt>かんけいしゃ</rt></ruby>で<ruby>分担<rt>ぶんたん</rt></ruby>する<ruby>制度<rt>せいど</rt></ruby>はどれか。`,
  qzh:"为避免船与货的共同危险而故意牺牲部分货物，所造成损害由各关系方分担的制度是哪一个？",
  opts:[
    {t:`<ruby>共同<rt>きょうどう</rt></ruby><ruby>海損<rt>かいそん</rt></ruby>（General Average）`, zh:"共同海损（General Average）"},
    {t:`<ruby>単独<rt>たんどく</rt></ruby><ruby>海損<rt>かいそん</rt></ruby>`, zh:"单独海损"},
    {t:`<ruby>全損<rt>ぜんそん</rt></ruby>`, zh:"全损"}
  ],
  ans:0,
  optExp:[
    "正确。为共同安全故意作出的牺牲与费用，由船货各方按比例分担＝共同海损。",
    "错误。单独海损由受损方自己承担，不分担。",
    "错误。全损是标的全部灭失，与共同分担无关。"
  ]
},
{
  id:"d12q8", day:12, topic:"贸易保险", type:"3択",
  q:`<ruby>貨物<rt>かもつ</rt></ruby>の<ruby>一部<rt>いちぶ</rt></ruby>だけに<ruby>生<rt>しょう</rt></ruby>じた<ruby>損害<rt>そんがい</rt></ruby>を<ruby>何<rt>なに</rt></ruby>というか。`,
  qzh:"只发生在货物一部分上的损害叫什么？",
  opts:[
    {t:`<ruby>分損<rt>ぶんそん</rt></ruby>`, zh:"部分损失（分损）"},
    {t:`<ruby>全損<rt>ぜんそん</rt></ruby>`, zh:"全损"},
    {t:`<ruby>免責<rt>めんせき</rt></ruby>`, zh:"免责"}
  ],
  ans:0,
  optExp:[
    "正确。一部分受损＝分损（部分损失）。",
    "错误。全损是全部灭失。",
    "错误。免责是保险人不赔的范围，不是损害类型。"
  ]
},
{
  id:"d12q9", day:12, topic:"贸易书类·运送", type:"3択",
  q:`<ruby>貨物<rt>かもつ</rt></ruby>の<ruby>荷印<rt>にじるし</rt></ruby>（ケースマーク）の<ruby>主<rt>おも</rt></ruby>な<ruby>役割<rt>やくわり</rt></ruby>はどれか。`,
  qzh:"货物的唛头（case mark）的主要作用是哪一项？",
  opts:[
    {t:`<ruby>他<rt>ほか</rt></ruby>の<ruby>貨物<rt>かもつ</rt></ruby>との<ruby>識別<rt>しきべつ</rt></ruby>や<ruby>取扱<rt>とりあつか</rt></ruby>い<ruby>表示<rt>ひょうじ</rt></ruby>のため`, zh:"用于与其他货物区分、标示搬运注意"},
    {t:`<ruby>関税<rt>かんぜい</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>するため`, zh:"为了计算关税"},
    {t:`<ruby>保険料<rt>ほけんりょう</rt></ruby>を<ruby>決<rt>き</rt></ruby>めるため`, zh:"为了确定保险费"}
  ],
  ans:0,
  optExp:[
    "正确。唛头用于识别货主、目的地及标示搬运/小心轻放等。",
    "错误。关税按品名和价格等计算，与唛头无关。",
    "错误。保险费按货值条件等确定，不靠唛头。"
  ]
},

/* ============ Day 13：贸易英语（英文和訳·语群） ============ */
{
  id:"d13q1", day:13, topic:"贸易英语", type:"英文和訳3択",
  q:`<ruby>次<rt>つぎ</rt></ruby>の<ruby>英文<rt>えいぶん</rt></ruby>の<ruby>意味<rt>いみ</rt></ruby>として<ruby>最<rt>もっと</rt></ruby>も<ruby>適切<rt>てきせつ</rt></ruby>なものはどれか。「We look forward to your early reply.」`,
  qzh:"下列英文最贴切的意思是哪一项？「We look forward to your early reply.」",
  opts:[
    {t:`<ruby>早<rt>はや</rt></ruby>めのお<ruby>返事<rt>へんじ</rt></ruby>をお<ruby>待<rt>ま</rt></ruby>ちしております`, zh:"期待您尽早回复"},
    {t:`<ruby>返事<rt>へんじ</rt></ruby>は<ruby>不要<rt>ふよう</rt></ruby>です`, zh:"无需回复"},
    {t:`<ruby>注文<rt>ちゅうもん</rt></ruby>を<ruby>取<rt>と</rt></ruby>り<ruby>消<rt>け</rt></ruby>します`, zh:"取消订单"}
  ],
  ans:0,
  optExp:[
    "正确。look forward to＝期待；early reply＝尽早回复。",
    "错误。句意是期待回复，不是不要回复。",
    "错误。句中没有取消订单之意。"
  ]
},
{
  id:"d13q2", day:13, topic:"贸易英语", type:"英文和訳3択",
  q:`「Shipment will be made in three equal monthly installments.」の<ruby>意味<rt>いみ</rt></ruby>はどれか。`,
  qzh:"「Shipment will be made in three equal monthly installments.」的意思是哪一项？",
  opts:[
    {t:`<ruby>毎月<rt>まいつき</rt></ruby><ruby>均等<rt>きんとう</rt></ruby>に3<ruby>回<rt>かい</rt></ruby>に<ruby>分<rt>わ</rt></ruby>けて<ruby>船積<rt>ふなづ</rt></ruby>みします`, zh:"按每月均等分3批装运"},
    {t:`3<ruby>年<rt>ねん</rt></ruby><ruby>分<rt>ぶん</rt></ruby>をまとめて<ruby>船積<rt>ふなづ</rt></ruby>みします`, zh:"把3年的量一次装运"},
    {t:`<ruby>船積<rt>ふなづ</rt></ruby>みはできません`, zh:"无法装运"}
  ],
  ans:0,
  optExp:[
    "正确。in three equal monthly installments＝分3次、每月均等（分批装运）。",
    "错误。installment是“分期/分批”，不是一次全部。",
    "错误。句子是肯定将分批装运。"
  ],
  note:"installment＝分批/分期；partial shipment＝分割船积。"
},
{
  id:"d13q3", day:13, topic:"贸易英语", type:"英文和訳3択",
  q:`「The L/C should reach us at least 15 days before shipment.」の<ruby>意味<rt>いみ</rt></ruby>はどれか。`,
  qzh:"「The L/C should reach us at least 15 days before shipment.」的意思是哪一项？",
  opts:[
    {t:`<ruby>信用状<rt>しんようじょう</rt></ruby>は<ruby>船積<rt>ふなづ</rt></ruby>みの<ruby>遅<rt>おそ</rt></ruby>くとも15<ruby>日<rt>にち</rt></ruby><ruby>前<rt>まえ</rt></ruby>までに<ruby>当方<rt>とうほう</rt></ruby>へ<ruby>届<rt>とど</rt></ruby>くべきです`, zh:"信用证应在装运前至少15天送达我方"},
    {t:`<ruby>信用状<rt>しんようじょう</rt></ruby>は<ruby>船積<rt>ふなづ</rt></ruby>みの15<ruby>日<rt>にち</rt></ruby><ruby>後<rt>ご</rt></ruby>に<ruby>届<rt>とど</rt></ruby>けばよい`, zh:"信用证在装运后15天送达即可"},
    {t:`<ruby>信用状<rt>しんようじょう</rt></ruby>は<ruby>不要<rt>ふよう</rt></ruby>です`, zh:"不需要信用证"}
  ],
  ans:0,
  optExp:[
    "正确。at least 15 days before shipment＝装运前至少15天（之前送达）。",
    "错误。是“before（之前）”不是“after（之后）”。",
    "错误。句子要求送达L/C，并非不需要。"
  ]
},
{
  id:"d13q4", day:13, topic:"贸易英语", type:"英文和訳3択",
  q:`「Please quote us your best CIF Yokohama price.」の<ruby>意味<rt>いみ</rt></ruby>はどれか。`,
  qzh:"「Please quote us your best CIF Yokohama price.」的意思是哪一项？",
  opts:[
    {t:`<ruby>横浜<rt>よこはま</rt></ruby>までのCIFの<ruby>最良<rt>さいりょう</rt></ruby><ruby>価格<rt>かかく</rt></ruby>をお<ruby>見積<rt>みつ</rt></ruby>もりください`, zh:"请报横滨CIF的最优价格"},
    {t:`<ruby>横浜<rt>よこはま</rt></ruby>のFOB<ruby>価格<rt>かかく</rt></ruby>は<ruby>不要<rt>ふよう</rt></ruby>です`, zh:"不需要横滨的FOB价"},
    {t:`<ruby>代金<rt>だいきん</rt></ruby>を<ruby>支払<rt>しはら</rt></ruby>いました`, zh:"已经付款"}
  ],
  ans:0,
  optExp:[
    "正确。quote＝报价；best CIF Yokohama price＝到横滨CIF的最优价格。",
    "错误。句子要的是CIF报价，不是否定FOB。",
    "错误。句子是请求报价，不是付款。"
  ]
},
{
  id:"d13q5", day:13, topic:"贸易英语", type:"語群選択",
  q:`「unit price」の<ruby>意味<rt>いみ</rt></ruby>はどれか。`,
  qzh:"“unit price”的意思是哪一个？",
  opts:[
    {t:`<ruby>単価<rt>たんか</rt></ruby>`, zh:"单价"},
    {t:`<ruby>総額<rt>そうがく</rt></ruby>`, zh:"总额"},
    {t:`<ruby>数量<rt>すうりょう</rt></ruby>`, zh:"数量"}
  ],
  ans:0,
  optExp:[
    "正确。unit price＝单价（每单位的价格）。",
    "错误。总额是total amount。",
    "错误。数量是quantity。"
  ]
},
{
  id:"d13q6", day:13, topic:"贸易英语", type:"語群選択",
  q:`「time of shipment」の<ruby>意味<rt>いみ</rt></ruby>はどれか。`,
  qzh:"“time of shipment”的意思是哪一个？",
  opts:[
    {t:`<ruby>船積<rt>ふなづみ</rt></ruby><ruby>期日<rt>きじつ</rt></ruby>（<ruby>時期<rt>じき</rt></ruby>）`, zh:"装运期（船期）"},
    {t:`<ruby>支払<rt>しはらい</rt></ruby><ruby>期日<rt>きじつ</rt></ruby>`, zh:"付款期日"},
    {t:`<ruby>発行<rt>はっこう</rt></ruby><ruby>日<rt>び</rt></ruby>`, zh:"签发日"}
  ],
  ans:0,
  optExp:[
    "正确。time of shipment＝装运时期/装运期。",
    "错误。付款期日是time/date of payment。",
    "错误。签发日是date of issue。"
  ]
},
{
  id:"d13q7", day:13, topic:"贸易英语", type:"語群選択",
  q:`<ruby>書類<rt>しょるい</rt></ruby><ruby>作成<rt>さくせい</rt></ruby>でよく<ruby>使<rt>つか</rt></ruby>う「in duplicate」の<ruby>意味<rt>いみ</rt></ruby>はどれか。`,
  qzh:"制单中常用的“in duplicate”意思是哪一个？",
  opts:[
    {t:`2<ruby>通<rt>つう</rt></ruby>（<ruby>正<rt>せい</rt></ruby>・<ruby>副<rt>ふく</rt></ruby>2<ruby>部<rt>ぶ</rt></ruby>）で`, zh:"一式两份（正副2份）"},
    {t:`<ruby>至急<rt>しきゅう</rt></ruby>で`, zh:"加急"},
    {t:`<ruby>無料<rt>むりょう</rt></ruby>で`, zh:"免费"}
  ],
  ans:0,
  optExp:[
    "正确。in duplicate＝一式两份。（in triplicate＝一式三份）",
    "错误。加急是urgent / immediately。",
    "错误。免费是free of charge。"
  ],
  note:"duplicate＝2份，triplicate＝3份。"
},
{
  id:"d13q8", day:13, topic:"贸易英语", type:"英文和訳3択",
  q:`「We have drawn a draft on you at 60 days after sight.」の<ruby>意味<rt>いみ</rt></ruby>はどれか。`,
  qzh:"「We have drawn a draft on you at 60 days after sight.」的意思是哪一项？",
  opts:[
    {t:`<ruby>一覧後<rt>いちらんご</rt></ruby>60<ruby>日<rt>にち</rt></ruby><ruby>払<rt>ばら</rt></ruby>いの<ruby>手形<rt>てがた</rt></ruby>をあなた<ruby>宛<rt>あ</rt></ruby>てに<ruby>振<rt>ふ</rt></ruby>り<ruby>出<rt>だ</rt></ruby>しました`, zh:"已向您开出见票后60天付款的汇票"},
    {t:`60<ruby>日前<rt>にちまえ</rt></ruby>に<ruby>代金<rt>だいきん</rt></ruby>を<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>りました`, zh:"60天前已收款"},
    {t:`<ruby>手形<rt>てがた</rt></ruby>を<ruby>取<rt>と</rt></ruby>り<ruby>消<rt>け</rt></ruby>しました`, zh:"已撤销汇票"}
  ],
  ans:0,
  optExp:[
    "正确。draw a draft on you＝向你开出汇票；60 days after sight＝见票后60天付（远期/期限付手形）。",
    "错误。句子是开出远期汇票，不是已收款。",
    "错误。句中没有撤销之意。"
  ],
  note:"at sight＝见票即付；at 60 days after sight＝见票后60天付。"
},
{
  id:"d13q9", day:13, topic:"贸易英语", type:"語群選択",
  q:`「freight collect」の<ruby>意味<rt>いみ</rt></ruby>はどれか。`,
  qzh:"“freight collect”的意思是哪一个？",
  opts:[
    {t:`<ruby>運賃<rt>うんちん</rt></ruby><ruby>着払<rt>ちゃくばら</rt></ruby>い`, zh:"运费到付"},
    {t:`<ruby>運賃<rt>うんちん</rt></ruby><ruby>前払<rt>まえばら</rt></ruby>い`, zh:"运费预付"},
    {t:`<ruby>保険料<rt>ほけんりょう</rt></ruby><ruby>込<rt>こ</rt></ruby>み`, zh:"含保险费"}
  ],
  ans:0,
  optExp:[
    "正确。freight collect＝运费到付（由收货人在目的地支付）。",
    "错误。运费预付是freight prepaid，正相反。",
    "错误。freight指运费，与保险费无关。"
  ],
  note:"对比：freight collect（到付）↔ freight prepaid（预付）。"
}
];

if (typeof module !== 'undefined') { module.exports = QUESTIONS; }
