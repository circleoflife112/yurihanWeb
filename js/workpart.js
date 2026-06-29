const POP = {
  doosi: {
    cat: "두시 — Floral Brand 2021–2022",
    title: "두시 브랜드",
    desc: "플로럴 브랜드 두시에서 상세페이지, 배너, SNS 콘텐츠를 제작했습니다. 베이지·크림 톤 기반의 감성 레이아웃으로 브랜드 아이덴티티를 유지했습니다.",
    meta: [
      ["기간", "2021 – 2022"],
      ["역할", "상세페이지 · 배너 · SNS"],
      ["툴", "Photoshop · Illustrator"],
    ],
    imgs: [["images/doosi-main.jpg", "두시 메인"]],
  },
  delma: {
    cat: "델마스튜디오 — Fashion Brand 2015–2021",
    title: "Delma Studios",
    desc: "의류 쇼핑몰 델마스튜디오에서 시즌별 상세페이지, 메인 비주얼, 팝업을 제작했습니다. 자연광 스튜디오 무드와 라이프스타일 감성 컷을 조합해 브랜드 비주얼을 구성했습니다.",
    meta: [
      ["기간", "2015 – 2021"],
      ["역할", "상세페이지 · 메인비주얼 · 팝업"],
      ["툴", "Photoshop · Illustrator"],
    ],
    imgs: [
      ["images/delma-main.JPG", "델마 메인"],
      ["images/delma-main2.jpg", "Natural Studio"],
    ],
  },
  "doosi-detail": {
    cat: "두시 · 상세페이지",
    title: "꽃 정기구독",
    desc: "2주에 한 번 배송되는 정기구독 서비스 상세페이지. 베이지·크림 톤의 여백 중심 레이아웃으로 꽃의 감성을 극대화했습니다. 리터칭·합성·타이포그래피 전반 담당.",
    meta: [
      ["브랜드", "두시"],
      ["작업", "상세페이지"],
      ["툴", "PS · 리터칭 · 합성 · 타이포"],
    ],
    imgs: [["images/doosiproduct1.jpg", "꽃 정기구독 상세페이지"]],
  },
  "plant-detail": {
    cat: "두시 · 상세페이지",
    title: "플랜트",
    desc: "식물 단품 상세페이지. 특성·사이즈·Gardener's tip을 인포그래픽으로 정보 구조화하여 구매 결정을 돕는 레이아웃으로 설계했습니다.",
    meta: [
      ["브랜드", "두시"],
      ["작업", "상세페이지"],
      ["툴", "인포그래픽 · 레이아웃 · AI"],
    ],
    imgs: [["images/aspargus.jpg", "플랜트 상세페이지"]],
  },
  "perf-banner": {
    cat: "두시 · 테마 메인 배너",
    title: "퍼포먼스",
    desc: "드가 회화를 활용한 테마 정기구독 메인 배너. 추상적인 예술 주제를 꽃 어레인지먼트로 풀어냈습니다.",
    meta: [
      ["브랜드", "두시"],
      ["사이즈", "1920×600"],
      ["작업", "합성 · 타이포"],
    ],
    imgs: [["images/doosi-performance.jpg", "퍼포먼스 배너"]],
  },
  "sns-banner": {
    cat: "두시 · SNS 이벤트 배너",
    title: "우정, 사랑",
    desc: "국제 우정의 날(7.30) 기획전 배너. 해바라기 꽃다발 + 푸어화병 세트 프로모션을 위한 정방형 SNS 배너.",
    meta: [
      ["브랜드", "두시"],
      ["사이즈", "1:1 정방형"],
      ["채널", "SNS · 이벤트"],
    ],
    imgs: [["images/doosi-sns-banner.jpg", "우정사랑 SNS 배너"]],
  },
  "delma-detail": {
    cat: "델마스튜디오 · 상세페이지",
    title: "시즌 의류 상세",
    desc: "Autumn Breeze, 여름 캐미솔, Winter Jacket 등 시즌별 의류 단품 상세페이지. 라이프스타일 감성 컷과 상품 디테일 컷을 조합해 구성했습니다.",
    meta: [
      ["브랜드", "델마스튜디오"],
      ["작업", "상세페이지 시리즈"],
      ["툴", "Photoshop · 리터칭 · 합성"],
    ],
    imgs: [["images/delmaproductp4.jpg", "델마 상세페이지"]],
  },
  "delma-popup": {
    cat: "델마스튜디오 · 팝업",
    title: "Special Week",
    desc: "SALE 팝업, 설연휴 공지 팝업 등 시즌별 팝업 시리즈. GIF 형식 포함.",
    meta: [
      ["브랜드", "델마스튜디오"],
      ["형식", "팝업 · GIF"],
      ["작업", "디자인 · 제작"],
    ],
    layout: "grid",
    imgs: [
      ["images/popup/delma-popup1.jpg", "팝업 1"],
      ["images/popup/delma-popup2.jpg", "팝업 2"],
    ],
  },
  "doosi-edit": {
    cat: "두시 · 편집물",
    title: "Editorial",
    desc: "꽃과 식물의 아름다움을 담은 편집물. 내추럴한 스튜디오 무드로 브랜드 아이덴티티를 표현했습니다.",
    meta: [
      ["브랜드", "두시"],
      ["작업", "편집디자인"],
      ["무드", "내추럴 · 스튜디오"],
    ],
    layout: "grid",
    imgs: [
      ["images/doosi-edit/postcard97.jpg", "Editorial1"],
      ["images/doosi-edit/postcard101.jpg", "Editorial2"],
      ["images/doosi-edit/postcard99.jpg", "Editorial3"],
      ["images/doosi-edit/postcard-back.jpg", "Editorial4"],
      ["images/doosi-edit/postcard103.jpg", "Editorial5"],
      ["images/doosi-edit/postCardBack2.jpg", "Editorial6"],
    ],
  },
};

