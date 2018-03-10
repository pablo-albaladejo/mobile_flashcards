import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import ServiceFacade from '../../services/ServiceFacade';
import CustomNavigationBar from '../../components/common/CustomNavigationBar';
import DeckList from '../../components/deck/DeckList';

const styles = StyleSheet.create({
    container: {
        //flex: 1,
    }
});

class DecksScreen extends Component {

    state = {
        decks: [
            {
                key: Math.floor(Math.random() * 10000),
                name: "Test1",
                numCards: 5
            },
            {
                key: Math.floor(Math.random() * 10000),
                name: "Test2",
                numCards: 2
            },
        ]
    }


    handleOnItemPress = (id) => {
        this.props.navigation.navigate("DeckView");
    }

    render() {

        navBarOptions = {
            title: {
                text: ServiceFacade.getTranslation('Menu.decks'),
            }
        }

        return (
            <View style={styles.container} >
                <CustomNavigationBar options={navBarOptions} />
                <DeckList
                    items={this.state.decks}
                    onPressItem={this.handleOnItemPress}
                />
            </View>
        );
    };
}
export default DecksScreen;