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
    lessons: [
      "第 1 课：为什么鲁米不是“诗人简介”可以讲完的人",
      "第 5 课：沙姆士出现以前，鲁米是谁",
      "第 12 课：芦笛为什么哭泣",
      "第 19 课：建立你的第一份鲁米关键词卡"
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
    lessons: [
      "第 3 课：Wine 为什么通常不是酒",
      "第 11 课：Beloved 是爱人、神，还是灵魂的方向",
      "第 24 课：破碎、空杯与虚而待物",
      "第 38 课：为一个主题建立 10 首诗的学习路径"
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
    lessons: [
      "第 1 课：为什么《玛斯纳维》不是普通诗集",
      "第 16 课：故事里的愚人，常常是我们自己",
      "第 47 课：寓言如何承载神学而不变成说教",
      "第 92 课：写一篇 1500 字中文导读"
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
    lessons: [
      "专题 1：一句流行语录如何追溯出处",
      "专题 4：Coleman Barks 的贡献与问题",
      "专题 9：Fana 是否等于“无我”",
      "专题 15：写出一个可研究的问题"
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
    lessons: [
      "第 2 课：一场 90 分钟读诗会的骨架",
      "第 6 课：如何处理沉默、眼泪和争辩",
      "第 9 课：从诗句进入生命书写",
      "第 12 课：完成你的第一场公开带领"
    ],
    practice: "设计一次 30 分钟微型读诗，邀请 2 到 4 人参与，并记录现场反馈。",
    outcome: "完成一套读诗会方案，包含选诗、导读稿、提问卡、静坐引导、书写题和风险边界。"
  }
};

const poemText = document.querySelector("#poemText");
const versionButtons = document.querySelectorAll("[data-version]");
const themeButtons = document.querySelectorAll("[data-theme]");
const academyButtons = document.querySelectorAll("[data-academy-level]");
const themeDetail = document.querySelector("#themeDetail");
const academyDetail = document.querySelector("#academyDetail");
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
        <div class="academy-block">
          <h4>四个单元</h4>
          <ul>
            ${selected.modules.map(([title, description]) => `
              <li><strong>${title}</strong>${description}</li>
            `).join("")}
          </ul>
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
setAcademyLevel("1");
