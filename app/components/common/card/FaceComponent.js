import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';
const { height, width } = Layout.window;

const styles = StyleSheet.create({

});

class FaceComponent extends Component {
       render() {
        return (
            <View style={styles.container}>
                <Text>
                    Face
                </Text>
            </View>
        );
    }
}
export default FaceComponent;