import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import Circulo from "./Circulo.js";

export default function Panel() {
  return (
    <View style={{flexDirection: 'row'}}>
      <View>
        <Circulo text="Pequeño"></Circulo>
        <Circulo text="Mediano"></Circulo>
        <Circulo text="Grande"></Circulo>
        <Circulo text="Activo"></Circulo>
      </View>
      <View>
        <Circulo text="Gato"></Circulo>
        <Circulo text="Perro"></Circulo>
        <Circulo text="Pelo largo"></Circulo>
        <Circulo text="Pelo corto"></Circulo>
      </View>
    </View>
  );
}