//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView  } from 'react-native';
import LoginForm from  './LoginForm'

// create a component
class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.title}>ADOPTAPP</Text>
                    <Image 
                        style={styles.logo}
                        source={require('../../images/logo.jpeg')}/>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

// define your styles
styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#3498db',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        margin: 40
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#FFF',
        width: 270,
        textAlign: 'center',
        opacity: 0.9,
        fontWeight: 'bold',
        fontSize: 50,
        margin: 10,
    } 
});

//make this component available to the app
export default Login;
