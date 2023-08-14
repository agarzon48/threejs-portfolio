import * as THREE from "three";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";

const getText = ({ material, scene }) => {
  const fontLoader = new FontLoader();
  fontLoader.load("/fonts/helvetiker_bold.typeface.json", (font) => {
    const geometry = new TextGeometry("portfolio", {
      font,
      size: 0.5,
      height: 0.2,
      curveSegments: 15,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 5,
    });
    const text = new THREE.Mesh(geometry, material);
    text.geometry.center();
    scene.add(text);
  });
};

export default getText;
