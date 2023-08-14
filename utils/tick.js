import * as THREE from "three";

const clock = new THREE.Clock();

const tick = ({ renderer, scene, camera, controls, cubes, tetrahedrons }) => {
  const elapsedTime = clock.getElapsedTime();

  cubes.forEach((cube, index) => {
    cube.rotation.x = elapsedTime * index * 0.01;
    cube.rotation.y = elapsedTime * index * 0.01;
    cube.rotation.z = elapsedTime * index * 0.01;
  });

  tetrahedrons.forEach((tetrahedron, index) => {
    tetrahedron.rotation.x = elapsedTime * index * 0.01;
    tetrahedron.rotation.y = elapsedTime * index * 0.01;
    tetrahedron.rotation.z = elapsedTime * index * 0.01;
  });

  renderer.render(scene, camera);

  controls.update();

  window.requestAnimationFrame(() =>
    tick({ renderer, scene, camera, controls, cubes, tetrahedrons })
  );
};

export default tick;
