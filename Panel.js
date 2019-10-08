import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
    AsyncStorage,TouchableOpacity,TouchableHighlight
} from 'react-native';
import Circulo from "./Circulo.js";

export default function Panel() {

const _storeData = async () => {
  try {
    await AsyncStorage.setItem('perro', 'no');
await AsyncStorage.setItem('pequeño', 'no');
await AsyncStorage.setItem('gato', 'no');
await AsyncStorage.setItem('mediano', 'no');
  await AsyncStorage.setItem('grande', 'no');
  await AsyncStorage.setItem('peloL', 'no');
  await AsyncStorage.setItem('activo', 'no');
  await AsyncStorage.setItem('peloC', 'no');
  await AsyncStorage.setItem('adulto', 'no');
  await AsyncStorage.setItem('sedentario', 'no');
  await AsyncStorage.setItem('bebe','no');
  await AsyncStorage.setItem('sociable', 'no');
  } catch (error) {
    // Error saving data
  }
};

const _displayData = async () => {
  try {

    const perro = await AsyncStorage.getItem('perro');
    const pequeño = await AsyncStorage.getItem('pequeño');
    const gato = await AsyncStorage.getItem('gato');
    const mediano = await AsyncStorage.getItem('mediano');
    const grande = await AsyncStorage.getItem('grande');
    const peloL= await AsyncStorage.getItem('peloL');
    const activo = await AsyncStorage.getItem('activo');
    const peloC = await AsyncStorage.getItem('peloC');
    const adulto = await AsyncStorage.getItem('adulto');
    const sedentario = await AsyncStorage.getItem('sedentario');
    const bebe = await AsyncStorage.getItem('bebe');
    const sociable = await AsyncStorage.getItem('sociable');
    alert("perro: " + perro + "\n"
    + "pequeño: " + pequeño + "\n"
    + "gato: " + gato + "\n"
    + "mediano: " + mediano + "\n"
    + "grande: " + grande + "\n"
    + "pelo largo: " + peloL + "\n"
    + "activo: " + activo + "\n"
    + "pelo corto: " + peloC + "\n"
    + "adulto: " + adulto + "\n"
    + "Sedentario: " + sedentario + "\n"
    + "bebe: " + bebe + "\n"
    + "sociable: " + sociable + "\n");
  } catch (error) {
    alert("error guardando los datos")
  }
};


  return (


 <View>
        <Text style= {{fontSize: 23,fontWeight: 'bold',textAlign:'center'}}>¿Cómo es tu mascota ideal ?</Text>



      <View style={{flexDirection: 'row'}}>


              <View>
        <Circulo text="Pequeño"></Circulo>
        <Circulo text="Mediano"></Circulo>
        <Circulo text="Grande"></Circulo>
        <Circulo text="Activo"></Circulo>
          <Circulo text="Adulto"></Circulo>
          <Circulo text="Bebe"></Circulo>
      </View>
      <View>
        <Circulo text="Gato"></Circulo>
       <Circulo text="Perro"></Circulo>
        <Circulo text="Pelo largo"></Circulo>
        <Circulo text="Pelo corto"></Circulo>
        <Circulo text="Sedentario"></Circulo>
          <Circulo text="Sociable"></Circulo>
      </View>
    </View>



 <Button
          title="Aceptar"
          color="#2e8b57"
          onPress={() => Alert.alert('Mirar como guardar la informacion')}
 />

 <Button
          title="Cancelar"
          color="#ff0000"
          onPress={() =>   Alert.alert('Hacer que vuelva al estado inicial')}
        />



    </View>

  );
}