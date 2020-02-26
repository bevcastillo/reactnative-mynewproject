/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Routes from './app/Routes';

export default class App extends React.Component {
  render() {
    return(
        <View style={styles.container}>
            <StatusBar
                backgroundColor = "#1565C0" 
                barStyle="light-content"
            />
            <Routes/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1565C0',
      justifyContent: 'center',
    }
});
