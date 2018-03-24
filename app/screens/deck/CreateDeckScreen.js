import React, { Component } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

import { connect } from 'react-redux';
import { deckAdd } from '../../actions/deck';

import { Text, Input, Button } from 'react-native-elements';

import ServiceFacade from '../../services/ServiceFacade';
import CustomNavigationBar from '../../components/common/CustomNavigationBar';

import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';

const { height, width } = Layout.window;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    content: {
        flex: 1,
        justifyContent: 'space-around',
        alignSelf: 'center',
    },

    title: {
        textAlign: 'center'
    },

    input: {
        alignSelf: 'center',
    },

    button: {
        width: width * 0.5,
        backgroundColor: Colors.primary,
    },
    flip_button: {
        backgroundColor: Colors.primary,
    }
});

class CreateDeckScreen extends Component {

    state = {
        title: '',
    }

    onClosePressed = () => {
        this.props.navigation.goBack();
    }

    onChangeTitle = (text) => {
        this.setState({
            title: text,
        });
    }

    onSaveHandler = () => {
        let title = this.state.title.trim();

        if (title) {
            this.props.dispatch(deckAdd(this.state.title));
            this.props.navigation.goBack();
        }else{
            Alert.alert(
                ServiceFacade.getTranslation("CreateDeck.error"),
                ServiceFacade.getTranslation("CreateDeck.title_not_empty"),
                [
                    { text: ServiceFacade.getTranslation("CreateDeck.title_not_empty_ok") },
                ]
            )
        }

    }

    render() {

        navBarOptions = {
            leftButton: {
                icon: <Ionicons name='ios-close' size={30} color={Colors.dark} />,
                handler: this.onClosePressed,
            },
            title: {
                text: ServiceFacade.getTranslation('Menu.create_deck'),
            }
        }

        return (
            <View style={styles.container} >
                <CustomNavigationBar options={navBarOptions} />

                <View style={styles.content}>

                    {/* Tile */}
                    <Text h1 style={styles.title}>{ServiceFacade.getTranslation('CreateDeck.title')}</Text>

                    {/*  Input */}
                    <Input
                        containerStyle={styles.input}
                        onChangeText={this.onChangeTitle}
                    />

                    {/* Submit button */}
                    <Button
                        onPress={this.onSaveHandler}
                        buttonStyle={[styles.button, styles.flip_button]}
                        text={ServiceFacade.getTranslation('CreateDeck.create')}
                    />

                </View>

            </View>
        );
    };
}
export default connect()(CreateDeckScreen);