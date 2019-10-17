import React, { useState } from 'react';
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
const [stateCircle, setStateCircle] = useState(false);
const [txtCircle, setTxtCircle] = useState("");

function handleCircle (stateCircle, txtCircle) {
  setStateCircle(stateCircle);
  setTxtCircle(txtCircle);
}

console.log(stateCircle);
console.log(txtCircle);

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
          <Circulo text="Pequeño" circle={handleCircle}></Circulo>
          <Circulo text="Mediano" circle={handleCircle}></Circulo>
          <Circulo text="Grande" circle={handleCircle}></Circulo>
          <Circulo text="Activo" circle={handleCircle}></Circulo>
          <Circulo text="Adulto" circle={handleCircle}></Circulo>
          <Circulo text="Bebe" circle={handleCircle}></Circulo>
        </View>
        <View>
          <Circulo text="Gato" circle={handleCircle}></Circulo>
          <Circulo text="Perro" circle={handleCircle}></Circulo>
          <Circulo text="Pelo largo" circle={handleCircle}></Circulo>
          <Circulo text="Pelo corto" circle={handleCircle}></Circulo>
          <Circulo text="Sedentario" circle={handleCircle}></Circulo>
          <Circulo text="Sociable" circle={handleCircle}></Circulo>
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
        onPress={() => Alert.alert('Hacer que vuelva al estado inicial')}
      />
    </View>

  );
}