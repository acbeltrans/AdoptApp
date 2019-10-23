//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Login from '../login/Login'
import Panel from '../Panel'

// create a component
class Registration extends Component {



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

    handleShowPanel() {
        console.log("Intentando mostrar panel");
        console.log(this.state.showPanel);
        this.setState({ showPanel: !this.state.showPanel });
    }

    handleShowLogin() {
        console.log("Adentro de funcon onpress");
        console.log(this.state.showLogin);
        this.setState({ showLogin: !this.state.showLogin });
    }


    handleClickRegister() {
        //const writeJsonFile = require('write-json-file');

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

                fetch('http://172.20.10.9:3000/users', {
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
                    this.handleShowPanel();
                })
                .catch(error => {
                    console.log(error);
                    //this.handleShowLogin();
                });

            }

        } else {
            console.log('Hace falta llenar todos los campos');
        }
    }

    render() {
        if (this.state.showLogin) return <Login />
        if (this.state.showPanel) return <Panel />
        return (
            <View style={styles.regform}>
                <Text style={styles.title}>Registrate en AdoptApp!</Text>
                <TextInput
                    placeholder="Username"
                    placeholderTextColor="rgba(255,255,255, 0.7)"
                    returnKeyType="next"
                    onChangeText={(userVal) => { this.setState({ username: userVal }) }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} />
                <TextInput
                    placeholder="Nombre"
                    placeholderTextColor="rgba(255,255,255, 0.7)"
                    returnKeyType="next"
                    onChangeText={(nombreVal) => { this.setState({ nombre: nombreVal }) }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} />
                <TextInput
                    placeholder="Apellido"
                    placeholderTextColor="rgba(255,255,255, 0.7)"
                    returnKeyType="next"
                    onChangeText={(apellidoVal) => { this.setState({ apellido: apellidoVal }) }}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} />
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="rgba(255,255,255, 0.7)"
                    returnKeyType="next"
                    onChangeText={(emailVal) => { this.setState({ correo: emailVal }) }}
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
                    ref={(input) => this.passwordInput = input}
                    style={styles.input} />
                <TextInput
                    placeholder="Confirm password"
                    placeholderTextColor="rgba(255,255,255, 0.7)"
                    secureTextEntry
                    returnKeyType="go"
                    onChangeText={(confirmPassVal) => { this.setState({ confirmPassword: confirmPassVal }) }}
                    ref={(input) => this.passwordInput = input}
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
                    onPress={this.handleShowLogin.bind(this)}>
                    <Text style={styles.buttonText}>
                        CANCELAR
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
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
