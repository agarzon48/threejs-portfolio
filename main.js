import * as THREE from "three";

import resizeWindow from "./utils/resizeWindow.js";
import addCamera from "./utils/addCamera.js";
import addRenderer from "./utils/addRenderer.js";
import debug from "./utils/debug.js";
import tick from "./utils/tick.js";
import getTextures from "./utils/getTextures.js";
import getMaterials from "./utils/getMaterials.js";
import getText from "./utils/getText.js";
import addLights from "./utils/addLights.js";
import addControls from "./utils/addControls.js";
import getGeometries from "./utils/getGeometries.js";
import createCubes from "./utils/createCubes.js";
import createTetrahedrons from "./utils/createTetrahedrons.js";

const canvas = document.querySelector("#app");
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const scene = new THREE.Scene();

const camera = addCamera({ sizes });
scene.add(camera);

/**
 * Textures
 */

const { comicTexture } = getTextures();

/**
 * Materials
 */
const { geometryMaterial, textMaterial } = getMaterials({
  textures: {
    comic: comicTexture,
  },
});

/**
 * Objects
 */

getText({ material: textMaterial, scene });
const { tetrahedronGeometry, cubeGeometry } = getGeometries();
const cubes = createCubes({
  scene,
  geometry: cubeGeometry,
  material: textMaterial,
});
const tetrahedrons = createTetrahedrons({
  scene,
  geometry: tetrahedronGeometry,
  material: textMaterial,
});

/**
 * Controls
 */

const controls = addControls({ camera, canvas });

/**
 * Lights
 */
const { ambientLight, pointLight1, pointLight2, pointLight3 } = addLights({
  scene,
});

const renderer = addRenderer({ canvas, sizes });

if (window.location.search.includes("debug")) {
  debug({
    scene,
    camera,
    textMaterial,
    ambientLight,
    pointLight1,
    pointLight2,
    pointLight3,
  });
}

resizeWindow({ camera, renderer, sizes });
tick({ renderer, scene, camera, controls, cubes, tetrahedrons });
