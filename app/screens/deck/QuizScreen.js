import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { Ionicons } from 'react-native-vector-icons';

import ServiceFacade from '../../services/ServiceFacade';
import CustomNavigationBar from '../../components/common/CustomNavigationBar';

import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

class QuizScreen extends Component {


    render() {
        const { quiz_id } = this.props.navigation.state.params;

        navBarOptions = {
            title: {
                text: ServiceFacade.getTranslation('Deck.quiz'),
            },
        }

        return (
            <View style={styles.container} >
                <CustomNavigationBar options={navBarOptions} />

                
            </View>
        );
    };
}
export default QuizScreen;