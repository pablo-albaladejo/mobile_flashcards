import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { Card, Text, Button } from 'react-native-elements';

import { connect } from 'react-redux';
import { deckRemove } from '../../actions/deck';
import ServiceFacade from '../../services/ServiceFacade';
import CustomNavigationBar from '../../components/common/CustomNavigationBar';

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
        marginTop: verticalMargin,
        marginBottom: verticalMargin,
    },


    headers: {

    },
    title: {
        textAlign: 'center',
        color: Colors.dark
    },
    subtitle: {
        textAlign: 'center',
        color: Colors.info
    },


    buttons: {
        marginTop: '50%'
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        width: width * 0.5,
    },
    add_button: {
        backgroundColor: Colors.primary,
    },
    quiz_button: {
        backgroundColor: Colors.warning,
    },
    delete_button: {
        backgroundColor: Colors.danger,
    }

});

class DeckViewScreen extends Component {

    onBackPressHandler = () => {
        this.props.navigation.goBack();
    }

    quizOnPressHandler = () => {
        
        this.props.navigation.navigate('Quiz', { 
            id: this.props.item.id,
            onFinishHandler: this.props.onFinishHandler,
        });
    }

    quizDeleteHandler = () => {
        this.props.navigation.goBack();
        this.props.onDeleteQuiz(this.props.item.id);
    }

    render() {

        navBarOptions = {
            leftButton: {
                icon: <Ionicons name='ios-arrow-back' size={30} color={Colors.dark} />,
                handler: this.onBackPressHandler,
            },
            title: {
                text: ServiceFacade.getTranslation('Menu.deck'),
            }
        }

        this.props = {
            ...this.props,
            ...this.props.navigation.state.params
        }
        
        return (
            <View style={styles.container}>
                <CustomNavigationBar options={navBarOptions} />

                <Card containerStyle={styles.content} >

                    <View style={styles.headers}>
                        <Text h1 style={styles.title}>{this.props.item.name}</Text>
                        <Text h2 style={styles.subtitle}>{this.props.item.numCards + " " + ServiceFacade.getTranslation('Deck.cards')}</Text>
                    </View>

                    <View style={styles.buttons} >
                        <Button
                            buttonStyle={[styles.button, styles.add_button]}
                            text={ServiceFacade.getTranslation('Deck.add_card')}
                        />

                        <Button
                            onPress={this.quizOnPressHandler}
                            buttonStyle={[styles.button, styles.quiz_button]}
                            text={ServiceFacade.getTranslation('Deck.start_quiz')}
                        />

                        <Button
                            onPress={this.quizDeleteHandler}
                            buttonStyle={[styles.button, styles.delete_button]}
                            text={ServiceFacade.getTranslation('Deck.delete')}
                        />
                    </View>

                </Card>
            </View>
        );
    }
}
export default DeckViewScreen;