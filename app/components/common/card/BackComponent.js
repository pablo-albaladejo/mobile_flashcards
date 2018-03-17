import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';
const { height, width } = Layout.window;

const styles = StyleSheet.create({

});

class BackComponent extends Component {
       render() {
        return (
            <View style={styles.container}>
                <Text>
                    Back
                </Text>
            </View>
        );
    }
}
export default BackComponent;