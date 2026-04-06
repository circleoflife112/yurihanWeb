/** LIGHT/DARK MODE */

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute(
    "data-theme",
    current === "dark" ? "light" : "dark",
  );
});

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

/** SCROLL TRIGGER START **/

if (window.innerWidth > 768) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.defaults({ ease: "none", duration: 1 });

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
    .to(".slide_4", { xPercent: -200 }, "<");

  ScrollTrigger.create({
    animation: tl,
    trigger: ".slide_section",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
    anticipatePin: 1,
  });
} else {
  /** MOBILE SWIPE FOR #project **/
  const slides = Array.from(document.querySelectorAll(".slider_wrap .slides"));
  let current = 0;

  slides.forEach((slide, i) => {
    slide.style.transition = "transform 0.35s ease";
    slide.style.transform = i === 0 ? "translateX(0)" : "translateX(100%)";
  });

  let startX = 0;
  const sliderWrap = document.querySelector(".slider_wrap");

  sliderWrap.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  sliderWrap.addEventListener("touchend", (e) => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 50) return;

    if (diff > 0 && current < slides.length - 1) {
      slides[current].style.transform = "translateX(-100%)";
      current++;
      slides[current].style.transform = "translateX(0)";
    } else if (diff < 0 && current > 0) {
      slides[current].style.transform = "translateX(100%)";
      current--;
      slides[current].style.transform = "translateX(0)";
    }
  }, { passive: true });
}

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
