import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

import { Card, Text } from 'react-native-elements';

import ServiceFacade from '../../services/ServiceFacade';

import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
const { width, height } = Layout.window;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.secondary,
    }
});
class DeckPreview extends Component {

    handleOnPress = () => {
        this.props.onPress(this.props.item);
    }

    render() {
        const { title, cards } = this.props.item;
        return (
            <TouchableOpacity
                onPress={this.handleOnPress}
            >
                <Card containerStyle={styles.container}>
                    <Text h4>{title}</Text>
                    <Text>{cards.length + " " +ServiceFacade.getTranslation("Deck.cards")}</Text>
                </Card>
            </TouchableOpacity>

        );
    }
}
export default DeckPreview;