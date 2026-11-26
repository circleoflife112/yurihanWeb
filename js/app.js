/** LIGHT/DARK MODE */

const toggleBtn = document.getElementById("theme-toggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute(
      "data-theme",
      current === "dark" ? "light" : "dark",
    );
  });
}

/** FIXED NAVIGATION POSITION **/

let fixedNav = document.querySelector("#fixed_nav");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  if (value > 30) {
    fixedNav.style.animation = "stick 0.5s ease-in-out forwards";
  } else {
    fixedNav.style.animation = "return 0.5s ease-in-out";
  }
});

/** FIXED CONTACT BOX **/

const cttBoxWrap = document.querySelector("#contact_box_wrap");
const cttBox = document.querySelector(".contact_box");
const cttCloseBtn = document.querySelector(".contact_close_btn");
const arrowIcon = document.getElementById("arrow-icon");

function openBox() {
  cttBox.classList.toggle("active");
  cttBoxWrap.classList.toggle("wrap_closed");
  cttCloseBtn.classList.toggle("btn_position");
  arrowIcon.classList.toggle("icon-reverse");
}

cttCloseBtn.addEventListener("click", openBox);

/** MOVING BANNER START **/

let rollingBanner = document.querySelector(".moving_banner");

rollingBanner.id = "banner1"; // 아이디 부여

let clonedBanner = rollingBanner.cloneNode(true); // 기본값은 false, 자식 요소들까지 복제하려면 true 작성

clonedBanner.id = "banner2";

document.querySelector(".moving_banner_wrap").appendChild(clonedBanner);

document.querySelector("#banner1").style.left = "0px";
document.querySelector("#banner2").style.left =
  document.querySelector(".moving_banner ul");

rollingBanner.classList.add("original");
clonedBanner.classList.add("cloned");

/** SKILLS MARQUEE START **/

let skillsUl = document.querySelector(".skills");
let clonedSkills = skillsUl.cloneNode(true);
document.querySelector(".skills-wrapper").appendChild(clonedSkills);

/** SKILLS MARQUEE END **/

/** SCROLL TRIGGER START **/

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ ease: "none", duration: 1 });

/** HERO: main-section 고정 → slogan-section이 50% 위치까지 올라옴 **/
ScrollTrigger.create({
  trigger: ".pin-wrapper",
  start: "top top",
  end: "+=50%" /* 50vh 스크롤 동안 고정 */,
  pin: ".main-section",
  pinSpacing: false /* spacer 없이 → slogan이 자연스럽게 올라옴 */,
  anticipatePin: 1,
});

const tl = gsap.timeline();
tl.from(".slide_2", { xPercent: 110 })
  .to(".slide_1", { xPercent: -200 }, "<")
  .to(".slide_2", { xPercent: 0, duration: 2 }) // slide_2에서 멈춤
  .from(".slide_3", { xPercent: 110 })
  .to(".slide_2", { xPercent: -200 }, "<")
  .to(".slide_3", { xPercent: 0, duration: 2 }) // slide_3에서 멈춤
  .from(".slide_4", { xPercent: 110 })
  .to(".slide_3", { xPercent: -200 }, "<")
  .to(".slide_4", { xPercent: 0, duration: 2 }) // slide_4에서 멈춤
  .from(".slide_5", { xPercent: 110 })
  .to(".slide_4", { xPercent: -200 }, "<")
  .to(".slide_5", { xPercent: 0, duration: 2 }) // slide_5에서 멈춤
  .from(".slide_6", { xPercent: 110 })
  .to(".slide_5", { xPercent: -200 }, "<")
  .to(".slide_6", { xPercent: 0, duration: 2 }); // slide_6에서 멈춤

ScrollTrigger.create({
  animation: tl,
  trigger: ".slide_section",
  start: "top top",
  end: "bottom top",
  scrub: true,
  pin: true,
  anticipatePin: 1,
});

/** PRODUCT PAGE SCROLL TRIGGER START **/

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ ease: "none", duration: 3 });

const sl = gsap.timeline();
sl.from(".work_slider_2", { yPercent: 0 }).from(".work_slider_3", {
  yPercent: 100,
});

ScrollTrigger.create({
  animation: sl,
  trigger: ".pro_part_slider",
  start: "top top",
  end: "bottom top",
  scrub: true,
  pin: true,
  anticipatePin: 1,
});

/** PRODUCT PAGE1 SCROLL TRIGGER START **/

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ ease: "none", duration: 3 });

const sl1 = gsap.timeline();
sl1.from(".v-slider-group-1", { yPercent: 0 }).from(".v-slider-group-2", {
  yPercent: 100,
});

ScrollTrigger.create({
  animation: sl1,
  trigger: ".pro_part_slider1",
  start: "top top",
  end: "bottom top",
  scrub: true,
  pin: true,
  anticipatePin: 1,
});

/** SCROLL FADE-IN ANIMATION **/

[
  { trigger: ".slogan-section", target: ".slogan-content", stagger: 0.2 },
  { trigger: ".about-me-section", target: ".experience-part ul", stagger: 0.2 },
].forEach(({ trigger, target, stagger }) => {
  gsap.from(target, {
    scrollTrigger: {
      trigger,
      start: "top 80%",
      toggleActions: "play none none reset",
    },
    y: 60,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    stagger,
  });
});
