import './style.scss';

import { animateMain } from './animationMain';
import { createScene } from './scene/setupScene';
import { createParticles } from './scene/particles';
import { startAnimation } from './scene/animation';
import { setupResize } from './resize';

const canvas = document.getElementById('bg-canvas') as HTMLCanvasElement | null;
if (!canvas) throw new Error('Canvas not found');

const {
  scene,
  camera,
  renderer
} = createScene(canvas);

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