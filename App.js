import React from "react";
import Feed from "./src/Views/Feed/Feed";
import Login from "./src/Views/Login/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";

const Stack = createStackNavigator();

const loginOpcoes = () => {
  const opcoes = {
    title: "Login",
  };

  if (Platform.OS == "android") {
    opcoes.headerShown = false;
  }

  return opcoes;
};


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={loginOpcoes} />
        <Stack.Screen name="Feed" component={Feed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
