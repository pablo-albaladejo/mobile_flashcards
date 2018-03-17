import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import ServiceFacade from '../../services/ServiceFacade';
import CustomNavigationBar from '../../components/common/CustomNavigationBar';
import DeckList from '../../components/deck/DeckList';
import { deckRemove } from '../../actions/deck';

const styles = StyleSheet.create({
    container: {
        //flex: 1,
    }
});

class DecksScreen extends Component {

    handleOnItemPress = (key) => {
        this.props.navigation.navigate("DeckView", {
            item: this.props.items[0],
            onDeleteQuiz: (id) => this.props.dispatch(deckRemove(id)),
            onFinishHandler: (id, rightAnswers) => {
                console.log(id);
                console.log(rightAnswers);
            }
        });
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
                <CustomNavigationBar options={navBarOptions} />
                <DeckList
                    items={this.props.items}
                    onPressItem={this.handleOnItemPress}
                />
            </View>
        );
    };
}

function mapStateToProps(state) {
    return {
        items: state.deck,
    }
}
export default connect(mapStateToProps)(DecksScreen);