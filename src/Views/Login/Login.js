import React, { Fragment, useState } from "react";
import { View, Text, TextInput, Button, Platform } from "react-native";
import style from "./style";
import efetuarLogin from "../../api/login";
import AsyncStorage from "@react-native-community/async-storage";

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  const logar = async () => {
    try {
      const token = await efetuarLogin(usuario, senha);
      await AsyncStorage.setItem("instalura_token", token);

      navigation.replace("Feed", {nome: usuario});
    } catch (erro) {
      setMensagemErro(erro.message);
    }
  };

  return (
    <Fragment>
      <View style={style.container}>
        <TextInput
          placeholder="Usuário"
          style={style.entradas}
          onChangeText={(texto) => setUsuario(texto)}
        ></TextInput>
        <TextInput
          placeholder="Senha"
          secureTextEntry={true}
          style={style.entradas}
          onChangeText={(texto) => setSenha(texto)}
        ></TextInput>
        <Text>{mensagemErro}</Text>
      </View>
      <View style={style.entrar}>
        <Button title="Entrar" onPress={logar}></Button>
      </View>
    </Fragment>
  );
}
