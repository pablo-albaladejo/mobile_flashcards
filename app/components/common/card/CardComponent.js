import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FlipCard from 'react-native-flip-card';

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
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

class CardComponent extends Component {

    state = {
        flip: false,
        isAnswered: false,
        isCorrect: false,
    }

    onAnswerHandler = (isCorrect) => {

        this.setState({
            isAnswered: true,
            isCorrect: isCorrect,
        });

        this.props.onAnswer(isCorrect);
    }

    flip = () => {
        this.setState({
            flip: !this.state.flip,
        });
    }

    reset = () => {
        this.setState({
            flip: false,
            isAnswered: false,
            isCorrect: false,
        });
    }

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
                    flip={this.state.flip}
                    clickable={false}
                >

                    <View style={styles.face}>
                        <FaceComponent
                            text={this.props.question}
                            flip={this.flip}
                        />
                    </View>

                    <View style={styles.back}>
                        <BackComponent
                            text={this.props.answer}
                            flip={this.flip}
                            isAnswered={this.state.isAnswered}
                            isCorrect={this.state.isCorrect}
                            onAnswer={this.onAnswerHandler}
                        />
                    </View>
                </FlipCard>
            </View>
        );
    }
}
export default CardComponent;