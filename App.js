import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Panel from './Panel.js';

import Login from './src/components/login/Login'
import Registration from './src/components/registration/Registration'
import { styles } from './Circulo.js';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login/>
      </View>
    );

    
  }
  // define your styles
  
  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'red',
    }
  });
}
