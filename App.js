import React, { Component } from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Panel from './src/components/Panel';
import InfoElegido from './src/components/InfoElegido';
import Login from './src/components/login/Login';
import Registration from "./src/components/registration/Registration";
import SwipeScreen from './src/components/SwipeScreen';

class HomeScreen extends React.Component {
  
  static navigationOptions = {
    //To hide the ActionBar/NavigationBar
    header: null,
  };

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