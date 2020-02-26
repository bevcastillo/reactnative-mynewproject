import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';

export default class Logo extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Image style={{width: 80, height: 80}}
                    source={require('../images/delicious.png')}/>
                <Text style={styles.logoText}>Welcome, please sign in</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logoText: {
        marginVertical: 15,
        fontSize: 18,
        color: '#fff',
    }
});

