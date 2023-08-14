import * as THREE from "three";

import resizeWindow from "./utils/resizeWindow.js";
import addCamera from "./utils/addCamera.js";
import addRenderer from "./utils/addRenderer.js";
import debug from "./utils/debug.js";
import tick from "./utils/tick.js";
import addSampleCube from "./utils/addSampleCube.js";
import getTextures from "./utils/getTextures.js";

const canvas = document.querySelector("#app");
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const tetrahedrons = [];
const cubes = [];

const scene = new THREE.Scene();

const camera = addCamera({ sizes });
scene.add(camera);

/**
 * Textures
 */

const { comicTexture } = getTextures();

const sampleCube = addSampleCube();
scene.add(sampleCube);

const renderer = addRenderer({ canvas, sizes });

if (window.location.search.includes("debug")) {
  debug({ scene, camera, sampleCube });
}

resizeWindow({ camera, renderer, sizes });
tick({ sampleCube, renderer, scene, camera });
