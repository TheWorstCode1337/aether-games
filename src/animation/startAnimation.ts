import * as THREE from 'three';

type AnimationOptions = {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  update?: (time: number) => void;
};

export const startAnimation = ({
  renderer,
  scene,
  camera,
  update
}: AnimationOptions) => {

  const clock = new THREE.Timer();

  const animate = () => {
    requestAnimationFrame(animate);

    const time = clock.getElapsed();

    update?.(time);

    renderer.render(scene, camera);
  };

  animate();
};