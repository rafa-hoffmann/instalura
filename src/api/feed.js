import { Platform } from "react-native";

const lerFotos = async (callback) => {
    let url = "192.168.50.110";
    if(Platform.OS == "ios"){
        url = "localhost";
    }

    const FotosHTTP = await fetch(`http://${url}:3030/feed`);
    const FotosJSON = await FotosHTTP.json();
    callback(FotosJSON);
  };

  export default lerFotos;