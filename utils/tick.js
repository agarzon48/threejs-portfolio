import * as THREE from "three";

const clock = new THREE.Clock();

const tick = ({ sampleCube, renderer, scene, camera }) => {
  const elapsedTime = clock.getElapsedTime();

  sampleCube.rotation.x = elapsedTime;
  sampleCube.rotation.y = elapsedTime;

  renderer.render(scene, camera);

  window.requestAnimationFrame(() =>
    tick({ sampleCube, renderer, scene, camera })
  );
};

export default tick;
