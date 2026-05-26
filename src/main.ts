import '../scss/style.scss';

import { animateMain } from './animation/animationMain';
import { createScene } from './scene/setupScene';
import { createParticles } from './scene/particles';
import { startAnimation } from './scene/animation';
import { setupResize } from './resize';
import './render/startComponents';


const canvas = document.querySelector<HTMLCanvasElement>('#bg-canvas');
if (!(canvas instanceof HTMLCanvasElement)) throw new Error('Canvas not found');

const {
  scene,
  camera,
  renderer
} = createScene(canvas, 35);

const particles = createParticles();
scene.add(particles);

startAnimation({
  renderer,
  scene,
  camera,
  particles
});

setupResize({
  camera,
  renderer
})

window.addEventListener('DOMContentLoaded', () => {
  animateMain();
});