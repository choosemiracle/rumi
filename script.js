const poemVersions = {
  persian: {
    dir: "rtl",
    lang: "fa",
    text: "این زخم جایی‌ست\nکه روشنایی\nراه خود را پیدا می‌کند"
  },
  nicholson: {
    dir: "ltr",
    lang: "en",
    text: "The wound is the place\nwhere the light\nfinds its passage."
  },
  arberry: {
    dir: "ltr",
    lang: "en",
    text: "Through the broken place,\nlight learns\nhow to enter the heart."
  },
  barks: {
    dir: "ltr",
    lang: "en",
    text: "What hurts you\nmay become\nthe opening."
  },
  chinese: {
    dir: "ltr",
    lang: "zh-CN",
    text: "伤口，\n不是黑暗停留的地方。\n它是光\n终于找到入口的地方。"
  }
};

const themeData = {
  爱: {
    english: "Love",
    intro: "在鲁米那里，爱不是浪漫情绪，而是让自我融化、让人回到真实的道路。",
    poems: ["恋人与被爱者", "火中的名字", "朋友的来信"],
    practice: "今天观察：你说“爱”的时候，是想靠近，还是想拥有？"
  },
  寻找: {
    english: "Searching",
    intro: "寻找不是缺少信息，而是灵魂已经听见召唤，却还不知道如何回应。",
    poems: ["敲门的人", "失落的驼队", "夜里的脚步"],
    practice: "写下一个你反复寻找的答案，再写下你害怕听见的答案。"
  },
  分离: {
    english: "Separation",
    intro: "芦笛的哭声来自离开芦苇丛，分离让人听见回归的方向。",
    poems: ["芦笛之歌", "远方的火", "空房间"],
    practice: "今天不要急着修复孤独，先听见它在说什么。"
  },
  回家: {
    english: "Home",
    intro: "家不是地理位置，而是人从幻象、恐惧和执着中醒来的状态。",
    poems: ["回家的路", "门内的人", "无名故乡"],
    practice: "问自己：我现在的生活，哪一部分让我越来越远离自己？"
  },
  心: {
    english: "Heart",
    intro: "心不是情绪中心，而是感知真实、承受爱与转化痛苦的器官。",
    poems: ["心的镜子", "胸中的海", "沉默的房间"],
    practice: "今天做一个决定前，先给心三次呼吸的时间。"
  },
  火: {
    english: "Fire",
    intro: "火焚烧的是虚假的身份，也照亮人真正的渴望。",
    poems: ["烧掉名字", "火中的舞", "灰烬之后"],
    practice: "写下你最不愿放手的身份，并观察它如何控制你。"
  },
  酒: {
    english: "Wine",
    intro: "苏菲诗中的酒常是神圣陶醉的象征，不宜按字面理解。",
    poems: ["杯中的月亮", "清醒的醉者", "酒馆门口"],
    practice: "今天留意：什么让你暂时忘记防御，却更接近真实？"
  },
  花园: {
    english: "Garden",
    intro: "花园象征被照料的内在世界，也象征爱的生长。",
    poems: ["园丁", "玫瑰的刺", "春天来信"],
    practice: "为你的内在花园做一件具体小事：睡眠、道歉、清理或感谢。"
  },
  门: {
    english: "Door",
    intro: "门意味着阈限。人必须穿过旧身份，才能进入新的理解。",
    poems: ["门后的门", "敲门", "门槛上的光"],
    practice: "今天辨认一扇门：它可能以麻烦、邀请或失去的形式出现。"
  },
  镜子: {
    english: "Mirror",
    intro: "镜子不是评价工具，而是让人看清遮蔽与本来面目的象征。",
    poems: ["擦亮镜子", "尘埃", "看见的人"],
    practice: "选择一段关系，问：对方照见了我什么？"
  }
};

const places = {
  巴尔赫: "1207 年，鲁米出生于巴尔赫文化圈。这里是理解其波斯语、伊斯兰与中亚背景的起点。",
  尼沙布尔: "传说鲁米少年时期曾途经尼沙布尔，并与诗人阿塔尔的传统发生象征性连接。",
  大马士革: "大马士革连接鲁米的学习经历、伊斯兰学术网络与后来的沙姆士线索。",
  科尼亚: "科尼亚是鲁米成熟、教学、写作与梅夫拉维传统形成的核心地点。"
};

