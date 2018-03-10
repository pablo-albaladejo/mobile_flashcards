import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'

import MainStackNavigation from './MainStackNavigation'
import SplashScreen from '../screens/SplashScreen';

const RootStackNavigator = StackNavigator(
    {
        Splash: {
            screen: SplashScreen,
        },

        Main: {
            screen: MainStackNavigation,
        }
    },
    {
        initialRouteName: 'Splash',
        headerMode: 'none',
    }
);


class RootNavigation extends Component {
    render() {
        return (
            <RootStackNavigator />
        );
    }
}
export default RootNavigation;