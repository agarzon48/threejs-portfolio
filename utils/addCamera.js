import * as THREE from "three";

const addCamera = ({ sizes }) => {
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    1000
  );
  camera.position.x = 0.7;
  camera.position.y = 1;
  camera.position.z = 3;

  return camera;
};

export default addCamera;
