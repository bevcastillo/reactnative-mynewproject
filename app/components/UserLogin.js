import React from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import Logo from './Logo';
import LoginForm from './LoginForm';
import Routes from '../Routes';

import {Actions,} from 'react-native-router-flux';

export default class UserLogin extends React.Component {

    register() {
        Actions.register()
    }

    render() {
        return(
            <View style={styles.container}>
                <Logo/>
                <LoginForm type="Login"/>
                <View style={styles.signUpTextContent}>
                    <Text style={styles.signupText}>Dont have an account yet?</Text>
                    <TouchableOpacity onPress={this.register}>
                        <Text style={styles.signupBtn}>Create an account </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1565C0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        textAlign: 'center',
        color: '#000',
        fontSize: 20,
    },

    signUpTextContent: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center', 
        paddingVertical: 16, 
        flexDirection: 'row',
    },
    signupText: {
        marginVertical: 15,
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 16,
    },
    signupBtn: {
        color: '#ffffff',
        fontSize: 18,
        marginLeft: 6,
    }
}); 
