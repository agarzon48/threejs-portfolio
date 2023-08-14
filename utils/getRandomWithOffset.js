const getRandomWithOffset = (mesh) => {
  mesh.position.x = (Math.random() - 0.5) * 10;
  mesh.position.y = (Math.random() - 0.5) * 10;
  mesh.position.z = (Math.random() - 0.5) * 10;

  const length = mesh.position.length();

  if (length < 2) {
    getRandomWithOffset(mesh);
  }
};

export default getRandomWithOffset;
