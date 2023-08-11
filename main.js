import * as THREE from "three";
import * as dat from "lil-gui";

const canvas = document.querySelector("#app");
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  1000
);
camera.position.x = 0.7;
camera.position.y = 1;
camera.position.z = 3;
scene.add(camera);

const sampleCube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(sampleCube);

if (window.location.search.includes("debug")) {
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
}

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  sampleCube.rotation.x = elapsedTime;
  sampleCube.rotation.y = elapsedTime;

  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
