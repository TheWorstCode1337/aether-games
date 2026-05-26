import {gsap} from "gsap";

export const animateGames = ():void => {
    const timeline = gsap.timeline();
    timeline
    .from('.games-intro__label', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
    .from(
      '.games-intro__title',
      {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
      },
      '-=0.4'
    )
    .from(
      '.games-intro__description',
      {
        y: 30,
        opacity: 0,
        duration: 0.8
      },
      '-=0.6'
    )
    .from(
      '.game-card',
      {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out'
      },
      '-=0.4'
    );
};