import * as THREE from "three";

import getRandomWithOffset from "./getRandomWithOffset.js";

const createTetrahedrons = ({ scene, geometry, material }) => {
  const tetrahedrons = [];

  for (let i = 0; i < 100; i++) {
    const mesh = new THREE.Mesh(geometry, material);

    getRandomWithOffset(mesh);

    mesh.rotation.x = Math.random() * Math.PI;
    mesh.rotation.y = Math.random() * Math.PI;
    mesh.rotation.z = Math.random() * Math.PI;

    mesh.scale.setScalar(Math.random() * 0.75);

    scene.add(mesh);
    tetrahedrons.push(mesh);
  }

  return tetrahedrons;
};

export default createTetrahedrons;
