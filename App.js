import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Panel from './src/components/Panel';
import InfoElegido from './src/components/InfoElegido';
import Login from './src/components/login/Login';

class HomeScreen extends React.Component {
  static navigationOption = {
    title:'Home',
  }
  render() {
    return (
      <View>
        <Login/>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Filter')}
        />
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

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Elegido: InfoElegido,
    Filter: FilterScreen,
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