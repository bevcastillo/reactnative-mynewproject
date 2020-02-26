import React from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import RegisterLogo from './RegisterLogo';
import RegisterForm from './RegisterForm';
import Routes from '../Routes';

import {Actions,} from 'react-native-router-flux';

export default class UserRegistration extends React.Component {

    goBack() {
        Actions.pop()
    }

    render() {
        return(
            <View style={styles.container}>
                <RegisterLogo/>
                <RegisterForm type="Register"/>

                <View style={styles.signUpTextContent}>
                    <Text style={styles.signupText}>Already have an account?</Text>
                    <TouchableOpacity onPress={this.goBack}> 
                        <Text style={styles.signupBtn}>Sign in</Text>
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
    signUpText: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end', 
        marginVertical: 16, 
    },
    signUpText: {
        marginVertical: 15,
        fontSize: 18,
        color: '#fff',
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