function openMockup(url) {
  const ov = document.getElementById("mockupOv");
  document.getElementById("mockupFrame").src = url;
  ov.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeMockup() {
  const ov = document.getElementById("mockupOv");
  ov.classList.remove("open");
  document.body.style.overflow = "";
  ov.addEventListener(
    "transitionend",
    () => {
      document.getElementById("mockupFrame").src = "";
    },
    { once: true },
  );
}
document.getElementById("mockupClose").addEventListener("click", closeMockup);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMockup();
});

function openPop(id) {
  const d = POP[id];
  if (!d) return;
  document.getElementById("pCat").textContent = d.cat;
  document.getElementById("pTitle").textContent = d.title;
  document.getElementById("pDesc").textContent = d.desc;
  document.getElementById("pMeta").innerHTML = d.meta
    .map(
      ([k, v]) =>
        `<div class="pop-meta-item"><div class="pop-meta-k">${k}</div><div class="pop-meta-v">${v}</div></div>`,
    )
    .join("");
  const pImgs = document.getElementById("pImgs");
  pImgs.className = "pop-imgs" + (d.layout === "grid" ? " grid" : "");
  pImgs.innerHTML = d.imgs
    .map(
      ([s, a]) =>
        `<img src="${s}" alt="${a}" onerror="this.style.display='none'">`,
    )
    .join("");
  document.getElementById("popOv").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closePop(e) {
  if (e && e.target !== document.getElementById("popOv") && e.type !== "click")
    return;
  if (e && e.currentTarget === document.querySelector(".pop-close")) {
    document.getElementById("popOv").classList.remove("open");
    document.body.style.overflow = "";
    return;
  }
  if (!e || e.target === document.getElementById("popOv")) {
    document.getElementById("popOv").classList.remove("open");
    document.body.style.overflow = "";
  }
}
document.querySelector(".pop-close").addEventListener("click", () => {
  document.getElementById("popOv").classList.remove("open");
  document.body.style.overflow = "";
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("popOv").classList.remove("open");
    document.body.style.overflow = "";
  }
});

// THEME
let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
function applyTheme() {
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "");
}
applyTheme();
document.getElementById("theme-toggle").addEventListener("click", () => {
  dark = !dark;
  applyTheme();
});

// FILTER
document.querySelectorAll(".flt-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".flt-btn")
      .forEach((b) => b.classList.remove("on"));
    btn.classList.add("on");
    const f = btn.dataset.f;
    document.querySelectorAll(".work-card").forEach((card) => {
      card.style.display = f === "all" || card.dataset.cat === f ? "" : "none";
    });
  });
});

// REVEAL
const ro = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    }),
  { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => ro.observe(el));
