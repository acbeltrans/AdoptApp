import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Button, Dimensions,ScrollView } from "react-native";

import {AsyncStorage} from "react-native-web";


function ayuda(nn) {
    return function(x) {
        return x.id == nn;
    };
}


console.log(ayuda());


export default class InfoElegido extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos:[],
            nn: this.props.id,
            nombre: "",
            imagen:"",
            edad:"",
            tamano:"",
            genero:"",
            historia:"",
            fundacion:"",
            show: false
        };
        this.toggleDiv = this.toggleDiv.bind(this);
    }

    toggleDiv = () => {
        const { show } = this.state;
        this.setState({ show: !show });
    };

    componentDidMount(){
        console.log("El id del can ")
        console.log(this.state.nn)

        fetch('http://192.168.0.9:3000/perros/'+this.state.nn)
      .then(response => response.json())
      .then(responseJson => {
        let users = responseJson;
        this.setState({imagen:users["imagen"]})
          this.setState({nombre:users["nombre"]})
        this.setState({edad:users["edad"]})
          this.setState({genero:users["genero"]})
          this.setState({tamano:users["tamano"]})
          this.setState({historia:users["historia"]})
          this.setState({fundacion:users["fundacion"]})
        //console.log(this.state.todos)
        })
        .catch(console.log)
    }

render() {
        return (

       <View>
           <Image style={{width: Dimensions.get("window").width, height: 300 }} source={{ uri: this.state.imagen }}
                            />
                            <Text style={styles.titleText}>{this.state.nombre}</Text>
                              <Text style={styles.subText}>
                                Edad: {this.state.edad} Tamaño: {this.state.tamano}{" "}
                                Género: {this.state.genero}
                            </Text>

                               <Text style={styles.sub2Text}>
                                Fundación: {this.state.fundacion}
                            </Text>
                            <Text></Text>
                            <Text style={styles.sub3Text}>
                                {this.state.historia}
                            </Text>

                           <View style={containerStyle.rowContainer}>
                    <Button onPress={this.toggleDiv} title="adoptar" />
                    <Button onPress={this.toggleDiv} title="apadrinar" />
                </View>
                {this.state.show && <Box />}
                            </View>
        );}
}

class Box extends Component {
    render() {
        return (
            <View style={containerStyle.rowContainer}>
                <Image
                    style={{ width: 70, height: 70 }}
                    source={{
                        uri:
                            "https://st2.depositphotos.com/8663904/11553/v/950/depositphotos_115535254-stock-illustration-gps-icon-black-icon-on.jpg"
                    }}
                />
                <Text></Text>
                <Image
                    style={{ width: 70, height: 70 }}
                    source={{
                        uri:
                            "https://st2.depositphotos.com/8663904/11553/v/950/depositphotos_115535044-stock-illustration-phone-icon-black-icon-on.jpg"
                    }}
                />
                <Text></Text>
                <Image
                    style={{ width: 70, height: 70 }}
                    source={{
                        uri:
                            "https://st2.depositphotos.com/8663904/11553/v/950/depositphotos_115535082-stock-illustration-envelope-or-message-icon-black.jpg"
                    }}
                />
            </View>
        );
    }
}

const containerStyle = StyleSheet.create({
    rowContainer: {
        flexDirection: "row",
        alignSelf: "center"
    }
});

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginTop: 200
    },
    titleText: {
        //fontFamily: "Times New Roman",
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "center",


    },
    subText: {
        //fontFamily: "Times New Roman",
        fontSize: 25,
        textAlign: "center"
    },
    sub2Text: {
        //fontFamily: "Times New Roman",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    sub3Text: {
        //fontFamily: "Times New Roman",
        fontSize: 18,
        textAlign: "center"
    }
});