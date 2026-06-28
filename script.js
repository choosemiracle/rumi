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

const poemText = document.querySelector("#poemText");
const versionButtons = document.querySelectorAll("[data-version]");
const themeButtons = document.querySelectorAll("[data-theme]");
const themeDetail = document.querySelector("#themeDetail");
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

versionButtons.forEach((button) => {
  button.addEventListener("click", () => setPoemVersion(button.dataset.version));
});

themeButtons.forEach((button) => {
  button.addEventListener("click", () => setTheme(button.dataset.theme));
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
