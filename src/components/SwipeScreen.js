import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
  PanResponder,
  TouchableHighlight,
  StatusBar
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Panel from "./Panel";
import InfoElegido from "./InfoElegido";
import Login from "./login/Login";
import Registration from "./registration/Registration";
import { TouchableOpacity } from "react-native-gesture-handler";
import host from '../../host';
import { createTabNavigator, createBottomTabNavigator } from "react-navigation-tabs";
import Wishlist from "./WishList";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

class SwipeScreen extends React.Component {

  static navigationOptions = {
    title: 'Login',
    header: null,
  };




  constructor(props) {
    super(props);

    this.position = new Animated.ValueXY();
    this.handleElegido = this.handleElegido.bind(this);

    this.state = {
      currentIndex: 0,
      todos: [],
      todosus: [],
      filtros: [],
      perro: "",
      peloL: "",
      grande: "",
      pequeno: "",
      mediano: "",
      idUsuario: "",
      //showInfo: false,
      id: 0,
    };

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ["-10deg", "0deg", "10deg"],
      extrapolate: "clamp"
    });

    this.rotateAndTranslate = {
      transform: [
        {
          rotate: this.rotate
        },
        ...this.position.getTranslateTransform()
      ]
    };

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: "clamp"
    });

    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: "clamp"
    });

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: "clamp"
    });

    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: "clamp"
    });
  }

  componentDidMount() {
    const { navigation } = this.props;


    console.log("Inside componentDidMount of SwipeScreen")
    fetch(`http://${host}:3000/perros`)
      .then(res => res.json())
      .then(data => {
        console.log("PETICION DE PERROS EXITOSA");
        this.setState({ todos: data });
        //console.log(this.state.todos);
      })
      .catch(error => {
        console.log("Ocurrio un error");
        console.error(error);
      });

    let idUsuario = JSON.stringify(navigation.getParam('idUsuario', 'default value'));
    let url = `http://${host}:3000/users/${idUsuario}`;
    console.log('URL ' + url);
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        console.log("PETICION EXITOSA");
        let users = responseJson;

        //   this.state.filtros= u["user"]["filtros"];
        let user = users["user"];
        //user = JSON.stringify(user["user"]);
        console.log(user);
        let myFilters = user["filtros"];
        console.log(myFilters);
        console.log(typeof myFilters);
        this.setState({ filtros: myFilters });
        //console.log("ayudaaaaaa1");
        //console.log(this.state.filtros);
        //console.log(this.state.filtros[0]["perro"]);
        let perro = myFilters[0]["perro"];
        let peloLargo = myFilters[0]["peloLargo"];
        let grande = myFilters[0]["grande"];
        let mediano = myFilters[0]["mediano"];
        let pequeno = myFilters[0]["pequeno"];
        console.log("Perro: " + perro);
        console.log("Type of 'perro': " + typeof perro);
        this.setState({ perro: perro });
        this.setState({ peloL: peloLargo });
        this.setState({ grande: grande });
        this.setState({ mediano: mediano });
        this.setState({ pequeno: pequeno });

        //console.log(user["filtros"]["perro"])
        //console.log("ayudaaaaaa2");
        //console.log(this.state.filtros);
      })
      .catch(error => {
        console.log("Ocurrio un error");
        console.error(error);
      });
  }

  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (etv, gestureState) => true,
      onPanResponderMove: (etv, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },

      onPanResponderRelease: (etv, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
          
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start();
        }
      }
    });
  }

  /*
  handleInfoClick() {
    console.log("Adentro de funcon onpress");
    console.log(this.state.showInfo);
    this.setState({ showInfo: !this.state.showInfo });
  }*/



  filtroFinal(value) {
    console.log("Inside filtro final method.")
    console.log(this.state.perro);
    //console.log(this.state.filtros.perro);
    //const x= this.state.filtros

    if (this.state.perro === "si") {
      if (this.state.peloL === "si") {
        if (this.state.grande === "si") {
          return (

            value.especie === "perro" &&
            value.pelaje === "largo" &&
            value.tamano === "grande"
          );
        } else if (this.state.mediano === "si") {
          return (
            value.especie === "perro" &&
            value.pelaje === "largo" &&
            value.tamano === "mediano"
          );
        } else {
          return (
            value.especie === "perro" &&
            value.pelaje === "largo" &&
            value.tamano === "pequeno"
          );
        }
        console.log("entro a pelo");
        return value.especie === "perro" && value.pelaje === "largo";
      } else {
        if (this.state.grande === "si") {
          return (
            value.especie === "perro" &&
            value.pelaje === "corto" &&
            value.tamano === "grande"
          );
        } else if (this.state.mediano === "si") {
          return (
            value.especie === "perro" &&
            value.pelaje === "corto" &&
            value.tamano === "mediano"
          );
        } else {
          return (
            value.especie === "perro" &&
            value.pelaje === "corto" &&
            value.tamano === "pequeno"
          );
        }

        return value.especie === "perro" && value.pelaje === "corto";
      }

      return value.especie === "perro";
    }
    else if (this.state.perro === "no") {
      console.log("entro a else");
      if (this.state.peloL === "si") {
        if (this.state.grande === "si") {
          return (
            value.especie === "gato" &&
            value.pelaje === "largo" &&
            value.tamano === "grande"
          );
        } else if (this.state.mediano === "si") {
          return (
            value.especie === "gato" &&
            value.pelaje === "largo" &&
            value.tamano === "mediano"
          );
        } else {
          return (
            value.especie === "gato" &&
            value.pelaje === "largo" &&
            value.tamano === "pequeno"
          );
        }
        console.log("entro a pelo");
        return value.especie === "perro" && value.pelaje === "largo";
      } else {
        if (this.state.peloL === "no") {

          return (
            value.especie === "gato" &&
            value.pelaje === "corto" &&
            value.tamano === "grande"

          );
        } else if (this.state.mediano === "si") {
          return (
            value.especie === "perro" &&
            value.pelaje === "corto" &&
            value.tamano === "mediano"
          );
        } else {
          return (
            value.especie === "perro" &&
            value.pelaje === "corto" &&
            value.tamano === "pequeno"
          );
        }

        return value.especie === "gato" && value.pelaje === "corto";
      }

      return value.especie === "gato";
    }
  }

  handleElegido(item) {
    console.log("Inside handle elegido method");
    const { navigate } = this.props.navigation;
    //() => navigate('Elegido', { id: item.id })

    console.log(`Item: ${item}`);
    console.log(`ID Item: ${item.id}`);

    navigate('Elegido', { id: item.id });
  }

  renderUsers = () => {
    let datosAnimales = this.state.todos;
    return datosAnimales
      .filter(elemento => this.filtroFinal(elemento))
      .map((item, i) => {
        console.log("iteración :" + i)

        //if (this.state.showInfo) { console.log("id que se va a pasar"); console.log(item.id); return <InfoElegido id={item.id} /> }

        if (i < this.state.currentIndex) {
          return null;
        } else if (i == this.state.currentIndex) {

          return (
            <View>
              <StatusBar backgroundColor='blue' barStyle='dark-content' />
              <Animated.View

                {...this.PanResponder.panHandlers}
                key={item.id}
                style={[
                  this.rotateAndTranslate,
                  {
                    height: SCREEN_HEIGHT - 120,
                    width: SCREEN_WIDTH,
                    padding: 10,
                    position: "absolute"
                  }
                ]}
              >


                <Animated.View
                  style={{
                    opacity: this.likeOpacity,
                    transform: [{ rotate: "-30deg" }],
                    position: "absolute",
                    top: 50,
                    left: 40,
                    zIndex: 1000
                  }}
                >
                  <Text
                    style={{
                      borderWidth: 1,
                      borderColor: "green",
                      color: "green",
                      fontSize: 32,
                      fontWeight: "800",
                      padding: 10
                    }}
                  >
                    LIKE
                </Text>
                </Animated.View>

                <Animated.View
                  style={{
                    opacity: this.dislikeOpacity,
                    transform: [{ rotate: "30deg" }],
                    position: "absolute",
                    top: 50,
                    right: 40,
                    zIndex: 1000
                  }}
                >
                  <Text
                    style={{
                      borderWidth: 1,
                      borderColor: "red",
                      color: "red",
                      fontSize: 32,
                      fontWeight: "800",
                      padding: 10
                    }}
                  >
                    NOPE
                </Text>
                </Animated.View>

                <Image
                  style={{
                    flex: 1,
                    height: null,
                    width: null,
                    resizeMode: "cover",
                    borderRadius: 20
                  }}
                  source={{ uri: item.imagen }}
                ></Image>


              </Animated.View>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => this.handleElegido(item)}>
                <Text style={styles.buttonText}>
                  Go to details
                    </Text>
              </TouchableOpacity>
            </View>
          );
        } else {
          return (
            <Animated.View
              key={item.id}
              style={[
                {
                  opacity: this.nextCardOpacity,
                  transform: [{ scale: this.nextCardScale }],
                  height: SCREEN_HEIGHT - 120,
                  width: SCREEN_WIDTH,
                  padding: 10,
                  position: "absolute"
                }
              ]}
            >
              <Image
                style={{
                  flex: 1,
                  height: null,
                  width: null,
                  resizeMode: "cover",
                  borderRadius: 20
                }}
                source={item.uri}
              ></Image>
            </Animated.View>
          );
        }
      })
      .reverse();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 60 }}></View>
        <View style={{ flex: 1 }}>{this.renderUsers()}</View>
        <View style={{ flex: 1 }}></View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#2ecc71',
    paddingVertical: 15,
    height: 45,
    borderRadius: 30,
    marginHorizontal: 85
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
  }
});

const TabNavigator = createBottomTabNavigator({
  Home: {screen: SwipeScreen},
  Wishlist: {screen: Wishlist},
})

export default createAppContainer(TabNavigator);