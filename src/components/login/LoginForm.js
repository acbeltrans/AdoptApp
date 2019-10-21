//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Modal, TouchableHighlight } from 'react-native';

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
        const data = require('../../../data/users.json');
        for (let u of data) {
            console.log(u["apellido"]);
            console.log(u["username"]);
            if (u["username"] === this.state.username && u["password"] === this.state.password) {
                console.log("ACCESO APROBADO");
                break;
            }
        }
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
            this.setModalFieldsVisible(true);
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

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalFieldsVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalFieldsVisible(!this.state.modalFieldsVisible);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
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
