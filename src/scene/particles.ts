import * as THREE from 'three';

export const createParticles = () => {
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

    return particles;
}