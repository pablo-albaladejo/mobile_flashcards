import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';

import { connect } from 'react-redux';
import { deckRemove } from '../../actions/deck';

import ServiceFacade from '../../services/ServiceFacade';
import CustomNavigationBar from '../../components/common/CustomNavigationBar';
import DeckList from '../../components/deck/DeckList';

import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
const { width, height } = Layout.window;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    content: {
        flex: 1,
    },

    no_decks: {
        flex: 1,
        justifyContent: 'space-around',
        alignSelf: 'center',
    },
    no_decks_text: {
        textAlign: 'center',
    },

    button: {
        backgroundColor: Colors.primary,
        width: width * 0.5
    }
});

class DeckListScreen extends Component {

    handleOnItemPress = (item) => {
        this.props.navigation.navigate("DeckView", {
            deck_id: item.id,
            onFinishHandler: (id, rightAnswers) => {
                console.log(id);
                console.log(rightAnswers);
            }
        });
    }

    onCreateDeckPress = () => {
        this.props.navigation.navigate("CreateDeck");
    }

    render() {

        navBarOptions = {
            title: {
                text: ServiceFacade.getTranslation('Menu.decks'),
            }
        }

        this.props = {
            ...this.props,
            ...this.props.navigation.state.params
        }

        return (
            <View style={styles.container} >

                {/* Nav Bar */}
                <CustomNavigationBar options={navBarOptions} />

                {/* Content */}
                <View style={styles.content}>
                    {/* Deck list is empty */}
                    {this.props.items.length == 0 && (
                        <View style={styles.no_decks}>

                            {/* Title */}
                            <Text h3 style={styles.no_decks_text}>{ServiceFacade.getTranslation("Menu.no_decks")}</Text>

                            {/* Action button */}
                            <Button
                                buttonStyle={styles.button}
                                onPress={this.onCreateDeckPress}
                                text={ServiceFacade.getTranslation("Menu.create_first")}
                            />
                        </View>
                    )}

                    {/* Deck list */}
                    <DeckList
                        items={this.props.items}
                        onPressItem={this.handleOnItemPress}
                    />
                </View>

            </View>
        );
    };
}

function mapStateToProps(state) {
    let decks = [];

    Object.keys(state.deck).forEach(key => {
        item = state.deck[key];
        item.id = key;
        decks.push(item);
    });

    return {
        items: decks,
    }
}
export default connect(mapStateToProps)(DeckListScreen);