const worldTopics = {
  rumi: {
    label: "01",
    title: "鲁米是谁？",
    summary: "从历史人物进入，而不是从流行语录进入。鲁米首先是十三世纪伊斯兰世界的学者、教师和诗人，后来因为沙姆士的出现而发生生命转向。",
    points: [
      "1207 年出生于巴尔赫文化圈，后随家族迁徙。",
      "在科尼亚成为宗教学者、讲师与公共人物。",
      "与沙姆士相遇后，教学、写作和生命表达方式发生剧烈变化。",
      "其影响经由《玛斯纳维》《迪万》和梅夫拉维传统持续扩展。"
    ],
    next: "下一步：读 Level 1 的人物时间线，并在地图中点击巴尔赫与科尼亚。"
  },
  shams: {
    label: "02",
    title: "沙姆士是谁？",
    summary: "沙姆士不是鲁米传记里的配角，而是让鲁米从稳定学者身份进入燃烧状态的关键人物。",
    points: [
      "他常被理解为鲁米的灵性导师、朋友与镜子。",
      "相遇改变鲁米对知识、爱、沉默和神圣经验的理解。",
      "沙姆士的消失有多种叙述，需要区分传说、教团记忆与学术研究。",
      "理解沙姆士，才能理解鲁米诗歌里的 Friend 与 Beloved。"
    ],
    next: "下一步：进入主题“爱”与“分离”，观察相遇和失去如何共同塑造诗。"
  },
  mevlevi: {
    label: "03",
    title: "梅夫拉维教团",
    summary: "旋转不是表演性的异国景观，而是一套身体、音乐、服装与宇宙象征交织的仪式传统。",
    points: [
      "旋转舞与鲁米之后的教团传统密切相关。",
      "服装、动作、音乐和队形都承载象征意义。",
      "仪式把诗歌、身体、节奏和记忆连接起来。",
      "学习时要区分历史传统、旅游展示与现代舞台化表达。"
    ],
    next: "下一步：在苏菲诗歌课程中学习诵读、沉默与身体经验。"
  },
  sufi: {
    label: "04",
    title: "苏菲主义",
    summary: "苏菲主义提供了鲁米诗歌的思想土壤。没有这些概念，酒、火、恋人、朋友、心都容易被读浅。",
    points: [
      "Dhikr 指向记念与反复唤回，而不只是念诵形式。",
      "Fana 与 Baqa 涉及自我消融和在神圣中存留。",
      "Tawhid 不只是教义命题，也影响鲁米关于合一的诗性表达。",
      "Heart 在这里不是情绪容器，而是感知真实的中心。"
    ],
    next: "下一步：进入五层解析，先从象征层学习 Love、Heart、Wine。"
  },
  islam: {
    label: "05",
    title: "伊斯兰背景",
    summary: "中文读者进入鲁米，需要理解 Quran、Hadith、Sharia、Tariqa、Haqiqa、Marifa 之间的基本关系。",
    points: [
      "Quran 与 Hadith 构成重要文本背景。",
      "Sharia、Tariqa、Haqiqa、Marifa 可作为由外到内的理解线索。",
      "鲁米诗歌常在宗教语境中表达普遍生命经验。",
      "理解背景不是设限，而是避免把诗从其传统中抽空。"
    ],
    next: "下一步：在鲁米思想研究中学习文本出处、概念边界和比较方法。"
  },
  misread: {
    label: "06",
    title: "误读索引",
    summary: "很多中文互联网上的鲁米句子其实是英文改写、现代转述或无法核查的归名语录。",
    points: [
      "先问：这句话是否有波斯文、章节或可靠译本出处？",
      "再问：它是直译、意译、改写，还是二次创作？",
      "Barks 等现代英文版本有传播价值，也需要标注其再创作性质。",
      "平台应把美感、出处和误译说明同时呈现。"
    ],
    next: "下一步：进入语录知识图谱，查看出处、上下文和延伸诗歌。"
  }
};

