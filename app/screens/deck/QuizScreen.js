import React, { Component } from 'react';
import { Text, View, Alert, StyleSheet } from 'react-native';

import { Ionicons } from 'react-native-vector-icons';
import { Button } from 'react-native-elements';

import ServiceFacade from '../../services/ServiceFacade';
import CustomNavigationBar from '../../components/common/CustomNavigationBar';
import CardComponent from '../../components/common/card/CardComponent';

import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';

const { width, height } = Layout.window;
const verticalMargin = height * 0.02;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    content: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    progress: {
        marginTop: verticalMargin,
        marginBottom: verticalMargin,
    },

    cardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    card: {
        width: width * 0.9,
        marginTop: verticalMargin,
        marginBottom: verticalMargin,
    },

    button: {
        width: width * 0.9,
        marginTop: verticalMargin,
        marginBottom: verticalMargin,
    },
    buttonEnable: {
        backgroundColor: Colors.primary,
    },
    buttonDisable: {
        backgroundColor: Colors.secondary,
    }

});
class QuizScreen extends Component {

    state = {
        answeredCards: 0,
        canNext: false,
        correctAnswered: 0,
        cards: [
            {
                "question": "question 1",
                "answer": "answer 1"
            },
            {
                "question": "question 2",
                "answer": "answer 2"
            },
            {
                "question": "question 3",
                "answer": "answer 3"
            },
            {
                "question": "question 4",
                "answer": "answer 4"
            },
            {
                "question": "question 5",
                "answer": "answer 5"
            },
        ],
        showResume: false,
    }

    onCloseHandler = () => {
        if (this.state.showResume) {
            this.props.navigation.goBack();
        } else {
            Alert.alert(
                ServiceFacade.getTranslation("Quiz.warning"),
                ServiceFacade.getTranslation("Quiz.progress_lost"),
                [
                    { text: ServiceFacade.getTranslation("Quiz.ok"), onPress: () => this.props.navigation.goBack() },
                    { text: ServiceFacade.getTranslation("Quiz.cancel"),  style: 'cancel' },
                ]
            )
        }
    }

    onNextHandler = () => {
        if (this.state.answeredCards + 1 == this.state.cards.length) {
            this.setState({
                showResume: true,
            });
        } else {
            this.setState({
                answeredCards: this.state.answeredCards + 1,
            });
        }
    }

    render() {
        const { quiz_id } = this.props.navigation.state.params;

        navBarOptions = {
            title: {
                text: ServiceFacade.getTranslation('Deck.quiz'),
            },
            rightButton: {
                icon: <Ionicons name='ios-close' size={30} color={Colors.dark} />,
                handler: this.onCloseHandler,
            },
        }

        return (
            <View style={styles.container} >

                {/* Nav Bar */}
                <CustomNavigationBar options={navBarOptions} />

                {/* QUIZ */}
                {!this.state.showResume && (
                    <View style={styles.content}>
                        {/* Progress */}
                        <View style={styles.progress}>
                            <Text>{this.state.answeredCards + 1 + " / " + this.state.cards.length}</Text>
                        </View>

                        {/* Current card */}
                        <View style={styles.cardContainer}>
                            <CardComponent
                                cardStyle={styles.card}
                                question={this.state.cards[this.state.answeredCards].question}
                                answer={this.state.cards[this.state.answeredCards].answer}
                                onAnswer={""}
                            />
                        </View>

                        {/* Next card */}
                        <Button
                            buttonStyle={[styles.button, this.state.canNext ? styles.buttonEnable : styles.buttonDisable]}
                            //disabled={!this.state.canNext}
                            text={ServiceFacade.getTranslation("Quiz.next")}
                            onPress={this.onNextHandler}
                        />
                    </View>
                )}

                {/* Resume */}
                {this.state.showResume && (
                    <View style={styles.content}>
                        <Text>Hellow</Text>
                    </View>
                )}

            </View>
        );
    };
}
export default QuizScreen;