import * as THREE from 'three';

interface AnimationParams {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  particles: THREE.Points;
}

export const startAnimation = ({
  renderer,
  scene,
  camera,
  particles
}: AnimationParams) => {
  let isVisible = true;

  document.addEventListener('visibilitychange', () => {
    isVisible = !document.hidden;
  });

  const animate = () => {
    requestAnimationFrame(animate);

    if (!isVisible) return;

    particles.rotation.y += 0.00015;
    particles.rotation.x += 0.00008;

    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  };

  animate();
};