const academyLevels = {
  1: {
    label: "Level 1",
    title: "认识鲁米",
    summary: "为中文读者建立第一张鲁米地图：他是谁、活在什么时代、为什么沙姆士改变了他，以及哪些关键词会反复出现。",
    meta: [
      ["课时", "20 课"],
      ["周期", "4 周"],
      ["适合", "零基础读者"],
      ["产出", "个人鲁米阅读地图"]
    ],
    modules: [
      ["鲁米的一生", "巴尔赫、迁徙、科尼亚、教学、沙姆士相遇与晚年写作。"],
      ["三部核心文本", "Masnavi、Divan-e Shams、Fihi Ma Fihi 的性质、读法与难度。"],
      ["关键词地图", "爱、渴望、心、酒、火、朋友、镜子、回家、沉默。"],
      ["中文读者入口", "如何避免把鲁米读成鸡汤、情诗或脱离传统的心灵语录。"]
    ],
    objectives: [
      "能用 5 分钟向别人讲清鲁米的生命转折：学者、相遇、失去、燃烧、写作。",
      "能区分鲁米原典、英文译本、现代改写和中文转述，避免把流行语录误当原文。",
      "能建立一张包含人物、地点、文本、关键词和修习问题的个人阅读地图。"
    ],
    syllabus: [
      ["第 1 周", "人物与时代", "1207 年巴尔赫文化圈、家族迁徙、科尼亚学者身份、十三世纪伊斯兰世界。"],
      ["第 2 周", "沙姆士之门", "沙姆士是谁、相遇为何造成断裂、消失事件的不同解释、爱的老师原型。"],
      ["第 3 周", "文本入口", "《玛斯纳维》《迪万》《菲希玛菲希》的差异，怎样选择第一本书与第一首诗。"],
      ["第 4 周", "关键词地图", "Love、Longing、Heart、Wine、Beloved、Friend、Mirror、Silence 的中文读法。"]
    ],
    lessons: [
      "第 1 课：为什么鲁米不是“诗人简介”可以讲完的人",
      "第 5 课：沙姆士出现以前，鲁米是谁",
      "第 12 课：芦笛为什么哭泣",
      "第 19 课：建立你的第一份鲁米关键词卡"
    ],
    materials: [
      "鲁米生平时间线与迁徙地图",
      "三部核心文本入门说明",
      "常见伪鲁米语录辨认表",
      "20 个关键词双语卡"
    ],
    rhythm: [
      "每课 12 分钟讲解",
      "3 分钟原文或译文诵读",
      "5 分钟书写一个问题",
      "每周一次整理阅读地图"
    ],
    assessment: [
      "完成 20 张关键词卡",
      "写出一条鲁米生命时间线",
      "说明 3 个常见误读",
      "提交 1 页个人阅读地图"
    ],
    practice: "每天读一段短诗，写下一个“我以为我懂了，但其实还需要查证”的地方。",
    outcome: "完成一份 1 页鲁米阅读地图，能向新读者说明人物、文本、背景与常见误读。"
  },
  2: {
    label: "Level 2",
    title: "苏菲诗歌",
    summary: "进入苏菲诗歌的象征体系，学习如何从字面、隐喻、宗教语境和生命经验四个方向读一首诗。",
    meta: [
      ["课时", "40 课"],
      ["周期", "8 周"],
      ["适合", "已有基础读者"],
      ["产出", "主题诗歌读法手册"]
    ],
    modules: [
      ["象征词典", "酒馆、杯、火、夜、门、花园、恋人、朋友等意象的传统含义。"],
      ["读诗方法", "从一句诗拆出对象、动作、张力、转折和修行指向。"],
      ["诵读与沉默", "为什么苏菲诗歌需要声音、节奏、停顿和身体参与。"],
      ["跨文化比较", "与庄子、禅宗、阳明心学比较时，如何相互照亮而不混同。"]
    ],
    objectives: [
      "掌握苏菲诗歌最常见的 30 个象征词，不再只按字面理解。",
      "能把一首短诗拆成字面、修辞、象征、心理和生活实践五层。",
      "能为一个主题设计连续 7 天的读诗与书写练习。"
    ],
    syllabus: [
      ["第 1-2 周", "象征系统", "酒、火、夜、花园、恋人、朋友、心、镜子、门、海。"],
      ["第 3-4 周", "读诗方法", "关键词、动作、转折、悖论、重复、召唤、沉默。"],
      ["第 5-6 周", "声音与身体", "诵读、呼吸、旋转舞背景、音乐与诗歌记忆。"],
      ["第 7-8 周", "主题路径", "爱、分离、寻找、回家四条主题线的课程化设计。"]
    ],
    lessons: [
      "第 3 课：Wine 为什么通常不是酒",
      "第 11 课：Beloved 是爱人、神，还是灵魂的方向",
      "第 24 课：破碎、空杯与虚而待物",
      "第 38 课：为一个主题建立 10 首诗的学习路径"
    ],
    materials: [
      "苏菲象征词典",
      "五层读诗模板",
      "主题诗歌索引",
      "诵读与静默练习音频脚本"
    ],
    rhythm: [
      "每周 5 课，每课一个象征或方法",
      "每周选择 1 首诗做五层解析",
      "每周完成 1 次 10 分钟诵读",
      "第 8 周汇总主题读诗手册"
    ],
    assessment: [
      "解释 15 个象征词",
      "完成 4 篇五层解析",
      "设计 7 天主题修习",
      "提交 10 首诗主题路径"
    ],
    practice: "选择一个象征词，连续七天记录它在诗中、生活中和关系中的不同面貌。",
    outcome: "完成一份主题读诗手册，包含 10 首诗、关键词解释、导读问题和修习建议。"
  },
  3: {
    label: "Level 3",
    title: "玛斯纳维精读",
    summary: "把《玛斯纳维》当作故事、寓言、神学文本和修行手册来读，训练长期精读能力。",
    meta: [
      ["课时", "100 课"],
      ["周期", "24 周"],
      ["适合", "深度研修者"],
      ["产出", "精读笔记与导读稿"]
    ],
    modules: [
      ["故事结构", "识别故事中的人物、欲望、错误理解、转化节点和结尾回声。"],
      ["寓言层次", "区分情节趣味、伦理教训、苏菲象征和灵魂修行层。"],
      ["文本互证", "把《玛斯纳维》与《迪万》《菲希玛菲希》中的相近思想连接。"],
      ["当代应用", "把寓言转化为关系、工作、失去、成瘾、恐惧与爱中的提问。"]
    ],
    objectives: [
      "能把《玛斯纳维》故事拆成情节、寓意、象征、神学和实践五个层面。",
      "能比较不同译本对同一段文本的处理差异。",
      "能写出可发布的中文长篇导读，而不是只摘录金句。"
    ],
    syllabus: [
      ["第 1-4 周", "芦笛与开篇", "《玛斯纳维》开篇、分离主题、听见与回归。"],
      ["第 5-10 周", "故事与寓言", "动物、商人、国王、病人、愚人与导师的叙事功能。"],
      ["第 11-18 周", "神学与修行", "欲望、自我、爱、知识、信任、消融与归一。"],
      ["第 19-24 周", "中文导读写作", "选段、注释、互证、现代问题、导读稿发布。"]
    ],
    lessons: [
      "第 1 课：为什么《玛斯纳维》不是普通诗集",
      "第 16 课：故事里的愚人，常常是我们自己",
      "第 47 课：寓言如何承载神学而不变成说教",
      "第 92 课：写一篇 1500 字中文导读"
    ],
    materials: [
      "《玛斯纳维》精读笔记模板",
      "故事结构拆解表",
      "译本比较记录表",
      "长篇导读写作框架"
    ],
    rhythm: [
      "每周 4 课精读",
      "每周 1 次故事复述",
      "每两周 1 篇短导读",
      "最后 4 周完成长篇导读"
    ],
    assessment: [
      "完成 12 个故事结构拆解",
      "提交 6 篇精读笔记",
      "完成 2 次译本比较",
      "写出 1 篇 1500 字导读"
    ],
    practice: "每周精读一个故事：先复述，再拆解象征，最后写出一个现代生活问题。",
    outcome: "完成 6 篇精读笔记和 1 篇可发布导读稿，具备独立讲解一则《玛斯纳维》故事的能力。"
  },
  4: {
    label: "Level 4",
    title: "鲁米思想研究",
    summary: "从学术角度处理鲁米：历史语境、文本来源、译本差异、宗教哲学和比较研究。",
    meta: [
      ["形式", "专题研究"],
      ["周期", "16 周"],
      ["适合", "研究型学习者"],
      ["产出", "研究提案或论文"]
    ],
    modules: [
      ["文本与译本", "Nicholson、Arberry、Barks 等译本差异，以及中文转译风险。"],
      ["历史语境", "十三世纪安纳托利亚、伊斯兰学术网络与梅夫拉维传统形成。"],
      ["思想问题", "Tawhid、Fana、Baqa、Heart、Love 与知识论、存在论的关系。"],
      ["比较宗教", "与禅宗、道家、基督宗教神秘主义比较时的方法边界。"]
    ],
    objectives: [
      "能判断一条鲁米语录的出处可靠性，并说明它是原文、译文、改写还是转述。",
      "能围绕一个思想问题建立文献路径和文本样本。",
      "能做跨文化比较，同时保留不同传统的历史边界。"
    ],
    syllabus: [
      ["第 1-4 周", "资料与出处", "原典、译本、论文、百科资料、网络语录的可信度排序。"],
      ["第 5-8 周", "历史与传统", "梅夫拉维教团、伊斯兰神秘主义、十三世纪学术网络。"],
      ["第 9-12 周", "思想专题", "Tawhid、Fana、Baqa、Love、Heart、Knowledge。"],
      ["第 13-16 周", "论文写作", "问题意识、文献综述、文本分析、比较方法与注释规范。"]
    ],
    lessons: [
      "专题 1：一句流行语录如何追溯出处",
      "专题 4：Coleman Barks 的贡献与问题",
      "专题 9：Fana 是否等于“无我”",
      "专题 15：写出一个可研究的问题"
    ],
    materials: [
      "鲁米研究文献入门书目",
      "语录出处核查流程",
      "比较宗教写作边界清单",
      "3000 字研究提案模板"
    ],
    rhythm: [
      "每周阅读 1 篇论文或书章",
      "每周完成 1 条资料卡",
      "每月做 1 次语录核查",
      "最后 3 周完成研究提案"
    ],
    assessment: [
      "完成 12 张文献卡",
      "核查 5 条流行语录",
      "写出 1 个研究问题",
      "提交 3000 字研究提案"
    ],
    practice: "每周选择一条资料，记录其出处、可靠性、争议点和可用于中文导读的方式。",
    outcome: "完成一份 3000 字研究提案，包含问题意识、文献路径、文本样本和比较边界。"
  },
  5: {
    label: "Level 5",
    title: "带领读诗",
    summary: "把个人阅读转化为公共带领能力，学习如何组织读诗会、生命书写、分享会与长期小组。",
    meta: [
      ["形式", "实作训练"],
      ["周期", "12 周"],
      ["适合", "带领者"],
      ["产出", "一场完整读诗会"]
    ],
    modules: [
      ["读诗会设计", "开场、诵读、导读、静默、书写、分享和收束的完整流程。"],
      ["问题设计", "把诗句转化为不冒犯、不操控、能打开经验的提问。"],
      ["小组伦理", "边界、保密、创伤敏感、宗教差异与带领者自我觉察。"],
      ["品牌延展", "连接诗、影、心：读诗会、观影工作坊、播客和社群路径。"]
    ],
    objectives: [
      "能设计一场 90 分钟读诗会，包含选诗、导读、静默、书写、分享与收束。",
      "能把诗句转化为开放问题，避免说教、治疗化或情绪操控。",
      "能建立小组边界，处理沉默、分歧、眼泪和过度分享。"
    ],
    syllabus: [
      ["第 1-3 周", "读诗会结构", "开场契约、选诗顺序、朗读方式、导读长度、时间控制。"],
      ["第 4-6 周", "问题与书写", "从诗句到问题卡，从解释到生命书写，从答案到观察。"],
      ["第 7-9 周", "现场带领", "沉默、分歧、情绪、安全边界、宗教差异与复盘。"],
      ["第 10-12 周", "公开实作", "设计、招募、执行、反馈、迭代一场完整读诗会。"]
    ],
    lessons: [
      "第 2 课：一场 90 分钟读诗会的骨架",
      "第 6 课：如何处理沉默、眼泪和争辩",
      "第 9 课：从诗句进入生命书写",
      "第 12 课：完成你的第一场公开带领"
    ],
    materials: [
      "90 分钟读诗会流程表",
      "开放式提问卡模板",
      "小组安全与保密说明",
      "带领者复盘表"
    ],
    rhythm: [
      "每周设计 1 个微流程",
      "每两周进行 1 次同伴试带",
      "第 9 周完成完整方案",
      "第 12 周完成公开带领"
    ],
    assessment: [
      "完成 12 张提问卡",
      "完成 2 次试带复盘",
      "提交完整读诗会方案",
      "实际带领 1 场 60-90 分钟活动"
    ],
    practice: "设计一次 30 分钟微型读诗，邀请 2 到 4 人参与，并记录现场反馈。",
    outcome: "完成一套读诗会方案，包含选诗、导读稿、提问卡、静坐引导、书写题和风险边界。"
  }
};

