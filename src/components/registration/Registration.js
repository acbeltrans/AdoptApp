//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, AsyncStorage, Alert, StatusBar, ScrollView } from 'react-native';
import Login from '../login/Login';
import Panel from '../Panel';
import host from '../../../host';
import KeyboardShift from '../KeyboardShift';

// create a component
class Registration extends Component {

    static navigationOptions = {
        title: 'Registro',
    };
    /*
    passInfo = async () => {
        await AsyncStorage.setItem("usuarioS", this.state.username);

    };*/

    state = {
        showPanel: false,
        showLogin: false,
        username: '',
        nombre: '',
        apellido: '',
        correo: '',
        password: '',
        confirmPassword: '',

    }
    /*
    handleShowPanel() {
        console.log("Intentando mostrar panel");
        console.log(this.state.showPanel);
        this.setState({ showPanel: !this.state.showPanel });
    }*/

    handleShowLogin() {
        console.log("Adentro de funcon onpress");
        console.log(this.state.showLogin);
        this.setState({ showLogin: !this.state.showLogin });
    }


    handleClickRegister() {
        //const writeJsonFile = require('write-json-file');
        const { navigate } = this.props.navigation;

        if (this.state.username != '' && this.state.nombre != '' && this.state.apellido != '' && this.state.correo != '' && this.state.password != '' && this.state.confirmPassword != '') {
            console.log("Se llenaron todos los campos");

            if (this.state.password === this.state.confirmPassword) {
                let usuario = {
                    username: this.state.username,
                    nombre: this.state.nombre,
                    apellido: this.state.apellido,
                    correo: this.state.correo,
                    password: this.state.password,
                    filtros: {
                        perro: "no",
                        gato: "no",
                        pequeno: "no",
                        mediano: "no",
                        grande: "no",
                        peloLargo: "no",
                        peloCorto: "no",
                        activo: "no",
                        sedentario: "no",
                        sociable: "no",
                        adulto: "no",
                        bebe: "no"
                    }


                };
                console.log(usuario);

                fetch(`http://${host}:3000/users`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user: usuario
                    }),
                })
                    .then(res => {
                        console.log("Adentro del bloque.");
                        //this.handleShowPanel();
                        //navigate('Filter');
                        //this.passInfo();
                        navigate('Panel', { username: this.state.username });
                    })
                    .catch(error => {
                        console.log(error);
                        //this.handleShowLogin();
                    });

            }

        } else {
            Alert.alert(
                'Registro invalido',
                'Se deben llenar todos los campos.',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            );
            console.log('Hace falta llenar todos los campos');
        }
        //console.log('ya se registró');


        //this.handleShowPanel.bind(this);

    }

    render() {
        const { navigate } = this.props.navigation;
        if (this.state.showLogin) return <Login />
        //if (this.state.showPanel) return <Panel />
        return (
            <KeyboardShift>
                {() => (
                    <ScrollView scrollEnabled={true} style={{backgroundColor: "#3498db"}}>
                        <View style={styles.regform}>
                            <StatusBar backgroundColor='blue' barStyle='dark-content' />
                            <Text style={styles.title}>Registrate en AdoptApp!</Text>
                            <TextInput
                                placeholder="Username"
                                placeholderTextColor="rgba(255,255,255, 0.7)"
                                returnKeyType="next"
                                onChangeText={(userVal) => { this.setState({ username: userVal }) }}
                                onSubmitEditing={() => this.nombreInput.focus()}
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={styles.input} />
                            <TextInput
                                placeholder="Nombre"
                                placeholderTextColor="rgba(255,255,255, 0.7)"
                                returnKeyType="next"
                                onChangeText={(nombreVal) => { this.setState({ nombre: nombreVal }) }}
                                onSubmitEditing={() => this.apellidoInput.focus()}
                                ref={(input) => this.nombreInput = input}
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={styles.input} />
                            <TextInput
                                placeholder="Apellido"
                                placeholderTextColor="rgba(255,255,255, 0.7)"
                                returnKeyType="next"
                                onChangeText={(apellidoVal) => { this.setState({ apellido: apellidoVal }) }}
                                ref={(input) => this.apellidoInput = input}
                                onSubmitEditing={() => this.emailInput.focus()}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={styles.input} />
                            <TextInput
                                placeholder="Email"
                                placeholderTextColor="rgba(255,255,255, 0.7)"
                                returnKeyType="next"
                                onChangeText={(emailVal) => { this.setState({ correo: emailVal }) }}
                                onSubmitEditing={() => this.passwordInput.focus()}
                                ref={(input) => this.emailInput = input}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={styles.input} />
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor="rgba(255,255,255, 0.7)"
                                secureTextEntry
                                returnKeyType="next"
                                onChangeText={(passwordVal) => { this.setState({ password: passwordVal }) }}
                                onSubmitEditing={() => this.confirmPasswordInput.focus()}
                                ref={(input) => this.passwordInput = input}
                                style={styles.input} />
                            <TextInput
                                placeholder="Confirm password"
                                placeholderTextColor="rgba(255,255,255, 0.7)"
                                secureTextEntry
                                returnKeyType="go"
                                onChangeText={(confirmPassVal) => { this.setState({ confirmPassword: confirmPassVal }) }}
                                ref={(input) => this.confirmPasswordInput = input}
                                style={styles.input} />

                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={this.handleClickRegister.bind(this)}>
                                <Text style={styles.buttonText}>
                                    REGISTRARSE
                    </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonContainerCancelar}
                                onPress={() => navigate('Login')}>
                                <Text style={styles.buttonText}>
                                    CANCELAR
                    </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>)}
            </KeyboardShift>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
        padding: 25
    },
    regform: {
        flexGrow: 1,
        backgroundColor: '#3498db',
        padding: 35
    },
    input: {
        height: 45,
        backgroundColor: '#2980b9',
        marginBottom: 15,
        color: '#FFF',
        paddingHorizontal: 20,
        opacity: 0.7,
        fontSize: 20,
        borderRadius: 30
    },
    title: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20
    },
    buttonContainer: {
        backgroundColor: '#2ecc71',
        paddingVertical: 15,
        height: 45,
        borderRadius: 30,
        marginTop: 20,
        marginHorizontal: 85
    },
    buttonContainerCancelar: {
        backgroundColor: '#e74c3c',
        paddingVertical: 15,
        height: 45,
        borderRadius: 30,
        marginTop: 20,
        marginHorizontal: 85
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 15,
    }
});



//make this component available to the app
export default Registration;
