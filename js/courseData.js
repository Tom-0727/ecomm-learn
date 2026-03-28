/**
 * courseData.js
 * 中国电商完整业务链路 — 专业课程内容库
 * 覆盖从需求洞察到复购留存的10大模块
 */

const COURSE_MODULES = [
  // ─────────────────────────────────────────────────────────────────────────
  // 模块 1
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "消费者需求洞察与市场分析",
    icon: "🔍",
    color: "#2563eb",
    summary: "读懂市场是电商第一步。本模块教你用数据工具识别真实需求、量化市场机会、定位竞争格局，为选品与定位奠定决策基础。",
    estimatedMinutes: 45,
    sections: [
      {
        title: "1.1 需求的三个维度",
        content: `
<h3>功能性需求、情感性需求、社会性需求</h3>
<p>消费者购买行为驱动力可分三层，理解三层结构是产品定位和内容策略的基础：</p>

<div class="info-card">
  <div class="card-row">
    <span class="tag tag-blue">功能性需求</span>
    <span>产品解决的实际问题。例：防水登山鞋 → 需求是"爬山不湿脚"。这层需求决定品类归属。</span>
  </div>
  <div class="card-row">
    <span class="tag tag-green">情感性需求</span>
    <span>购买带来的感受和体验。例：同款登山鞋 → "穿上它我更专业、更有归属感"。情感性需求决定溢价空间。</span>
  </div>
  <div class="card-row">
    <span class="tag tag-amber">社会性需求</span>
    <span>他人眼中的自我表达。例：购买某品牌户外装备 → "彰显生活方式"。社会性需求决定口碑传播力。</span>
  </div>
</div>

<p class="callout">💡 <strong>决策意义</strong>：主图和标题打功能性需求；详情页故事打情感性需求；KOL种草和UGC打社会性需求。三层缺一不可，但优先级因品类而异。</p>

<h3>需求强度分类</h3>
<ul>
  <li><strong>刚需高频</strong>（如卫生纸、食品）：竞争激烈、价格敏感，依赖规模和供应链效率</li>
  <li><strong>刚需低频</strong>（如家电、床垫）：客单价高、决策周期长，依赖信任背书和详情转化</li>
  <li><strong>弹性高频</strong>（如服装、零食）：受季节/趋势驱动，依赖内容运营和爆款打造</li>
  <li><strong>弹性低频</strong>（如礼品、奢侈品）：场景驱动，依赖节点营销和仪式感塑造</li>
</ul>
`
      },
      {
        title: "1.2 数据工具与需求挖掘",
        content: `
<h3>核心数据工具矩阵</h3>
<table class="data-table">
  <thead><tr><th>工具</th><th>平台</th><th>核心功能</th><th>适用场景</th></tr></thead>
  <tbody>
    <tr><td>生意参谋</td><td>淘宝/天猫</td><td>搜索词分析、类目数据、竞品监控</td><td>阿里系选品决策</td></tr>
    <tr><td>京东商智</td><td>京东</td><td>品类趋势、品牌市占、价格带分布</td><td>京东系竞争分析</td></tr>
    <tr><td>蝉妈妈/飞瓜数据</td><td>抖音/快手</td><td>爆品榜、达人带货、直播数据</td><td>内容电商选品</td></tr>
    <tr><td>小红书搜索</td><td>小红书</td><td>笔记趋势、话题热度、种草潜力</td><td>新品潜力预判</td></tr>
    <tr><td>百度指数</td><td>全网</td><td>搜索量趋势、人群画像</td><td>市场教育程度判断</td></tr>
    <tr><td>1688市场</td><td>供给侧</td><td>爆品趋势、供应商报价</td><td>反推需求端机会</td></tr>
  </tbody>
</table>

<h3>搜索需求量化方法</h3>
<p>在生意参谋"市场行情"中，核心指标解读：</p>
<ul>
  <li><strong>搜索人气</strong>：过去30天搜索该词的独立访客数。<em>基准参考：细分词 &gt;5万/月有基础市场</em></li>
  <li><strong>搜索热度趋势</strong>：同比增长率。<em>&gt;30%增长视为上升趋势品类</em></li>
  <li><strong>在线商品数</strong>：供给侧竞争激烈程度</li>
  <li><strong>支付转化率</strong>：类目整体购买意愿。<em>衣物类3-5%，日用品5-8%，食品8-12%</em></li>
</ul>

<p class="callout">⚠️ <strong>常见误区</strong>：搜索量高≠机会大。需同时看"搜索人气/在线商品数"比值（供需比），比值高说明供不应求，才是真正机会。</p>

<h3>趋势识别方法论</h3>
<p><strong>STEP框架</strong>判断趋势成熟度：</p>
<ul>
  <li><strong>S</strong>earch（搜索）：百度/淘宝搜索量是否持续增长</li>
  <li><strong>T</strong>alk（讨论）：小红书/微博话题量是否爆发</li>
  <li><strong>E</strong>xport（出海）：1688出口订单量是否增加（倒推趋势提前感知）</li>
  <li><strong>P</strong>urchase（购买）：电商GMV数据是否跟上讨论量</li>
</ul>
`
      },
      {
        title: "1.3 竞品分析方法论",
        content: `
<h3>竞品分析四象限</h3>
<p>避免陷入"把所有竞品都分析一遍"的无效勤奋，聚焦高价值区间：</p>

<div class="quadrant">
  <div class="q-item q-high">
    <strong>直接竞品（同品类同价格带）</strong><br>
    分析重点：主图CTR策略、标题关键词、评价核心卖点、定价策略
  </div>
  <div class="q-item q-med">
    <strong>间接竞品（同需求不同品类）</strong><br>
    分析重点：用户购买理由、替代场景、差异化机会
  </div>
  <div class="q-item q-low">
    <strong>标杆品牌（市场前3）</strong><br>
    分析重点：供应链优势、品牌护城河、无法复制的资源
  </div>
  <div class="q-item q-obs">
    <strong>新兴挑战者（近6个月快速增长）</strong><br>
    分析重点：增长逻辑、创新点、是否代表新趋势
  </div>
</div>

<h3>竞品数据采集清单</h3>
<ul>
  <li>月销量与销售额（生意参谋/蝉妈妈均可查）</li>
  <li>价格带与SKU结构</li>
  <li>评价数量与好评率（重点看差评找痛点）</li>
  <li>主图/视频风格</li>
  <li>付费推广关键词（直通车词报告）</li>
  <li>店铺粉丝数与粉丝增速</li>
</ul>

<h3>差评挖金法</h3>
<p>竞品差评是产品改进的最高价值信息源。具体操作：</p>
<ol>
  <li>筛选竞品评价中1-3星评价</li>
  <li>提取高频痛点词（如"线头多"、"色差大"、"物流慢"）</li>
  <li>判断痛点是产品固有缺陷还是可改善的体验问题</li>
  <li>可改善的痛点即是你的差异化机会</li>
</ol>
`
      },
      {
        title: "1.4 关键指标与决策规则",
        content: `
<h3>需求洞察阶段核心指标</h3>
<table class="data-table">
  <thead><tr><th>指标</th><th>含义</th><th>健康基准</th><th>决策用途</th></tr></thead>
  <tbody>
    <tr><td>类目搜索人气</td><td>自然搜索需求量</td><td>细分词&gt;5万/月</td><td>判断市场基础规模</td></tr>
    <tr><td>搜索热度YoY</td><td>同比增长率</td><td>&gt;20%视为增长品类</td><td>判断趋势方向</td></tr>
    <tr><td>供需比</td><td>搜索人气/在线商品数</td><td>&gt;0.3有机会</td><td>判断竞争空间</td></tr>
    <tr><td>竞争集中度CR3</td><td>前三名市占率之和</td><td>&lt;40%为分散市场</td><td>判断新入局难度</td></tr>
    <tr><td>价格带分布</td><td>各价格段销售额占比</td><td>-</td><td>寻找价格空白区间</td></tr>
  </tbody>
</table>

<p class="callout">🎯 <strong>入局决策规则</strong>：搜索人气&gt;10万 + 供需比&gt;0.2 + CR3&lt;50% + 自身有差异化 → 值得入局。四个条件缺一个，难度倍增。</p>

<h3>平台差异：哪个平台的需求数据更可信？</h3>
<ul>
  <li><strong>淘宝/天猫</strong>：最全面的搜索意图数据，但存在刷单噪音，参考趋势方向而非绝对数值</li>
  <li><strong>京东</strong>：3C/家电/图书类数据最权威，客单价高、决策理性</li>
  <li><strong>抖音/快手</strong>：冲动消费型数据，爆品起量快但持续性弱，要看"长尾留存转化"</li>
  <li><strong>小红书</strong>：代表新中产/Z世代的趋势前沿，领先淘宝主流消费6-12个月</li>
  <li><strong>拼多多</strong>：下沉市场真实需求，价格敏感度最高，量大利薄</li>
</ul>
`
      }
    ],
    keyMetrics: [
      { name: "搜索人气", benchmark: "细分词 >5万/月", meaning: "市场基础规模" },
      { name: "供需比", benchmark: ">0.3", meaning: "竞争空间" },
      { name: "CR3", benchmark: "<40%", meaning: "市场集中度" },
      { name: "搜索热度YoY", benchmark: ">20%", meaning: "趋势方向" }
    ],
    pitfalls: [
      "搜索量高但CR3>70%，说明强者已固化市场，新入局成本极高",
      "只看淘宝数据，忽视抖音内容电商带来的新兴需求",
      "把竞品全部月销量加总误认为是市场规模（实际市场大10-20倍）",
      "忽视差评分析，错失真正的产品改进机会"
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 模块 2
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: "选品策略与商品开发",
    icon: "🎯",
    color: "#7c3aed",
    summary: "选品是电商成败的最关键决策。本模块系统讲解选品逻辑框架、差异化定位方法、各平台选品特性，以及产品生命周期管理。",
    estimatedMinutes: 50,
    sections: [
      {
        title: "2.1 选品黄金公式",
        content: `
<h3>选品决策模型：市场空间 × 竞争格局 × 供应能力</h3>
<p>好的选品需要三个维度同时满足，任何一个维度低分都会导致项目失败：</p>

<div class="formula-block">
  <span class="formula">选品得分 = 市场空间(M) × 竞争格局(C) × 供应能力(S)</span>
</div>

<p><strong>市场空间评分（M）</strong></p>
<ul>
  <li>类目年增速 &gt;30%：5分</li>
  <li>类目年增速 10-30%：3分</li>
  <li>类目年增速 0-10%（成熟市场）：2分</li>
  <li>类目萎缩：0分</li>
</ul>

<p><strong>竞争格局评分（C）</strong></p>
<ul>
  <li>CR3 &lt;30%（高度分散）：5分</li>
  <li>CR3 30-50%（中度竞争）：3分</li>
  <li>CR3 50-70%（寡头市场）：2分</li>
  <li>CR3 &gt;70%（垄断市场）：1分</li>
</ul>

<p><strong>供应能力评分（S）</strong></p>
<ul>
  <li>自有工厂/独家货源：5分</li>
  <li>一级批发商/OEM能力：4分</li>
  <li>1688普通采购：2分</li>
  <li>需要跨境采购：1分</li>
</ul>

<p class="callout">🎯 总分 &gt;30 是优质赛道，15-30 需谨慎评估，&lt;15 建议放弃。</p>

<h3>选品的三个时机</h3>
<table class="data-table">
  <thead><tr><th>时机</th><th>特征</th><th>机会</th><th>风险</th></tr></thead>
  <tbody>
    <tr><td>🌱 趋势期（0-1年）</td><td>搜索量月环比&gt;20%增长，但市场规模小</td><td>先入优势，建立品牌心智</td><td>市场可能不成立，教育成本高</td></tr>
    <tr><td>🚀 成长期（1-3年）</td><td>月销量快速增长，竞争者蜂拥进入</td><td>规模最快增长期，爆单最容易</td><td>竞争加剧，利润下滑</td></tr>
    <tr><td>🏆 成熟期（3年+）</td><td>市场规模大但增速放缓，龙头已形成</td><td>稳定利润，但需要差异化</td><td>价格战激烈，需要品牌壁垒</td></tr>
  </tbody>
</table>
`
      },
      {
        title: "2.2 差异化定位六维模型",
        content: `
<h3>六个差异化维度</h3>
<p>同质化是中国电商的常态，差异化是生存的必要条件：</p>

<div class="info-card">
  <div class="card-row"><span class="tag tag-blue">① 价格带差异化</span><span>找到竞品价格分布的空白区。示例：全棉T恤市场集中在30-80元，可以做15-25元超低价走量，或120-200元打品质溢价。</span></div>
  <div class="card-row"><span class="tag tag-green">② 功能差异化</span><span>增加竞品没有的核心功能。示例：普通雨伞 → 超轻折叠+防晒二合一。功能差异化需要有供应链支撑。</span></div>
  <div class="card-row"><span class="tag tag-purple">③ 人群差异化</span><span>针对被忽视的细分人群。示例：运动袜市场 → 专门针对糖尿病患者宽口袜（避免血液循环问题）。</span></div>
  <div class="card-row"><span class="tag tag-amber">④ 场景差异化</span><span>针对特定使用场景优化产品。示例：普通砧板 → 露营用便携折叠砧板。</span></div>
  <div class="card-row"><span class="tag tag-red">⑤ 设计/颜值差异化</span><span>视觉审美升级。示例：五金工具 → ins风彩色系列，吸引女性用户。</span></div>
  <div class="card-row"><span class="tag tag-teal">⑥ 服务差异化</span><span>超预期的售后和体验。示例：床垫 → 100晚免费试睡退货，消除高客单价决策顾虑。</span></div>
</div>

<h3>差异化可持续性评估</h3>
<p>差异化的核心问题：<strong>竞品多久能复制？</strong></p>
<ul>
  <li>价格差异化：最易复制（1-3个月）→ 持续性最弱</li>
  <li>功能差异化：专利保护则强，无专利1-6个月被复制</li>
  <li>人群差异化：中等，竞品需要重新建立用户认知</li>
  <li>品牌差异化：最难复制（2-5年积累）→ 护城河最宽</li>
</ul>
`
      },
      {
        title: "2.3 各平台选品逻辑差异",
        content: `
<h3>六大平台选品逻辑对比</h3>
<table class="data-table">
  <thead><tr><th>平台</th><th>用户心智</th><th>适合品类</th><th>选品关键</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>淘宝</strong></td>
      <td>搜索购物、比价、长尾品类</td>
      <td>个性化/小众/白牌</td>
      <td>关键词搜索量大、差异化卖点清晰</td>
    </tr>
    <tr>
      <td><strong>天猫</strong></td>
      <td>品牌背书、品质消费</td>
      <td>品牌商品、高客单</td>
      <td>需要品牌授权或自有品牌，客单价≥80元</td>
    </tr>
    <tr>
      <td><strong>京东</strong></td>
      <td>品质、正品、快递</td>
      <td>3C、家电、图书、酒类</td>
      <td>有品牌、支持自营或POP、物流有优势</td>
    </tr>
    <tr>
      <td><strong>拼多多</strong></td>
      <td>极致低价、团购社交</td>
      <td>农产品、日用品、白牌家电</td>
      <td>供应链极致成本控制，白牌可接受，价格是第一位</td>
    </tr>
    <tr>
      <td><strong>抖音</strong></td>
      <td>内容驱动冲动购买</td>
      <td>食品、美妆、服装、新奇特</td>
      <td>有故事性、视觉冲击力强、价格锚点清晰（"原价xx，今天xx"）</td>
    </tr>
    <tr>
      <td><strong>小红书</strong></td>
      <td>种草、生活方式、信任背书</td>
      <td>美妆、护肤、家居、轻奢</td>
      <td>颜值高、有生活方式叙事、适合种草导购，非直接转化</td>
    </tr>
  </tbody>
</table>

<h3>跨平台选品矩阵策略</h3>
<p>成熟品牌的多平台布局：</p>
<ul>
  <li><strong>小红书</strong>：种草新品，测试用户反应和关键词</li>
  <li><strong>抖音</strong>：爆量，用达人/直播快速放大销售规模</li>
  <li><strong>淘宝/天猫</strong>：承接搜索流量，建立品牌阵地，沉淀复购</li>
  <li><strong>京东</strong>：覆盖追求品质/正品的用户群</li>
  <li><strong>拼多多</strong>：清库存、覆盖价格敏感用户、扩大规模</li>
</ul>
`
      },
      {
        title: "2.4 产品生命周期管理",
        content: `
<h3>电商产品生命周期四阶段</h3>
<p>每个阶段的运营策略完全不同，混淆阶段是最常见的运营失误：</p>

<table class="data-table">
  <thead><tr><th>阶段</th><th>特征</th><th>运营重点</th><th>投放策略</th></tr></thead>
  <tbody>
    <tr>
      <td>🌱 <strong>新品期</strong><br>（0-30天）</td>
      <td>销量0、无评价、权重低</td>
      <td>快速积累基础销量和评价，突破平台新品保护期</td>
      <td>低ROI容忍，精准词投放，换取展现机会</td>
    </tr>
    <tr>
      <td>📈 <strong>成长期</strong><br>（1-3个月）</td>
      <td>转化开始正向，开始自然排名</td>
      <td>扩大关键词覆盖，提升主图CTR，优化详情转化</td>
      <td>ROI要求开始提高，投放量加大</td>
    </tr>
    <tr>
      <td>🏆 <strong>成熟期</strong><br>（3-12个月）</td>
      <td>稳定自然流量，销量稳定</td>
      <td>维持权重，防守竞争，拓展SKU，开始私域沉淀</td>
      <td>ROI优先，精细化出价</td>
    </tr>
    <tr>
      <td>📉 <strong>衰退期</strong></td>
      <td>自然流量下滑，竞品替代</td>
      <td>降价清库存，或改款续命，评估是否押注新品迭代</td>
      <td>停止或压缩付费投放</td>
    </tr>
  </tbody>
</table>

<h3>爆款打造节奏（新品期关键）</h3>
<ol>
  <li><strong>Day 1-7</strong>：控量发布，优先积累5星评价（可通过老客户返购、达人置换）</li>
  <li><strong>Day 8-15</strong>：小额直通车精准词测试，观察CTR和转化率</li>
  <li><strong>Day 16-30</strong>：若CTR&gt;3%、转化率&gt;均值，加大投放；否则优化主图或降价</li>
  <li><strong>Day 30+</strong>：申报平台活动（聚划算/618预热等），借助平台流量放量</li>
</ol>
`
      }
    ],
    keyMetrics: [
      { name: "选品得分", benchmark: ">30分优质赛道", meaning: "三维综合评估" },
      { name: "类目年增速", benchmark: ">20%成长期", meaning: "市场时机判断" },
      { name: "新品期CTR", benchmark: ">3%继续投", meaning: "主图吸引力" },
      { name: "差异化持续时长", benchmark: ">6个月难复制", meaning: "护城河评估" }
    ],
    pitfalls: [
      "热卖排行榜选品：看到别人卖得好就跟，进入时已是红海",
      "只考虑前期选品，忽视库存积压风险（尤其服装类）",
      "在拼多多用天猫的高价策略，或在天猫用拼多多的极低价策略",
      "新品期过早要求ROI达标，砍掉本应继续投入的潜力品"
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 模块 3
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: "供应链管理",
    icon: "🏭",
    color: "#059669",
    summary: "供应链是电商的核心竞争力，也是最难被复制的壁垒。本模块涵盖工厂采购、品控体系、库存策略、供应链风险管理。",
    estimatedMinutes: 40,
    sections: [
      {
        title: "3.1 采购模式选择",
        content: `
<h3>六种采购模式对比</h3>
<table class="data-table">
  <thead><tr><th>模式</th><th>适用阶段</th><th>优势</th><th>劣势</th></tr></thead>
  <tbody>
    <tr><td><strong>现货采购（1688）</strong></td><td>启动期、测品</td><td>零库存风险，灵活</td><td>无差异化，利润薄</td></tr>
    <tr><td><strong>OEM（代工）</strong></td><td>验证期后</td><td>可以定制logo/包装</td><td>MOQ要求（通常500+件）</td></tr>
    <tr><td><strong>ODM（设计代工）</strong></td><td>成长期</td><td>独特设计，竞品难复制</td><td>开模费用高（1-10万）</td></tr>
    <tr><td><strong>自建工厂</strong></td><td>规模化后</td><td>成本最低，品控最强</td><td>重资产，资金需求大</td></tr>
    <tr><td><strong>独家代理</strong></td><td>任何阶段</td><td>品牌背书，独家资源</td><td>受制于品牌方，风险集中</td></tr>
    <tr><td><strong>联名/买手</strong></td><td>品牌期</td><td>差异化、故事性强</td><td>数量有限，难以规模化</td></tr>
  </tbody>
</table>

<h3>1688采购实操要点</h3>
<ul>
  <li><strong>工厂vs贸易商</strong>：优先直供工厂（"源头工厂"标签）；贸易商价格贵10-30%但可小批量</li>
  <li><strong>实地考察清单</strong>：生产设备、在线工人数、质检流程、已合作大客户名单</li>
  <li><strong>打样标准</strong>：至少比对3家样品，用固定参照物拍照（颜色、尺寸、做工）</li>
  <li><strong>付款条款</strong>：首单建议30%定金+70%尾款（见货后），保护资金安全</li>
</ul>

<p class="callout">💡 <strong>供应链谈判原则</strong>：量大不是唯一筹码。能给工厂提供稳定订单、提前备货、返款快，都是增加议价权的方式。</p>
`
      },
      {
        title: "3.2 品质控制体系",
        content: `
<h3>品控三道关</h3>
<ol>
  <li>
    <strong>来料检验（IQC）</strong><br>
    收到货批次抽检，比例通常为：批量 &lt;100件全检；100-500件抽检20%；&gt;500件抽检10%。
    关键检验点：尺寸偏差、颜色色差、功能测试、包装完整性。
  </li>
  <li>
    <strong>过程检验（IPQC）</strong><br>
    工厂生产中段巡检，预防批量性质量问题。若首批合格率&lt;95%，需暂停生产。
  </li>
  <li>
    <strong>出货检验（OQC）</strong><br>
    出货前最终确认，建议委托第三方验货公司（如SGS、TUV）；每次检验费用约500-2000元。
  </li>
</ol>

<h3>品控指标</h3>
<table class="data-table">
  <thead><tr><th>指标</th><th>优秀</th><th>合格</th><th>危险</th></tr></thead>
  <tbody>
    <tr><td>批次合格率</td><td>&gt;98%</td><td>95-98%</td><td>&lt;95%需追责</td></tr>
    <tr><td>售后退货率</td><td>&lt;1%</td><td>1-3%</td><td>&gt;5%需整改</td></tr>
    <tr><td>质量差评率</td><td>&lt;0.5%</td><td>0.5-2%</td><td>&gt;2%紧急处理</td></tr>
  </tbody>
</table>
`
      },
      {
        title: "3.3 库存策略与周转",
        content: `
<h3>库存策略三原则</h3>
<ul>
  <li><strong>安全库存</strong> = 日均销量 × 补货周期（天）× 安全系数（1.2-1.5）</li>
  <li><strong>补货点</strong> = 安全库存 + 日均销量 × 采购提前期（天）</li>
  <li><strong>最大库存</strong> = 安全库存 + 单次订货量</li>
</ul>

<h3>示例计算</h3>
<div class="formula-block">
  <p>日均销量：50单 | 采购提前期：15天 | 安全系数：1.3</p>
  <p>安全库存 = 50 × 15 × 1.3 = <strong>975件</strong></p>
  <p>补货点 = 975 + 50 × 15 = <strong>1,725件</strong>（库存降至此数量时下单）</p>
</div>

<h3>库存周转率管理</h3>
<table class="data-table">
  <thead><tr><th>品类</th><th>健康周转天数</th><th>危险信号</th></tr></thead>
  <tbody>
    <tr><td>快消品（食品/日用）</td><td>15-30天</td><td>&gt;45天积压风险高</td></tr>
    <tr><td>服装/季节品</td><td>30-60天</td><td>&gt;90天需清仓处理</td></tr>
    <tr><td>电器/3C</td><td>30-45天</td><td>&gt;60天面临贬值风险</td></tr>
    <tr><td>家居/百货</td><td>45-75天</td><td>&gt;120天考虑降价出清</td></tr>
  </tbody>
</table>

<h3>常见库存风险与应对</h3>
<ul>
  <li><strong>爆品断货</strong>：排名下滑难恢复。应对：建立备货预警机制，大促前45天提前备货</li>
  <li><strong>滞销积压</strong>：资金占用+仓储成本。应对：限时折扣、拼多多清仓、捆绑销售</li>
  <li><strong>季节性积压</strong>（如冬装）：成本最高。应对：宁可缺货也不过度备货，用历史数据建模</li>
</ul>
`
      },
      {
        title: "3.4 供应商开发与关系管理",
        content: `
<h3>供应商开发的核心目标</h3>
<p>好的供应商是竞争护城河——他们给你更低的价格、更快的响应、更多的产品定制支持。但关系需要主动建立和维护。</p>

<h3>找供应商的5条渠道</h3>
<table class="data-table">
  <thead><tr><th>渠道</th><th>适合阶段</th><th>优缺点</th></tr></thead>
  <tbody>
    <tr><td>1688.com</td><td>初期小卖家</td><td>易操作，样品快；竞争激烈，需筛选</td></tr>
    <tr><td>广交会/行业展会</td><td>成长期品牌</td><td>直接见工厂，关系建立快；门票成本+出行成本</td></tr>
    <tr><td>行业产地（如义乌/广州）扫街</td><td>需要定制开发</td><td>面对面谈，MOQ灵活；时间成本高</td></tr>
    <tr><td>竞品溯源</td><td>有目标产品时</td><td>直接找到做竞品的工厂；需要侦查手段（看竞品发货城市）</td></tr>
    <tr><td>同行介绍</td><td>有行业人脉时</td><td>背书可靠；不易获得</td></tr>
  </tbody>
</table>

<h3>供应商评估7维度</h3>
<ol>
  <li><strong>产能</strong>：月最大产能能否覆盖大促峰值需求？</li>
  <li><strong>MOQ</strong>：最小起订量是否匹配当前规模？</li>
  <li><strong>交期</strong>：打样周期？批量生产周期？节假日是否停产？</li>
  <li><strong>品控</strong>：是否有QC流程？合格率历史数据？</li>
  <li><strong>价格</strong>：价格透明度？量价折扣梯度？</li>
  <li><strong>响应速度</strong>：沟通是否及时？突发问题处理能力？</li>
  <li><strong>稳定性</strong>：成立年限？核心客户？财务状况？</li>
</ol>

<h3>供应商关系分级管理</h3>
<div class="info-card">
  <h4>三级供应商体系（避免「断供崩溃」）</h4>
  <p><strong>A级（核心供应商）</strong>：1-2家，承担70-80%采购量，价格最优，定期走访维系关系</p>
  <p><strong>B级（备用供应商）</strong>：2-3家，平时给小订单保持关系，A级出问题时立即切换</p>
  <p><strong>C级（备选供应商）</strong>：不定期联系，了解市场行情，作为价格谈判筹码</p>
</div>

<h3>价格谈判技巧</h3>
<ul>
  <li><strong>量价承诺换折扣</strong>：「年采购量X万件，能给什么价？」——给工厂确定性，工厂给你折扣</li>
  <li><strong>付款条件换价格</strong>：预付比例高（如70%预付）通常能谈到更低单价</li>
  <li><strong>竞品报价作筹码</strong>：「另一家工厂报价X元，你能不能匹配？」——有效但要真实，不能虚报</li>
  <li><strong>长期合作换首次低价</strong>：承诺独家合作/长期合作，换取首批合理价格</li>
</ul>
`
      }
    ],
    keyMetrics: [
      { name: "批次合格率", benchmark: ">98%", meaning: "工厂品控能力" },
      { name: "库存周转天数", benchmark: "因品类而异", meaning: "资金使用效率" },
      { name: "缺货率", benchmark: "<3%", meaning: "供应链可靠性" },
      { name: "退货率（品质原因）", benchmark: "<1%", meaning: "产品质量水平" }
    ],
    pitfalls: [
      "大促前没有足够提前备货，爆单断货后排名腰斩",
      "过于依赖单一供应商，工厂涨价或停产时毫无应对能力",
      "库存积压后不及时止损，占用大量流动资金",
      "忽视包装损耗率，发货时包装破损引发差评"
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 模块 4
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 4,
    title: "平台选择与店铺搭建",
    icon: "🏪",
    color: "#dc2626",
    summary: "选对平台是成本最低的战略决策。本模块深度对比六大平台的入驻条件、流量逻辑、运营生态，以及店铺搭建的核心要素。",
    estimatedMinutes: 45,
    sections: [
      {
        title: "4.1 六大平台深度对比",
        content: `
<h3>平台核心数据（2024年）</h3>
<table class="data-table">
  <thead><tr><th>平台</th><th>年GMV</th><th>月活用户</th><th>客单价</th><th>佣金率</th></tr></thead>
  <tbody>
    <tr><td><strong>淘宝/天猫</strong></td><td>约8万亿</td><td>9.5亿</td><td>120-200元</td><td>0.6-5%</td></tr>
    <tr><td><strong>京东</strong></td><td>约3.5万亿</td><td>6亿</td><td>300-500元</td><td>2-8%</td></tr>
    <tr><td><strong>拼多多</strong></td><td>约4万亿</td><td>9亿</td><td>50-100元</td><td>0.6%</td></tr>
    <tr><td><strong>抖音电商</strong></td><td>约3万亿</td><td>7亿（日活）</td><td>80-150元</td><td>1-5%</td></tr>
    <tr><td><strong>快手电商</strong></td><td>约1.2万亿</td><td>4亿</td><td>60-120元</td><td>1-5%</td></tr>
    <tr><td><strong>小红书</strong></td><td>约0.3万亿</td><td>3亿</td><td>150-300元</td><td>5%</td></tr>
  </tbody>
</table>

<h3>平台算法底层逻辑</h3>
<p>理解算法才能制定正确的运营策略：</p>
<ul>
  <li><strong>淘宝/天猫</strong>：搜索+推荐双轨制。搜索权重=点击率×转化率×客单价×DSR评分。"猜你喜欢"基于用户行为标签匹配。</li>
  <li><strong>京东</strong>：搜索为主，权重重视正品率、物流时效、好评率。自营商品天然获得流量倾斜。</li>
  <li><strong>拼多多</strong>：社交裂变+搜索混合。价格竞争力是第一权重因子，付费推广（多多进宝）ROI通常高于淘宝。</li>
  <li><strong>抖音</strong>：纯内容算法（推荐机制）。完播率→互动率→转化率三级漏斗。没有搜索流量主导，内容质量决定一切。</li>
</ul>
`
      },
      {
        title: "4.2 入驻条件与成本",
        content: `
<h3>各平台入驻要求</h3>
<table class="data-table">
  <thead><tr><th>平台</th><th>类型</th><th>资质要求</th><th>保证金</th><th>开店难度</th></tr></thead>
  <tbody>
    <tr><td>淘宝</td><td>C店（个人/企业）</td><td>身份证/营业执照</td><td>0-1万</td><td>⭐（很容易）</td></tr>
    <tr><td>天猫</td><td>品牌旗舰店</td><td>商标注册证+营业执照+保证金</td><td>5-15万</td><td>⭐⭐⭐⭐</td></tr>
    <tr><td>京东</td><td>POP商家</td><td>营业执照+品牌授权</td><td>1-10万</td><td>⭐⭐⭐</td></tr>
    <tr><td>拼多多</td><td>商家</td><td>营业执照</td><td>1000-2万</td><td>⭐（容易）</td></tr>
    <tr><td>抖音</td><td>企业号/个人号</td><td>营业执照（企业）或身份证（个人）</td><td>500-2万</td><td>⭐⭐</td></tr>
    <tr><td>小红书</td><td>专业号/企业号</td><td>营业执照+品牌授权</td><td>500-1万</td><td>⭐⭐⭐</td></tr>
  </tbody>
</table>

<h3>综合成本评估（年度）</h3>
<ul>
  <li>平台佣金（GMV的0.6-8%）</li>
  <li>支付手续费（约0.6%）</li>
  <li>营销费用（通常占销售额10-30%）</li>
  <li>ERP/客服工具费（年1-5万）</li>
  <li>仓储物流（按件或按存储面积计）</li>
</ul>

<p class="callout">💡 <strong>选平台建议</strong>：初创品牌先做淘宝C店/拼多多（低门槛验证产品），有稳定GMV后升级天猫/京东，同时布局抖音内容电商。</p>
`
      },
      {
        title: "4.3 店铺基础搭建要点",
        content: `
<h3>店铺视觉体系</h3>
<p>视觉一致性是品牌信任的基础，用户在进入店铺的3秒内形成第一印象：</p>
<ul>
  <li><strong>主色调</strong>：1-2个主色贯穿所有素材，建立视觉记忆</li>
  <li><strong>主图风格</strong>：场景图vs白底图 → 服装类用场景图，电器类用白底+细节展示</li>
  <li><strong>首页装修</strong>：Banner（品牌形象）+ 爆款商品 + 活动入口 + 品类导航</li>
</ul>

<h3>店铺SEO基础设置</h3>
<ul>
  <li><strong>店铺名</strong>：含核心关键词（如"XX旗舰店"中的XX即品类关键词）</li>
  <li><strong>店铺分类</strong>：合理设置商品分类，帮助平台理解店铺标签</li>
  <li><strong>主营类目</strong>：聚焦1-2个类目，分散类目会稀释权重</li>
</ul>

<h3>运营工具配置清单</h3>
<table class="data-table">
  <thead><tr><th>工具类型</th><th>推荐工具</th><th>主要用途</th></tr></thead>
  <tbody>
    <tr><td>ERP系统</td><td>旺店通、聚水潭、管易云</td><td>订单管理、库存同步、多平台统一</td></tr>
    <tr><td>客服工具</td><td>千牛（阿里）、京麦（京东）、CRM系统</td><td>消息管理、快捷回复、话术库</td></tr>
    <tr><td>数据分析</td><td>生意参谋、商智、蝉妈妈</td><td>销售数据、流量分析、竞品监控</td></tr>
    <tr><td>设计工具</td><td>即时设计、Canva、Photoshop</td><td>主图/详情页/Banner制作</td></tr>
  </tbody>
</table>
`
      },
      {
        title: "4.4 多平台协同运营策略",
        content: `
<h3>多平台运营的本质矛盾</h3>
<p>每增加一个平台，运营复杂度不是「+1」而是「×1.5」（需要适配内容、价格、库存、客服）。盲目铺多平台是中小卖家最常见的资源浪费。</p>

<div class="callout callout-warning">
  <strong>核心原则</strong>：在当前平台月GMV稳定超过50万之前，不建议主动拓展第二个平台。先做深，再做广。
</div>

<h3>多平台差异化分工矩阵</h3>
<table class="data-table">
  <thead><tr><th>平台</th><th>用户心智</th><th>最适合承担的角色</th><th>主推产品类型</th></tr></thead>
  <tbody>
    <tr><td>天猫旗舰店</td><td>品牌权威/品质背书</td><td>品牌形象旗舰阵地</td><td>核心正价款/新品首发</td></tr>
    <tr><td>京东</td><td>品质可信/快速到货</td><td>企业采购/礼品团购</td><td>套装/礼盒/大件高客单</td></tr>
    <tr><td>拼多多</td><td>最低价/高性价比</td><td>走量/清库存/价格测试</td><td>简配款/尾货/低毛利走量款</td></tr>
    <tr><td>抖音</td><td>内容种草/冲动消费</td><td>新品曝光/品牌破圈</td><td>高颜值/有故事感的产品</td></tr>
    <tr><td>小红书</td><td>生活方式/品质消费</td><td>品牌种草/目标客群渗透</td><td>有调性/有生活方式标签的产品</td></tr>
  </tbody>
</table>

<h3>多平台价格管理三原则</h3>
<ol>
  <li><strong>同款商品不同平台价差控制在15%以内</strong>，否则引发用户「比价迁移」和老客信任危机</li>
  <li><strong>用「规格差异」隔离比价</strong>：天猫卖「300ml正装」，拼多多卖「100ml试用装」，抖音卖「买一送一套装」——同品不同规格，无法直接比价</li>
  <li><strong>大促价格联动</strong>：一个平台大促前，其他平台同步调整（或设置门槛），防止平台间价格体系冲突</li>
</ol>

<h3>多平台库存协同</h3>
<div class="info-card">
  <h4>库存策略选择</h4>
  <p><strong>共享库存</strong>：所有平台共用一个仓库，ERP系统实时分配。优势：资金效率高；风险：某平台爆单会导致其他平台超卖。</p>
  <p><strong>独立库存</strong>：每个平台预留专属库存，互不调用。优势：不超卖；风险：资金占用大，易造成某平台积压。</p>
  <p><strong>推荐做法</strong>：主平台独立库存（确保核心业务不受影响），次要平台共享剩余库存，并设置安全线（库存低于X件时自动下架）。</p>
</div>

<h3>多平台运营的人力配置参考</h3>
<table class="data-table">
  <thead><tr><th>平台数量</th><th>建议最低人力</th><th>关键配置</th></tr></thead>
  <tbody>
    <tr><td>1个平台</td><td>3-4人</td><td>运营1 + 美工1 + 客服1 + 兼职仓储</td></tr>
    <tr><td>2-3个平台</td><td>6-8人</td><td>增加平台专员1-2人，共用美工和仓储</td></tr>
    <tr><td>4个平台以上</td><td>12人以上</td><td>各平台独立运营负责人 + 共享中台（设计/仓储/财务）</td></tr>
  </tbody>
</table>
`
      }
    ],
    keyMetrics: [
      { name: "平台佣金率", benchmark: "0.6-8%因品类而异", meaning: "基础成本项" },
      { name: "保证金", benchmark: "0-15万因平台而异", meaning: "入驻资金门槛" },
      { name: "营销费用占比", benchmark: "10-30%健康区间", meaning: "获客成本控制" },
      { name: "店铺DSR评分", benchmark: ">4.7分", meaning: "综合运营质量" }
    ],
    pitfalls: [
      "多平台同时开店，运营资源分散，每个平台都做不深",
      "忽视平台规则更新，活动报名资质不符导致错失红利",
      "店铺视觉风格不统一，降低用户信任度和停留时间",
      "多平台同款商品价差过大，引发老客信任危机和比价迁移",
      "保证金不足被扣押时，影响正常经营"
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 模块 5
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 5,
    title: "商品内容运营",
    icon: "📝",
    color: "#d97706",
    summary: "内容是流量和转化的桥梁。本模块讲解主图优化、标题关键词策略、详情页转化逻辑、定价策略，以及各类内容形式的制作方法论。",
    estimatedMinutes: 50,
    sections: [
      {
        title: "5.1 主图优化方法论",
        content: `
<h3>主图的核心KPI：点击率（CTR）</h3>
<p>主图是搜索结果中吸引用户点击的唯一视觉入口。行业基准：</p>
<ul>
  <li>服装类：CTR &gt;3.5% 优秀</li>
  <li>电子产品：CTR &gt;2.5% 优秀</li>
  <li>日用品：CTR &gt;2% 优秀</li>
</ul>

<h3>主图设计的5要素</h3>
<ol>
  <li><strong>产品主体清晰</strong>：产品占画面60-70%，背景不抢眼</li>
  <li><strong>核心卖点可视化</strong>：用视觉元素展示，而非文字描述（文字字符≤15个）</li>
  <li><strong>差异化视觉锚点</strong>：与搜索结果中其他主图明显不同</li>
  <li><strong>场景感染力</strong>：高端品用纯白/灰底；生活类用真实使用场景</li>
  <li><strong>价格/活动信息</strong>（可选）：促销期间主图加价格标签可提高CTR</li>
</ol>

<h3>A/B测试主图的标准流程</h3>
<ol>
  <li>上传2张主图，记录初始展现量和点击量</li>
  <li>至少积累500次展现后，计算各自CTR</li>
  <li>CTR高的主图保留，另一张替换新方案继续测试</li>
  <li>持续优化直到CTR超过类目均值150%</li>
</ol>

<p class="callout">⚠️ 主图永远不够好。当你的CTR比均值高50%时，还有空间；超过200%时才可以不再主动测试。</p>
`
      },
      {
        title: "5.2 标题关键词策略",
        content: `
<h3>标题的三个层次</h3>
<p>电商标题长度通常限制30字符，需要兼顾搜索权重和可读性：</p>

<div class="info-card">
  <div class="card-row"><span class="tag tag-blue">核心词（必放）</span><span>品类+最高搜索量词。如"登山鞋"是核心词，必须出现在标题前10字。</span></div>
  <div class="card-row"><span class="tag tag-green">属性词（重要）</span><span>性别/材质/场景限定词。如"男款/真皮/户外徒步"。提高精准搜索流量。</span></div>
  <div class="card-row"><span class="tag tag-amber">流量词（补充）</span><span>搜索量大但不精准的词，放在标题后段。如"运动鞋"比"登山鞋"搜索量大，但转化低。</span></div>
</div>

<h3>标题优化工具流程</h3>
<ol>
  <li>在生意参谋"关键词规划"中输入核心词，获取相关词库</li>
  <li>按"搜索人气"排序，筛选搜索人气&gt;5000的词</li>
  <li>检查每个词的"搜索热度/点击率"比值，选择高点击率词</li>
  <li>分析竞品标题，找到自己未覆盖的高价值词</li>
  <li>按"核心词+属性词+流量词+促销词"结构组合标题</li>
</ol>

<h3>标题禁区</h3>
<ul>
  <li>不得含有"最好"、"第一"、"No.1"等绝对化用语（违规）</li>
  <li>不得虚假宣传（如"代替正品"、"同款XX明星"等）</li>
  <li>不得堆砌无意义词汇（影响用户阅读体验，平台也会降权）</li>
</ul>
`
      },
      {
        title: "5.3 详情页转化逻辑",
        content: `
<h3>详情页的核心使命：消除购买顾虑</h3>
<p>用户到达详情页时已有购买意向，详情页的作用是强化意愿、消除疑虑、促成决策。</p>

<h3>黄金转化结构（AIDA增强版）</h3>
<ol>
  <li><strong>痛点引爆（前3屏）</strong>：直接说出用户的核心痛点，引发共鸣。不要从"关于我们"开始。</li>
  <li><strong>解决方案呈现（3-6屏）</strong>：清晰展示产品如何解决痛点，重点在"为什么是这个产品"</li>
  <li><strong>信任背书（6-9屏）</strong>：资质/认证/检测报告/媒体报道/知名用户</li>
  <li><strong>用户证言（9-12屏）</strong>：真实买家晒图、好评截图、场景照片</li>
  <li><strong>细节展示（12-15屏）</strong>：材质、工艺、尺寸、对比图，消除最后顾虑</li>
  <li><strong>FAQs（15屏以后）</strong>：提前回答最常见的客服问题，减少咨询率</li>
</ol>

<h3>视频详情页（优先级越来越高）</h3>
<p>2024年抖音/淘宝趋势：短视频详情页转化率比纯图文高30-50%</p>
<ul>
  <li>时长：30-90秒最佳</li>
  <li>前3秒：必须出现最强卖点或冲突场景（解决用户流失）</li>
  <li>结尾：明确行动号召（"立即购买"/"限时优惠"）</li>
</ul>
`
      },
      {
        title: "5.4 定价策略",
        content: `
<h3>定价的三种视角</h3>
<ul>
  <li><strong>成本加成定价</strong>：成本×（1+利润率）。最基础，忽视了市场竞争。</li>
  <li><strong>竞争定价</strong>：参照竞品价格定位（低/平/高）。需要差异化支撑高定价。</li>
  <li><strong>价值定价</strong>：以用户感知价值为锚。最高级，需要强品牌能力。</li>
</ul>

<h3>电商常用定价技巧</h3>
<table class="data-table">
  <thead><tr><th>技巧</th><th>原理</th><th>示例</th></tr></thead>
  <tbody>
    <tr><td>锚点定价</td><td>先展示高价，再展示实际价</td><td>划线价199，现价99</td></tr>
    <tr><td>尾数定价</td><td>9.9/99/199比10/100/200转化更高</td><td>199元而非200元</td></tr>
    <tr><td>组合定价</td><td>产品+配件组合包，提高客单价</td><td>主品+耗材组合，单件贵但套装折扣</td></tr>
    <tr><td>梯度定价</td><td>多SKU覆盖不同价格带</td><td>基础款/进阶款/旗舰款</td></tr>
    <tr><td>动态定价</td><td>根据库存/季节/竞争动态调整</td><td>季末清仓折扣，旺季提价</td></tr>
  </tbody>
</table>

<p class="callout">🎯 <strong>定价决策原则</strong>：新品期允许亏损换排名；成长期覆盖成本微利；成熟期目标毛利率30%+。永远不要在亏损状态持续超过3个月。</p>
`
      }
    ],
    keyMetrics: [
      { name: "主图CTR", benchmark: ">均值150%", meaning: "主图吸引力" },
      { name: "详情页转化率", benchmark: "服装3-5%，电器2-3%", meaning: "详情页说服力" },
      { name: "加购率", benchmark: ">8%", meaning: "购买意向强度" },
      { name: "毛利率", benchmark: "成熟期>30%", meaning: "商业可持续性" }
    ],
    pitfalls: [
      "详情页从品牌故事开始，浪费了最宝贵的前3屏",
      "主图文字过多（>20字），在手机屏幕上根本看不清",
      "标题只堆砌关键词，不考虑可读性，影响CTR",
      "定价设定后从不调整，错过动态市场机会"
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 模块 6
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 6,
    title: "流量获取策略",
    icon: "📊",
    color: "#7c3aed",
    summary: "没有流量，再好的产品也卖不出去。本模块系统讲解自然流量、付费流量、内容流量、私域流量四大渠道的运营逻辑和关键指标。",
    estimatedMinutes: 60,
    sections: [
      {
        title: "6.1 自然流量：搜索SEO",
        content: `
<h3>电商SEO与网站SEO的核心差异</h3>
<p>电商平台排名算法综合考虑：转化权重（≈40%）> 销量权重（≈25%）> 相关性权重（≈20%）> 体验权重（≈15%）</p>

<h3>提升自然搜索排名的操作路径</h3>
<ol>
  <li>
    <strong>权重积累阶段（第1-4周）</strong>
    <ul>
      <li>保持稳定日销量（哪怕量小也要稳定），避免销量忽高忽低</li>
      <li>快速积累高质量评价（联系老客户/样品测评）</li>
      <li>确保页面停留时长 &gt;45秒（优化详情页内容深度）</li>
    </ul>
  </li>
  <li>
    <strong>关键词破零阶段（第2-6周）</strong>
    <ul>
      <li>对尾部词（搜索量1000-5000）进行精准投放，先打排名</li>
      <li>同一批关键词持续投放2-3周，建立关联权重</li>
      <li>逐步向中部词、头部词延伸</li>
    </ul>
  </li>
</ol>

<h3>淘宝"猜你喜欢"标签运营</h3>
<p>猜你喜欢流量来自用户行为标签匹配，操作重点：</p>
<ul>
  <li>确保店铺商品聚焦，不要跨类目大量铺货</li>
  <li>通过直通车人群标签定向，精准引入目标用户，反向优化标签</li>
  <li>控制跳出率（进店后点其他商品），提高"同类推荐"概率</li>
</ul>
`
      },
      {
        title: "6.2 付费流量：直通车与竞价广告",
        content: `
<h3>淘宝直通车核心机制</h3>
<p>直通车排名公式：<strong>广告排名 = 出价 × 质量分</strong></p>
<p>质量分由三个因素决定：相关性（30%）+ 点击率预估（40%）+ 体验指标（30%）</p>

<p class="callout">💡 提高质量分比提高出价更有效率。质量分10分的商品出1元，等于质量分5分出2元的效果，但成本减半。</p>

<h3>直通车投放策略分阶段</h3>
<table class="data-table">
  <thead><tr><th>阶段</th><th>目标</th><th>策略</th><th>ROI要求</th></tr></thead>
  <tbody>
    <tr><td>养分阶段</td><td>积累质量分</td><td>精准词低出价，宁可不展现，不要无效点击</td><td>不设ROI目标</td></tr>
    <tr><td>起量阶段</td><td>快速增加销量</td><td>加大预算，扩展词范围，接受较低ROI</td><td>ROI &gt;1（保本即可）</td></tr>
    <tr><td>收割阶段</td><td>利润最大化</td><td>精细化出价，高转化词加价，低转化词降价或暂停</td><td>ROI &gt;3</td></tr>
  </tbody>
</table>

<h3>抖音信息流广告（巨量引擎）</h3>
<p>抖音付费逻辑与淘宝根本不同：</p>
<ul>
  <li>算法是内容优先推荐，付费只是"放大器"，内容质量决定放大效果</li>
  <li>核心指标：GPM（千次播放成交额）=GMV/播放量×1000，GPM&gt;100元视为优质</li>
  <li>短视频投放：先免费发布，测出完播率&gt;30%、互动率&gt;5%的视频，再投DOU+/千川放量</li>
</ul>

<h3>拼多多多多进宝（CPS联盟）</h3>
<p>拼多多的主要付费模式是CPS（按销售额分佣），特点：</p>
<ul>
  <li>设置佣金率（通常3-15%），达人/买手看到高佣商品主动推广</li>
  <li>无需预支付广告费，卖出才付钱，资金风险低</li>
  <li>适合有价格空间的爆款商品</li>
</ul>
`
      },
      {
        title: "6.3 内容流量：直播与短视频",
        content: `
<h3>直播电商流量逻辑</h3>
<p>直播间流量来源：自然推荐流量（约50%）+ 付费流量（约30%）+ 粉丝流量（约20%）</p>

<h3>直播间核心指标体系</h3>
<table class="data-table">
  <thead><tr><th>指标</th><th>含义</th><th>优秀基准</th></tr></thead>
  <tbody>
    <tr><td>在线人数峰值</td><td>同时在线最高人数</td><td>与粉丝量成比例</td></tr>
    <tr><td>UV价值</td><td>每个进入直播间用户贡献GMV</td><td>&gt;2元/UV</td></tr>
    <tr><td>GPM</td><td>每千次播放成交额</td><td>&gt;100元</td></tr>
    <tr><td>转化率</td><td>进入直播间→下单比例</td><td>3-8%</td></tr>
    <tr><td>场均GMV</td><td>单场直播总成交</td><td>因体量而异</td></tr>
    <tr><td>粉丝增长率</td><td>每场新增粉丝数/开播前粉丝</td><td>&gt;0.5%/场</td></tr>
  </tbody>
</table>

<h3>直播爆单的三板斧</h3>
<ol>
  <li><strong>逼单话术</strong>：制造稀缺感（"只有最后50件"）和紧迫感（"这个价格只有今晚"）</li>
  <li><strong>福利品引流</strong>：用极低价福利品吸引进入直播间，再用正价品转化</li>
  <li><strong>互动激励</strong>：点赞/评论触发抽奖，提高直播间互动率，算法会给更多自然流量</li>
</ol>

<h3>短视频种草转化路径</h3>
<p>小红书/抖音短视频 → 品牌/商品搜索量增加 → 电商平台转化（搜索流量暴增）</p>
<p>这个路径被称为"内容种草+搜索收割"，是2024年最高效的流量模型之一。</p>
`
      },
      {
        title: "6.4 关键流量指标解析",
        content: `
<h3>全渠道流量指标对照表</h3>
<table class="data-table">
  <thead><tr><th>指标</th><th>全称</th><th>计算公式</th><th>关注场景</th></tr></thead>
  <tbody>
    <tr><td>CTR</td><td>点击率</td><td>点击量/展现量</td><td>主图/广告素材评估</td></tr>
    <tr><td>CVR</td><td>转化率</td><td>成交量/点击量</td><td>详情页/落地页评估</td></tr>
    <tr><td>ROI</td><td>投入产出比</td><td>销售额/广告费</td><td>付费广告效率</td></tr>
    <tr><td>ROAS</td><td>广告支出回报率</td><td>广告带来销售额/广告费</td><td>与ROI类似，品牌更常用</td></tr>
    <tr><td>CPC</td><td>每次点击成本</td><td>广告费/点击次数</td><td>直通车、信息流广告</td></tr>
    <tr><td>CPM</td><td>千次展现成本</td><td>广告费/展现量×1000</td><td>品牌曝光活动</td></tr>
    <tr><td>GPM</td><td>千次播放成交额</td><td>GMV/播放量×1000</td><td>抖音短视频/直播评估</td></tr>
    <tr><td>CAC</td><td>用户获取成本</td><td>总营销费/新增用户数</td><td>整体营销效率评估</td></tr>
  </tbody>
</table>

<h3>ROI应该多少才合格？</h3>
<p>ROI阈值 = 1 ÷ 毛利率。若毛利率40%，则ROI需&gt;2.5才不亏损。</p>
<ul>
  <li>毛利率30%：ROI盈亏线 = 3.3</li>
  <li>毛利率40%：ROI盈亏线 = 2.5</li>
  <li>毛利率50%：ROI盈亏线 = 2.0</li>
</ul>
<p class="callout">⚠️ 很多商家只追求高ROI，实际上在新品期容忍低ROI换排名、换销量，长期来看总利润更高。</p>
`
      }
    ],
    keyMetrics: [
      { name: "直通车ROI", benchmark: ">1/毛利率", meaning: "付费广告盈亏线" },
      { name: "主图CTR", benchmark: "各类目均值150%以上", meaning: "内容吸引力" },
      { name: "GPM", benchmark: ">100元", meaning: "短视频/直播效率" },
      { name: "CAC", benchmark: "<LTV的1/3", meaning: "获客成本合理性" }
    ],
    pitfalls: [
      "盲目追求高ROI砍预算，导致排名崩塌",
      "直播间付费买流量但内容质量差，GPM低，资金浪费",
      "忽视内容种草投入，只做付费广告，LTV低用户难留存",
      "未设置ROI盈亏线，不知道自己在亏损"
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 模块 7
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 7,
    title: "转化优化",
    icon: "💰",
    color: "#0891b2",
    summary: "流量进来是开始，转化才是结果。本模块系统讲解转化漏斗、促销活动设计、评价体系管理、客服转化技巧，提升每一步的成交效率。",
    estimatedMinutes: 45,
    sections: [
      {
        title: "7.1 转化漏斗分析",
        content: `
<h3>电商转化六级漏斗</h3>
<div class="funnel">
  <div class="funnel-step f1">展现量 → <span>用户看到商品展示</span></div>
  <div class="funnel-step f2">点击量（CTR 2-5%）→ <span>用户点入商品页</span></div>
  <div class="funnel-step f3">详情页浏览（停留&gt;45s）→ <span>用户认真看详情</span></div>
  <div class="funnel-step f4">加购/收藏（加购率8-15%）→ <span>用户有购买意向</span></div>
  <div class="funnel-step f5">下单（转化率3-8%）→ <span>用户提交订单</span></div>
  <div class="funnel-step f6">支付（支付率&gt;85%）→ <span>完成成交</span></div>
</div>

<h3>各漏斗节点的诊断方法</h3>
<table class="data-table">
  <thead><tr><th>问题节点</th><th>症状</th><th>根本原因</th><th>改进方向</th></tr></thead>
  <tbody>
    <tr><td>展现→点击</td><td>CTR&lt;均值</td><td>主图缺乏吸引力/标题关键词不准</td><td>A/B测试主图，优化标题</td></tr>
    <tr><td>点击→加购</td><td>停留短，加购率低</td><td>详情页未能说服，价格过高</td><td>优化前3屏，调整价格策略</td></tr>
    <tr><td>加购→下单</td><td>加购量大但下单少</td><td>犹豫期拉长，竞品截流</td><td>发优惠券、限时催单</td></tr>
    <tr><td>下单→支付</td><td>支付率&lt;80%</td><td>结账流程复杂，支付方式少</td><td>优化结账页，检查支付链路</td></tr>
  </tbody>
</table>
`
      },
      {
        title: "7.2 促销活动设计",
        content: `
<h3>促销的底层逻辑：制造"此刻买"的理由</h3>
<p>人类的损失厌恶心理使得"限时失去"比"长期拥有"更有行动力。所有促销设计都利用这一心理。</p>

<h3>促销工具矩阵</h3>
<table class="data-table">
  <thead><tr><th>工具</th><th>适用场景</th><th>优势</th><th>成本</th></tr></thead>
  <tbody>
    <tr><td>满减券</td><td>提客单价</td><td>门槛可控，提高单次消费</td><td>直接利润损失</td></tr>
    <tr><td>限时折扣</td><td>清库存/节点促销</td><td>紧迫感强，转化快</td><td>利润损失+潜在价值损耗</td></tr>
    <tr><td>买赠</td><td>去库存/提客单</td><td>感知价值高，实际成本可控</td><td>赠品成本</td></tr>
    <tr><td>会员专享价</td><td>促复购</td><td>激励注册会员，建立长期关系</td><td>折扣成本</td></tr>
    <tr><td>组合套装</td><td>提客单/清货</td><td>提高连带率，降低单件感知价格</td><td>组合打包成本</td></tr>
  </tbody>
</table>

<h3>大促活动规划节奏（以双11为例）</h3>
<ul>
  <li><strong>T-45天</strong>：报名平台活动，备货，确定主推款和促销价格</li>
  <li><strong>T-30天</strong>：预热种草，小红书/抖音内容发布，积累加购/收藏</li>
  <li><strong>T-7天</strong>：预售开启（部分平台），收取定金锁定销量</li>
  <li><strong>T-1天</strong>：定金尾款期，推送优惠券，催单已加购用户</li>
  <li><strong>当天</strong>：全力冲量，实时监控库存，及时补货或限流</li>
  <li><strong>T+7天</strong>：处理退换货高峰，维护好评，沉淀私域用户</li>
</ul>
`
      },
      {
        title: "7.3 评价管理与客服转化",
        content: `
<h3>评价对转化率的影响</h3>
<p>研究数据显示：好评率从95%提升到98%，转化率提升约15-25%。评价是低成本高ROI的转化手段。</p>

<h3>评价获取的合规方式</h3>
<ul>
  <li>包裹内附感谢卡，引导评价（注意：不能承诺返现要好评，违规）</li>
  <li>发货后短信/旺旺提醒（配合物流节点）</li>
  <li>优质服务自然获得好评（问题快速响应，主动追问体验）</li>
</ul>

<h3>差评处理SOP</h3>
<ol>
  <li><strong>第一时间响应</strong>（2小时内）：表达重视，了解问题</li>
  <li><strong>方案先行</strong>：提出解决方案（补发/退款/退换），不要先辩解</li>
  <li><strong>请求修改</strong>：解决问题后，礼貌请求买家考虑修改评价</li>
  <li><strong>平台申诉</strong>：确属违规差评（恶意差评/虚假差评），走平台申诉流程</li>
</ol>

<h3>客服转化技巧</h3>
<p>客服是人工转化环节，数据显示咨询转化率比非咨询高2-4倍：</p>
<ul>
  <li><strong>响应速度</strong>：30秒内回复比3分钟内回复转化率高40%</li>
  <li><strong>推荐逻辑</strong>：先确认需求再推荐，不要一开口就推最贵款</li>
  <li><strong>主动推送优惠</strong>：对犹豫用户，主动提供专属优惠券促成决策</li>
  <li><strong>售后即营销</strong>：售后处理完成后，询问是否需要其他商品，自然引导复购</li>
</ul>
`
      },
      {
        title: "7.4 A/B测试与数据驱动优化",
        content: `
<h3>为什么需要A/B测试？</h3>
<p>转化优化最大的陷阱是「主观判断」——你觉得「这张主图更好看」≠ 用户觉得更有购买欲。A/B测试用数据代替主观，是成熟电商团队的标配能力。</p>

<div class="callout callout-info">
  <strong>A/B测试本质</strong>：在相同时间窗口内，将流量随机分配给两个版本（A=当前版，B=改进版），用真实转化数据判断哪个更优。
</div>

<h3>电商中可测试的核心变量</h3>
<table class="data-table">
  <thead><tr><th>测试层级</th><th>测试变量</th><th>衡量指标</th><th>测试周期</th></tr></thead>
  <tbody>
    <tr><td>主图</td><td>模特图 vs 场景图 vs 产品图</td><td>CTR点击率</td><td>7-14天</td></tr>
    <tr><td>标题</td><td>功能词前置 vs 人群词前置</td><td>CTR + 点击质量（转化）</td><td>7-14天</td></tr>
    <tr><td>详情页首屏</td><td>痛点切入 vs 产品卖点切入</td><td>停留时长 + 加购率</td><td>14-21天</td></tr>
    <tr><td>价格展示</td><td>划线价 vs 会员价 vs 直接售价</td><td>转化率 + 客单价</td><td>7天</td></tr>
    <tr><td>促销形式</td><td>满减 vs 折扣 vs 买赠</td><td>转化率 + GMV</td><td>一个完整大促周期</td></tr>
  </tbody>
</table>

<h3>A/B测试的正确操作步骤</h3>
<ol>
  <li><strong>单变量原则</strong>：每次只改变一个变量（不能同时换主图+改标题），否则无法判断是哪个因素起了作用</li>
  <li><strong>设定假设</strong>：「我认为场景图主图会比白底图提升CTR 20%以上」——先有假设，再测试</li>
  <li><strong>确保样本量</strong>：每个版本至少需要500次点击（或100次转化）才能得出统计显著结论，样本不足则结论不可信</li>
  <li><strong>同期对照</strong>：A/B两版本必须同时运行，不能「这周跑A，下周跑B」（因为流量结构会变化）</li>
  <li><strong>评估显著性</strong>：版本差异>10%且样本充足时，结果才有参考价值；差异<5%视为无显著差别</li>
</ol>

<h3>淘宝/天猫A/B测试工具</h3>
<table class="data-table">
  <thead><tr><th>工具</th><th>功能</th><th>适用</th></tr></thead>
  <tbody>
    <tr><td>超级推荐「创意」测试</td><td>多图轮播，系统自动将流量向高CTR版本倾斜</td><td>主图A/B测试</td></tr>
    <tr><td>生意参谋「实验室」</td><td>可设置详情页版本分流</td><td>详情页A/B</td></tr>
    <tr><td>直通车创意组</td><td>上传多组创意，系统统计各组CTR和转化</td><td>广告创意优化</td></tr>
    <tr><td>手动分时段测试</td><td>同一天上午/下午各跑不同版本（简易版，精度低）</td><td>预算有限时</td></tr>
  </tbody>
</table>

<h3>数据驱动转化优化的工作节奏</h3>
<div class="info-card">
  <h4>推荐的月度优化循环</h4>
  <p><strong>第1周</strong>：数据诊断——找出当前漏斗中转化最差的节点（用「漏斗分析」定位瓶颈）</p>
  <p><strong>第2-3周</strong>：针对瓶颈设计改进版本，启动A/B测试</p>
  <p><strong>第4周</strong>：分析测试数据，将胜出版本全量上线；同时为下月测试设定新假设</p>
  <p>⚠️ 每次只解决一个瓶颈，不要试图同时优化所有环节</p>
</div>

<h3>转化率提升的「收益叠加」效应</h3>
<p>各环节微小改进的叠加效果惊人：</p>
<div class="formula-block">
  基础：CTR=3%，详情转化=2%，支付率=85% → 最终转化率 = 3%×2%×85% = <strong>0.051%</strong><br><br>
  优化后：CTR=3.6%(+20%)，详情转化=2.4%(+20%)，支付率=88%(+3%) → <strong>0.076%</strong><br>
  <strong>综合提升：+49%</strong>（三个环节各提升20%，综合效果接近翻倍）
</div>
`
      }
    ],
    keyMetrics: [
      { name: "支付转化率", benchmark: "服装3-5%，电器2-3%", meaning: "整体转化效率" },
      { name: "加购率", benchmark: ">8%", meaning: "意向用户比例" },
      { name: "好评率", benchmark: ">98%", meaning: "评价健康度" },
      { name: "客服响应时间", benchmark: "<2分钟", meaning: "服务及时性" },
      { name: "A/B测试胜出率", benchmark: ">50%", meaning: "每次测试改进成功率" }
    ],
    pitfalls: [
      "只关注展现量和点击量，忽视加购到下单的流失（这段损失最大）",
      "大促活动折扣过深，侵蚀利润，事后价格难以恢复",
      "差评处理不及时，雪球越滚越大",
      "客服按话术机械回答，不理解用户真实需求",
      "凭主观感觉做转化优化，不做A/B测试，改了反而更差"
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 模块 8
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 8,
    title: "订单履约与物流管理",
    icon: "🚚",
    color: "#ea580c",
    summary: "履约是服务体验的核心。本模块讲解发货标准与SLA、物流模式选择、仓配策略、退换货管理，帮助你在成本与体验之间找到最优解。",
    estimatedMinutes: 35,
    sections: [
      {
        title: "8.1 发货标准与SLA",
        content: `
<h3>发货时效的重要性</h3>
<p>发货时效直接影响：DSR物流分（影响搜索权重）+ 用户体验（影响好评率）+ 平台考核（影响参活资格）</p>

<h3>各平台发货SLA要求</h3>
<table class="data-table">
  <thead><tr><th>平台</th><th>标准发货时效</th><th>超时惩罚</th></tr></thead>
  <tbody>
    <tr><td>淘宝/天猫</td><td>下单后72小时内发货（非预售）</td><td>赔偿买家，影响DSR</td></tr>
    <tr><td>京东</td><td>自营当日达/次日达；POP 48小时</td><td>延迟赔付，影响评级</td></tr>
    <tr><td>拼多多</td><td>48小时发货，部分类目24小时</td><td>罚款+降权</td></tr>
    <tr><td>抖音</td><td>48小时</td><td>店铺分降低</td></tr>
  </tbody>
</table>

<h3>发货效率优化</h3>
<ul>
  <li><strong>备货充足</strong>：热销款保持3-5天备货量，避免缺货延发</li>
  <li><strong>批量打单</strong>：ERP系统批量生成发货单，减少手动操作</li>
  <li><strong>预打包</strong>：爆款预先包装，接单后直接贴单发货</li>
  <li><strong>揽收时间优化</strong>：与快递公司协商上午10点和下午4点两次揽收</li>
</ul>
`
      },
      {
        title: "8.2 物流方案选择",
        content: `
<h3>物流模式对比</h3>
<table class="data-table">
  <thead><tr><th>模式</th><th>适用场景</th><th>成本</th><th>时效</th></tr></thead>
  <tbody>
    <tr><td><strong>快递散单</strong></td><td>日销&lt;100单小卖家</td><td>首重5-8元</td><td>1-3天</td></tr>
    <tr><td><strong>月结协议快递</strong></td><td>日销100-500单</td><td>首重3-5元</td><td>1-3天</td></tr>
    <tr><td><strong>云仓+快递</strong></td><td>日销&gt;200单，需仓配</td><td>综合成本较高但效率高</td><td>当日/次日</td></tr>
    <tr><td><strong>全国仓布局</strong></td><td>日销&gt;1000单，全国覆盖</td><td>仓储成本高但物流费低</td><td>当日/次日</td></tr>
    <tr><td><strong>海外仓</strong></td><td>跨境电商</td><td>海外储存成本高</td><td>本地配送1-3天</td></tr>
  </tbody>
</table>

<h3>主流快递对比（国内）</h3>
<table class="data-table">
  <thead><tr><th>快递</th><th>优势</th><th>劣势</th><th>适用品类</th></tr></thead>
  <tbody>
    <tr><td>顺丰</td><td>时效最快，服务最好</td><td>价格最贵（首重12-18元）</td><td>高客单价、鲜食、重要文件</td></tr>
    <tr><td>京东物流</td><td>京东体系最快，自建仓网</td><td>需要入驻京东</td><td>京东商家首选</td></tr>
    <tr><td>极兔/韵达/圆通</td><td>价格最低（首重2.5-4元）</td><td>时效差异大</td><td>低客单价、下沉市场</td></tr>
    <tr><td>中通/申通</td><td>价格低，覆盖广</td><td>时效中等</td><td>通用品类</td></tr>
  </tbody>
</table>
`
      },
      {
        title: "8.3 退换货管理",
        content: `
<h3>退换货数据分析</h3>
<p>退换货不只是成本中心，更是产品问题的信号源：</p>
<ul>
  <li><strong>退换货率&lt;3%</strong>：正常水平</li>
  <li><strong>退换货率3-8%</strong>：需要分析原因，关注集中退货类型</li>
  <li><strong>退换货率&gt;8%</strong>：产品或描述存在系统性问题，紧急处理</li>
</ul>

<h3>退换货原因分类（优先级）</h3>
<ol>
  <li><strong>质量问题</strong>：根本问题，需要反映给供应链改进</li>
  <li><strong>与描述不符</strong>：主图/详情页夸大，需要修正内容</li>
  <li><strong>尺寸不合适</strong>：服装高频原因，需完善尺码表和推荐指引</li>
  <li><strong>7天无理由退换</strong>：消费者权益，无法避免，只能优化履约速度减少损耗</li>
</ol>

<h3>退换货处理SOP</h3>
<ol>
  <li>买家申请退货 → 24小时内确认，不拖延</li>
  <li>同意退货后，提供退货地址和包装指引</li>
  <li>收货验货 → 确认无质量问题外的二次损坏</li>
  <li>退款/换货 → 72小时内完成，超时会影响DSR</li>
  <li>退货商品评估 → 完好的可重新上架，有损坏的进行清仓处理</li>
</ol>

<p class="callout">💡 <strong>退货预防胜于处理</strong>：详细的尺码表可降低服装退货率30%；视频展示实际颜色/质感可降低"与描述不符"退货率50%。</p>
`
      },
      {
        title: "8.4 云仓与仓配一体化",
        content: `
<h3>什么时候需要云仓？</h3>
<p>自发货 → 云仓代发的临界点：当日均订单量超过200单时，自建仓储的人工和管理成本通常高于外包云仓。</p>

<table class="data-table">
  <thead><tr><th>对比维度</th><th>自发货（小规模）</th><th>云仓代发</th><th>品牌自建仓</th></tr></thead>
  <tbody>
    <tr><td>日均订单门槛</td><td>0-200单</td><td>200-5000单</td><td>5000单以上</td></tr>
    <tr><td>仓储成本</td><td>低（家/小仓库）</td><td>按货位/操作费计</td><td>固定成本高</td></tr>
    <tr><td>系统能力</td><td>无/简单ERP</td><td>WMS系统+多平台对接</td><td>定制化WMS</td></tr>
    <tr><td>扩张灵活性</td><td>低</td><td>高（按需扩仓）</td><td>低（建设周期长）</td></tr>
    <tr><td>时效</td><td>依赖个人效率</td><td>标准化24h发货</td><td>最快（自控）</td></tr>
  </tbody>
</table>

<h3>选择云仓的核心考量</h3>
<ol>
  <li><strong>覆盖仓网</strong>：仓库在哪几个城市？是否覆盖你的主要客群所在地？（仓库离买家越近，物流时效越快）</li>
  <li><strong>系统对接</strong>：支持哪些平台的订单自动推送？ERP对接是否顺畅？</li>
  <li><strong>操作准确率</strong>：漏发/错发率是多少？要求&lt;0.1%</li>
  <li><strong>异常处理</strong>：库存差异如何处理？退货入库周期多久？</li>
  <li><strong>收费模式</strong>：存储费（立方/天）+ 操作费（元/单）+ 包材费。要综合算总成本，不能只看操作费</li>
</ol>

<h3>仓配成本优化技巧</h3>
<ul>
  <li><strong>分仓布局</strong>：东西南北各一个仓，可覆盖全国次日达，物流成本降低15-25%</li>
  <li><strong>包材标准化</strong>：减少包装规格种类（从10种减到3种），降低包材单价和拣货出错率</li>
  <li><strong>预打包</strong>：爆款SKU提前打好包，平均操作时间从3分钟降至30秒</li>
  <li><strong>退货价值二次销售</strong>：建立退货检品流程，完好商品重新上架，降低净损失率</li>
</ul>
`
      }
    ],
    keyMetrics: [
      { name: "发货时效达成率", benchmark: ">98%", meaning: "履约可靠性" },
      { name: "退换货率", benchmark: "<5%", meaning: "产品与服务质量" },
      { name: "物流好评率", benchmark: ">95%", meaning: "物流体验评分" },
      { name: "DSR物流分", benchmark: ">4.7", meaning: "平台物流评分" }
    ],
    pitfalls: [
      "大促期间爆单后备货不足，发货延误引发大量差评",
      "只追求低物流成本，破损率高导致纠纷率上升",
      "退换货数据只关注金额损失，没有分析根本原因",
      "退款拖延超48小时，引发差评和平台投诉"
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 模块 9
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 9,
    title: "用户服务与口碑管理",
    icon: "⭐",
    color: "#ca8a04",
    summary: "口碑是最便宜的流量。本模块讲解DSR评分体系、差评预防与处理、纠纷管理、平台规则合规，帮助你建立健康的口碑生态。",
    estimatedMinutes: 35,
    sections: [
      {
        title: "9.1 DSR评分体系",
        content: `
<h3>DSR（Detail Seller Rating）三维评分</h3>
<table class="data-table">
  <thead><tr><th>维度</th><th>权重</th><th>评分来源</th><th>对运营影响</th></tr></thead>
  <tbody>
    <tr><td><strong>宝贝描述</strong></td><td>约35%</td><td>买家对"与描述是否相符"打分</td><td>搜索排名权重、参活资格</td></tr>
    <tr><td><strong>卖家服务</strong></td><td>约35%</td><td>买家对"卖家服务态度"打分</td><td>同上</td></tr>
    <tr><td><strong>物流服务</strong></td><td>约30%</td><td>买家对"发货/配送速度"打分</td><td>同上</td></tr>
  </tbody>
</table>

<p>各维度DSR均需维持在4.7分以上（满分5分），低于类目平均的-0.2分将触发降权。</p>

<h3>DSR快速提升方法</h3>
<ul>
  <li><strong>主动索评</strong>：发货后3-5天通过旺旺/短信提醒评价（不承诺好处）</li>
  <li><strong>包裹内附卡</strong>："如果您对商品满意，欢迎给我们5星好评"</li>
  <li><strong>解决问题速度</strong>：买家咨询2小时内回复可直接提升服务分</li>
  <li><strong>主动跟踪物流</strong>：遇到物流延误主动联系买家说明情况，预防差评</li>
</ul>
`
      },
      {
        title: "9.2 平台规则与合规",
        content: `
<h3>高风险违规行为（可能导致封店）</h3>
<ul>
  <li>刷单（虚假交易）</li>
  <li>售假/仿冒品</li>
  <li>虚假宣传（未经证实的功效宣称）</li>
  <li>强制好评/删除差评</li>
  <li>恶意竞争（投诉竞品）</li>
</ul>

<h3>常见违规扣分体系（天猫/淘宝）</h3>
<p>天猫实行积分制，年度积分超过12分进入整改期，超过48分直接关店。常见扣分：</p>
<ul>
  <li>商品描述夸大：2-6分/次</li>
  <li>虚假发货：2-4分/次</li>
  <li>不正当竞争：6-12分/次</li>
  <li>售假行为：12-48分，情节严重直接关店</li>
</ul>

<h3>平台活动资格维护</h3>
<p>参加双11/618等大促活动通常需要满足：</p>
<ul>
  <li>DSR各维度高于类目均值</li>
  <li>无严重违规记录（通常查询近90天）</li>
  <li>完善的质保和退换货服务</li>
  <li>达到最低销售额门槛（不同活动不同）</li>
</ul>
`
      },
      {
        title: "9.3 纠纷处理与口碑建设",
        content: `
<h3>买家纠纷三阶处理原则</h3>
<ol>
  <li><strong>协商解决（首选）</strong>：买卖双方协商，通常补偿+解释可解决80%纠纷</li>
  <li><strong>平台介入</strong>：协商不成，买家申请平台介入。平台会查看聊天记录，客服服务质量直接影响判定</li>
  <li><strong>司法途径</strong>：涉及金额大、明显欺诈，走法律程序</li>
</ol>

<h3>口碑建设长期策略</h3>
<ul>
  <li><strong>持续改进</strong>：每月分析TOP10差评关键词，推动产品和服务改进</li>
  <li><strong>UGC激励</strong>：鼓励买家晒图/发视频评价，真实买家秀比官方内容更有说服力</li>
  <li><strong>私域沉淀</strong>：将满意买家引导进微信群/关注公众号，建立长期互动关系</li>
  <li><strong>投诉快响应</strong>：投诉响应速度是口碑管理中最高优先级指标，&lt;2小时响应是基础要求</li>
</ul>
`
      },
      {
        title: "9.4 应对平台规则变化",
        content: `
<h3>为什么平台规则变化是经营风险？</h3>
<p>中国主要电商平台每年发布的规则更新公告通常超过50条。规则变化可能影响：佣金率、刷单处罚力度、搜索算法权重、活动报名门槛等。不关注规则的商家往往「无辜中招」。</p>

<h3>平台规则变化的类型与应对</h3>
<table class="data-table">
  <thead><tr><th>规则类型</th><th>典型案例</th><th>应对策略</th></tr></thead>
  <tbody>
    <tr><td>算法调整</td><td>搜索排名从「销量优先」改为「体验分优先」</td><td>提前优化DSR，不依赖单一算法信号</td></tr>
    <tr><td>佣金调整</td><td>某类目佣金从2%升至4%</td><td>提前纳入成本模型，同步调整定价</td></tr>
    <tr><td>违规处罚升级</td><td>刷单处罚从扣分改为直接封号</td><td>立刻停止违规操作，建立合规底线</td></tr>
    <tr><td>新功能/新流量入口</td><td>平台上线「逛逛」「好价频道」新流量位</td><td>快速学习申请，抓早期红利期</td></tr>
    <tr><td>活动门槛调整</td><td>参加双11需要店铺等级5钻以上</td><td>提前规划等级提升路径</td></tr>
  </tbody>
</table>

<h3>建立规则监控体系</h3>
<ol>
  <li><strong>官方渠道订阅</strong>：关注各平台「商家公告」页面/公众号（天猫商学院、京东商家、拼多多商家）</li>
  <li><strong>同行社群信息差</strong>：加入商家交流群，规则灰度测试期同行会率先发现和讨论</li>
  <li><strong>服务商预警</strong>：TP代运营服务商通常有规则情报系统，是重要信息来源</li>
  <li><strong>月度合规自查</strong>：每月检查一次店铺违规积分、DSR评分、活动参与资格，防患于未然</li>
</ol>

<h3>从「被动应对」到「主动利用」规则</h3>
<div class="info-card">
  <h4>规则红利捕捉方法</h4>
  <p>平台每次推出新功能（直播、短视频、逛逛、好价日历），前3个月通常处于「流量补贴期」——平台希望商家参与，会给予额外曝光支持。</p>
  <p><strong>机会信号</strong>：平台推新功能时主动尝试，这是成本最低的流量获取机会。</p>
  <p><strong>历史案例</strong>：早期参与淘宝直播的商家（2016-2018）获得了大量免费流量红利；早期做抖音小店的商家（2019-2020）享受了平台补贴的低成本流量。</p>
</div>
`
      }
    ],
    keyMetrics: [
      { name: "DSR宝贝描述", benchmark: ">4.7（高于类目均值）", meaning: "商品描述准确性" },
      { name: "DSR卖家服务", benchmark: ">4.7", meaning: "客服服务质量" },
      { name: "DSR物流服务", benchmark: ">4.7", meaning: "物流体验" },
      { name: "纠纷率", benchmark: "<0.5%", meaning: "服务风险水平" }
    ],
    pitfalls: [
      "用补偿换好评：违规，被抓到会被扣分甚至封号",
      "差评置之不理，导致口碑持续恶化形成恶性循环",
      "不定期检查违规记录，突然积分超标被降权措手不及",
      "平台规则年年更新，依赖旧经验操作"
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 模块 10
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 10,
    title: "复购与用户留存",
    icon: "🔄",
    color: "#16a34a",
    summary: "新客获取成本是老客维系成本的5-7倍。本模块讲解RFM用户分层模型、私域建设策略、会员体系设计，以及提升LTV的完整方法论。",
    estimatedMinutes: 50,
    sections: [
      {
        title: "10.1 RFM用户分层模型",
        content: `
<h3>RFM模型三维度</h3>
<table class="data-table">
  <thead><tr><th>维度</th><th>全称</th><th>含义</th><th>评分方式</th></tr></thead>
  <tbody>
    <tr><td><strong>R</strong></td><td>Recency（最近购买）</td><td>距离上次购买的天数</td><td>越近分越高（1-5分）</td></tr>
    <tr><td><strong>F</strong></td><td>Frequency（购买频率）</td><td>统计周期内购买次数</td><td>次数越多分越高</td></tr>
    <tr><td><strong>M</strong></td><td>Monetary（消费金额）</td><td>统计周期内总消费额</td><td>金额越大分越高</td></tr>
  </tbody>
</table>

<h3>八类用户分层与运营策略</h3>
<table class="data-table">
  <thead><tr><th>类型</th><th>RFM特征</th><th>运营策略</th></tr></thead>
  <tbody>
    <tr><td>🌟 重要价值用户</td><td>R高、F高、M高</td><td>VIP专属服务，优先参与新品内测，维系关系</td></tr>
    <tr><td>💎 重要发展用户</td><td>R高、F低、M高</td><td>提高购买频率，推荐互补品类，交叉销售</td></tr>
    <tr><td>⚡ 重要保持用户</td><td>R低、F高、M高</td><td>唤醒流失，发放高价值优惠券，了解流失原因</td></tr>
    <tr><td>⏰ 重要挽留用户</td><td>R低、F低、M高</td><td>重度唤醒，发送个性化优惠，直接沟通</td></tr>
    <tr><td>🚀 一般价值用户</td><td>R高、F高、M低</td><td>提高客单价，推荐升级款/套装</td></tr>
    <tr><td>📈 一般发展用户</td><td>R高、F低、M低</td><td>建立习惯，会员积分激励</td></tr>
    <tr><td>🔔 一般保持用户</td><td>R低、F高、M低</td><td>内容推送，保持品牌存在感</td></tr>
    <tr><td>❄️ 流失用户</td><td>R低、F低、M低</td><td>低成本唤醒（短信/邮件），ROI差则放弃</td></tr>
  </tbody>
</table>
`
      },
      {
        title: "10.2 私域建设策略",
        content: `
<h3>私域vs公域：核心差别</h3>
<ul>
  <li><strong>公域流量</strong>（平台）：每次触达需要付费，平台随时可以提价或规则改变</li>
  <li><strong>私域流量</strong>（微信/企微/短信）：一次建立，可重复免费触达</li>
</ul>

<p class="callout">💡 私域的本质是把平台上的"租来的用户"变成"自己的用户"。一个微信粉丝价值约是淘宝粉丝的5-10倍（触达率：微信&gt;40% vs 淘宝&lt;5%）。</p>

<h3>私域引流转化路径</h3>
<ol>
  <li><strong>包裹卡</strong>：最高效的私域引流工具。关键设计：①明确利益点（"加微信领10元无门槛券"）②简单操作（二维码+一步操作）③符合平台规则（不得诱导跳出平台）</li>
  <li><strong>客服转化</strong>：售后跟进时自然引导加微信（"有问题随时加我"）</li>
  <li><strong>活动页面</strong>：店铺活动页引导关注公众号/加企微</li>
</ol>

<h3>私域运营体系（企业微信版）</h3>
<table class="data-table">
  <thead><tr><th>工具</th><th>用途</th><th>最佳运营频率</th></tr></thead>
  <tbody>
    <tr><td>企微好友</td><td>1对1个性化服务</td><td>按需触达，不滥发</td></tr>
    <tr><td>微信群（社群）</td><td>批量触达+互动</td><td>每周3-5条有价值内容</td></tr>
    <tr><td>公众号</td><td>内容种草+促销通知</td><td>每周1-2篇</td></tr>
    <tr><td>视频号</td><td>直播转化+内容分发</td><td>每周1-2次直播</td></tr>
    <tr><td>小程序</td><td>商城+会员积分</td><td>无限制，按需使用</td></tr>
  </tbody>
</table>
`
      },
      {
        title: "10.3 会员体系设计",
        content: `
<h3>会员体系的三个核心价值</h3>
<ol>
  <li><strong>激励复购</strong>：积分/等级制度让用户有动力持续消费</li>
  <li><strong>用户分层</strong>：区分高价值用户，给予差异化服务</li>
  <li><strong>数据沉淀</strong>：会员注册获取真实用户信息，支持精准营销</li>
</ol>

<h3>会员等级设计参考</h3>
<table class="data-table">
  <thead><tr><th>等级</th><th>门槛（年消费）</th><th>权益</th></tr></thead>
  <tbody>
    <tr><td>🥉 普通会员</td><td>注册即享</td><td>生日优惠券、新品优先提醒</td></tr>
    <tr><td>🥈 银卡会员</td><td>≥500元</td><td>9.5折优惠、专属客服、免运费</td></tr>
    <tr><td>🥇 金卡会员</td><td>≥2000元</td><td>9折优惠、优先发货、专属活动</td></tr>
    <tr><td>💎 钻石会员</td><td>≥5000元</td><td>8.5折、一对一服务、新品试用</td></tr>
  </tbody>
</table>

<h3>积分体系设计原则</h3>
<ul>
  <li><strong>获取容易</strong>：购买、评价、邀请好友都能获得积分</li>
  <li><strong>消耗值钱</strong>：100积分≥1元现金价值（过低则无激励效果）</li>
  <li><strong>有限期</strong>：积分设有效期（12-24个月），制造使用紧迫感</li>
  <li><strong>可视化进度</strong>：显示距离下一等级还差多少，激励升级</li>
</ul>
`
      },
      {
        title: "10.4 LTV提升与流失预测",
        content: `
<h3>LTV（用户生命周期价值）计算</h3>
<div class="formula-block">
  <p><strong>LTV = 平均客单价 × 年购买频次 × 平均留存年数 × 毛利率</strong></p>
  <p>示例：客单价150元 × 年购3次 × 留存2年 × 毛利40% = <strong>360元LTV</strong></p>
</div>

<p>LTV是一切用户获取决策的基准：CAC（获客成本）应 &lt; LTV × 30%，即上例中CAC应 &lt;108元。</p>

<h3>流失预测与预防</h3>
<p>用户流失信号（应触发召回）：</p>
<ul>
  <li>超过平均购买间隔的1.5倍未购买（如平均30天买一次，45天未购视为风险用户）</li>
  <li>打开推送但不点击（兴趣下降信号）</li>
  <li>客服咨询后未下单（体验可能有问题）</li>
</ul>

<h3>复购率提升的关键杠杆点</h3>
<table class="data-table">
  <thead><tr><th>杠杆点</th><th>操作</th><th>预期效果</th></tr></thead>
  <tbody>
    <tr><td>首单体验极致化</td><td>首单用户超预期包装+手写感谢卡</td><td>二次购买率提升20-30%</td></tr>
    <tr><td>复购时机触发</td><td>根据品类消耗周期，精准时间推送补货提醒</td><td>复购率提升15-25%</td></tr>
    <tr><td>配件/耗材关联</td><td>主品+耗材模式，主品是钩子，耗材是复购引擎</td><td>LTV提升50-100%</td></tr>
    <tr><td>订阅制</td><td>固定周期自动下单（咖啡、宠物粮最适合）</td><td>复购率提升至90%+</td></tr>
  </tbody>
</table>

<p class="callout">🏆 <strong>终极目标</strong>：用新客的生命周期前3个月的利润覆盖获客成本（回本），用第4个月开始的复购产生纯利润。这是可持续电商业务的核心模型。</p>
`
      }
    ],
    keyMetrics: [
      { name: "复购率", benchmark: ">30%（成熟品牌）", meaning: "用户忠诚度" },
      { name: "LTV/CAC比值", benchmark: ">3", meaning: "商业模式健康度" },
      { name: "私域用户月活率", benchmark: ">20%", meaning: "私域运营质量" },
      { name: "会员消费占比", benchmark: ">50%总GMV", meaning: "会员体系价值" }
    ],
    pitfalls: [
      "私域引流违规操作（明确跳出平台），被平台封号",
      "会员积分价值设计过低，没有实质激励效果",
      "把所有用户一视同仁推同样的内容，导致用户屏蔽/退群",
      "只关注新客获取，忽视老客维系，陷入「倒水桶」困境"
    ]
  }
];

// 模块获取方法
function getModule(id) {
  return COURSE_MODULES.find(m => m.id === id);
}

function getAllModules() {
  return COURSE_MODULES;
}
