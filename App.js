import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image, Animated, PanResponder, TouchableHighlight } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Panel from './src/components/Panel';
import InfoElegido from './src/components/InfoElegido';
import Login from './src/components/login/Login';
import Registration from "./src/components/registration/Registration";
import { TouchableOpacity } from 'react-native-gesture-handler';
import data from './data/DB.json';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

class SwipeScreen extends React.Component {
  static navigationOption = {
    title: 'Home',
  }

  constructor() {
    super()

    this.position = new Animated.ValueXY()

    this.state = {
      currentIndex: 0,
      todos:[]
    }

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })

    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })

    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'
    })
  }

  componentDidMount(){
    fetch('http://192.168.0.12:3000/perros')
    .then(res=>res.json())
    .then((data)=>{this.setState({todos:data})
    console.log(this.state.todos)
  }).catch(console.log)
  }

  componentWillMount() {
    this.PanResponder = PanResponder.create({

      onStartShouldSetPanResponder: (etv, gestureState) => true,
      onPanResponderMove: (etv, gestureState) => {

        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },

      onPanResponderRelease: (etv, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => { this.setState({ currentIndex: this.state.currentIndex + 1 }, () => { this.position.setValue({ x: 0, y: 0 }) }) })
        }
        else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => { this.setState({ currentIndex: this.state.currentIndex + 1 }, () => { this.position.setValue({ x: 0, y: 0 }) }) })
        }
        else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }
      }

    })
  }

  renderUsers = () => {

    return this.state.todos.map((item, i) => {

      if (i < this.state.currentIndex) {
        return null
      }
      else if (i == this.state.currentIndex) {

        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>

            <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>

              <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>

            </Animated.View>

            <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>

              <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>

            </Animated.View>

            <Image style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }} source={{uri:item.imagen}}></Image>

            <Button title="Go to details"
              onPress={() => this.props.navigation.navigate('Home',{Id:item.Id})} />

          </Animated.View>
        )
      }
      else {
        return (
          <Animated.View
            key={item.id}
            style={[{
              opacity: this.nextCardOpacity, transform: [{ scale: this.nextCardScale }],
              height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute'
            }]}>

            <Image style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }} source={item.uri}></Image>

          </Animated.View>
        )
      }

    }).reverse()

  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 60 }}>

        </View>
        <View style={{ flex: 1 }}>
          {this.renderUsers()}
        </View>
        <View style={{ flex: 1 }}>

        </View>

      </View>
    );
  }
}

class FilterScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        {<Panel></Panel>}

      </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Login />
        <Text>Details Screen</Text>
        <Button title="Go to details"
          onPress={() => this.props.navigation.navigate('Swipe')} />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Elegido: InfoElegido,
    Filter: FilterScreen,
    Swipe: SwipeScreen,

  },
  {
    initialRouteName: 'Swipe',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}