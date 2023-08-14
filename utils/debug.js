import * as THREE from "three";
import * as dat from "lil-gui";

const debug = ({ scene, camera, sampleCube }) => {
  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);

  const gui = new dat.GUI();

  const cameraFolder = gui.addFolder("Camera");
  cameraFolder.add(camera.position, "x").min(-10).max(10).step(0.01);
  cameraFolder.add(camera.position, "y").min(-10).max(10).step(0.01);
  cameraFolder.add(camera.position, "z").min(-10).max(10).step(0.01);
  cameraFolder.open();

  const cubeFolder = gui.addFolder("Cube");
  cubeFolder.add(sampleCube.position, "x").min(-10).max(10).step(0.01);
  cubeFolder.add(sampleCube.position, "y").min(-10).max(10).step(0.01);
  cubeFolder.add(sampleCube.position, "z").min(-10).max(10).step(0.01);
  cubeFolder.open();

  gui.add(sampleCube, "visible");
};

export default debug;
