import {gsap} from "gsap";

export const animateMain = () => {
    const tl = gsap.timeline();
    tl.from(".hero__badge", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out"
    })
    .from(".hero__title", {
      y: 80,
      opacity: 0,
      duration: 1.2,
      delay: 0.2,
      ease: "power4.out"
    }, "-=0.5")
    .from(".hero__subtitle", {
      y: 40,
      opacity: 0,
      delay: 0.2,
      duration: 1,
    }, "-=0.7")
    .from(".hero__actions", {
      y: 30,
      opacity: 0,
      delay: 0.2,
      duration: 0.9,
    }, "-=0.6")
    .from(".hero__stats", {
      y: 30,
      opacity: 0,
      delay: 0.2,
      duration: 0.9,
    }, "-=0.5");
};