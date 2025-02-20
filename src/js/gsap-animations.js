import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

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
      start: "top-=500",
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
      start: "top-=450",
      end: "+=100",
      scrub: true,
    },
  }
);

gsap.to(".deals-section__deals", {
  scrollLeft: 150,
  ease: "none",
  scrollTrigger: {
    trigger: ".deals-section",
    start: "top-=90%",
    end: "+=150",
    scrub: 1,
    once: true,
  },
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
  duration: 0.9,
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
  ".reviews__title",
  { y: 20, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".reviews",
      start: "top-=90%",
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
      start: "top-=70%",
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
      start: "top-=65%",
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
      start: "top-=60%",
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
      start: "top-=55%",
      end: "+=100",
      scrub: true,
    },
  }
);

document.querySelectorAll("[data-scroll]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));

    if (target) {
      gsap.to(window, {
        duration: 0.7,
        scrollTo: { y: target, offsetY: 50 },
        ease: "power2.out",
      });
    } else {
      console.warn("Якорь не найден:", link.getAttribute("href"));
    }
  });
});

gsap.fromTo(
  ".about__title",
  { opacity: 0, y: -20 },
  {
    opacity: 1,
    y: 0,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".about",
      start: "top-=700",
      end: "+=150",
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo(
  ".about__content p",
  { opacity: 0, y: -20 },
  {
    opacity: 1,
    y: 0,
    duration: 0.4,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".about",
      start: "top-=700",
      end: "+=150",
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo(
  ".about__cta-banner",
  { opacity: 0, y: 20 },
  {
    opacity: 1,
    y: 0,
    duration: 0.4,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".about",
      start: "top-=600",
      end: "+=150",
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo(
  ".services__cards .service-card",
  { opacity: 0, x: -15 },
  {
    opacity: 1,
    x: 0,
    duration: 0.3,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".services__cards",
      start: "top-=780",
      end: "+=100",
      toggleActions: "play none none reverse",
    },
  }
);
