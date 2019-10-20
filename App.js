import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Panel from './Panel.js';
import InfoElegido from './InfoElegido.js';

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>AdoptApp</Text>
         
        {<Panel></Panel>}
        
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Filter: Panel,
    Elegido: InfoElegido,
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
