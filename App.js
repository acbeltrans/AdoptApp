import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image, Animated, PanResponder, TouchableHighlight } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Panel from './src/components/Panel';
import InfoElegido from './src/components/InfoElegido';
import Login from './src/components/login/Login';
import Registration from "./src/components/registration/Registration";
import { TouchableOpacity } from 'react-native-gesture-handler';
import SwipeScreen from './src/components/SwipeScreen';


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
    Filter: FilterScreen,
    Swipe: SwipeScreen,

  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}