function locomotiveActivation() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#mainCtn"),
    smooth: true,
    getDirection: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  locoScroll.on("scroll", function (dets) {
    if (dets.direction === "up") {
      document.querySelector("#nav").style.top = 0;
    } else if (dets.direction === "down") {
      document.querySelector("#nav").style.top = "-50%";
    }
  });
  ScrollTrigger.scrollerProxy("#mainCtn", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#mainCtn").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

function boxAnimation() {
  gsap.to(".box", {
    scrollTrigger: {
      scroller: "#mainCtn",
      trigger: "#sec-5",
      pin: true,
      scrub: 2,
    },
    top: "-150%",
    ease: Expo.esaeInOut,
    stagger: 0.1,
  });
}

function textAnimation() {
  document.querySelectorAll(".anim").forEach(function (h1) {
    console.log(h1);
    h1.innerHTML = `<div class="textwrapper">${h1.textContent}</div>`;
  });
  document.querySelectorAll(".textwrapper").forEach((txt) => {
    let clutter = "";
    txt.textContent.split(" ").forEach((wrd) => {
      clutter += `<span>${wrd}</span>`;
    });
    txt.innerHTML = clutter;
  });
  gsap.set(".anim span", {
    y: "200%",
  });
  document.querySelectorAll(".anim").forEach(function (elem) {
    gsap.from(elem, {
      scrollTrigger: {
        scroller: "#mainCtn",
        trigger: elem,
        start: "top 75%",
      },
      onStart: function () {
        gsap.to(elem.children[0].children, {
          y: 0,
          ease: Power4,
          duration: 0.3,
          stagger: 0,
        });
      },
    });
  });
}

function landingPageTextHidingAnimation() {
  var tl = gsap.timeline();

  tl.to(".mainHeadAnim", {
    scrollTrigger: {
      scroller: "#mainCtn",
      trigger: "#videoSec-1",
      start: "top 50%",
      end: "top 30%",
      scrub: 2,
    },
    opacity: 0,
    ease: Expo.esaeInOut,
  });

  tl.to("#sLine", {
    scrollTrigger: {
      scroller: "#mainCtn",
      trigger: "#videoSec-1",
      start: "top 50%",
      end: "top 30%",
      scrub: 2,
    },
    opacity: 0,
    ease: Expo.esaeInOut,
  });
}

function videoSlidesAnimation() {
  let slides = document.querySelectorAll(".sld");
  // slides = [...slides];
  var isplaying = null;
  slides.forEach(function (elem) {
    elem.addEventListener("mouseover", function (dets) {
      isplaying = "#opener" + dets.target.dataset.index;
      // document.querySelector(isplaying).style.width = "100%";
      gsap.to(isplaying, {
        width: "100%"
      })
    });
    elem.addEventListener("mouseleave", function (dets) {
      isplaying = "#opener" + dets.target.dataset.index;
      // document.querySelector(isplaying).style.width = "0%";
      gsap.to(isplaying, {
        width: "0%"
      })
    });
  });
}

function sliderKaGola() {
  var sliderCtn = document.querySelector("#slider");
  var movRing = document.querySelector("#movingRing");
  sliderCtn.addEventListener("mouseenter", function () {
    movRing.style.opacity = 1;
  });
  sliderCtn.addEventListener("mousemove", function (dets) {
    let aDis = sliderCtn.getBoundingClientRect();
    let xVal = dets.clientX - aDis.x;
    let yVal = dets.clientY - aDis.y;
    movRing.style.top = yVal + "px";
    movRing.style.left = xVal + "px";
  });
  sliderCtn.addEventListener("mouseleave", function () {
    movRing.style.top = "50%";
    movRing.style.left = "50%";
    movRing.style.opacity = 0;
  });
}

function dotMovingCursor() {
  var ctn = document.querySelector("#CircularCtn");
  var circle = document.querySelector("#dot");
  ctn.addEventListener("mousemove", function (dets) {
    var aDis = ctn.getBoundingClientRect();
    var xVal = dets.clientX - aDis.x;
    var yVal = dets.clientY - aDis.y;
    console.log(aDis);
    circle.style.top = yVal + "px";
    circle.style.left = xVal + "px";
  });
  ctn.addEventListener("mouseleave", function (dets) {
    circle.style.top = "50%";
    circle.style.left = "50%";
  });
}

function changeToGreen() {
  document.querySelector(".menu").src = "Assets/Images/dot_icon_2.png";
}

function changeToWhite() {
  document.querySelector(".menu").src = "Assets/Images/dot_icon_1.png";
}

function movingCircle1() {
  var ctnts = document.querySelector("#videoSec-1");
  var circlets = document.querySelector("#movingCir1");
  ctnts.addEventListener("mouseenter", function () {
    circlets.style.opacity = 1;
  });
  ctnts.addEventListener("mousemove", function (dets) {
    let aDis = ctnts.getBoundingClientRect();
    let xVal = dets.clientX - aDis.x;
    let yVal = dets.clientY - aDis.y;
    circlets.style.top = yVal + "px";
    circlets.style.left = xVal + "px";
  });
  ctnts.addEventListener("mouseleave", function () {
    circlets.style.top = "50%";
    circlets.style.left = "50%";
    setTimeout(function () {
      circlets.style.opacity = 0;
    }, 10);
  });
}

function movingCircle2() {
  var ctnt = document.querySelector("#box1");
  var circlet = document.querySelector("#movingCir2");
  ctnt.addEventListener("mouseenter", function () {
    circlet.style.opacity = 1;
  });
  ctnt.addEventListener("mousemove", function (dets) {
    let aDis = ctnt.getBoundingClientRect();
    let xVal = dets.clientX - aDis.x;
    let yVal = dets.clientY - aDis.y;
    circlet.style.top = yVal + "px";
    circlet.style.left = xVal + "px";
  });
  ctnt.addEventListener("mouseleave", function () {
    circlet.style.top = "50%";
    circlet.style.left = "50%";
    setTimeout(function () {
      circlet.style.opacity = 0;
    }, 10);
  });
}

function circleAnimation() {
  gsap.set("#epCircle", {
    y: "100%",
  });
  gsap.to("#epCircle", {
    scrollTrigger: {
      scroller: "#mainCtn",
      trigger: "#sec-6",
      pin: true,
      // start: "top 45%",
      // end: "top 70%",
      scrub: 2,
      // markers: true
    },
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    ease: Expo.esaeInOut,
  });

  gsap.to("#sec-6, #epmainH", {
    scrollTrigger: {
      scroller: "#mainCtn",
      trigger: "#sec-7",
      // markers: true,
      end: "top 100%",
      scrub: 0.2,
      // toggleActions: "play reverse"
    },
    backgroundColor: "black",
    color: "white",
  });
  gsap.to("#epCircle", {
    scrollTrigger: {
      scroller: "#mainCtn",
      trigger: "#sec-7",
      // markers: true,
      end: "top 100%",
      scrub: 0.2,
      // toggleActions: "play reverse"
    },
    backgroundColor: "#dbff00",
    color: "black",
  });
}

locomotiveActivation();
boxAnimation();
textAnimation();
landingPageTextHidingAnimation();
movingCircle1();
videoSlidesAnimation();
dotMovingCursor();
sliderKaGola();
movingCircle2();
circleAnimation();
