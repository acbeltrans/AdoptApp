//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity, AsyncStorage } from 'react-native';
import Registration from '../registration/Registration';
import LoginForm from "./LoginForm";
import SwipeScreen from '../SwipeScreen';


// create a component
class Login extends Component {

    // asignarId = async () => {
    //   await AsyncStorage.setItem("idUsurio", this.state.idUsuario);
    // }
    static navigationOptions = {
        title: 'Login',
        header: null,
    };

    state = {
        //showRegistration: false,
        //showSwipeScreen: false,
        idUsuario: 0,
    }

    handleRegistrationPress() {
        console.log("Adentro de funcon onpress");
        /*
        console.log(this.state.showRegistration);
        this.setState({showRegistration: !this.state.showRegistration});
        */
        this.props.navigation.navigate('Registration');
    }


    handleSwipeScreen(id) {

        console.log('Inside handleswipe screen in Login Component')
        console.log('ID ' + id);
        const { navigate } = this.props.navigation;
        navigate('Swipe', { idUsuario: id });
        /*
        this.setState({idUsuario: id});
        this.setState({showSwipeScreen: !this.state.showSwipeScreen});
        console.log("ID USU"+this.state.idUsuario);*/
    }



    render() {
        const { navigate } = this.props.navigation;
        //if(this.state.showSwipeScreen) return <SwipeScreen idUsuario={this.state.idUsuario} />
        //if(this.state.showRegistration) return <Registration/>
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.title}>ADOPTAPP</Text>
                    <Image
                        style={styles.logo}
                        source={require('../../images/logo.jpeg')} />
                </View>
                <View style={styles.formContainer}>
                    <LoginForm handleSwipeScreen={this.handleSwipeScreen.bind(this)} />
                </View>
                <TouchableOpacity
                    style={styles.buttonRegistrarseContainer}
                    onPress={() => navigate('Registration')}>
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
        flex: 1,
        backgroundColor: '#3498db',
        padding: 25
    },
    logoContainer: {
        alignItems: 'center',
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
