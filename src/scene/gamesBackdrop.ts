import * as THREE from 'three';

type GamesBackdropOptions = {
    scene: THREE.Scene;
};

export const createGamesBackdrop = ({scene}:GamesBackdropOptions) => {
    const portalGroup = new THREE.Group();
    const isMobile = window.innerWidth < 768;
    scene.add(portalGroup);
    if (isMobile)
    portalGroup.scale.set(0.8, 0.8, 0.8);

    const ringGeometry = new THREE.TorusGeometry(2.2, 0.08, 16, 180);
    const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0xc084fc,
        transparent: true,
        opacity: 0.9
    });

    const starCount = isMobile ? 2000 : 7500;
    const ringCount = isMobile ? 5 : 7;
    const shardCount = isMobile ? 14 : 24;

    for (let i = 0; i < ringCount; i++) {
    const ring = new THREE.Mesh(ringGeometry, ringMaterial.clone());
    const scale = 1 + i * 0.22;

    ring.scale.setScalar(scale);
    ring.rotation.z = i * 0.18;
    ring.position.z = -i * 0.25;

    const mat = ring.material as THREE.MeshBasicMaterial;
    mat.color = new THREE.Color(i % 2 === 0 ? 0xc084fc : 0x00ff9d);
    mat.opacity = 0.18 + i * 0.08;

    portalGroup.add(ring);
  }

  const coreGeometry = new THREE.SphereGeometry(0.9, 48, 48);
  const coreMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.85
  });

  const core = new THREE.Mesh(coreGeometry, coreMaterial);
  portalGroup.add(core);

  const shardGeometry = new THREE.BoxGeometry(0.08, 0.6, 0.08);
  const shardMaterial = new THREE.MeshBasicMaterial({
    color: 0xd8b4fe,
    transparent: true,
    opacity: 0.55
  });

  const shards: THREE.Mesh[] = [];

  for (let i = 0; i < shardCount; i++) {
    const shard = new THREE.Mesh(shardGeometry, shardMaterial.clone());
    const angle = (i / shardCount) * Math.PI * 2;
    const radius = 2.8 + (i % 3) * 0.2;

    shard.position.x = Math.cos(angle) * radius;
    shard.position.y = Math.sin(angle) * radius;
    shard.position.z = (Math.random() - 0.5) * 1.4;
    shard.rotation.z = angle;
    shard.rotation.x = Math.random() * Math.PI;

    const mat = shard.material as THREE.MeshBasicMaterial;
    mat.color = new THREE.Color(i % 2 === 0 ? 0xc084fc : 0x00ff9d);
    mat.opacity = 0.25 + Math.random() * 0.35;

    portalGroup.add(shard);
    shards.push(shard);
  }

  const starGeometry = new THREE.BufferGeometry();
  const starPositions = new Float32Array(starCount * 3);

  for (let i = 0; i < starCount * 3; i += 3) {
    starPositions[i] = (Math.random() - 0.5) * 60;
    starPositions[i + 1] = (Math.random() - 0.5) * 35;
    starPositions[i + 2] = (Math.random() - 0.5) * 35;
  }

  starGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(starPositions, 3)
  );

  const starMaterial = new THREE.PointsMaterial({
    size: 0.03,
    color: 0xffffff,
    transparent: true,
    opacity: 0.7
  });

  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);

  let mouseX = 0;
  let mouseY = 0;

  const onPointerMove = (event: PointerEvent) => {
    mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
  };

  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

  if (!isTouchDevice) window.addEventListener('pointermove', onPointerMove);

  const update = (time:number) => {
    const mouseInfluence = isMobile ? 0.15 : 0.35;

    portalGroup.rotation.y = mouseX * mouseInfluence;
    portalGroup.rotation.x = -mouseY * mouseInfluence * 0.6;

    portalGroup.rotation.z = time * 0.12;

    core.scale.setScalar(1 + Math.sin(time * 3.2) * 0.08);
    for (let i = 0; i < portalGroup.children.length; i++) {
    const rotateSpeed = isMobile ? 0.5 : 1;
      const obj = portalGroup.children[i];
      if (obj instanceof THREE.Mesh && obj !== core) {
        obj.rotation.z += (0.002 + i * 0.0003) * rotateSpeed;
      }
    }
    stars.rotation.y = time * 0.01;
    stars.rotation.x = time * 0.005;
  };

  return { update };
}