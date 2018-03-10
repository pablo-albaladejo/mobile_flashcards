import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import ServiceFacade from '../services/ServiceFacade';
import CustomNavigationBar from '../components/common/CustomNavigationBar';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

class DecksScreen extends Component {

    render() {

        navBarOptions = {
            title: {
                text: ServiceFacade.getTranslation('Menu.decks'),
            }
        }

        return (
            <View style={styles.containers} >
                <CustomNavigationBar options={navBarOptions}/>
            </View>
        );
    };
}
export default DecksScreen;