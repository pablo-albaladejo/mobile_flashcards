import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

import { Card } from 'react-native-elements'

import Layout from '../../constants/Layout';
const { width, height } = Layout.window;

const styles = StyleSheet.create({
    container: {
    }
});
class DeckPreview extends Component {

    handleOnPress = () => {
        this.props.onPress(this.props.index);
    }

    render() {
        const { name, numCards } = this.props;
        return (
            <TouchableOpacity
                onPress={this.handleOnPress}
            >
                <Card style={styles.container}>
                    <Text>{name}</Text>
                    <Text>{numCards}</Text>
                </Card>
            </TouchableOpacity>

        );
    }
}
export default DeckPreview;