//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity  } from 'react-native';
import Registration from '../registration/Registration';
import LoginForm from "./LoginForm";

// create a component
class Login extends Component {
    
    state = {
        showRegistration: false
    }

    handleRegistrationPress(){
        console.log("Adentro de funcon onpress");
        console.log(this.state.showRegistration);
        this.setState({showRegistration: !this.state.showRegistration});
    }

    render() {
        if(this.state.showRegistration) return <Registration/>
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
                <TouchableOpacity 
                    style={styles.buttonRegistrarseContainer}
                    onPress={this.handleRegistrationPress.bind(this)}>
                    <Text style={styles.buttonText}>
                        REGISTRARSE
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

// define your styles
styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#3498db',
        padding: 25 
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
    },
    buttonRegistrarseContainer: {
        backgroundColor: '#e74c3c',
        paddingVertical: 15,
        height: 45,
        borderRadius: 30,
        marginHorizontal: 85,
        margin: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 15,
    }
});

//make this component available to the app
export default Login;
