/**
 * diagnoseData.js — 项目诊断案例库
 * 每个案例含：背景描述、关键数据、正确卡点、详细解析
 */

const DIAGNOSE_CASES = [
  {
    id: 1,
    title: "女装店铺：流量好但卖不动",
    difficulty: 1,
    category: "转化问题",
    background: `某女装淘宝C店运营6个月，主营20-50元快时尚，供应商稳定，已积累300+评价。`,
    metrics: [
      { label: "日均展现量", value: "15,000次", status: "good" },
      { label: "主图点击率（CTR）", value: "4.2%（类目均值2.8%）", status: "good" },
      { label: "详情页转化率", value: "0.8%（类目均值3.5%）", status: "bad" },
      { label: "加购率", value: "3.1%（类目均值8%）", status: "bad" },
      { label: "好评率", value: "97.5%", status: "good" },
      { label: "退货率", value: "4.2%", status: "ok" },
      { label: "复购率", value: "18%", status: "ok" },
      { label: "直通车ROI", value: "1.8（毛利率40%，盈亏线2.5）", status: "bad" }
    ],
    options: [
      { id: "a", text: "卡在【流量获取】—— 展现量不足，需要加大付费推广" },
      { id: "b", text: "卡在【内容运营/转化】—— 详情页未能说服用户，转化率远低于均值" },
      { id: "c", text: "卡在【供应链】—— 产品质量有问题导致退货率高" },
      { id: "d", text: "卡在【口碑管理】—— 好评率不足导致用户不信任" }
    ],
    answer: "b",
    explanation: `
<h3>核心卡点：内容运营（详情页转化）</h3>
<p><strong>证据链：</strong></p>
<ul>
  <li>CTR=4.2%（高于均值50%）→ 主图很好，流量获取不是问题</li>
  <li>展现量15000→点击量≈630 → 但转化率仅0.8% → 600个进店用户只有约5人下单</li>
  <li>加购率3.1%（均值8%）→ 用户进店后兴趣迅速下降，说明详情页失去了用户的信任或兴趣</li>
  <li>好评率97.5%、退货率4.2% → 产品本身OK，不是质量问题</li>
</ul>

<p><strong>根本原因分析：</strong></p>
<p>最可能的问题：详情页内容与主图制造的期待不符（主图吸引力强但详情页平淡），或者详情页未能有效呈现卖点、建立信任。</p>

<p><strong>处方：</strong></p>
<ol>
  <li>重新设计详情页：前3屏必须直击目标用户核心痛点（例：「显瘦」「气质穿搭」）</li>
  <li>增加真实场景模特图（多角度/多场景），减少白底图</li>
  <li>加入尺码建议（减少尺寸顾虑，也能提升加购率）</li>
  <li>增加用户晒图区（社会认同）</li>
  <li>ROI低是因为转化率低导致的，转化率改善后ROI自然提升，暂不需要调整广告</li>
</ol>`,
    chainLink: 5  // 对应模块5内容运营
  },

  {
    id: 2,
    title: "家电新品牌：广告花了不少，赚不到钱",
    difficulty: 2,
    category: "盈利问题",
    background: `某品牌空气炸锅，在天猫运营，客单价298元，已投入6个月，月GMV 60万元。`,
    metrics: [
      { label: "月GMV", value: "60万元", status: "ok" },
      { label: "月销量", value: "约2000单", status: "ok" },
      { label: "直通车ROI", value: "3.2（毛利率35%，盈亏线2.86）", status: "good" },
      { label: "营销费用占销售额比例", value: "38%", status: "bad" },
      { label: "退货率", value: "8.5%", status: "bad" },
      { label: "客服纠纷率", value: "1.8%", status: "bad" },
      { label: "好评率", value: "92.3%", status: "bad" },
      { label: "月净利润", value: "-3.2万元（亏损）", status: "bad" }
    ],
    options: [
      { id: "a", text: "卡在【流量获取】—— 广告ROI不够高，需要优化投放" },
      { id: "b", text: "卡在【选品/定价】—— 客单价太低，毛利率不支撑现有成本" },
      { id: "c", text: "卡在【履约/服务/口碑】—— 高退货率+高纠纷率+低好评率形成恶性循环，侵蚀利润" },
      { id: "d", text: "卡在【私域/复购】—— 没有做复购运营" }
    ],
    answer: "c",
    explanation: `
<h3>核心卡点：履约质量与口碑管理</h3>
<p><strong>证据链：</strong></p>
<ul>
  <li>直通车ROI=3.2 > 盈亏线2.86 → 广告本身是赚钱的，不是广告问题</li>
  <li>但营销费用占38%（正常应10-20%）→ 说明营销费用结构异常，可能有大量低效营销支出</li>
  <li>退货率8.5%（正常<5%）→ 每10单有将近1单退货，直接损失：退货处理成本+物流费+商品折损</li>
  <li>纠纷率1.8%（正常<0.5%）→ 大量客服资源被消耗在纠纷处理上</li>
  <li>好评率92.3%（正常应>98%）→ 差评率约7.7%，严重影响自然流量和转化率</li>
</ul>

<p><strong>成本损耗计算：</strong></p>
<p>月GMV 60万，退货率8.5% → 月退货约51000元（GMV损失）+ 往返物流（约5100元）+ 纠纷赔付 → 总体实际损耗约8-10万元/月，这解释了为何亏损。</p>

<p><strong>根本原因（需调查）：</strong></p>
<ul>
  <li>产品质量问题（最可能）：8.5%退货率通常说明产品存在功能缺陷或质量不稳定</li>
  <li>或描述严重夸大：「与描述不符」导致退货</li>
</ul>

<p><strong>处方：</strong></p>
<ol>
  <li>立即暂停扩大营销，先解决退货率问题</li>
  <li>分析退货原因：联系近30天退货用户了解问题</li>
  <li>若是产品问题：与工厂整改，可能需要暂停发货等待品控改善</li>
  <li>若是描述问题：立即修正主图和详情页，确保内容与实物一致</li>
  <li>退货率降至5%以下后，业务将自然转为盈利</li>
</ol>`,
    chainLink: 8  // 模块8履约/模块9口碑
  },

  {
    id: 3,
    title: "食品品牌：首单很多，但卖一次就没了",
    difficulty: 2,
    category: "复购问题",
    background: `某健康零食品牌，主打有机坚果，天猫店铺。产品口碑极好，DSR各项均4.9分。`,
    metrics: [
      { label: "月新客数量", value: "3000人", status: "good" },
      { label: "月老客复购数量", value: "180人", status: "bad" },
      { label: "复购率（90天）", value: "6%（行业均值25-35%）", status: "bad" },
      { label: "DSR综合评分", value: "4.92（优秀）", status: "good" },
      { label: "好评率", value: "99.1%", status: "good" },
      { label: "客单价", value: "158元", status: "ok" },
      { label: "直通车ROI", value: "2.6", status: "ok" },
      { label: "私域微信粉丝", value: "约120人（累计）", status: "bad" }
    ],
    options: [
      { id: "a", text: "卡在【选品】—— 零食不是刚需，用户买一次就够了" },
      { id: "b", text: "卡在【流量获取】—— 新客足够但整体量不大" },
      { id: "c", text: "卡在【复购/用户留存】—— 缺乏私域建设和复购触发机制" },
      { id: "d", text: "卡在【内容运营】—— 详情页没有表达产品价值" }
    ],
    answer: "c",
    explanation: `
<h3>核心卡点：复购/用户留存</h3>
<p><strong>证据链：</strong></p>
<ul>
  <li>DSR4.92、好评率99.1% → 产品和服务都非常好，用户满意</li>
  <li>月新客3000人但复购仅180人 → 说明用户体验过产品认可产品，但没有被「留住」的机制</li>
  <li>复购率6% vs 行业均值25-35% → 差距巨大，不是产品问题</li>
  <li>私域粉丝仅120人（运营多久不明，但相对月销3000新客这个比例极低）→ 几乎没有建立私域触达能力</li>
</ul>

<p><strong>坚果是典型的复购品类分析：</strong></p>
<p>有机坚果消耗周期约15-30天/包，满意的用户本应在30天后复购。复购率仅6%说明：用户「想买但没被提醒」或「找不到再次购买的理由」（没有专属折扣/会员积分体系）。</p>

<p><strong>处方：</strong></p>
<ol>
  <li>立即启动包裹引流：每个包裹内附卡（加企微领10元复购券），目标转化率5-10%</li>
  <li>建立消耗周期触发：购买后25-28天推送「快吃完了吗？补货优惠」</li>
  <li>会员积分体系：每次购买积分，积分换货，让用户有「不用白不用」的动力</li>
  <li>坚果订阅制：「每月固定配送，8折优惠」，目标将20%用户转为订阅</li>
  <li>预期效果：复购率从6%提升至20%+，CAC摊薄至合理水平</li>
</ol>`,
    chainLink: 10
  },

  {
    id: 4,
    title: "3C配件：卖得多但选错了平台",
    difficulty: 2,
    category: "平台策略问题",
    background: `某手机壳商家，主要在淘宝运营，单价9.9-19.9元，月销1万单，已稳定运营2年。`,
    metrics: [
      { label: "月销量", value: "10000单", status: "good" },
      { label: "客单价", value: "12元", status: "bad" },
      { label: "毛利率", value: "45%", status: "ok" },
      { label: "月毛利润", value: "约5.4万元", status: "ok" },
      { label: "直通车费用", value: "月3.5万元", status: "bad" },
      { label: "退款/售后成本", value: "月0.6万元", status: "ok" },
      { label: "净利润", value: "约1.3万元（净利率约10%）", status: "bad" },
      { label: "拼多多竞品价格", value: "同款5.9-8.9元月销5万单", status: "bad" }
    ],
    options: [
      { id: "a", text: "卡在【选品】—— 手机壳市场太饱和，应该换品类" },
      { id: "b", text: "卡在【供应链】—— 采购成本太高导致毛利不足" },
      { id: "c", text: "卡在【平台选择/定价策略】—— 在淘宝用高运营成本打价格敏感品类，结构性亏损" },
      { id: "d", text: "卡在【流量获取】—— 直通车预算不够，需要继续加投" }
    ],
    answer: "c",
    explanation: `
<h3>核心卡点：平台选择策略</h3>
<p><strong>证据链：</strong></p>
<ul>
  <li>月毛利5.4万，但直通车费用3.5万（占毛利65%！）→ 获客成本极高</li>
  <li>净利1.3万元（净利率约10%）→ 在薄利多销模型下，任何成本波动都危险</li>
  <li>拼多多同款价格5.9-8.9元（本店价格9.9-19.9元）→ 说明下沉市场已被极低价竞争者占据</li>
  <li>手机壳是标准化低价快消品，淘宝的搜索流量成本在标准化品类上极高</li>
</ul>

<p><strong>结构性问题：</strong></p>
<p>手机壳是典型的「价格敏感+标准化」品类，用户不需要「内容种草」，只需要「价格最低」。在这样的品类上，淘宝的高获客成本（直通车）是结构性不匹配——拼多多的低佣金率（0.6%）+社交裂变流量才是这类品类的最优平台。</p>

<p><strong>处方：</strong></p>
<ol>
  <li>不是「换品类」，而是「换策略」：</li>
  <li>选项A：在淘宝做差异化升级（定制款/IP联名/高端材质），客单价提至50元+，才能支撑淘宝的运营成本</li>
  <li>选项B：同款商品进入拼多多，利用极低佣金率和自然流量，以量取胜</li>
  <li>选项C：两者并行，淘宝做高端差异化，拼多多做走量清库存</li>
  <li>短期不应继续加大淘宝直通车投入</li>
</ol>`,
    chainLink: 4
  },

  {
    id: 5,
    title: "新品爆款：排名起来了，但一个月后急速下跌",
    difficulty: 3,
    category: "可持续增长问题",
    background: `某保温杯新品，通过直通车+小红书种草快速起量，上线第3周冲到类目前10，但第5周起排名开始崩塌。`,
    metrics: [
      { label: "第1-3周销量趋势", value: "50→200→600单/天（快速上升）", status: "good" },
      { label: "第4-6周销量趋势", value: "600→420→180单/天（快速下跌）", status: "bad" },
      { label: "直通车预算", value: "第3周起从5000元/天削减至500元/天", status: "bad" },
      { label: "自然流量占比", value: "高峰期80%付费，20%自然", status: "bad" },
      { label: "平均好评率", value: "98.8%", status: "good" },
      { label: "库存情况", value: "第4周断货3天后补货", status: "bad" },
      { label: "复购情况", value: "无（保温杯低频品类）", status: "ok" }
    ],
    options: [
      { id: "a", text: "卡在【选品】—— 保温杯市场饱和，注定无法持续" },
      { id: "b", text: "卡在【流量获取策略】—— 过度依赖付费流量，削减预算+断货导致权重崩塌" },
      { id: "c", text: "卡在【转化优化】—— 详情页质量下降了" },
      { id: "d", text: "卡在【供应链】—— 工厂交货慢" }
    ],
    answer: "b",
    explanation: `
<h3>核心卡点：流量获取策略（过度依赖付费+断货双重打击）</h3>
<p><strong>证据链：</strong></p>
<ul>
  <li>80%付费流量 → 自然流量基础极弱，商品权重本质上是「买」来的，不是「积累」来的</li>
  <li>直通车从5000元/天降至500元（削减90%）→ 流量立即崩塌，自然流量无法填补缺口</li>
  <li>断货3天 → 平台算法检测到「库存为0+无法发货」，商品排名权重被大幅下调</li>
  <li>两个打击叠加 → 排名崩塌，平台给新流量机会减少，进入恶性循环</li>
</ul>

<p><strong>平台权重的本质：</strong></p>
<p>权重=平台对「这个商品能给用户带来好体验并为平台创造收入」的预期。付费流量撑起的销量，平台权重会打折扣（算法知道是广告流量）；自然转化权重更高。断货使平台认为商家「不可靠」，权重主动降低。</p>

<p><strong>正确的起量策略：</strong></p>
<ol>
  <li>新品期付费流量占比不应超过50%，同步要积累自然转化</li>
  <li>削减广告前确保自然流量已占40%+，否则不可轻易削减</li>
  <li>大促期（高流量期）前45天必须备足库存，绝不断货</li>
  <li>权重崩塌后恢复：需要重新投入广告「续命」，并以新品推荐词重新上升，耗时2-4周</li>
</ol>`,
    chainLink: 6
  },

  {
    id: 6,
    title: "品牌商家：天猫好但抖音起不来",
    difficulty: 3,
    category: "多平台策略问题",
    background: `某家居品牌，天猫旗舰店GMV 300万/月，运营成熟。老板决定进攻抖音，投入3个月，效果很差。`,
    metrics: [
      { label: "天猫月GMV", value: "300万元（成熟）", status: "good" },
      { label: "抖音投入时间", value: "3个月", status: "ok" },
      { label: "抖音短视频发布量", value: "12条（月均4条）", status: "bad" },
      { label: "短视频内容类型", value: "产品白底图转视频+促销信息", status: "bad" },
      { label: "抖音月GMV", value: "8000元", status: "bad" },
      { label: "抖音账号粉丝数", value: "320人", status: "bad" },
      { label: "视频完播率", value: "均值8%", status: "bad" },
      { label: "是否有达人合作", value: "无", status: "bad" }
    ],
    options: [
      { id: "a", text: "卡在【选品】—— 家居品类在抖音不适合" },
      { id: "b", text: "卡在【内容运营】—— 内容形式完全不适配抖音平台逻辑，且投入量严重不足" },
      { id: "c", text: "卡在【流量获取】—— 没有付费推广抖音账号" },
      { id: "d", text: "卡在【平台搭建】—— 抖音小店没有开通" }
    ],
    answer: "b",
    explanation: `
<h3>核心卡点：内容运营（完全不适配抖音逻辑）</h3>
<p><strong>证据链：</strong></p>
<ul>
  <li>完播率仅8%（优秀应>30%）→ 用户几乎立即划走，内容没有吸引力</li>
  <li>内容是「白底图转视频+促销信息」→ 这是典型的「把天猫详情页搬到抖音」的错误，抖音用户不接受广告式内容</li>
  <li>月均4条视频 → 抖音账号冷启动需要每周5-7条内容，4条/月远远不足</li>
  <li>无达人合作 → 家居品类在抖音的成功路径通常是「达人探店/真实使用场景」内容，而非品牌自制广告</li>
</ul>

<p><strong>家居品类在抖音的正确姿势：</strong></p>
<ul>
  <li>内容方向：「家居改造前后对比」「小空间收纳技巧」「家居好物种草」类生活方式内容，不是产品广告</li>
  <li>发布频率：每周5-7条，前3个月是冷启动期，不应期待GMV</li>
  <li>达人矩阵：优先找家居/生活类腰部达人（粉丝10-100万）做CPS合作，低风险高效率</li>
  <li>直播：稳定的品牌直播（每周3次）配合内容账号，是家居品类在抖音最成功的路径</li>
</ul>

<p><strong>结论：</strong>不是抖音不适合家居，而是团队在用淘宝的内容逻辑做抖音，根本逻辑不匹配。</p>`,
    chainLink: 5
  },

  {
    id: 7,
    title: "农产品卖家：大促期间遭遇「双重打击」",
    difficulty: 2,
    category: "履约危机问题",
    background: `某大米品牌卖家，618大促前预测销量500单/天，实际爆发到1200单/天，出现系列问题。`,
    metrics: [
      { label: "大促日实际销量", value: "1200单/天（预测500单）", status: "good" },
      { label: "备货量", value: "15000斤（按500单×15天备）", status: "bad" },
      { label: "发货延迟情况", value: "第2天开始，平均发货时间72小时→168小时", status: "bad" },
      { label: "客服响应时间", value: "从30分钟延长至6小时+", status: "bad" },
      { label: "大促后差评率", value: "单月差评量是正常月份8倍", status: "bad" },
      { label: "DSR物流分变化", value: "从4.85下降至4.62（低于阈值4.7）", status: "bad" },
      { label: "退款申请量", value: "正常月份3倍", status: "bad" }
    ],
    options: [
      { id: "a", text: "卡在【选品】—— 大米是低利润品类，不值得做大促" },
      { id: "b", text: "卡在【供应链+履约】—— 备货严重不足+发货能力未扩充，爆单变成了负资产" },
      { id: "c", text: "卡在【流量获取】—— 大促期间流量太多导致系统崩溃" },
      { id: "d", text: "卡在【复购留存】—— 没有提前建立私域用户池" }
    ],
    answer: "b",
    explanation: `
<h3>核心卡点：供应链备货+履约能力</h3>
<p><strong>证据链：</strong></p>
<ul>
  <li>备货15000斤按500单规划，实际需求1200单 → 第13天断货（15000÷1200≈12.5天）</li>
  <li>发货时间从72小时延长至168小时（7天）→ 严重违反平台SLA，必然触发大量差评</li>
  <li>客服6小时以上响应 → 客服人员严重不足，未做弹性扩容</li>
  <li>差评率暴增×8、DSR跌破阈值4.7 → 这次大促的短期GMV增长会换来未来3个月的权重下滑</li>
</ul>

<p><strong>大促备货的正确计算：</strong></p>
<p>大促备货量 = 日均销量×安全系数×预测活动天数 × 弹性系数（1.5-2.0）</p>
<p>此案例：500单×15天×2.0弹性=15000单（而非15000斤）。显然原来的备货规划忽视了爆发弹性。</p>

<p><strong>大促后续处理：</strong></p>
<ol>
  <li>紧急联系供应商追加库存，优先处理积压订单</li>
  <li>主动联系所有受影响买家，提供补偿（优惠券/赠品），争取撤销差评</li>
  <li>申请平台关怀政策（部分平台大促期间异常情况可申请DSR保护）</li>
  <li>接受这次大促实际上是「亏本大促」，教训：大促备货宁多勿少，客服宁早扩容</li>
</ol>`,
    chainLink: 8
  },

  {
    id: 8,
    title: "跨境卖家：回到国内却水土不服",
    difficulty: 3,
    category: "市场洞察问题",
    background: `某卖家长期做亚马逊，产品是儿童益智玩具，决定回国做淘宝，沿用亚马逊的产品和打法。`,
    metrics: [
      { label: "亚马逊月GMV", value: "50万元（成熟稳定）", status: "good" },
      { label: "淘宝开店时间", value: "4个月", status: "ok" },
      { label: "淘宝月GMV", value: "2.8万元", status: "bad" },
      { label: "产品价格", value: "298-498元（亚马逊定价直接换算人民币）", status: "bad" },
      { label: "国内竞品价格", value: "同类产品29-99元（不同品牌）", status: "bad" },
      { label: "CTR", value: "1.1%（均值2.5%）", status: "bad" },
      { label: "详情页风格", value: "英文直接机翻中文，图片风格西方化", status: "bad" },
      { label: "目标人群定位", value: "未重新调研，沿用海外中产家长定位", status: "bad" }
    ],
    options: [
      { id: "a", text: "卡在【供应链】—— 国内供应链成本比海外高" },
      { id: "b", text: "卡在【需求洞察+内容运营】—— 未重新调研国内市场，产品定价和内容完全不适配国内消费者认知" },
      { id: "c", text: "卡在【流量获取】—— 国内电商平台竞争比亚马逊激烈" },
      { id: "d", text: "卡在【平台选择】—— 应该在拼多多而非淘宝" }
    ],
    answer: "b",
    explanation: `
<h3>核心卡点：需求洞察+内容运营（市场认知缺失）</h3>
<p><strong>证据链：</strong></p>
<ul>
  <li>定价298-498元，国内竞品29-99元 → 价格高出5-10倍，国内消费者感知价值不支撑如此溢价</li>
  <li>CTR=1.1%（均值2.5%）→ 主图的西方化风格对中国用户缺乏视觉共鸣</li>
  <li>详情页机翻风格 → 中国用户阅读体验差，且产品卖点叙事不符合国内父母的关注点（国内强调「早教/智力开发」，海外强调「创造力/快乐玩耍」）</li>
  <li>未做国内需求调研 → 既不了解竞品格局，也不了解国内父母的决策逻辑</li>
</ul>

<p><strong>根本原因：</strong></p>
<p>海外成功经验不能直接平移到国内。海外和国内在消费能力、价格敏感度、审美偏好、购买决策路径上有巨大差异。</p>

<p><strong>处方：</strong></p>
<ol>
  <li>重新做国内需求调研：分析淘宝同类商品热销款，读差评、看搜索词</li>
  <li>重新定价：研究竞品价格带，考虑是否能在99-199元区间做「高质价比」定位</li>
  <li>重做内容：重新制作中国市场主图（突出适龄特点/认知发展/颜色刺激），用中国场景（国内亲子场景）</li>
  <li>可以将「海外销量」作为差异化背书：「同款在欧美畅销」是真实的社会认同</li>
</ol>`,
    chainLink: 1
  },

  {
    id: 9,
    title: "直播电商：场均GMV下滑50%找不到原因",
    difficulty: 3,
    category: "内容流量问题",
    background: `某美妆品牌抖音直播间，稳定运营8个月，月GMV曾达到180万。近2个月GMV下滑至约90万，运营团队找不到原因。`,
    metrics: [
      { label: "2个月前场均GMV", value: "6万元/场", status: "good" },
      { label: "当前场均GMV", value: "3万元/场（下滑50%）", status: "bad" },
      { label: "付费流量投入", value: "未变化（维持1万元/场）", status: "ok" },
      { label: "直播内容/话术", value: "团队反映未变化", status: "ok" },
      { label: "粉丝量", value: "从42万增长至58万（+38%）", status: "good" },
      { label: "直播间UV（进场人数）", value: "从8000→9500人/场（+19%）", status: "good" },
      { label: "UV价值", value: "从7.5元→3.2元（-57%）", status: "bad" },
      { label: "竞品动态", value: "同品类3家新直播间崛起，播放量超越本品", status: "bad" }
    ],
    options: [
      { id: "a", text: "卡在【流量获取】—— 付费流量不够，需要加大千川投放" },
      { id: "b", text: "卡在【内容运营/产品竞争力】—— UV价值从7.5降至3.2，说明进场用户不买，是选品/话术/竞品竞争问题" },
      { id: "c", text: "卡在【供应链】—— 产品质量下降" },
      { id: "d", text: "卡在【口碑管理】—— 差评增多影响直播间信任" }
    ],
    answer: "b",
    explanation: `
<h3>核心卡点：内容运营/选品竞争力下降</h3>
<p><strong>证据链：</strong></p>
<ul>
  <li>UV从8000→9500（+19%）→ 进场人数不减反增，流量不是问题</li>
  <li>UV价值从7.5→3.2元（-57%）→ 同样多的人进直播间，但买的比例大幅下降</li>
  <li>粉丝增长38%但GMV下滑50% → 新粉质量差，或现有选品/价格对用户吸引力降低</li>
  <li>同品类3家新竞争直播间崛起 → 用户有了更多选择，本品的「价格锚点」和「独特卖点」优势被稀释</li>
</ul>
<p><strong>根本原因分析：</strong></p>
<p>「内容未变化」是最危险的认知——竞争环境变化了，你的内容相对竞品变弱了。用户进入直播间发现竞品有更好的价格或更吸引人的活动，UV价值自然崩塌。</p>
<p><strong>处方：</strong></p>
<ol>
  <li>立即分析竞品直播间：他们在卖什么价格、什么品、什么话术，找到你被截流的具体产品</li>
  <li>更换/升级「镇场款」（直播间最有吸引力的引流品），恢复价格竞争力</li>
  <li>测试新话术节奏：老话术适应新竞争环境需要迭代，尝试更强逼单节奏或新的场景呈现方式</li>
  <li>加大投放不是解法——UV价值低的情况下加投只是亏更多钱</li>
</ol>`,
    chainLink: 6
  },

  {
    id: 10,
    title: "新品牌天猫：钱花了，排名起不来",
    difficulty: 2,
    category: "搜索流量问题",
    background: `某护肤品新品牌，天猫旗舰店开店5个月，产品品质不错（好评率98.5%），但自然搜索排名始终在第3页以后。`,
    metrics: [
      { label: "开店时间", value: "5个月", status: "ok" },
      { label: "月均直通车费用", value: "4万元/月", status: "ok" },
      { label: "直通车ROI", value: "2.8（毛利率38%，盈亏线2.63）", status: "good" },
      { label: "自然搜索排名", value: "核心词第3页以后（&gt;60名）", status: "bad" },
      { label: "自然流量占比", value: "8%（付费流量92%）", status: "bad" },
      { label: "好评率", value: "98.5%", status: "good" },
      { label: "月销量趋势", value: "平稳约400单/月，无明显增长", status: "bad" },
      { label: "投放关键词策略", value: "主要投品牌词+大类目词（如「护肤品套装」）", status: "bad" }
    ],
    options: [
      { id: "a", text: "卡在【选品/产品】—— 产品不够好，市场不需要" },
      { id: "b", text: "卡在【流量获取策略】—— 直通车投大词但销量未累积，应先用精准尾部词建立权重" },
      { id: "c", text: "卡在【转化优化】—— 详情页转化率低导致平台不给权重" },
      { id: "d", text: "卡在【供应链】—— 备货不足影响排名" }
    ],
    answer: "b",
    explanation: `
<h3>核心卡点：直通车策略错误（大词起量逻辑错误）</h3>
<p><strong>证据链：</strong></p>
<ul>
  <li>好评率98.5%、ROI合格 → 产品和转化OK，不是产品问题</li>
  <li>5个月自然流量仅8% → 搜索权重没有建立起来</li>
  <li>月销400单平稳不增长 → 在大词上排名靠后、竞争激烈，销量不足以拉升权重</li>
  <li>主投「护肤品套装」这类大词 → 竞争极激烈，新品质量分低，每次点击成本高且不精准，无法积累精准转化权重</li>
</ul>
<p><strong>权重积累逻辑：</strong></p>
<p>新品期正确路径：先找搜索量1000-5000的精准尾部词（如「敏感肌修复面霜国货」），用精准词获得高转化率→提升质量分→向中部词延伸→最终在大词上有竞争力。</p>
<p><strong>处方：</strong></p>
<ol>
  <li>暂停大词投放，聚焦20-30个精准尾部词（搜索量1000-8000，与产品高度相关）</li>
  <li>精准词出价可以高一些（为了抢排名），但总预算不变</li>
  <li>持续2-4周，观察精准词的搜索自然排名是否在提升</li>
  <li>当精准词自然排名进前20后，逐步拓展到中部词</li>
  <li>预期3个月后自然流量占比可达30%+</li>
</ol>`,
    chainLink: 6
  },

  {
    id: 11,
    title: "老品牌转型：线下品牌做电商亏钱",
    difficulty: 3,
    category: "商业模式问题",
    background: `某有20年历史的线下家居品牌，年销售额1.5亿（线下），两年前进军天猫，投入大量资源，电商至今每月亏损15-20万。`,
    metrics: [
      { label: "线下年销售", value: "1.5亿（成熟稳定）", status: "good" },
      { label: "天猫月GMV", value: "约200万元", status: "ok" },
      { label: "电商毛利率", value: "35%（与线下相同定价体系）", status: "ok" },
      { label: "月营销费用", value: "约90万元（占GMV 45%！）", status: "bad" },
      { label: "月人力+运营成本", value: "约15万", status: "ok" },
      { label: "月净利润", value: "-15至-20万元", status: "bad" },
      { label: "产品策略", value: "与线下完全相同的SKU，定价与线下同步", status: "bad" },
      { label: "竞品定价", value: "线上同类竞品定价比本品低25-40%", status: "bad" }
    ],
    options: [
      { id: "a", text: "卡在【流量获取】—— 家居品类电商竞争太激烈，流量太贵" },
      { id: "b", text: "卡在【选品/定价策略】—— 用线下价格体系做线上市场，价格无竞争力，营销费用占比45%是不可持续的结构性问题" },
      { id: "c", text: "卡在【内容运营】—— 详情页不够好" },
      { id: "d", text: "卡在【供应链】—— 线下品牌供应链不适合线上" }
    ],
    answer: "b",
    explanation: `
<h3>核心卡点：线上定价策略错误（用线下逻辑做线上）</h3>
<p><strong>证据链：</strong></p>
<ul>
  <li>营销费用90万/月 = GMV的45% → 这说明严重依赖付费流量，用户不会主动搜索该品牌买</li>
  <li>竞品比本品便宜25-40% → 线下品牌的渠道成本（经销商/铺货/门店）叠加到定价中，线上竞争没有优势</li>
  <li>毛利35%，营销占45% → 结构上必然亏损，与运营能力无关</li>
</ul>
<p><strong>线下品牌上线的经典困境：</strong></p>
<p>线下价格=成本+线下渠道费用（经销商、物流、门店）+利润。直接搬到线上，价格比纯线上品牌高30-40%，但用户在电商平台上有便捷比价工具，高价直接导致点击率低、转化率低、获客成本奇高。</p>
<p><strong>处方（战略性调整，非运营层面）：</strong></p>
<ol>
  <li>开发「线上专供款」：设计电商独有SKU（不同尺寸/配色/套装），避免与线下直接比价</li>
  <li>线上定价独立：专供款可以定比竞品高10-20%（而非40%），利用品牌溢价</li>
  <li>降低营销依赖：通过品牌词和老客户私域建立自然复购，目标营销费用降至GMV的20%以内</li>
  <li>短期可以接受亏损，但需要设定「12个月内营销占比降至25%」的KPI，否则停止</li>
</ol>`,
    chainLink: 4
  },

  {
    id: 12,
    title: "小红书品牌：种草很多，销售转化很差",
    difficulty: 2,
    category: "跨平台承接问题",
    background: `某国产香水品牌，小红书笔记总曝光量超过500万，品牌词搜索量增长明显，但天猫店铺月GMV仅8万元。`,
    metrics: [
      { label: "小红书笔记总曝光", value: "超500万次（6个月积累）", status: "good" },
      { label: "小红书品牌词搜索量增长", value: "+280%（品牌词）", status: "good" },
      { label: "天猫月GMV", value: "8万元", status: "bad" },
      { label: "天猫品牌词搜索排名", value: "第1位（自然排名好）", status: "good" },
      { label: "天猫商品详情转化率", value: "1.2%（均值3.5%）", status: "bad" },
      { label: "天猫主图风格", value: "简洁欧式风格（白底+Logo）", status: "bad" },
      { label: "天猫评价数量", value: "仅47条", status: "bad" },
      { label: "定价", value: "228-388元/支", status: "ok" }
    ],
    options: [
      { id: "a", text: "卡在【需求洞察】—— 香水市场太小" },
      { id: "b", text: "卡在【内容运营/转化承接】—— 小红书种草成功但天猫转化率极低（1.2%），详情页未能承接种草用户的期待" },
      { id: "c", text: "卡在【流量获取】—— 需要在天猫加大直通车投放" },
      { id: "d", text: "卡在【供应链】—— 香水品质有问题" }
    ],
    answer: "b",
    explanation: `
<h3>核心卡点：内容运营——天猫端转化承接断裂</h3>
<p><strong>证据链：</strong></p>
<ul>
  <li>品牌词搜索量+280% → 种草成功，大量用户被内容激发去搜索</li>
  <li>天猫品牌词排名第1 → 用户搜到了，点进来了</li>
  <li>但天猫转化率1.2%（均值3.5%）→ 进店用户没有买单！</li>
  <li>主图是「简洁欧式白底+Logo」→ 与小红书上那些充满故事性、情绪感的种草内容完全脱节</li>
  <li>仅47条评价 → 用户不放心下单（香水228-388元，无评价撑不起信任）</li>
</ul>
<p><strong>种草-收割断裂的本质：</strong></p>
<p>用户被小红书「香气、情绪、故事」的种草内容打动，来到天猫期待看到同样的「情绪共鸣」，却看到一张冷冰冰的白底产品图——期待落差导致离开。</p>
<p><strong>处方：</strong></p>
<ol>
  <li>重做天猫主图：从「产品图」改为「情绪场景图」，与小红书种草风格一致（故事性、氛围感）</li>
  <li>详情页首屏：展示最有共鸣的种草评语或KOL评价，承接种草用户的情绪</li>
  <li>快速积累评价：邀请已购老客晒单，目标先到200条以上</li>
  <li>在天猫页面嵌入小红书UGC（用户晒单图）：最强信任背书</li>
  <li>预期：转化率从1.2%提升至3%，月GMV可达20万+</li>
</ol>`,
    chainLink: 5
  }
,

  {
    id: 13,
    title: "拼多多商家：价格越打越低，终于亏钱了",
    difficulty: 2,
    category: "盈利问题",
    background: `某厨房用品商家在拼多多经营2年，主营不粘锅（出厂价38元）。初入时定价79元，利润良好。后来竞争加剧，现定价49元，月销5000单但利润转负。`,
    metrics: [
      { label: "当前定价", value: "49元", status: "bad" },
      { label: "出厂成本", value: "38元", status: "bad" },
      { label: "平台佣金+推广费", value: "约9元/单", status: "bad" },
      { label: "包装+快递", value: "5元/单", status: "bad" },
      { label: "单单利润", value: "-3元（每卖一单亏3元）", status: "bad" },
      { label: "月销量", value: "5,000单", status: "good" },
      { label: "仅退款率", value: "8.2%（行业均值4%）", status: "bad" },
      { label: "差评率", value: "3.1%", status: "bad" }
    ],
    options: [
      { id: "a", text: "卡在【供应链】—— 出厂成本太高，需要压缩至25元以下才能盈利" },
      { id: "b", text: "卡在【选品策略】—— 陷入价格战内卷，需要重新定位差异化产品或转换平台/渠道" },
      { id: "c", text: "卡在【流量获取】—— 推广费占比太高，停掉付费广告就能盈利" },
      { id: "d", text: "卡在【口碑管理】—— 差评率高导致降权，需先处理口碑再提价" }
    ],
    answer: "b",
    explanation: `
<h3>核心卡点：选品策略——陷入无差异化价格战</h3>
<p><strong>成本结构拆解：</strong></p>
<table style="width:100%;border-collapse:collapse;margin:12px 0;">
  <tr style="background:#fee2e2"><th style="padding:6px;border:1px solid #fca5a5">项目</th><th style="padding:6px;border:1px solid #fca5a5">金额</th></tr>
  <tr><td style="padding:6px;border:1px solid #e5e7eb">售价</td><td style="padding:6px;border:1px solid #e5e7eb">49元</td></tr>
  <tr><td style="padding:6px;border:1px solid #e5e7eb">出厂成本</td><td style="padding:6px;border:1px solid #e5e7eb">-38元</td></tr>
  <tr><td style="padding:6px;border:1px solid #e5e7eb">平台费+推广</td><td style="padding:6px;border:1px solid #e5e7eb">-9元</td></tr>
  <tr><td style="padding:6px;border:1px solid #e5e7eb">包材+快递</td><td style="padding:6px;border:1px solid #e5e7eb">-5元</td></tr>
  <tr style="background:#fee2e2"><td style="padding:6px;border:1px solid #fca5a5"><strong>单单利润</strong></td><td style="padding:6px;border:1px solid #fca5a5"><strong>-3元</strong></td></tr>
</table>
<p><strong>为什么不是「压供应链成本」能解决的？</strong></p>
<ul>
  <li>即使出厂压到30元（压缩8元），单单利润也只有+5元，月盈利2.5万 — 对应5000单的运营投入而言回报极低</li>
  <li>仅退款率8.2%（行业均值2倍）→ 低价吸引来的是价格敏感用户，退款多、差评多，形成恶性循环</li>
  <li>拼多多平台机制：价格越低 → 曝光越多 → 销量越多 → 但低价吸引的是最难服务的客群</li>
</ul>
<p><strong>根本诊断：</strong>陷入同质化内卷，用「杀敌一千自损八百」的方式抢销量，商业模型已不可持续。</p>
<p><strong>处方（两条路选一条）：</strong></p>
<ol>
  <li><strong>产品升级路线</strong>：开发差异化版本（例：带盖不粘锅礼盒装，定价128元），在同一平台推高客单价SKU，老款维持销量作引流款</li>
  <li><strong>渠道迁移路线</strong>：相同产品转移到天猫/京东，同规格产品在这些平台有89-119元的价格带，毛利率可达35%+，配合品质内容营销</li>
  <li><strong>短期止损</strong>：立即停止49元款的付费推广，仅保留自然流量，减少每月现金消耗</li>
</ol>
<p><strong>关键公式提醒：</strong>ROI盈亏线 = 1 ÷ 毛利率。当前毛利率 = (49-38)/49 = 22.4%，盈亏线ROI = 4.46 — 几乎不可能达到。</p>`,
    chainLink: 2  // 对应模块2选品策略
  },

  {
    id: 14,
    title: "美妆品牌私域：加了5000个微信，群全部静默",
    difficulty: 2,
    category: "复购/留存",
    background: `某国货护肤品牌在淘宝经营，年销约1500万。过去1年积极导流私域，累计5个微信群（共4800人）、企业微信好友3200人。但月复购GMV仅3万元，私域几乎无贡献。`,
    metrics: [
      { label: "私域总人数", value: "微信群4,800人 + 企微3,200人", status: "good" },
      { label: "私域月GMV贡献", value: "3万元（占总GMV 0.2%）", status: "bad" },
      { label: "群月均消息数", value: "12条（全为品牌单向推送）", status: "bad" },
      { label: "群内用户回复率", value: "<1%", status: "bad" },
      { label: "私域用户购买转化率", value: "0.6%（行业健康值5-8%）", status: "bad" },
      { label: "每月推送内容类型", value: "100%促销/新品广告", status: "bad" },
      { label: "淘宝整体复购率", value: "23%（尚可）", status: "ok" },
      { label: "产品NPS", value: "+42（用户认可产品）", status: "good" }
    ],
    options: [
      { id: "a", text: "卡在【流量获取】—— 5000人太少，需要继续扩大私域人数至5万人以上" },
      { id: "b", text: "卡在【复购/留存运营】—— 私域运营逻辑错误：把用户当广告受众而非社群成员，需要从「推销群」改为「价值群」" },
      { id: "c", text: "卡在【选品】—— 产品复购属性弱，护肤品消耗周期太长不适合私域" },
      { id: "d", text: "卡在【平台搭建】—— 应该从微信迁移到企业微信SCRM系统" }
    ],
    answer: "b",
    explanation: `
<h3>核心卡点：复购留存——私域运营方向性错误</h3>
<p><strong>证据链：</strong></p>
<ul>
  <li>产品NPS=+42 → 用户喜欢产品，不是选品问题</li>
  <li>淘宝整体复购率23% → 说明有真实复购需求</li>
  <li>但私域购买转化率0.6% → 同样的用户，在私域里几乎不买</li>
  <li>群消息100%促销 + 回复率<1% → 用户已将群设置为「免打扰」，品牌声音彻底消失</li>
</ul>
<p><strong>根本原因：把私域当「免费广告位」</strong></p>
<p>用户加群的初衷是「获取价值」（护肤知识、优先购买权、专属福利），但实际体验是每天被广告轰炸。人类大脑会自动屏蔽无关信息——群变成了垃圾消息来源，而不是价值来源。</p>
<p><strong>处方：将「促销群」改造为「价值群」</strong></p>
<ol>
  <li><strong>内容结构重建（7:2:1原则）</strong>：
    <ul>
      <li>70% 价值内容：护肤科普、成分解析、季节护肤指南、用户晒单互动</li>
      <li>20% 互动内容：群内投票（下期新品选香调）、护肤问答、UGC征集</li>
      <li>10% 促销内容：群专属优惠，且要做成「限时专属感」而非常规促销</li>
    </ul>
  </li>
  <li><strong>群分层管理</strong>：按购买次数分「新客群/活跃群/VIP群」，VIP群提供真正差异化权益（如新品试用资格）</li>
  <li><strong>激活沉默用户</strong>：发起「护肤日记打卡」活动，送小样，重新激活群内互动</li>
  <li><strong>预期目标</strong>：3个月内私域转化率从0.6%提升至4%，月GMV从3万提升至20万+</li>
</ol>
<p><strong>衡量指标变化</strong>：关注群内互动率（目标>10%）、私域复购间隔（目标缩短20%）</p>`,
    chainLink: 10  // 对应模块10复购留存
  },

  {
    id: 15,
    title: "天猫新品：上架10天，自然搜索流量为零",
    difficulty: 1,
    category: "流量获取",
    background: `某品牌方在天猫开设旗舰店，新品「胶原蛋白饮料」于10天前上架。目前站外小红书/微博有一定种草铺垫，但天猫店铺自然搜索流量每天不足30个UV，直接影响新品销售计划。`,
    metrics: [
      { label: "上架天数", value: "10天", status: "ok" },
      { label: "天猫自然搜索UV/天", value: "28（目标300+）", status: "bad" },
      { label: "累计销量", value: "11单（含内购）", status: "bad" },
      { label: "累计评价数", value: "3条", status: "bad" },
      { label: "主关键词排名", value: "「胶原蛋白饮料」第68页", status: "bad" },
      { label: "标题优化", value: "仅含品牌词+核心词，无长尾词", status: "bad" },
      { label: "直通车是否开启", value: "未开启", status: "bad" },
      { label: "站外种草UV引入", value: "约200UV/天（转化率5.5%）", status: "good" }
    ],
    options: [
      { id: "a", text: "卡在【需求洞察】—— 胶原蛋白饮料市场需求不足，应换赛道" },
      { id: "b", text: "卡在【流量获取——新品冷启动】—— 销量/评价基础为零导致搜索权重极低，需要系统性的冷启动方案" },
      { id: "c", text: "卡在【内容运营】—— 主图点击率太低，更换主图即可解决" },
      { id: "d", text: "卡在【平台搭建】—— 天猫旗舰店等级不够，需要等级提升后才有自然流量" }
    ],
    answer: "b",
    explanation: `
<h3>核心卡点：流量获取——新品冷启动基础未建立</h3>
<p><strong>天猫搜索排名机制（新品视角）：</strong></p>
<p>天猫搜索系统给新品排名的核心信号优先级：<strong>销量 > 转化率 > 评价数 > 关键词相关性</strong></p>
<p>11单销量 + 3条评价 → 系统判定「用户对此商品兴趣极低」→ 主关键词第68页 → 自然流量为零 → 形成负向循环。</p>
<p><strong>新品冷启动的破局逻辑：</strong></p>
<div class="callout callout-warning">新品前30天是「权重建立期」，必须用「人为干预」快速积累销量和评价信号，让算法认为这是一款有市场需求的商品。</div>
<p><strong>处方（分阶段冷启动计划）：</strong></p>
<ol>
  <li><strong>第1-7天：基础信号建立</strong>
    <ul>
      <li>内部测单（合规范围内）：完成30-50单基础销量</li>
      <li>邀请种子用户（老客、员工、供应商）购买并留真实评价，目标20条评价</li>
      <li>优化宝贝标题：加入「精准长尾词」（如「胶原蛋白饮料 女 美白 抗糖」），放弃首周竞争核心大词</li>
    </ul>
  </li>
  <li><strong>第8-14天：付费助推</strong>
    <ul>
      <li>开启直通车（日预算300-500元），投「精准长尾词」，目标ROI≥1.5</li>
      <li>利用站外种草已有的200UV/天，在详情页设「好评返现」引导评价积累</li>
    </ul>
  </li>
  <li><strong>第15-30天：搜索权重冲刺</strong>
    <ul>
      <li>销量达100+、评价达50+后，系统开始给予更多自然流量</li>
      <li>此时可以开始竞争「胶原蛋白饮料」核心词</li>
    </ul>
  </li>
</ol>
<p><strong>关键认知</strong>：站外种草（200UV/天，转化5.5%）是非常好的信号，说明产品有市场。当前问题100%是「平台内冷启动机制未激活」，不是需求或产品问题。</p>`,
    chainLink: 6  // 对应模块6流量获取
  },

  {
    id: 16,
    title: "达人带货：花了5万块，销售额8千元",
    difficulty: 2,
    category: "流量获取",
    background: `某新锐护肤品牌首次尝试达人营销，找了5位粉丝量50-200万的「美妆博主」投放，总坑位费+佣金支出5万元。30天后核算：可追踪销售额仅8千元，ROI=0.16。品牌方认为「达人带货根本不管用」。`,
    metrics: [
      { label: "达人合作总费用", value: "50,000元", status: "bad" },
      { label: "可追踪销售额", value: "8,000元（ROI=0.16）", status: "bad" },
      { label: "5位达人类型", value: "3位娱乐/剧情博主，2位美妆博主", status: "bad" },
      { label: "平均播放量", value: "每条视频约85,000次", status: "ok" },
      { label: "视频内容形式", value: "5条均为品牌硬广（30秒贴片式）", status: "bad" },
      { label: "落地页评价数", value: "天猫详情页仅21条评价", status: "bad" },
      { label: "商品链接点击率", value: "约1.8%（行业优质达人≥4%）", status: "bad" },
      { label: "产品客单价", value: "198元（高决策成本品类）", status: "ok" }
    ],
    options: [
      { id: "a", text: "卡在【需求洞察】—— 护肤品达人营销本来就不适合这个价位" },
      { id: "b", text: "卡在【流量获取——达人选择与内容策略】—— 达人类型错配+内容形式纯广告+承接页面薄弱，三重失误叠加" },
      { id: "c", text: "卡在【平台搭建】—— 应该做抖音小店而不是导流到天猫" },
      { id: "d", text: "卡在【复购/留存】—— 首购转化无问题，问题是没有复购" }
    ],
    answer: "b",
    explanation: `
<h3>核心卡点：流量获取——达人营销三重失误</h3>
<p><strong>失误一：达人类型错配（最根本问题）</strong></p>
<ul>
  <li>3位「娱乐/剧情博主」的粉丝关注的是内容娱乐性，与「护肤决策」几乎零关联</li>
  <li>5万元中，估计3-3.5万花在了娱乐博主身上 → 这部分几乎100%无效</li>
  <li>正确选择：垂直「成分党/护肤测评」KOL，粉丝数可以更少（5-30万），但受众精准度高10倍</li>
</ul>
<p><strong>失误二：内容形式纯广告（用户立即划走）</strong></p>
<ul>
  <li>5条视频全为30秒品牌硬广 → 抖音/小红书用户会立即划走，完播率极低</li>
  <li>正确做法：达人用自己的语言做「真实测评」「使用前后对比」，品牌信息自然融入</li>
  <li>参考数据：测评类内容点击转化率通常是硬广的3-5倍</li>
</ul>
<p><strong>失误三：承接页面薄弱（前功尽弃）</strong></p>
<ul>
  <li>21条评价 + 客单价198元 → 高决策成本品类，评价不足时用户不敢下单</li>
  <li>即便达人内容做好了，进店后因信任缺失而流失</li>
</ul>
<p><strong>正确的达人营销方法论：</strong></p>
<ol>
  <li><strong>漏斗匹配原则</strong>：头部达人（100万+）做品牌曝光；腰部达人（10-50万）做种草测评；素人（1000-5万）做UGC背书铺量</li>
  <li><strong>先铺底层，再放头部</strong>：先用50-100篇素人测评建立评价基础，再投腰部达人，最后考虑头部</li>
  <li><strong>内容原则</strong>：达人用自己风格说产品，不要给脚本</li>
  <li><strong>归因方法</strong>：给每个达人专属优惠码或UTM链接，才能准确追踪ROI</li>
</ol>
<p><strong>复盘结论</strong>：这5万块不是「达人营销无效」，是「无效的达人营销」。同样预算，用对方法可以做到ROI 3-5。</p>`,
    chainLink: 6  // 对应模块6流量获取
  },

  {
    id: 17,
    title: "天猫旗舰店：DSR评分3项全降，搜索排名消失",
    difficulty: 2,
    category: "口碑管理",
    background: `某家居品牌天猫旗舰店，半年前月GMV约300万，DSR评分4.85/4.82/4.87。近3个月快速扩充SKU（从80款增至350款），月GMV升至480万，但DSR三项评分全面下滑至4.62/4.58/4.65，搜索自然流量下降45%。`,
    metrics: [
      { label: "宝贝描述评分", value: "4.62（下降0.23，低于均值）", status: "bad" },
      { label: "卖家服务评分", value: "4.58（下降0.24，低于均值）", status: "bad" },
      { label: "物流速度评分", value: "4.65（下降0.22，低于均值）", status: "bad" },
      { label: "自然搜索流量变化", value: "-45%（3个月内）", status: "bad" },
      { label: "退货率", value: "从3.1%升至7.8%", status: "bad" },
      { label: "客服响应时间", value: "平均4.2分钟（增加前1.8分钟）", status: "bad" },
      { label: "SKU数量变化", value: "80款 → 350款（4.4倍）", status: "bad" },
      { label: "仓库发货时效", value: "从24h升至54h平均时效", status: "bad" }
    ],
    options: [
      { id: "a", text: "卡在【需求洞察】—— 家居品类竞争太激烈，DSR下滑是行业现象" },
      { id: "b", text: "卡在【口碑管理】—— SKU快速扩充导致供应链、客服、仓储能力跟不上，全链路体验下降拖垮DSR" },
      { id: "c", text: "卡在【流量获取】—— 需要加大直通车投放对冲自然流量下滑" },
      { id: "d", text: "卡在【选品策略】—— 新增的270款产品选品有问题，应该全部下架" }
    ],
    answer: "b",
    explanation: `
<h3>核心卡点：口碑管理——规模扩张速度超出运营能力</h3>
<p><strong>因果链分析：</strong></p>
<div style="background:#fef9c3;padding:12px;border-left:4px solid #eab308;border-radius:4px;margin:12px 0;">
  SKU扩4.4倍 → 仓库复杂度激增 → 发货时效从24h→54h → 物流评分↓<br>
  SKU扩4.4倍 → 部分新品描述不准确/图片不符 → 退货率7.8% → 宝贝描述评分↓<br>
  SKU扩4.4倍 → 客服咨询量暴增 → 响应时间4.2分钟 → 卖家服务评分↓<br>
  三项DSR全低于均值 → 天猫搜索降权 → 自然流量-45%
</div>
<p><strong>DSR对搜索排名的影响机制：</strong></p>
<ul>
  <li>天猫搜索将DSR作为重要排名因子：3项均高于行业均值 → 加权；低于均值 → 降权</li>
  <li>当前状态：3项全低于均值 → 三重降权叠加 → 自然流量腰斩</li>
  <li>注意：加大直通车投放能带来付费流量，但不能修复DSR，是「治标」而非「治本」</li>
</ul>
<p><strong>处方（分优先级）：</strong></p>
<ol>
  <li><strong>立即止血（1-2周）</strong>：暂停新SKU上架；下架质量投诉集中的TOP20问题SKU</li>
  <li><strong>物流修复</strong>：临时增加仓储人员或外包分仓，目标将发货时效恢复至24h以内</li>
  <li><strong>客服扩容</strong>：增加2-3名客服，目标响应时间回到2分钟以内</li>
  <li><strong>描述核查</strong>：逐一核对新增270款SKU的描述与实物一致性，修正不准确描述</li>
  <li><strong>主动维护DSR</strong>：对近期差评主动联系买家解决，合规范围内邀请修改评价</li>
  <li><strong>中期原则</strong>：SKU扩张速度 ≤ 运营能力扩张速度。每增加50款SKU，检查一次各项能力指标</li>
</ol>
<p><strong>关键认知</strong>：GMV从300万涨到480万是表面繁荣，但DSR全降+搜索流量-45%说明正在「吃老本」。若不修复，3个月后自然流量可能再降50%，GMV将大幅萎缩。</p>`,
    chainLink: 9  // 对应模块9口碑管理
  },

  {
    id: 18,
    title: "双11大促：GMV达标了，利润是负的",
    difficulty: 3,
    category: "盈利问题",
    background: `某服装天猫店参加双11，GMV目标200万，最终完成218万，超额完成。但大促结束后财务核算发现：当月净利润为-12万元，而平时月份净利润约+8万元。老板非常困惑：「为什么卖得越多亏得越多？」`,
    metrics: [
      { label: "大促GMV", value: "218万元（超额完成目标）", status: "good" },
      { label: "大促净利润", value: "-12万元（平时+8万/月）", status: "bad" },
      { label: "平均折扣力度", value: "6.5折（平时9折）", status: "bad" },
      { label: "退货率", value: "34%（平时11%）", status: "bad" },
      { label: "实收GMV（扣退货后）", value: "约144万元", status: "bad" },
      { label: "大促期付费推广费用", value: "38万元（占GMV 17.4%）", status: "bad" },
      { label: "临时快递费溢价", value: "+0.8元/单（旺季加价）", status: "bad" },
      { label: "毛利率（正常定价）", value: "45%", status: "ok" }
    ],
    options: [
      { id: "a", text: "卡在【选品策略】—— 参加大促的商品选错了，应该选高毛利品" },
      { id: "b", text: "卡在【转化优化】—— 大促页面转化率不够高，需要提高转化来摊薄成本" },
      { id: "c", text: "卡在【大促策略/盈利模型】—— 折扣过深导致毛利率崩塌，高退货率让实收GMV腰斩，推广费率失控，三重因素叠加致亏损" },
      { id: "d", text: "卡在【履约物流】—— 快递涨价是主因，换快递公司即可解决" }
    ],
    answer: "c",
    explanation: `
<h3>核心卡点：大促盈利模型——三重亏损因素叠加</h3>
<p><strong>利润拆解还原：</strong></p>
<table style="width:100%;border-collapse:collapse;margin:12px 0;font-size:13px;">
  <tr style="background:#f3f4f6"><th style="padding:8px;border:1px solid #d1d5db;text-align:left">项目</th><th style="padding:8px;border:1px solid #d1d5db">金额</th><th style="padding:8px;border:1px solid #d1d5db">说明</th></tr>
  <tr><td style="padding:6px;border:1px solid #e5e7eb">表面GMV</td><td style="padding:6px;border:1px solid #e5e7eb;text-align:center">+218万</td><td style="padding:6px;border:1px solid #e5e7eb">看起来很好</td></tr>
  <tr style="background:#fef2f2"><td style="padding:6px;border:1px solid #e5e7eb">退货扣减（34%）</td><td style="padding:6px;border:1px solid #e5e7eb;text-align:center">-74万</td><td style="padding:6px;border:1px solid #e5e7eb">实收仅144万</td></tr>
  <tr><td style="padding:6px;border:1px solid #e5e7eb">商品成本（6.5折后毛利≈24%）</td><td style="padding:6px;border:1px solid #e5e7eb;text-align:center">-109万</td><td style="padding:6px;border:1px solid #e5e7eb">折扣压缩毛利</td></tr>
  <tr style="background:#fef2f2"><td style="padding:6px;border:1px solid #e5e7eb">付费推广费</td><td style="padding:6px;border:1px solid #e5e7eb;text-align:center">-38万</td><td style="padding:6px;border:1px solid #e5e7eb">大促必须抢位</td></tr>
  <tr><td style="padding:6px;border:1px solid #e5e7eb">平台佣金+快递+运营</td><td style="padding:6px;border:1px solid #e5e7eb;text-align:center">-9万</td><td style="padding:6px;border:1px solid #e5e7eb">快递旺季溢价</td></tr>
  <tr style="background:#fef2f2;font-weight:bold"><td style="padding:6px;border:1px solid #fca5a5">净利润</td><td style="padding:6px;border:1px solid #fca5a5;text-align:center">-12万</td><td style="padding:6px;border:1px solid #fca5a5">亏损</td></tr>
</table>
<p><strong>三重死亡螺旋：</strong></p>
<ol>
  <li><strong>折扣过深</strong>：6.5折 → 正常毛利45%被压缩至≈24%，ROI盈亏线从2.2升至4.2，几乎不可能达到</li>
  <li><strong>退货率爆炸</strong>：大促期冲动购买比例高，34%退货（平时11%）→ 实收缩水33%，但推广费已花出去收不回来</li>
  <li><strong>推广费失控</strong>：大促期竞价激烈，38万推广费基于218万GMV设计，但实收只有144万 → 实际推广费率26%</li>
</ol>
<p><strong>大促盈利公式（重要）：</strong></p>
<div style="background:#eff6ff;padding:12px;border-radius:6px;font-family:monospace;margin:12px 0;">
  大促净利 = 实收GMV × (折后毛利率 - 推广费率 - 平台费率 - 物流费率)<br>
  实收GMV = 表面GMV × (1 - 退货率)<br>
  折后毛利率 = 1 - 成本/(折扣力度×原价)
</div>
<p><strong>处方（下次大促前必做）：</strong></p>
<ol>
  <li><strong>设定最低折扣底线</strong>：基于成本倒推，本案例最低折扣应为7.5折（才能保证毛利率≥35%）</li>
  <li><strong>预测退货率并纳入模型</strong>：服装大促退货率历史约28-35%，预算必须按实收GMV而非表面GMV计算</li>
  <li><strong>推广费封顶</strong>：设定推广费/实收GMV上限（建议≤12%），超过则降低出价</li>
  <li><strong>部分商品不参与大促</strong>：核心利润款保持正常价，引流款才做大折扣，保护整体毛利结构</li>
</ol>`,
    chainLink: 7  // 对应模块7转化优化（大促策略）
  },

  {
    id: 19,
    title: "速卖通新品牌：烧了8万广告费，一单未出",
    difficulty: 3,
    category: "流量获取",
    background: `某国内3C配件制造商首次尝试跨境电商，在速卖通（AliExpress）开店，主营手机支架（出厂价15元，定价$12.99）。前3个月开通站内CPC广告，日预算$100，累计花费约8万元人民币，但实际成交订单仅3单（均为测试订单）。老板认为「跨境电商根本不赚钱」。`,
    metrics: [
      { label: "广告累计花费", value: "约¥80,000（$11,000）", status: "bad" },
      { label: "实际成交订单", value: "3单（均为内部测试）", status: "bad" },
      { label: "商品Listing语言", value: "中文标题+机翻英文描述", status: "bad" },
      { label: "产品主图", value: "白底工厂图，无使用场景", status: "bad" },
      { label: "店铺评价数", value: "0条", status: "bad" },
      { label: "广告关键词设置", value: "仅投「phone holder」（月搜索量极高竞争激烈）", status: "bad" },
      { label: "目标市场设置", value: "全球（未区分市场）", status: "bad" },
      { label: "竞品同类定价", value: "$8.99-$15.99（该价格带竞争激烈）", status: "ok" }
    ],
    options: [
      { id: "a", text: "卡在【需求洞察】—— 手机支架市场已饱和，应换品类" },
      { id: "b", text: "卡在【平台搭建+内容运营+流量获取】—— Listing质量极差（机翻+无场景图+零评价），广告策略错误（泛词+全球投放），三重失误叠加导致零转化" },
      { id: "c", text: "卡在【供应链】—— 定价$12.99太贵，需要降价至$5以内" },
      { id: "d", text: "卡在【履约物流】—— 跨境物流太慢导致买家不信任" }
    ],
    answer: "b",
    explanation: `
<h3>核心卡点：跨境电商基础建设三重缺失</h3>
<p><strong>跨境电商与国内电商的关键差异：</strong></p>
<table style="width:100%;border-collapse:collapse;margin:12px 0;font-size:13px;">
  <tr style="background:#f3f4f6"><th style="padding:8px;border:1px solid #d1d5db">维度</th><th style="padding:8px;border:1px solid #d1d5db">国内电商</th><th style="padding:8px;border:1px solid #d1d5db">跨境电商（速卖通）</th></tr>
  <tr><td style="padding:6px;border:1px solid #e5e7eb">Listing语言</td><td style="padding:6px;border:1px solid #e5e7eb">中文</td><td style="padding:6px;border:1px solid #e5e7eb">目标市场母语（英/西/俄等）</td></tr>
  <tr><td style="padding:6px;border:1px solid #e5e7eb">主图要求</td><td style="padding:6px;border:1px solid #e5e7eb">场景图为主</td><td style="padding:6px;border:1px solid #e5e7eb">白底+场景均需，符合Amazon/速卖通规范</td></tr>
  <tr><td style="padding:6px;border:1px solid #e5e7eb">信任建立</td><td style="padding:6px;border:1px solid #e5e7eb">DSR+评价</td><td style="padding:6px;border:1px solid #e5e7eb">店铺评分+具体评价（外国买家极度依赖）</td></tr>
  <tr><td style="padding:6px;border:1px solid #e5e7eb">关键词逻辑</td><td style="padding:6px;border:1px solid #e5e7eb">中文搜索习惯</td><td style="padding:6px;border:1px solid #e5e7eb">英文长尾词（用工具：Jungle Scout/Helium10）</td></tr>
  <tr><td style="padding:6px;border:1px solid #e5e7eb">市场定向</td><td style="padding:6px;border:1px solid #e5e7eb">国内统一</td><td style="padding:6px;border:1px solid #e5e7eb">必须选择重点市场（美/欧/中东），不同市场打法不同</td></tr>
</table>

<p><strong>三重失误拆解：</strong></p>
<ol>
  <li><strong>Listing质量为零</strong>：机翻英文标题充满语法错误（「support phone car」而非「car phone mount」），外国买家看到就会直接离开。这是最根本的问题——内容都没做好，广告带来的流量100%流失</li>
  <li><strong>广告策略错误</strong>：「phone holder」月搜索量极高，但竞品数量也是百万级，新店铺竞价成本极高、曝光极低。正确策略：先从「long tail keywords」入手（如「magnetic phone holder for car vent 2024」），点击成本低10倍，精准度高</li>
  <li><strong>零评价店铺</strong>：跨境买家（尤其欧美）在零评价店铺几乎不下单——不是价格问题，是信任缺失。新店必须先用低价/送评方式快速积累10-20条真实评价</li>
</ol>

<p><strong>正确的跨境新店冷启动SOP：</strong></p>
<ol>
  <li><strong>Step 1 — Listing本地化</strong>：雇佣母语写手（Fiverr $30-50/篇）重写标题/五点描述/A+页面；拍摄本地场景图（或购买外国模特素材）</li>
  <li><strong>Step 2 — 评价破零</strong>：通过速卖通「买家邀请评价」工具或Early Reviewer Program积累首批评价，目标先到20条</li>
  <li><strong>Step 3 — 精准长尾词广告</strong>：用关键词工具挖掘月搜索1000-10000的精准词（竞争小，转化高），CPC从$0.05起测</li>
  <li><strong>Step 4 — 聚焦1-2个重点市场</strong>：手机支架推荐优先打美国（消费力强）或中东（关税低、竞争弱），而非全球撒网</li>
</ol>

<p><strong>关键认知</strong>：「跨境电商不赚钱」的判断是错误的——当前的问题是「没有做好基础工作就开始烧广告」。正确流程应该是：Listing优化（3周）→评价积累（4-8周）→再上广告。顺序错了就是白烧钱。</p>`,
    chainLink: 4  // 对应模块4平台搭建
  },

  {
    id: 20,
    title: "抖音商家：直播卖爆了，商城没人看",
    difficulty: 2,
    category: "内容问题",
    background: `某宠物食品品牌在抖音做得不错：自播每场GMV约8万元，粉丝量52万，评论区互动热烈。但运营发现「抖音商城」里的同款商品几乎没有自然搜索流量，商城月GMV仅约3000元，远低于直播间的1/20。品牌方认为「抖音商城就是摆设，流量全在直播」。`,
    metrics: [
      { label: "自播场均GMV", value: "约8万元（表现良好）", status: "good" },
      { label: "商城月GMV", value: "3,000元（直播间的1/20）", status: "bad" },
      { label: "商城主图", value: "直播间截图（模糊，有直播UI框）", status: "bad" },
      { label: "商品标题", value: "「【直播专享】狗粮XX品牌1kg」", status: "bad" },
      { label: "商城「宠物狗粮」搜索排名", value: "第120页（实际无曝光）", status: "bad" },
      { label: "详情页内容", value: "仅3张图，无成分/无适用犬种/无喂养指引", status: "bad" },
      { label: "商城评价数", value: "17条", status: "bad" },
      { label: "直播间同款评价", value: "1,200+条（但属于直播订单）", status: "good" }
    ],
    options: [
      { id: "a", text: "卡在【需求洞察】—— 宠物食品在抖音商城没有搜索需求，这个渠道本就不适合该品类" },
      { id: "b", text: "卡在【内容运营】—— 直播间和商城是两个完全不同的流量场景；商城需要独立的「搜索型Listing」（标题/主图/详情页），不能套用直播截图和直播专属标题" },
      { id: "c", text: "卡在【口碑管理】—— 17条评价太少，需先积累评价再期待搜索流量" },
      { id: "d", text: "卡在【流量获取】—— 应该给商城Listing开通商品卡付费推广" }
    ],
    answer: "b",
    explanation: `
<h3>核心卡点：内容运营——直播思维 ≠ 商城思维</h3>
<p><strong>抖音两大流量场的本质区别：</strong></p>
<table style="width:100%;border-collapse:collapse;margin:12px 0;font-size:13px;">
  <tr style="background:#f3f4f6"><th style="padding:8px;border:1px solid #d1d5db">维度</th><th style="padding:8px;border:1px solid #d1d5db">直播间</th><th style="padding:8px;border:1px solid #d1d5db">抖音商城</th></tr>
  <tr><td style="padding:6px;border:1px solid #e5e7eb">用户状态</td><td style="padding:6px;border:1px solid #e5e7eb">被动刷到，冲动消费</td><td style="padding:6px;border:1px solid #e5e7eb">主动搜索，有明确需求</td></tr>
  <tr><td style="padding:6px;border:1px solid #e5e7eb">决策依据</td><td style="padding:6px;border:1px solid #e5e7eb">主播讲解+直播氛围</td><td style="padding:6px;border:1px solid #e5e7eb">主图+标题关键词+详情页+评价</td></tr>
  <tr><td style="padding:6px;border:1px solid #e5e7eb">流量来源</td><td style="padding:6px;border:1px solid #e5e7eb">算法推流（GPM决定权重）</td><td style="padding:6px;border:1px solid #e5e7eb">关键词搜索排名（销量+转化）</td></tr>
  <tr><td style="padding:6px;border:1px solid #e5e7eb">内容要求</td><td style="padding:6px;border:1px solid #e5e7eb">口播+实物展示+限时优惠</td><td style="padding:6px;border:1px solid #e5e7eb">清晰产品图+成分参数+买家秀</td></tr>
  <tr><td style="padding:6px;border:1px solid #e5e7eb">类比</td><td style="padding:6px;border:1px solid #e5e7eb">电视购物（推）</td><td style="padding:6px;border:1px solid #e5e7eb">淘宝搜索货架（拉）</td></tr>
</table>

<p><strong>Listing三重致命错误：</strong></p>
<ol>
  <li><strong>标题含「直播专享」</strong>：搜索用户输入「宠物狗粮」，系统无法将此标题匹配到搜索词；且「直播专享」暗示商城价格更高，劝退用户</li>
  <li><strong>主图用直播截图</strong>：模糊画质+直播UI框 → 商城用户认为「不专业」→ 立即划走。商城主图需要专业白底图+核心卖点文字</li>
  <li><strong>详情页仅3张图</strong>：直播间主播口述了成分/适用犬种/喂养量，商城无主播，这些信息必须呈现在详情页</li>
</ol>

<p><strong>处方：两场独立运营</strong></p>
<ol>
  <li><strong>重做商城Listing</strong>：标题改为「天然无谷宠物狗粮 成犬通用型 鸡肉味1kg 低敏配方」；主图重拍白底专业图；详情页补成分表/适用犬种/买家秀</li>
  <li><strong>评价迁移</strong>：从直播间1200条评价中筛选优质买家秀，邀请在商城留评（合规方式）</li>
  <li><strong>商城搜索冷启动</strong>：参照新品冷启动逻辑，先跑「低脂狗粮成犬」等精准长尾词广告，积累100+销量后再竞争核心词</li>
  <li><strong>预期</strong>：3个月内商城月GMV可从3000元提升至4-5万，形成「直播冲量+商城沉淀」的双引擎</li>
</ol>
<p><strong>关键认知</strong>：商城GMV = 品牌的「被动收入」——不需要每天直播也有销售。商城做好了，才是真正的品牌资产积累。</p>`,
    chainLink: 5  // 对应模块5内容运营
  }
];

function getAllCases() { return DIAGNOSE_CASES; }
function getCase(id) { return DIAGNOSE_CASES.find(c => c.id === id); }
