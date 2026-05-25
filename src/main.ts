import * as THREE from 'three';
import { gsap } from 'gsap';
import './style.scss';

const canvas = document.getElementById('bg-canvas') as HTMLCanvasElement | null;
if (!canvas) throw new Error('Canvas not found');

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

const isMobile = window.innerWidth < 768;
const particlesCount = isMobile ? 1900 : 3500;
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
  blending: THREE.AdditiveBlending,
  sizeAttenuation: true
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);

scene.fog = new THREE.FogExp2(0x0f0b1a, 0.019);
renderer.setClearColor(0x000, 0);

let isVisible = true;
document.addEventListener('visibilitychange', () => {
  isVisible = !document.hidden;
});

const animation = () => {
  requestAnimationFrame(animation);
  if (!isVisible) return;
  particles.rotation.y += 0.00015;
  particles.rotation.x += 0.00008;
  camera.lookAt(scene.position);
  renderer.render(scene, camera);
}
animation();

const resize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
};
resize();
window.addEventListener('resize', resize);

window.addEventListener('DOMContentLoaded', () => {
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
});