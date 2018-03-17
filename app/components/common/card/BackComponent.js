import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from 'react-native-elements';

import ServiceFacade from '../../../services/ServiceFacade';
import { Button } from 'react-native-elements';

import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';
const { height, width } = Layout.window;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        flex: 1,
    },

    text_color: {
        color: Colors.white,
    },

    answer: {
        flex: 2,
    },

    buttons: {
        flex: 3,
        justifyContent: 'flex-end'
    },

    button: {
        marginTop: 10,
        marginBottom: 10,
        width: width * 0.5,
    },
    correct_button: {
        backgroundColor: Colors.success,
    },
    incorrect_button: {
        backgroundColor: Colors.danger,
    },
    flip_button: {
        backgroundColor: Colors.info,
    }
});

class BackComponent extends Component {

    state = {
        isAnswered: false,
        isCorrect: false,
    }

    componentWillMount(){
        this.setState({
            isAnswered: this.props.isAnswered,
            isCorrect: this.props.isCorrect,
        });
    }

    render() {

        return (
            <View style={styles.container}>

                <Text h2 style={[styles.title, styles.text_color]}>
                    {ServiceFacade.getTranslation("Quiz.answer")}
                </Text>

                <View style={styles.answer}>
                    <Text h3>
                        {this.props.text}
                    </Text>
                </View>

                <View style={styles.buttons}>

                    {/* Hide on answered and incorrect */}
                    {(!this.state.isAnswered || (this.state.isAnswered && !this.state.isCorrect)) && (
                        <Button
                            disabled={this.state.isAnswered}
                            onPress={() => {
                                this.setState({
                                    isAnswered: true,
                                    isCorrect: true,
                                });
                                this.props.onAnswer(true);
                            }}
                            buttonStyle={[styles.button, styles.correct_button]}
                            text={ServiceFacade.getTranslation('Quiz.correct')}
                        />
                    )}

                    {/* Hide on answered and correct */}
                    {(!this.state.isAnswered || (this.state.isAnswered && this.state.isCorrect)) && (
                        <Button
                            disabled={this.state.isAnswered}
                            onPress={() => {
                                this.setState({
                                    isAnswered: true,
                                    isCorrect: false,
                                });
                                this.props.onAnswer(false);
                            }}
                            buttonStyle={[styles.button, styles.incorrect_button]}
                            textStyle={this.state.isAnswered ? styles.disabled_text : styles.text_color}
                            text={ServiceFacade.getTranslation('Quiz.incorrect')}
                        />

                    )}

                    <Button
                        onPress={this.props.flip}
                        buttonStyle={[styles.button, styles.flip_button]}
                        text={ServiceFacade.getTranslation('Quiz.flip')}
                    />
                </View>

            </View>
        );
    }
}
export default BackComponent;