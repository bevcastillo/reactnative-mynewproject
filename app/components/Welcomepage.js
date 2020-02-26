import React from 'react';
import { 
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StatusBar,
 } from 'react-native';

 export default class Welcomepage extends React.Component {
     render() {
         return(
             <View style = {styles.welcomeform}>
                 <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                 />
                <Text style = {styles.header}>Welcome to Bolt</Text>
                <Text style = {styles.subHeader}>Explore Us</Text>
                <Image
                    style={{marginTop: 80, width: 300, height: 300}}
                    source={require('../images/welcome_image.jpg')}>

                </Image>

                    <TouchableOpacity style={[styles.button]}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>

                    <Text style={styles.subHeader}>Signup</Text>
             </View>
         );
     }
 }

 const styles = StyleSheet.create({
    welcomeForm: {
        alignSelf: 'stretch',
    },
    header: {
        textAlign: 'center',
        color: '#000',
        fontSize: 20,

    },
    subHeader: {
        textAlign: 'center',
        color: '#000',
        fontSize: 16,
        marginTop: 10,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#7990DD',
        marginTop: 50,
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: {height: 1, width: 1},
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 2,
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});