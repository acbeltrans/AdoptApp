import React, { Component } from "react";
import {
  ScrollView,
  RefreshControl,
  Button,
  View,
  Text,
  StyleSheet,
  AsyncStorage,TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import Circulo from "./Circulo.js";
import SwipeScreen from './SwipeScreen';
import {styles} from "./Circulo";
import {Alert} from "react-native-web";
export default class Panel extends Component {
state = {
setStateCircle: false ,
StateCircle: false,
setTxtCircle: '',
  txtCircle:'',
estado: false,
swipe:false,
userName: '',
nombre: '',
apellido :'',
correo: '',
password: '',
idUsuario: 0,

}

handleSwipeScreenPress(){
    console.log("Adentro de funcon onpress");
    console.log(this.state.swipe);
    this.setState({ swipe: !this.state.swipe });
}
componentDidMount() {
 this._getID.bind(this)();
 this._storeData.bind(this)();
}

  _getID= async () => {
   const us = await AsyncStorage.getItem("usuarioS")
   console.log("userName");
   console.log(us);
    fetch('http://192.168.0.9:3000/users?user.username='+us )
            .then((response) => response.json())
            .then((responseJson) => {
                let users = responseJson;
                  for (let u of users) {
                    this.setState({idUsuario: u["id"]});
                    this.setState({userName: u["user"]["username"]});
                    this.setState({nombre: u["user"]["nombre"]});
                    this.setState({apellido: u["user"]["apellido"]});
                    this.setState({correo: u["user"]["correo"]});
                    this.setState({password: u["user"]["password"]});
                    console.log(this.state.idUsuario);
                  }

            })
            .catch((error) => {
                console.error(error);
            });
  }

 _storeData = async () => {
  console.log("entró al store data");
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
 _displayData = async () => {

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
                   username: this.state.userName ,
                    nombre: this.state.nombre,
                    apellido: this.state.apellido,
                    correo: this.state.correo,
                    password: this.state.password,
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
fetch('http://192.168.0.9:3000/users/'+this.state.idUsuario, {
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
this.handleSwipeScreenPress.bind(this)();

  };
 _changeData = async (stateCircle, txtCircle) => {
   console.log(stateCircle,txtCircle);
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




render (){

  if (this.state.swipe) return <SwipeScreen idUsuario={this.state.idUsuario} />
  return (

    <ScrollView
      contentContainerStyle={styles.scrollView}

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
          <TouchableOpacity  style={styles.btnSelected}
          onPress={(this._changeData.bind(this,true,"Pequeño")) }>
          <Text style={styles.txt}>Pequeño</Text>
        </TouchableOpacity>
          <Text></Text>
           <TouchableOpacity  style={styles.btnSelected}
          onPress={(this._changeData.bind(this,true,"Mediano")) }>
          <Text style={styles.txt}>Mediano</Text>
        </TouchableOpacity>
          <Text></Text>
           <TouchableOpacity  style={styles.btnSelected}
          onPress={(this._changeData.bind(this,true,"Grande")) }>
          <Text style={styles.txt}>Grande</Text>
        </TouchableOpacity>
          <Text></Text>
           <TouchableOpacity  style={styles.btnSelected}
          onPress={(this._changeData.bind(this,true,"Activo")) }>
          <Text style={styles.txt}>Activo</Text>
        </TouchableOpacity>
          <Text></Text>
           <TouchableOpacity  style={styles.btnSelected}
          onPress={(this._changeData.bind(this,true,"Adulto")) }>
          <Text style={styles.txt}>Adulto</Text>
        </TouchableOpacity>
          <Text></Text>
           <TouchableOpacity  style={styles.btnSelected}
          onPress={(this._changeData.bind(this,true,"Bebe")) }>
          <Text style={styles.txt}>Bebe</Text>
        </TouchableOpacity>


        </View>
        <View>
          <TouchableOpacity  style={styles.btnSelected}
          onPress={(this._changeData.bind(this,true,"Gato")) }>
          <Text style={styles.txt}>Gato</Text>
        </TouchableOpacity>
          <Text></Text>
          <TouchableOpacity  style={styles.btnSelected}
          onPress={(this._changeData.bind(this,true,"Perro")) }>
          <Text style={styles.txt}>Perro</Text>
        </TouchableOpacity>
          <Text></Text>
          <TouchableOpacity  style={styles.btnSelected}
          onPress={(this._changeData.bind(this,true,"Pelo largo")) }>
          <Text style={styles.txt}>Pelo largo</Text>
        </TouchableOpacity>
          <Text></Text>
          <TouchableOpacity  style={styles.btnSelected}
          onPress={(this._changeData.bind(this,true,"Pelo corto")) }>
          <Text style={styles.txt}>Pelo corto</Text>
        </TouchableOpacity>
          <Text></Text>
          <TouchableOpacity  style={styles.btnSelected}
          onPress={(this._changeData.bind(this,true,"Sedentario")) }>
          <Text style={styles.txt}>Sedentario</Text>
        </TouchableOpacity>
          <Text></Text>
          <TouchableOpacity  style={styles.btnSelected}
          onPress={(this._changeData.bind(this,true,"Sociable")) }>
          <Text style={styles.txt}>Sociable</Text>
        </TouchableOpacity>
          </View>

      </View>

      <Button title="Aceptar" color="#2e8b57" onPress={() => this._displayData.bind(this)()} />
    </ScrollView>
  );
}

    styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  scrollView: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center"
  },
  SubmitButtonStyle: {
    alignItems: "center",
    backgroundColor: "#4682b4",
    padding: 10,
    borderRadius: 1000
  },
      TextStyle:{
      color:'#000000',
      textAlign:'center',
  }
});


}
