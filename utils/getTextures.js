import * as THREE from "three";

const getTextures = () => {
  const textureLoader = new THREE.TextureLoader();

  const comicTexture = textureLoader.load("/textures/comic.png");
  comicTexture.minFilter = THREE.NearestFilter;
  comicTexture.magFilter = THREE.NearestFilter;
  comicTexture.generateMipmaps = false;

  return { comicTexture };
};

export default getTextures;
