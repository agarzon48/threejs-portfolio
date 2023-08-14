import * as THREE from "three";

const getMaterials = ({ textures }) => {
  const geometryMaterial = new THREE.MeshToonMaterial({
    color: "#ec4899",
    gradientMap: textures.comic,
  });

  const textMaterial = new THREE.MeshStandardMaterial({
    color: "#ec4899",
    metalness: 0.4,
    roughness: 0.54,
  });

  return { geometryMaterial, textMaterial };
};

export default getMaterials;