const poemText = document.querySelector("#poemText");
const versionButtons = document.querySelectorAll("[data-version]");
const themeButtons = document.querySelectorAll("[data-theme]");
const academyButtons = document.querySelectorAll("[data-academy-level]");
const worldButtons = document.querySelectorAll("[data-world-topic]");
const progressChecks = document.querySelectorAll("[data-progress-step]");
const themeDetail = document.querySelector("#themeDetail");
const academyDetail = document.querySelector("#academyDetail");
const worldDetail = document.querySelector("#worldDetail");
const progressCount = document.querySelector("#progressCount");
const progressBar = document.querySelector("#progressBar");
const progressHint = document.querySelector("#progressHint");
const reflectionInput = document.querySelector("#reflectionInput");
const saveButton = document.querySelector("#saveReflection");
const saveStatus = document.querySelector("#saveStatus");
const mapCaption = document.querySelector("#mapCaption");

function setPoemVersion(version) {
  const selected = poemVersions[version];
  poemText.textContent = selected.text;
  poemText.dir = selected.dir;
  poemText.lang = selected.lang;
  versionButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.version === version);
  });
}

function setTheme(theme) {
  const selected = themeData[theme];
  themeDetail.innerHTML = `
    <div>
      <p class="eyebrow">${selected.english}</p>
      <h3>${theme}</h3>
    </div>
    <div>
      <p>${selected.intro}</p>
      <ul>
        ${selected.poems.map((poem) => `<li><strong>${poem}</strong><span>诗歌 · 导读 · 修习</span></li>`).join("")}
      </ul>
    </div>
    <div>
      <p class="eyebrow">今日修习</p>
      <p>${selected.practice}</p>
    </div>
  `;
  themeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.theme === theme);
  });
}

