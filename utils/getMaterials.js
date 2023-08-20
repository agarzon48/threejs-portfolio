import * as THREE from "three";

const getMaterials = ({ textures }) => {
  const geometryMaterial = new THREE.MeshToonMaterial({
    color: "#ec4899",
    gradientMap: textures.comic,
  });

  const textMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 0.8,
    roughness: 0.3,
  });

  return { geometryMaterial, textMaterial };
};

export default getMaterials;
