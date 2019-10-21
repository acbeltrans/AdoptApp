//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar} from 'react-native';

// create a component
class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <TextInput 
                    placeholder="Username or email"
                    placeholderTextColor="rgba(255,255,255, 0.7)"
                    returnKeyType="next"
                    onSubmitEditing={()=> this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}/>
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255, 0.7)"
                    secureTextEntry
                    returnKeyType="go"
                    ref={(input)=> this.passwordInput = input}
                    style={styles.input}/>
                <TouchableOpacity style={styles.buttonContainer}>
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
    buttonContainer:{
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
