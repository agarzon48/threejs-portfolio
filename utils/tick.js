import * as THREE from "three";

const clock = new THREE.Clock();

const tick = ({ renderer, scene, camera, controls }) => {
  const elapsedTime = clock.getElapsedTime();

  renderer.render(scene, camera);

  controls.update();

  window.requestAnimationFrame(() =>
    tick({ renderer, scene, camera, controls })
  );
};

export default tick;