function setWorldTopic(topic) {
  const selected = worldTopics[topic];
  worldDetail.innerHTML = `
    <div>
      <p class="eyebrow">Topic ${selected.label}</p>
      <h3>${selected.title}</h3>
      <p>${selected.summary}</p>
    </div>
    <div>
      <p class="eyebrow">学习要点</p>
      <ul>
        ${selected.points.map((point) => `<li>${point}</li>`).join("")}
      </ul>
    </div>
    <aside>
      <p class="eyebrow">继续学习</p>
      <p><strong>${selected.next}</strong></p>
    </aside>
  `;
  worldButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.worldTopic === topic);
  });
}

function setAcademyLevel(level) {
  const selected = academyLevels[level];
  academyDetail.innerHTML = `
    <div class="academy-detail-header">
      <div>
        <p class="eyebrow">${selected.label}</p>
        <h3>${selected.title}</h3>
        <p class="academy-summary">${selected.summary}</p>
      </div>
      <div class="academy-meta">
        ${selected.meta.map(([label, value]) => `
          <div>
            <span>${label}</span>
            <strong>${value}</strong>
          </div>
        `).join("")}
      </div>
    </div>
    <div class="academy-body">
      <div>
        <div class="academy-block academy-objectives">
          <h4>学习目标</h4>
          <ul>
            ${selected.objectives.map((objective) => `<li>${objective}</li>`).join("")}
          </ul>
        </div>
        <div class="academy-block">
          <h4>四个单元</h4>
          <ul>
            ${selected.modules.map(([title, description]) => `
              <li><strong>${title}</strong>${description}</li>
            `).join("")}
          </ul>
        </div>
        <div class="academy-block">
          <h4>阶段安排</h4>
          <div class="academy-syllabus">
            ${selected.syllabus.map(([period, title, description]) => `
              <div>
                <span>${period}</span>
                <strong>${title}</strong>
                <p>${description}</p>
              </div>
            `).join("")}
          </div>
        </div>
        <div class="academy-block">
          <h4>代表课</h4>
          <ul>
            ${selected.lessons.map((lesson) => `<li>${lesson}</li>`).join("")}
          </ul>
        </div>
      </div>
      <aside class="academy-outcome">
        <div class="academy-block">
          <h4>本级修习</h4>
          <p>${selected.practice}</p>
        </div>
        <div class="academy-block">
          <h4>课程材料</h4>
          <ul>
            ${selected.materials.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
        <div class="academy-block">
          <h4>学习节奏</h4>
          <ul>
            ${selected.rhythm.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
        <div class="academy-block">
          <h4>评估方式</h4>
          <ul>
            ${selected.assessment.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
        <div class="academy-block">
          <h4>完成标准</h4>
          <p>${selected.outcome}</p>
        </div>
      </aside>
    </div>
  `;
  academyButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.academyLevel === String(level));
  });
}

