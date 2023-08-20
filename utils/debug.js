import * as THREE from "three";
import * as dat from "lil-gui";

const debug = ({
  scene,
  camera,
  textMaterial,
  ambientLight,
  pointLight1,
  pointLight2,
  pointLight3,
  hemisphereLight,
}) => {
  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);

  const gui = new dat.GUI();

  const cameraFolder = gui.addFolder("Camera");
  cameraFolder.add(camera.position, "x").min(-10).max(10).step(0.01);
  cameraFolder.add(camera.position, "y").min(-10).max(10).step(0.01);
  cameraFolder.add(camera.position, "z").min(-10).max(10).step(0.01);
  cameraFolder.open();

  const textMaterialFolder = gui.addFolder("Text Material");
  textMaterialFolder.add(textMaterial, "metalness").min(0).max(1).step(0.01);
  textMaterialFolder.add(textMaterial, "roughness").min(0).max(1).step(0.01);

  const ambientLightFolder = gui.addFolder("Ambient Light");
  ambientLightFolder.add(ambientLight, "intensity").min(0).max(1).step(0.01);

  const pointLight1Folder = gui.addFolder("Point Light 1");
  pointLight1Folder.add(pointLight1.position, "x").min(-10).max(10).step(0.01);
  pointLight1Folder.add(pointLight1.position, "y").min(-10).max(10).step(0.01);
  pointLight1Folder.add(pointLight1.position, "z").min(-10).max(10).step(0.01);
  pointLight1Folder.add(pointLight1, "intensity").min(0).max(1).step(0.01);

  const pointLight2Folder = gui.addFolder("Point Light 2");
  pointLight2Folder.add(pointLight2.position, "x").min(-10).max(10).step(0.01);
  pointLight2Folder.add(pointLight2.position, "y").min(-10).max(10).step(0.01);
  pointLight2Folder.add(pointLight2.position, "z").min(-10).max(10).step(0.01);
  pointLight2Folder.add(pointLight2, "intensity").min(0).max(1).step(0.01);

  const pointLight3Folder = gui.addFolder("Point Light 3");
  pointLight3Folder.add(pointLight3.position, "x").min(-10).max(10).step(0.01);
  pointLight3Folder.add(pointLight3.position, "y").min(-10).max(10).step(0.01);
  pointLight3Folder.add(pointLight3.position, "z").min(-10).max(10).step(0.01);
  pointLight3Folder.add(pointLight3, "intensity").min(0).max(1).step(0.01);

  const hemisphereLightFolder = gui.addFolder("Hemisphere Light");
  hemisphereLightFolder
    .add(hemisphereLight.position, "x")
    .min(-10)
    .max(10)
    .step(0.01);
  hemisphereLightFolder
    .add(hemisphereLight.position, "y")
    .min(-10)
    .max(10)
    .step(0.01);
  hemisphereLightFolder
    .add(hemisphereLight.position, "z")
    .min(-10)
    .max(10)
    .step(0.01);
  hemisphereLightFolder
    .add(hemisphereLight, "intensity")
    .min(0)
    .max(1)
    .step(0.01);

  hemisphereLightFolder
    .add(hemisphereLight.color, "r", 0, 1)
    .name("red")
    .step(0.01);
  hemisphereLightFolder
    .add(hemisphereLight.color, "g", 0, 1)
    .name("green")
    .step(0.01);
  hemisphereLightFolder
    .add(hemisphereLight.color, "b", 0, 1)
    .name("blue")
    .step(0.01);
  hemisphereLightFolder.add(hemisphereLight.groundColor, "r", 0, 1).step(0.01);
  hemisphereLightFolder.add(hemisphereLight.groundColor, "g", 0, 1).step(0.01);
  hemisphereLightFolder.add(hemisphereLight.groundColor, "b", 0, 1).step(0.01);
};

export default debug;
