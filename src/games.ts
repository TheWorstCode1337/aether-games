import '../scss/games.scss';
import '../scss/style.scss';

import './render/startComponents';
import { renderGames } from './render/renderGame';
import { animateGames } from './animation/animateGames';
import { createGamesBackdrop } from './scene/gamesBackdrop';
import { createScene } from './scene/setupScene';
import { setupResize } from './resize';
import { startAnimation } from './animation/startAnimation';

const canvas = document.querySelector<HTMLCanvasElement>('#bg-canvas');
const isMobile = window.innerWidth < 768;

if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error('Canvas not found');
}

renderGames();
animateGames();

const { scene, camera, renderer } = createScene(canvas, (isMobile) ? 6 : 8);

const backdrop = createGamesBackdrop({scene});

setupResize({
    camera,
    renderer
});

startAnimation({
    renderer,
    scene,
    camera,
    update: backdrop.update
});