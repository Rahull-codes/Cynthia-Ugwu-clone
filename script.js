const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnim() {
  var t1 = gsap.timeline();

  t1.from("#nav", {
    y: "10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })

    .to(".boundinglem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })

    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

var timeout = 0;
function circleChaptakaro() {
  var xscale = 0;
  var yscale = 0;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    this.clearTimeout(timeout);

    var xdiff = dets.clientX - xprev;
    var ydiff = dets.clientY - yprev;

    xscale = gsap.utils.clamp(0.8, 1.2, xdiff);
    yscale = gsap.utils.clamp(0.8, 1.2, ydiff);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(1 , 1)`;
    }, 100);
  });
}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${xscale} , ${yscale})`;
  });
}

circleChaptakaro();
circleMouseFollower();
firstPageAnim();

document.querySelectorAll(".elem").forEach(function (elem) {

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
    });
  });

  var rotate = 0;
  var diffroot = 0;

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffroot = dets.clientX - rotate;
    rotate = dets.clientX;

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffroot * 0.5),
    });
  });
});

document.querySelectorAll(".elem").forEach(function (elem) {
  elem.addEventListener("mousemove", () => {
    gsap.to(elem.querySelector("h1"), {
      opacity: 0.2,
      x: 40,
      duration: 0.5,
    });
  });

  elem.addEventListener("mouseleave", () => {
    gsap.to(elem.querySelector("h1"), {
      opacity: 1,
      x: 0,
      duration: 0.5,
    });
  });
});