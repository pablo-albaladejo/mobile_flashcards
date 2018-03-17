import React, { Component } from 'react';
import { View, Alert, StyleSheet } from 'react-native';

import { Text } from 'react-native-elements';

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

    //Card
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

    //Button
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
    },

    //Resume
    score_title: {
    
    },
    score: {
    
    },
    finish_button: {
        width: width * 0.9,
        backgroundColor: Colors.warning,
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
                    { text: ServiceFacade.getTranslation("Quiz.cancel"), style: 'cancel' },
                ]
            )
        }
    }

    onNextHandler = () => {
        //reset the card inner state to remove the previous one
        this.cardComponent.reset();

        if (this.state.answeredCards + 1 == this.state.cards.length) {
            //quiz finished
            this.setState({
                canNext: false,
                showResume: true,
            });
        } else {
            //next card
            this.setState({
                canNext: false,
                answeredCards: this.state.answeredCards + 1,
            });
        }
    }

    onAnswerHandler = (isCorrect) => {
        this.setState(prevState => {
            return {
                canNext: true,
                correctAnswered: isCorrect ? prevState.correctAnswered + 1 : prevState.correctAnswered,
            };
        });
    }

    onFinishHandler = () => {
        this.props.onFinishHandler(this.props.id,this.state.correctAnswered);
        this.props.navigation.goBack();
    }

    render() {
    
        navBarOptions = {
            title: {
                text: ServiceFacade.getTranslation('Deck.quiz'),
            },
            rightButton: {
                icon: <Ionicons name='ios-close' size={30} color={Colors.dark} />,
                handler: this.onCloseHandler,
            },
        }

        this.props = {
            ...this.props,
            ...this.props.navigation.state.params
        }
        
        return (
            <View style={styles.container} >

                {/* Nav Bar */}
                <CustomNavigationBar options={navBarOptions} />

                {/* Quiz */}
                {!this.state.showResume && (
                    <View style={styles.content}>
                        {/* Progress */}
                        <View style={styles.progress}>
                            <Text>{this.state.answeredCards + 1 + " / " + this.state.cards.length}</Text>
                        </View>

                        {/* Current card */}
                        <View style={styles.cardContainer}>
                            <CardComponent
                                ref={obj => this.cardComponent = obj}
                                cardStyle={styles.card}
                                question={this.state.cards[this.state.answeredCards].question}
                                answer={this.state.cards[this.state.answeredCards].answer}
                                onAnswer={this.onAnswerHandler}
                            />
                        </View>

                        {/* Next card */}
                        <Button
                            buttonStyle={[styles.button, this.state.canNext ? styles.buttonEnable : styles.buttonDisable]}
                            disabled={!this.state.canNext}
                            text={ServiceFacade.getTranslation("Quiz.next")}
                            onPress={this.onNextHandler}
                        />
                    </View>
                )}

                {/* Resume */}
                {this.state.showResume && (
                    <View style={styles.content}>

                        {/* Title */}
                        <Text h1 style={styles.score_title}>
                            {ServiceFacade.getTranslation("Quiz.score")}
                        </Text>

                        {/* Score */}
                        <Text h2 style={styles.score}>
                            {this.state.correctAnswered + " / " + this.state.cards.length}
                        </Text>

                        {/* Finish */}
                        <Button
                            buttonStyle={styles.finish_button}
                            text={ServiceFacade.getTranslation("Quiz.finish")}
                            onPress={this.onFinishHandler}
                        />
                    </View>
                )}

            </View>
        );
    };
}
export default QuizScreen;