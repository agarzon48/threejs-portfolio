import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const addControls = ({ camera, canvas }) => {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.maxDistance = 7;
  controls.minDistance = 3;
  controls.enablePan = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.5;

  return controls;
};

export default addControls;
