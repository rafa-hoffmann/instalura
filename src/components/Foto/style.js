import { StyleSheet, Dimensions } from "react-native";

const style = StyleSheet.create({
  imagem: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
  },

  like: {
    width:40,
    height:40,
    margin: 5,
  },

  viewLike:{
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default style;