versionButtons.forEach((button) => {
  button.addEventListener("click", () => setPoemVersion(button.dataset.version));
});

themeButtons.forEach((button) => {
  button.addEventListener("click", () => setTheme(button.dataset.theme));
});

academyButtons.forEach((button) => {
  button.addEventListener("click", () => setAcademyLevel(button.dataset.academyLevel));
});

worldButtons.forEach((button) => {
  button.addEventListener("click", () => setWorldTopic(button.dataset.worldTopic));
});

document.querySelectorAll("[data-theme-link]").forEach((link) => {
  link.addEventListener("click", () => {
    setTheme(link.dataset.themeLink);
  });
});

function updateProgress() {
  const completed = Array.from(progressChecks).filter((checkbox) => checkbox.checked).length;
  const total = progressChecks.length;
  progressCount.textContent = `${completed} / ${total}`;
  progressBar.style.width = `${(completed / total) * 100}%`;
  progressHint.textContent = completed === total
    ? "今天的学习闭环已完成。可以回到修习记录，七天后再看答案。"
    : "从“今日一诗”开始，完成一个小闭环即可。";
  const saved = Array.from(progressChecks).reduce((result, checkbox) => {
    result[checkbox.dataset.progressStep] = checkbox.checked;
    return result;
  }, {});
  localStorage.setItem("rumi-progress", JSON.stringify(saved));
}

