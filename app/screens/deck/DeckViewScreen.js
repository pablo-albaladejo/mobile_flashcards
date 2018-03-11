import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { Card, Text, Button } from 'react-native-elements';

import ServiceFacade from '../../services/ServiceFacade';
import CustomNavigationBar from '../../components/common/CustomNavigationBar';

import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';

const { width, height } = Layout.window;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    }

});

class DeckViewScreen extends Component {

    onBackPressHandler = () => {
        this.props.navigation.goBack();
    }

    quizOnPressHandler = () => {
        this.props.navigation.navigate('Quiz', { "quiz_id": 123 });
    }

    render() {

        navBarOptions = {
            leftButton: {
                icon: <Ionicons name='ios-arrow-back' size={30} color={Colors.DARK} />,
                handler: this.onBackPressHandler,
            },
            title: {
                text: ServiceFacade.getTranslation('Menu.deck'),
            }
        }

        return (
            <View style={{ flex: 1 }}>
                <CustomNavigationBar options={navBarOptions} />

                <Card containerStyle={styles.container} >
                    <View style={styles.headers}>
                        <Text h1 style={styles.title}>Name</Text>
                        <Text h2 style={styles.subtitle}>1 {ServiceFacade.getTranslation('Deck.cards')}</Text>
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
                    </View>

                </Card>
            </View>
        );
    }
}
export default DeckViewScreen;