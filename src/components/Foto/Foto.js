import React, { Fragment, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import style from "./style";

const Foto = ({ urlFoto, descricao, qtdLikes, curtirFoto, imgLike }) => {
  const [curtiu, setCurtiu] = useState(false);
  const [likes, setLikes] = useState(qtdLikes);

  const clicouCurtir = () => {
    const [novoEstCurtiu, qtd] = curtirFoto(curtiu, likes);
    setLikes(qtd);
    setCurtiu(novoEstCurtiu);
  };

  return (
    <Fragment>
      <Image source={{ uri: urlFoto }} style={style.imagem}></Image>
      <Text> {descricao}</Text>
      <View style={style.viewLike}>
        <TouchableOpacity onPress={clicouCurtir}>
          <Image source={imgLike(curtiu)} style={style.like}></Image>
        </TouchableOpacity>
        <Text>{likes} curtidas</Text>
      </View>
    </Fragment>
  );
};

export default Foto;
