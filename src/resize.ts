import * as THREE from 'three';

interface ResizeParams {
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer
}

export const setupResize = ({
    camera,
    renderer
}: ResizeParams) => {
    const resize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    resize();
    window.addEventListener('resize', resize);
}