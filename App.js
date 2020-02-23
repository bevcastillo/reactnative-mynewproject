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
} from 'react-native';

import Welcomepage from './app/components/Welcomepage';

export default class App extends React.Component {
  render() {
    return(
        <View style={styles.container}>
            <Welcomepage/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: '#fefefe',
    }
});
