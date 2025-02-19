import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.fromTo(
  ".statistics__value--first",
  { text: "#####", duration: 1 },
  {
    text: "2756%",
    scrollTrigger: {
      trigger: ".hero",
      start: "top+=80",
      end: "+=150",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".statistics__value--second",
  { text: "##", duration: 1 },
  {
    text: "67",
    scrollTrigger: {
      trigger: ".hero",
      start: "top+=80",
      end: "+=150",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".statistics__value--third",
  { text: "######", duration: 1 },
  {
    text: "375000",
    scrollTrigger: {
      trigger: ".hero",
      start: "top+=80",
      end: "+=150",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".deals-section__title",
  { y: 20, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".statistics",
      start: "top-=350",
      end: "+=50",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".deals-section__status",
  { x: -30, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".statistics",
      start: "top-=300",
      end: "+=100",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".deals-section__deals",
  { y: 50, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".statistics",
      start: "top-=300",
      end: "+=100",
      scrub: true,
    },
  }
);

gsap.to(".about__cta-banner", {
  y: -10,
  repeat: -1,
  yoyo: true,
  duration: 0.4,
  ease: "power1.inOut",
});

gsap.fromTo(
  ".trade-card svg",
  { x: 20, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    ease: "back.out(1.7)",
    duration: 0.3,
    scrollTrigger: {
      trigger: ".trade-card",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  }
);

gsap.to(".services__btn, .tariff-card__btn", {
  scale: 1.05,
  repeat: -1,
  yoyo: true,
  duration: 0.4,
  ease: "power1.inOut",
});

gsap.fromTo(
  ".tariff-card__price sub",
  { text: "SALE", duration: 1 },
  {
    text: "-35%",
    scrollTrigger: {
      trigger: ".tariff-card",
      start: "top-=40%",
      end: "+=100",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".review-card--first",
  { x: -15, y: -15, opacity: 0 },
  {
    x: 0,
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".reviews",
      start: "top-=50%",
      end: "+=100",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".review-card--second",
  { x: 15, y: -15, opacity: 0 },
  {
    x: 0,
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".reviews",
      start: "top-=45%",
      end: "+=100",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".review-card--third",
  { x: -15, y: 15, opacity: 0 },
  {
    x: 0,
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".reviews",
      start: "top-=40%",
      end: "+=100",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".review-card--fourth",
  { x: 15, y: 15, opacity: 0 },
  {
    x: 0,
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".reviews",
      start: "top-=35%",
      end: "+=100",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".reviews__title",
  { y: 20, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".reviews",
      start: "top-=80%",
      end: "+=100",
      scrub: true,
    },
  }
);
