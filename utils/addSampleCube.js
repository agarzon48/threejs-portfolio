import * as THREE from "three";

const addSampleCube = () => {
  const sampleCube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
  );

  return sampleCube;
};

export default addSampleCube;
