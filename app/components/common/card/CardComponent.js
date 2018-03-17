import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FlipCard from 'react-native-flip-card'

import FaceComponent from './FaceComponent';
import BackComponent from './BackComponent';

import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';
const { height, width } = Layout.window;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        width,
        height,
    },

    common: { 
        borderRadius: 5, 
        borderWidth: 1, 
        borderColor: Colors.primary 
    },

    face: {
        flex: 1,
        borderRadius: 5,
        backgroundColor: Colors.info,
        justifyContent: 'center',
        alignItems: 'center',
    },
    back: {
        flex: 1,
        borderRadius: 5,
        backgroundColor: Colors.success,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

class CardComponent extends Component {
    render() {

        let styleContainer = this.props.styleContainer || styles.container;
        let cardStyle = this.props.cardStyle || styles.card;
        return (
            <View style={styleContainer}>
                <FlipCard
                    style={[styles.common, cardStyle]}

                    friction={6}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                    flip={false}
                    clickable={true}
                    onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
                >

                    <View style={styles.face}>
                        <FaceComponent/>
                    </View>

                    <View style={styles.back}>
                        <BackComponent/>
                    </View>
                </FlipCard>
            </View>
        );
    }
}
export default CardComponent;