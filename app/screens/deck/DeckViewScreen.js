import React, { Component } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
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
            deck_id: this.props.deck_id,
        });
    }

    quizDeleteHandler = () => {
        Alert.alert(
            ServiceFacade.getTranslation("Deck.warning"),
            ServiceFacade.getTranslation("Deck.delete_deck"),
            [
                {
                    text: ServiceFacade.getTranslation("Deck.ok"), onPress: () => {
                        this.props.navigation.goBack();
                        this.props.dispatch(deckRemove(this.props.deck_id));
                    }
                },
                { text: ServiceFacade.getTranslation("Deck.cancel"), style: 'cancel' },
            ]
        );
    }

    onAddCardPressHandler = () => {
        this.props.navigation.navigate("AddCard", {
            deck_id: this.props.deck_id,
        })
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

        return (
            <View style={styles.container}>
                <CustomNavigationBar options={navBarOptions} />

                <Card containerStyle={styles.content} >

                    <View style={styles.headers}>
                        <Text h1 style={styles.title}>{this.props.item.title}</Text>
                        <Text h2 style={styles.subtitle}>{this.props.item.cards.length + " " + ServiceFacade.getTranslation('Deck.cards')}</Text>
                    </View>

                    <View style={styles.buttons} >
                        <Button
                            onPress={this.onAddCardPressHandler}
                            buttonStyle={[styles.button, styles.add_button]}
                            text={ServiceFacade.getTranslation('Deck.add_card')}
                        />

                        {this.props.item.cards.length > 0 && (
                            <Button
                                onPress={this.quizOnPressHandler}
                                buttonStyle={[styles.button, styles.quiz_button]}
                                text={ServiceFacade.getTranslation('Deck.start_quiz')}
                            />
                        )}

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
function mapStateToProps(state, ownProps) {
    let deck_id = ownProps.navigation.state.params.deck_id;

    return {
        item: state.deck[deck_id] || { title: '', cards: [] },
        deck_id,
    }
}
export default connect(mapStateToProps)(DeckViewScreen);