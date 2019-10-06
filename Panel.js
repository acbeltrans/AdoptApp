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