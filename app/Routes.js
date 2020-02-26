import React, { Component } from 'react';
import {
    Router,
    Stack,
    Scene,
} from 'react-native-router-flux';

import UserLogin from './components/UserLogin';
import UserRegistration from './components/UserRegistration';

export default class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                <Scene key="login" component={UserLogin} title="Login" initial={true }/>
                <Scene key="register" component={UserRegistration} title="Register" />
                </Stack>
            </Router>
         )
    }
}