import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import Data from './data/infoperros.json';


function ayuda(nn){
    return function(x){
        return x.nombre.includes(nn);
    }
}

console.log(ayuda());

export default class InfoElegido extends Component{
    constructor(props){
        super(props);
        
        this.state={
            Data: Data,
            nn: 'Farlee',
        }
    }

    
    render(){
        return(
            <View >
                {
                    this.state.Data.filter(ayuda(this.state.nn)).map(function(perro){
                        return(
                            <View key={perro.id}>
                                <Image style={{width: 450, height: 350}} source={{uri: perro.imagen}}/>
                                <Text style={styles.titleText}>{perro.nombre}</Text>
                                <Text style={styles.subText}>Edad: {perro.edad}  Tamaño: {perro.tamano}  Género: {perro.genero}</Text>
                                <Text style={styles.sub2Text}>Fundación: {perro.fundacion}</Text>
                                <Text></Text>
                                <Text style={styles.sub3Text}>{perro.historia}</Text>
                                <Text></Text>
                                <Button onPress={this.onPress} title="adoptar"/>

                            </View>
                        )
                    })
                }
            </View>
        )
    }
    
}

onPress=()=>{
    alert('Adoptame!!!')
}

const styles= StyleSheet.create({
    titleText:{
        fontFamily:'Times New Roman',
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center' 
    },
    subText:{
        fontFamily:'Times New Roman',
        fontSize: 25,
        textAlign: 'center' 
    },
    sub2Text:{
        fontFamily:'Times New Roman',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center' 
    },
    sub3Text:{
        fontFamily:'Times New Roman',
        fontSize: 20,
        textAlign: 'center' 
    }
});