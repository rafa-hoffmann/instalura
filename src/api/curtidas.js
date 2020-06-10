const imgLike = (curtiu) => {
  if (curtiu) {
    return require("../../assets/s2-checked.png");
  } else {
    return require("../../assets/s2.png");
  }
};

const curtirFoto = (curtiu, likes) => {
  let qtd = likes;
  if (curtiu) {
    qtd--;
  } else {
    qtd++;
  }

  return [!curtiu, qtd];
};

export { imgLike, curtirFoto };
