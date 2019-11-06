import React, { Component } from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Panel from './src/components/Panel';
import InfoElegido from './src/components/InfoElegido';
import Login from './src/components/login/Login';
import Registration from "./src/components/registration/Registration";
import SwipeScreen from './src/components/SwipeScreen';
import WishList from './src/components/WishList'

<<<<<<< HEAD
=======
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

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

>>>>>>> 9a8b75f4787d18bf7ab397de8d29b8276f23a48c
class HomeScreen extends React.Component {

  render() {
    return (
      <View>
        <Login />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Elegido: InfoElegido,
    Swipe: SwipeScreen,
    Registration: Registration,
    Login: Login,
    Panel: Panel,

  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}