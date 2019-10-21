//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Login from '../login/Login'

// create a component
class Registration extends Component {

    state = {
        showLogin: false
    }


    handleShowLogin(){
        console.log("Adentro de funcon onpress");
        console.log(this.state.showLogin);
        this.setState({showLogin: !this.state.showLogin});
    }
    render() {
        if(this.state.showLogin) return <Login/>
        return (
            <View style={styles.regform}>
                <Text style={styles.title}>Registrate en AdoptApp!</Text>
                <TextInput
                    placeholder="Username"
                    placeholderTextColor="rgba(255,255,255, 0.7)"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} />
                <TextInput
                    placeholder="Nombre"
                    placeholderTextColor="rgba(255,255,255, 0.7)"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} />
                <TextInput
                    placeholder="Apellido"
                    placeholderTextColor="rgba(255,255,255, 0.7)"
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} />
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="rgba(255,255,255, 0.7)"
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255, 0.7)"
                    secureTextEntry
                    returnKeyType="next"
                    ref={(input) => this.passwordInput = input}
                    style={styles.input} />
                <TextInput
                    placeholder="Confirm password"
                    placeholderTextColor="rgba(255,255,255, 0.7)"
                    secureTextEntry
                    returnKeyType="go"
                    ref={(input) => this.passwordInput = input}
                    style={styles.input} />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        REGISTRARSE
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.buttonContainerCancelar}
                    onPress= {this.handleShowLogin.bind(this)}>
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
    buttonContainer:{
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
