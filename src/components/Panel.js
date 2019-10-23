import React, { useState } from "react";
import {
  ScrollView,
  RefreshControl,
  Button,
  View,
  Text,
  Alert,
  StyleSheet,
  SafeAreaView,
  AsyncStorage,
  Dimensions
} from "react-native";
import Constants from "expo-constants";
import Circulo from "./Circulo.js";
import Registration from "./registration/Registration";
function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
export default function Panel() {
  const [stateCircle, setStateCircle] = useState(false);
  const [txtCircle, setTxtCircle] = useState("");
  const [refreshing, setRefreshing] = React.useState(false);
  const estado = useState(false);
  let userName = '';
  let nombre ='';
  let apellido = '';
  let correo = '';
  let password = '';
  let idUser = "2";
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);
  function handleCircle(stateCircle, txtCircle) {
    setStateCircle(stateCircle);
    setTxtCircle(txtCircle);
  }
  function start(estado) {
    if (!this.state) {
      estado = true;
      _storeData();
    }
  }
  const _storeData = async () => {
    try {
      await AsyncStorage.setItem("perro", "no");
      await AsyncStorage.setItem("pequeño", "no");
      await AsyncStorage.setItem("gato", "no");
      await AsyncStorage.setItem("mediano", "no");
      await AsyncStorage.setItem("grande", "no");
      await AsyncStorage.setItem("peloL", "no");
      await AsyncStorage.setItem("activo", "no");
      await AsyncStorage.setItem("peloC", "no");
      await AsyncStorage.setItem("adulto", "no");
      await AsyncStorage.setItem("sedentario", "no");
      await AsyncStorage.setItem("bebe", "no");
      await AsyncStorage.setItem("sociable", "no");
    } catch (error) {

    }
  };

 function  prueba() {
    fetch('http://192.168.0.9:3000/users?id='+idUser)
            .then((response) => response.json())
            .then((responseJson) => {
                let users = responseJson;
                for(let u of users){
                  userName = u["user"]["username"];
                  nombre = u["user"]["nombre"];
                  apellido = u["user"]["apellido"];
                  correo = u["user"]["correo"];
                  password = u["user"]["password"];
                  console.log(userName);
                }
            })
            .catch((error) => {
                console.error(error);
            });

 }
  const _displayData = async () => {


console.log("apellido");
    console.log(apellido);

      const perro = await AsyncStorage.getItem("perro");
      const pequeño = await AsyncStorage.getItem("pequeño");
      const gato = await AsyncStorage.getItem("gato");
      const mediano = await AsyncStorage.getItem("mediano");
      const grande = await AsyncStorage.getItem("grande");
      const peloL = await AsyncStorage.getItem("peloL");
      const activo = await AsyncStorage.getItem("activo");
      const peloC = await AsyncStorage.getItem("peloC");
      const adulto = await AsyncStorage.getItem("adulto");
      const sedentario = await AsyncStorage.getItem("sedentario");
      const bebe = await AsyncStorage.getItem("bebe");
      const sociable = await AsyncStorage.getItem("sociable");
      let usuario = {
                   username: userName ,
                    nombre: nombre,
                    apellido: apellido,
                    correo: correo,
                    password: password,
        filtros: [
          {
            perro: perro,
            gato: gato,
            pequeno: pequeño,
            mediano: mediano,
            grande: grande,
            peloLargo: peloL,
            peloCorto: peloC,
            activo: activo,
            sedentario: sedentario,
            sociable: sociable,
            adulto: adulto,
            bebe: bebe,
          }]
      };
console.log("se va hacer el put") ;
fetch('http://192.168.0.9:3000/users/'+idUser, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user: usuario
                    }),
                }).catch( error => {
          console.log(error);
                });
  };

  const _changeData = async (stateCircle, txtCircle) => {
    if (txtCircle == "Pequeño") {
      if (stateCircle == true) {
        await AsyncStorage.setItem("pequeño", "si");
      } else {
        await AsyncStorage.setItem("pequeño", "no");
      }
    } else if (txtCircle == "Mediano") {
      if (stateCircle == true) {
        await AsyncStorage.setItem("mediano", "si");
      } else {
        await AsyncStorage.setItem("mediano", "no");
      }
    } else if (txtCircle == "Grande") {
      if (stateCircle == true) {
        await AsyncStorage.setItem("grande", "si");
      } else {
        await AsyncStorage.setItem("grande", "no");
      }
    } else if (txtCircle == "Activo") {
      if (stateCircle == true) {
        await AsyncStorage.setItem("activo", "si");
      } else {
        await AsyncStorage.setItem("activo", "no");
      }
    } else if (txtCircle == "Adulto") {
      if (stateCircle == true) {
        await AsyncStorage.setItem("adulto", "si");
      } else {
        await AsyncStorage.setItem("adulto", "no");
      }
    } else if (txtCircle == "Bebe") {
      if (stateCircle == true) {
        await AsyncStorage.setItem("bebe", "si");
      } else {
        await AsyncStorage.setItem("bebe", "no");
      }
    } else if (txtCircle == "Gato") {
      if (stateCircle == true) {
        await AsyncStorage.setItem("gato", "si");
      } else {
        await AsyncStorage.setItem("gato", "no");
      }
    } else if (txtCircle == "Perro") {
      if (stateCircle == true) {
        await AsyncStorage.setItem("perro", "si");
      } else {
        await AsyncStorage.setItem("perro", "no");
      }
    } else if (txtCircle == "Pelo largo") {
      if (stateCircle == true) {
        await AsyncStorage.setItem("peloL", "si");
      } else {
        await AsyncStorage.setItem("peloL", "no");
      }
    } else if (txtCircle == "Pelo corto") {
      if (stateCircle == true) {
        await AsyncStorage.setItem("peloC", "si");
      } else {
        await AsyncStorage.setItem("peloC", "no");
      }
    } else if (txtCircle == "Sedentario") {
      if (stateCircle == true) {
        await AsyncStorage.setItem("sedentario", "si");
      } else {
        await AsyncStorage.setItem("sedentario", "no");
      }
    } else if (txtCircle == "Sociable") {
      if (stateCircle == true) {
        await AsyncStorage.setItem("sociable", "si");
      } else {
        await AsyncStorage.setItem("sociable", "no");
      }
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      scrollEnabled={true}
    >
      <Text style={{ fontSize: 23, fontWeight: "bold", textAlign: "center" }}>
        ¿Cómo es tu mascota ideal ?
      </Text>
      <Text style={{ fontSize: 10, fontWeight: "bold", textAlign: "center" }}>
        Para reiniciar los filtros , deslice hacia abajo
      </Text>

      <View style={{ flexDirection: "row" }}>
        <View>
          <Circulo
            text="Pequeño"
            circle={(start(estado), handleCircle, _changeData, prueba)}
          ></Circulo>
          <Circulo
            text="Mediano"
            circle={(start(estado), handleCircle, _changeData, prueba)}
          ></Circulo>
          <Circulo
            text="Grande"
            circle={(start(estado), handleCircle, _changeData, prueba)}
          ></Circulo>
          <Circulo
            text="Activo"
            circle={(start(estado), handleCircle, _changeData, prueba)}
          ></Circulo>
          <Circulo
            text="Adulto"
            circle={(start(estado), handleCircle, _changeData, prueba)}
          ></Circulo>
          <Circulo
            text="Bebe"
            circle={(start(estado), handleCircle, _changeData, prueba)}
          ></Circulo>
        </View>
        <View>
          <Circulo
            text="Gato"
            circle={(start(estado), handleCircle, _changeData, prueba)}
          ></Circulo>
          <Circulo
            text="Perro"
            circle={(start(estado), handleCircle, _changeData, prueba)}
          ></Circulo>
          <Circulo
            text="Pelo largo"
            circle={(start(estado), handleCircle, _changeData, prueba)}
          ></Circulo>
          <Circulo
            text="Pelo corto"
            circle={(start(estado), handleCircle, _changeData, prueba)}
          ></Circulo>
          <Circulo
            text="Sedentario"
            circle={(start(estado), handleCircle, _changeData, prueba)}
          ></Circulo>
          <Circulo
            text="Sociable"
            circle={(start(estado), handleCircle, _changeData, prueba)}
          ></Circulo>
        </View>
      </View>

      <Button title="Aceptar" color="#2e8b57" onPress={() => _displayData()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  scrollView: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center"
  }
});
