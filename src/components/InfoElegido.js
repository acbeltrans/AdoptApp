import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import Data from '../../data/infoperros.json';

function ayuda(nn) {
    return function(x) {
        return x.nombre.includes(nn);
    };
}

console.log(ayuda());

export default class InfoElegido extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Data: Data,
            nn: "Chick",
            show: false
        };
        this.toggleDiv = this.toggleDiv.bind(this);
    }

    toggleDiv = () => {
        const { show } = this.state;
        this.setState({ show: !show });
    };

    render() {
        return (
            <View>
                {this.state.Data.filter(ayuda(this.state.nn)).map(function(
                    perro
                ) {
                    return (
                        <View key={perro.id}>
                            <Image
                                style={{ width: 450, height: 350 }}
                                source={{ uri: perro.imagen }}
                            />
                            <Text style={styles.titleText}>{perro.nombre}</Text>
                            <Text style={styles.subText}>
                                Edad: {perro.edad} Tamaño: {perro.tamano}{" "}
                                Género: {perro.genero}
                            </Text>
                            <Text style={styles.sub2Text}>
                                Fundación: {perro.fundacion}
                            </Text>
                            <Text></Text>
                            <Text style={styles.sub3Text}>
                                {perro.historia}
                            </Text>
                        </View>
                    );
                })}
                <View style={containerStyle.rowContainer}>
                    <Button onPress={this.toggleDiv} title="adoptar" />
                    <Button onPress={this.toggleDiv} title="apadrinar" />
                </View>
                {this.state.show && <Box />}
            </View>
        );
    }
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
    titleText: {
        fontFamily: "Times New Roman",
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "center"
    },
    subText: {
        fontFamily: "Times New Roman",
        fontSize: 25,
        textAlign: "center"
    },
    sub2Text: {
        fontFamily: "Times New Roman",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    sub3Text: {
        fontFamily: "Times New Roman",
        fontSize: 18,
        textAlign: "center"
    }
});
