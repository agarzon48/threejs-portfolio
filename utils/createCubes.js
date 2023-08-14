import * as THREE from "three";

import getRandomWithOffset from "./getRandomWithOffset.js";

const createCubes = ({ scene, geometry, material }) => {
  const cubes = [];

  for (let i = 0; i < 150; i++) {
    const mesh = new THREE.Mesh(geometry, material);

    getRandomWithOffset(mesh);

    mesh.rotation.x = Math.random() * Math.PI;
    mesh.rotation.y = Math.random() * Math.PI;
    mesh.rotation.z = Math.random() * Math.PI;

    mesh.scale.setScalar(Math.random() * 0.75);

    scene.add(mesh);
    cubes.push(mesh);
  }

  return cubes;
};

export default createCubes;
