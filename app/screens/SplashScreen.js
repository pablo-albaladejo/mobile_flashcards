import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { NavigationActions } from 'react-navigation'

import { connect } from 'react-redux';
import { deckLoadList } from '../actions/deck';

import Colors from '../constants/Colors';
import ServiceFacade from '../services/ServiceFacade';

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

            //Redux
            this.props.dispatch(deckLoadList());

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
export default connect()(SplashScreen);