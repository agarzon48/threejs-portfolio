import * as THREE from "three";

const addLights = ({ scene }) => {
  const ambientLight = new THREE.AmbientLight("#ec4899", 0.4);
  scene.add(ambientLight);

  const pointLight1 = new THREE.PointLight("#ec4899", 1);
  pointLight1.position.x = -1;
  pointLight1.position.y = -3;
  pointLight1.position.z = -3;
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight("#ec4899", 0.8);
  pointLight2.position.x = 1;
  pointLight2.position.y = 3;
  pointLight2.position.z = -3;
  scene.add(pointLight2);

  const pointLight3 = new THREE.PointLight("#ec4899", 1);
  pointLight3.position.x = 0;
  pointLight3.position.y = 0;
  pointLight3.position.z = 1;
  scene.add(pointLight3);

  return { ambientLight, pointLight1, pointLight2, pointLight3 };
};

export default addLights;
