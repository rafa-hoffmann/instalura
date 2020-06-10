import React, { Fragment, useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import style from "./style";

const Comentarios = ({ comentarios, adicionarComentario }) => {
  const [estComentarios, setComentarios] = useState(comentarios);

  const comentar = () => {
    campoInput.clear();

    const novoComentario = adicionarComentario(conteudoCampoInput, "Rafa");

    setComentarios([...estComentarios, novoComentario]);
  };

  let campoInput;
  let conteudoCampoInput = "";
  return (
    <View>
      <FlatList
        data={estComentarios}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={style.comentario}>
            <Text> {item.userName}</Text>
            <Text> {item.text}</Text>
          </View>
        )}
      ></FlatList>
      <View style={style.comentar}>
        <TextInput
          ref={(textInput) => (campoInput = textInput)}
          onChangeText={(texto) => (conteudoCampoInput = texto)}
          style={{ flex: 1 }}
          placeholder={"Deixe seu comentário..."}
        ></TextInput>
        <TouchableOpacity onPress={comentar}>
          <Image
            source={require("../../../assets/send.png")}
            style={style.send}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Comentarios;
