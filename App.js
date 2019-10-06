import React, { Component } from 'react';
import {Text, View} from 'react-native';
import Panel from './Panel.js';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>AdoptApp</Text>
        {<Panel></Panel>}
      </View>
    );
  }
}
