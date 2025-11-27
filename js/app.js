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

const button = document.querySelector(".slick-arrow");

console.log(button);

/** FIXED CONTACT BOX **/

const cttBoxWrap = document.querySelector("#contact_box_wrap");
const cttBox = document.querySelector(".contact_box");
const cttCloseBtn = document.querySelector(".contact_close_btn");

function openBox() {
  cttBox.classList.toggle("active");
  cttCloseBtn.classList.toggle("btn_position");
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

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ ease: "none", duration: 1 });

const tl = gsap.timeline();
tl.from(".slide_1", { xPercent: 0 })
  .from(".slide_2", { xPercent: 120 })
  .from(".slide_3", { xPercent: 200 })
  .from(".slide_4", { xPercent: 300 });

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

gsap.defaults({ ease: "none", duration: 1 });

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
