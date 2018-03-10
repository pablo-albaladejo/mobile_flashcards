import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { NavigationActions } from 'react-navigation'

import Colors from '../constants/Colors';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        position: 'relative'
    },
    stretch: {
        flex: 1
    }
});


class SplashScreen extends Component {

    componentDidMount() {
        
        //fake some delay for init process
        timeout = __DEV__ ? 1000 : 3000;
        setTimeout(() => {
            const resetAction = NavigationActions.reset({
                index: 0,
                key: null,
                actions: [
                    NavigationActions.navigate({
                        routeName: 'Main',
                    }),
                ]
            })
            //to avoid goBack to splash screen
            this.props.navigation.dispatch(resetAction);
        }, timeout);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    resizeMode="contain"
                    style={styles.stretch}
                    source={require('../assets/images/splash.png')}
                />
            </View>
        );
    }
}
export default SplashScreen;