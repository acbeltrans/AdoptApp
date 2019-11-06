import React, { Component } from "react";
import {
  ScrollView,
  RefreshControl,
  Button,
  View,
  Text,
  StyleSheet,
  AsyncStorage, TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import Circulo from "./Circulo.js";
import SwipeScreen from './SwipeScreen';
import { styles } from "./Circulo";
import { Alert } from "react-native-web";
import host from '../../host';

export default class Panel extends Component {

  static navigationOptions = {
    title: 'Tus Gustos',
  };

  state = {
    setStateCircle: false,
    StateCircle: false,
    setTxtCircle: '',
    txtCircle: '',
    estado: false,
    swipe: false,
    userName: '',
    nombre: '',
    apellido: '',
    correo: '',
    password: '',
    idUsuario: 0,

    perro: "no",
    gato: "no",
    pequeno: "no",
    mediano: "no",
    grande: "no",
    peloLargo: "no",
    peloCorto: "no",
    activo: "no",
    sedentario: "no",
    sociable: "no",
    adulto: "no",
    bebe: "no",


  }

  componentDidMount() {
    console.log("Inside component did mount of Panel");
    this._getID.bind(this)();
    //this._storeData.bind(this)();
  }

  handleSwipeScreenPress() {
    console.log("Adentro de funcon onpress");
    console.log(this.state.swipe);
    this.setState({ swipe: !this.state.swipe });
  }

  _getID = () => {
    const { navigation } = this.props;
    console.log("entró al metodo getid");
    const us = navigation.getParam('username', 'default value');
    //const us = JSON.stringify(navigation.getParam('username', 'default value'));
    this.setState({ idUsuario: us });
    //this.props.navigation.username;
    console.log("userName");
    console.log(us);
    fetch(`http://${host}:3000/users?user.username=${us}`)
      .then((response) => response.json())
      .then((responseJson) => {
        let users = responseJson;
        for (let u of users) {
          this.setState({ idUsuario: u["id"] });
          this.setState({ userName: u["user"]["username"] });
          this.setState({ nombre: u["user"]["nombre"] });
          this.setState({ apellido: u["user"]["apellido"] });
          this.setState({ correo: u["user"]["correo"] });
          this.setState({ password: u["user"]["password"] });
          console.log(this.state.idUsuario);
        }

      })
      .catch((error) => {
        console.error(error);
      });
  }
  /*
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
  };*/
  _displayData = () => {
    console.log("Inside display data method");
    console.log(`Estado perro: ${this.state.perro}`);
    console.log(`Estado pelo largo: ${this.state.peloLargo}`);
    const { navigate } = this.props.navigation;
    /*
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
    const sociable = await AsyncStorage.getItem("sociable");*/
    let usuario = {
      username: this.state.userName,
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      correo: this.state.correo,
      password: this.state.password,
      filtros: [
        {
          perro: this.state.perro,
          gato: this.state.gato,
          pequeno: this.state.pequeno,
          mediano: this.state.mediano,
          grande: this.state.grande,
          peloLargo: this.state.peloLargo,
          peloCorto: this.state.peloCorto,
          activo: this.state.activo,
          sedentario: this.state.sedentario,
          sociable: this.state.sociable,
          adulto: this.state.adulto,
          bebe: this.state.bebe,
        }]
    };
    console.log(usuario);
    console.log("se va hacer el put");
    console.log(`http://${host}:3000/users/${this.state.idUsuario}`);
    fetch(`http://${host}:3000/users/${this.state.idUsuario}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: usuario
      }),
    }).catch(error => {
      console.log(error);
    });
    //this.handleSwipeScreenPress.bind(this)();
    navigate('Swipe', { idUsuario: this.state.idUsuario });

  };

  _changeData = (stateCircle, txtCircle) => {
    console.log(stateCircle, txtCircle);
    if (txtCircle == "Pequeño") {
      if (stateCircle == true) {
        //await AsyncStorage.setItem("pequeño", "si");
        this.setState({ pequeno: "si" });
      } else {
        //await AsyncStorage.setItem("pequeño", "no");
        this.setState({ pequeno: "no" });
      }
    } else if (txtCircle == "Mediano") {
      if (stateCircle == true) {
        //await AsyncStorage.setItem("mediano", "si");
        this.setState({ mediano: "si" });
      } else {
        //await AsyncStorage.setItem("mediano", "no");
        this.setState({ mediano: "no" });
      }
    } else if (txtCircle == "Grande") {
      if (stateCircle == true) {
        //await AsyncStorage.setItem("grande", "si");
        this.setState({ grande: "si" });
      } else {
        //await AsyncStorage.setItem("grande", "no");
        this.setState({ mediano: "no" });
      }
    } else if (txtCircle == "Activo") {
      if (stateCircle == true) {
        //await AsyncStorage.setItem("activo", "si");
        this.setState({ activo: "si" });
      } else {
        //await AsyncStorage.setItem("activo", "no");
        this.setState({ activo: "no" });
      }
    } else if (txtCircle == "Adulto") {
      if (stateCircle == true) {
        //await AsyncStorage.setItem("adulto", "si");
        this.setState({ adulto: "si" });
      } else {
        //await AsyncStorage.setItem("adulto", "no");
        this.setState({ adulto: "no" });
      }
    } else if (txtCircle == "Bebe") {
      if (stateCircle == true) {
        //await AsyncStorage.setItem("bebe", "si");
        this.setState({ bebe: "si" });
      } else {
        //await AsyncStorage.setItem("bebe", "no");
        this.setState({ bebe: "no" });
      }
    } else if (txtCircle == "Gato") {
      if (stateCircle == true) {
        //await AsyncStorage.setItem("gato", "si");
        this.setState({ gato: "si" });
      } else {
        //await AsyncStorage.setItem("gato", "no");
        this.setState({ gato: "no" });
      }
    } else if (txtCircle == "Perro") {
      if (stateCircle == true) {
        //await AsyncStorage.setItem("perro", "si");
        this.setState({ perro: "si" });
      } else {
        //await AsyncStorage.setItem("perro", "no");
        this.setState({ perro: "no" });
      }
    } else if (txtCircle == "Pelo largo") {
      if (stateCircle == true) {
        //await AsyncStorage.setItem("peloL", "si");
        this.setState({ peloLargo: "si" });
      } else {
        //await AsyncStorage.setItem("peloL", "no");
        this.setState({ peloLargo: "no" });
      }
    } else if (txtCircle == "Pelo corto") {
      if (stateCircle == true) {
        //await AsyncStorage.setItem("peloC", "si");
        this.setState({ peloCorto: "si" });
      } else {
        //await AsyncStorage.setItem("peloC", "no");
        this.setState({ peloCorto: "no" });
      }
    } else if (txtCircle == "Sedentario") {
      if (stateCircle == true) {
        //await AsyncStorage.setItem("sedentario", "si");
        this.setState({ sedentario: "si" });
      } else {
        //await AsyncStorage.setItem("sedentario", "no");
        this.setState({ sedentario: "no" });
      }
    } else if (txtCircle == "Sociable") {
      if (stateCircle == true) {
        //await AsyncStorage.setItem("sociable", "si");
        this.setState({ sociable: "si" });
      } else {
        //await AsyncStorage.setItem("sociable", "no");
        this.setState({ sociable: "no" });
      }
    }

  };




  render() {

    //if (this.state.swipe) return <SwipeScreen idUsuario={this.state.idUsuario} />
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
              <TouchableOpacity style={styles.btnSelected}
                onPress={(this._changeData.bind(this, true, "Pequeño"))}>
                <Text style={styles.txt}>Pequeño</Text>
              </TouchableOpacity>
              <Text></Text>
              <TouchableOpacity style={styles.btnSelected}
                onPress={(this._changeData.bind(this, true, "Mediano"))}>
                <Text style={styles.txt}>Mediano</Text>
              </TouchableOpacity>
              <Text></Text>
              <TouchableOpacity style={styles.btnSelected}
                onPress={(this._changeData.bind(this, true, "Grande"))}>
                <Text style={styles.txt}>Grande</Text>
              </TouchableOpacity>
              <Text></Text>
              <TouchableOpacity style={styles.btnSelected}
                onPress={(this._changeData.bind(this, true, "Activo"))}>
                <Text style={styles.txt}>Activo</Text>
              </TouchableOpacity>
              <Text></Text>
              <TouchableOpacity style={styles.btnSelected}
                onPress={(this._changeData.bind(this, true, "Adulto"))}>
                <Text style={styles.txt}>Adulto</Text>
              </TouchableOpacity>
              <Text></Text>
              <TouchableOpacity style={styles.btnSelected}
                onPress={(this._changeData.bind(this, true, "Bebe"))}>
                <Text style={styles.txt}>Bebe</Text>
              </TouchableOpacity>


            </View>
            <View>
              <TouchableOpacity style={styles.btnSelected}
                onPress={(this._changeData.bind(this, true, "Gato"))}>
                <Text style={styles.txt}>Gato</Text>
              </TouchableOpacity>
              <Text></Text>
              <TouchableOpacity style={styles.btnSelected}
                onPress={(this._changeData.bind(this, true, "Perro"))}>
                <Text style={styles.txt}>Perro</Text>
              </TouchableOpacity>
              <Text></Text>
              <TouchableOpacity style={styles.btnSelected}
                onPress={(this._changeData.bind(this, true, "Pelo largo"))}>
                <Text style={styles.txt}>Pelo largo</Text>
              </TouchableOpacity>
              <Text></Text>
              <TouchableOpacity style={styles.btnSelected}
                onPress={(this._changeData.bind(this, true, "Pelo corto"))}>
                <Text style={styles.txt}>Pelo corto</Text>
              </TouchableOpacity>
              <Text></Text>
              <TouchableOpacity style={styles.btnSelected}
                onPress={(this._changeData.bind(this, true, "Sedentario"))}>
                <Text style={styles.txt}>Sedentario</Text>
              </TouchableOpacity>
              <Text></Text>
              <TouchableOpacity style={styles.btnSelected}
                onPress={(this._changeData.bind(this, true, "Sociable"))}>
                <Text style={styles.txt}>Sociable</Text>
              </TouchableOpacity>
            </View>

          </View>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this._displayData.bind(this)}
          >
            <Text style={styles.buttonText}>
              ACEPTAR
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
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
    TextStyle: {
      color: '#000000',
      textAlign: 'center',
    },
    buttonContainer: {
      backgroundColor: '#2ecc71',
      paddingVertical: 15,
      height: 45,
      borderRadius: 30,
      marginTop: 20,
      marginHorizontal: 85
    },
    buttonText: {
      textAlign: 'center',
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 15,
    }
  });


}
