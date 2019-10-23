//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';

// create a component
class LoginForm extends Component {

    state = {
        username: '',
        password: '',
        modalFieldsVisible: false
    }

    setModalFieldsVisible(visible) {
        this.setState({ modalFieldsVisible: visible })
    }

    grantAccess() {
        fetch('http://172.20.10.9:3000/users')
            .then((response) => response.json())
            .then((responseJson) => {
                let users = responseJson;
                let user = null;
                for (let u of users) {
                    if (u["user"]["username"] === this.state.username && u["user"]["password"] === this.state.password) {
                        console.log("ACCESO APROBADO");
                        user = u;
                        break;
                    }
                }
                if (user == null) {
                    Alert.alert(
                        'Login Invalido',
                        'El username y/o la contraseña son inválidas.',
                        [
                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                        ],
                        { cancelable: false },
                    );
                }else{
                    //Añadir codigo para redirigir a la pantalla principal de un usuario loggeado
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    handleLoginClick() {
        console.log('In handle login click function');
        if (this.state.username != '' && this.state.password != '') {
            console.log('Ambos campos contienen valores')
            console.log(`Username: ${this.state.username}`);
            console.log(`Password: ${this.state.password}`);

            this.grantAccess()

        } else {
            console.log('Falta rellenar valores')
            //this.setModalFieldsVisible(true);
            Alert.alert(
                'Login Invalido',
                'Se deben rellenar todos los campos',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <TextInput
                    placeholder="Username"
                    placeholderTextColor="rgba(255,255,255, 0.7)"
                    returnKeyType="next"
                    onChangeText={(usernameVal) => { this.setState({ username: usernameVal }) }}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255, 0.7)"
                    secureTextEntry
                    returnKeyType="go"
                    onChangeText={(passwordVal) => { this.setState({ password: passwordVal }) }}
                    ref={(input) => this.passwordInput = input}
                    style={styles.input} />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.handleLoginClick.bind(this)}>
                    <Text style={styles.buttonText}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
            </View>

        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {

    },
    input: {
        height: 45,
        backgroundColor: '#2980b9',
        marginBottom: 15,
        color: '#FFF',
        paddingHorizontal: 20,
        opacity: 0.7,
        fontSize: 20,
        borderRadius: 20
    },
    buttonContainer: {
        backgroundColor: '#2ecc71',
        paddingVertical: 15,
        height: 45,
        borderRadius: 30,
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
export default LoginForm;
