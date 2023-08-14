import * as THREE from "three";

const addRenderer = ({ canvas, sizes }) => {
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  return renderer;
};

export default addRenderer;
