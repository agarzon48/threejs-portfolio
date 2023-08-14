import * as THREE from "three";

const getGeometries = () => {
  const tetrahedronGeometry = new THREE.ConeGeometry(0.5, 0.707, 3, 1);
  const cubeGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);

  return { tetrahedronGeometry, cubeGeometry };
};

export default getGeometries;
