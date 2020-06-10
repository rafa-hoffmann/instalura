import React, { Fragment, useState, useEffect } from "react";
import { ScrollView, FlatList, StatusBar, Platform } from "react-native";
import { Cabecalho } from "../../components/Cabecalho";
import { Foto } from "../../components/Foto";
import lerFotos from "../../api/feed";
import { Comentarios } from "../../components/Comentarios";
import { curtirFoto, imgLike } from "../../api/curtidas";
import adicionarComentario from "../../api/comentarios";

export default function Feed({ navigation, route }) {
  const [fotos, setFotos] = useState([]);

  navigation.setOptions({
    title: route.params.nome,
  });

  useEffect(() => {
    lerFotos(setFotos);
  }, []);

  const renderItem = ({ item }) => (
    <Fragment>
      <Cabecalho
        nomeUsuario={item.userName}
        urlImage={item.userURL}
      ></Cabecalho>
      <Foto
        urlFoto={item.url}
        descricao={item.description}
        qtdLikes={item.likes}
        imgLike={imgLike}
        curtirFoto={curtirFoto}
      ></Foto>
      <Comentarios
        comentarios={item.comentarios}
        adicionarComentario={adicionarComentario}
      ></Comentarios>
    </Fragment>
  );

  return (
    <FlatList
      ListHeaderComponent={
        <StatusBar backgroundColor="white" barStyle="dark-content"></StatusBar>
      }
      data={fotos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    ></FlatList>
  );
}
