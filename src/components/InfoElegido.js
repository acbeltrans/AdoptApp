import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Button, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import host from '../../host';
import { AsyncStorage } from "react-native-web";


function ayuda(nn) {
    return function (x) {
        return x.id == nn;
    };
}


console.log(ayuda());


export default class InfoElegido extends Component {

    static navigationOptions = {
        title: 'Información Mascota',
    };

    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            nn: "",
            //nn: JSON.stringify(this.props.getParam('otherParam', 'default value')),
            nombre: "",
            imagen: "",
            edad: "",
            tamano: "",
            genero: "",
            historia: "",
            fundacion: "",
            show: false
        };
        this.toggleDiv = this.toggleDiv.bind(this);
    }

    toggleDiv = () => {
        const { show } = this.state;
        this.setState({ show: !show });
    };

    componentDidMount() {
        console.log("El id del can ");
        //console.log(this.state.nn);
        const { navigation } = this.props;
        const id = navigation.getParam('id', 'default value');
        console.log(id);

        fetch(`http://${host}:3000/perros/${id}`)
            .then(response => response.json())
            .then(responseJson => {
                let users = responseJson;
                this.setState({ imagen: users["imagen"] })
                this.setState({ nombre: users["nombre"] })
                this.setState({ edad: users["edad"] })
                this.setState({ genero: users["genero"] })
                this.setState({ tamano: users["tamano"] })
                this.setState({ historia: users["historia"] })
                this.setState({ fundacion: users["fundacion"] })
                //console.log(this.state.todos)
            })
            .catch(console.log);
    }

    checkGenero() {
        if (this.state.genero === "F") {
            return "Hembra";
        } else {
            return "Macho";
        }
    }

    render() {
        return (

            <ScrollView scrollEnabled={true}>
                <Image style={{ width: Dimensions.get("window").width, height: 300 }} source={{ uri: this.state.imagen }}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{this.state.nombre}</Text>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.subText}>
                        Edad: {this.state.edad}
                    </Text>
                    <Text style={styles.subText}>
                        Tamaño: {this.state.tamano}
                    </Text>
                    <Text style={styles.subText}>
                        Género: {this.checkGenero()}
                    </Text>
                    <Text style={styles.sub2Text}>
                        Fundación: {this.state.fundacion}
                    </Text>
                    <View style={styles.historiaContainer}>
                        <Text style={styles.sub3Text}>
                            {this.state.historia}
                        </Text>
                    </View>

                </View>

                <View style={styles.rowContainer}>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={this.toggleDiv} >
                        <Text style={styles.buttonText}>
                            Adoptar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={this.toggleDiv} >
                        <Text style={styles.buttonText}>
                            Apadrinar
                        </Text>
                    </TouchableOpacity>
                </View>
                {this.state.show && <Box />}
            </ScrollView>
        );
    }
}

class Box extends Component {
    render() {
        return (
            <View style={styles.rowContainer}>
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
        color: '#3498db',


    },
    titleContainer: {
        margin: 20
    },
    infoContainer: {
        paddingHorizontal: 25,
        marginBottom: 10
    },
    historiaContainer: {
        marginTop: 35
    },
    rowContainer: {
        flexDirection: "row",
        alignSelf: "center"
    },
    subText: {
        //fontFamily: "Times New Roman",
        fontSize: 25,
        textAlign: "left"
    },
    sub2Text: {
        //fontFamily: "Times New Roman",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "left"
    },
    sub3Text: {
        //fontFamily: "Times New Roman",
        fontSize: 18,
        textAlign: "left",

    },
    buttonContainer: {
        backgroundColor: '#2ecc71',
        paddingVertical: 15,
        height: 45,
        borderRadius: 30,
        marginHorizontal: 20,
        width: 150
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 15,
    }
});