const savedProgress = JSON.parse(localStorage.getItem("rumi-progress") || "{}");
progressChecks.forEach((checkbox) => {
  checkbox.checked = Boolean(savedProgress[checkbox.dataset.progressStep]);
  checkbox.addEventListener("change", updateProgress);
});

document.querySelectorAll("[data-audio]").forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = `${button.dataset.audio} · 原型`;
    window.setTimeout(() => {
      button.textContent = button.dataset.audio;
    }, 1600);
  });
});

document.querySelectorAll("[data-place]").forEach((button) => {
  button.addEventListener("click", () => {
    mapCaption.textContent = places[button.dataset.place];
  });
});

const savedReflection = localStorage.getItem("rumi-reflection");
if (savedReflection) {
  reflectionInput.value = savedReflection;
  saveStatus.textContent = "已载入上次回答";
}

saveButton.addEventListener("click", () => {
  localStorage.setItem("rumi-reflection", reflectionInput.value.trim());
  const reviewDate = new Date();
  reviewDate.setDate(reviewDate.getDate() + 7);
  saveStatus.textContent = `已保存，建议 ${reviewDate.toLocaleDateString("zh-CN")} 回看`;
});

setPoemVersion("chinese");
setTheme("爱");
setWorldTopic("rumi");
setAcademyLevel("1");
updateProgress();
