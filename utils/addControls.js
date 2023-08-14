import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const addControls = ({ camera, canvas }) => {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.maxDistance = 7;

  return controls;
};

export default addControls;
