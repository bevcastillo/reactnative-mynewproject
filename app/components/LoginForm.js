import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';

export default class LoginForm extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox} 
                placeholder="Email"
                placeholderTextColor = "#fff"
                selectionColor = "#fff"
                keyboardType="email-address"
                onSubmitEditing={() => this.password.focus()}>
                </TextInput>

                <TextInput style={styles.inputBox} 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#fff"
                ref={(input) => this.password = input}>
                </TextInput>

                <TouchableOpacity style={[styles.button]}>
                <Text style={styles.btnText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        marginVertical: 15,
        fontSize: 18,
        color: '#000',
    },
    inputBox: {
        width: 300,
        borderBottomColor: '#fff',
        borderBottomWidth: 0.5,
        paddingVertical: 6,
        fontSize: 16,
        color: '#fff',
        marginTop: 25,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        marginTop: 50,
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: {height: 1, width: 1},
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 2,
    },
    btnText: {
        color: '#1565C0',
        fontSize: 16,
    },
});