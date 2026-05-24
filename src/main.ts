import * as THREE from 'three';
import { gsap } from 'gsap';
import '../src/style.scss';

const canvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 35;

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const particlesCount = 3500;
const positions = new Float32Array(particlesCount * 3);
const colors = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i += 3) {
  positions[i] = (Math.random() - 0.5) * 120;
  positions[i + 1] = (Math.random() - 0.5) * 120;
  positions[i + 2] = (Math.random() - 0.5) * 80;

  const color = Math.random() > 0.5 ? 0xc084fc : 0x00ff9d;
  const col = new THREE.Color(color);
  colors[i] = col.r;
  colors[i + 1] = col.g;
  colors[i + 2] = col.b;
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

const material = new THREE.PointsMaterial({
  size: 0.18,
  vertexColors: true,
  transparent: true,
  opacity: 0.75,
  blending: THREE.AdditiveBlending
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);

const animation = () => {
  requestAnimationFrame(animation);
  particles.rotation.y += 0.00015;
  particles.rotation.x += 0.00008;
  renderer.render(scene, camera);
}
animation();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

gsap.from(".hero__badge", { y: 40, opacity: 0, duration: 1, delay: 0.4, ease: "power3.out" });
gsap.from(".hero__title", { y: 80, opacity: 0, duration: 1.4, delay: 0.7, ease: "power4.out" });
gsap.from(".hero__subtitle", { y: 50, opacity: 0, duration: 1.2, delay: 1.1 });
gsap.from(".hero__actions", { y: 60, opacity: 0, duration: 1.1, delay: 1.4 });
gsap.from(".hero__stats", { y: 40, opacity: 0, duration: 1, delay: 1.7 });