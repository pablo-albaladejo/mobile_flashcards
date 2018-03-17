import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { Button, Text } from 'react-native-elements';

import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';
import ServiceFacade from '../../../services/ServiceFacade';
const { height, width } = Layout.window;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        flex: 2,
        color: Colors.white
    },

    question: {
        flex: 2,
    },

    buttons: {
        flex: 2,
        justifyContent: 'flex-end'
    },

    button: {
        marginTop: 10,
        marginBottom: 10,
        width: width * 0.5,
    },
    flip_button: {
        backgroundColor: Colors.primary,
    }

});

class FaceComponent extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Text h2 style={styles.title}>
                    {ServiceFacade.getTranslation("Quiz.question")}
                </Text>

                <Text h3 style={styles.question}>
                    {this.props.text}
                </Text>


                <View style={styles.buttons}>
                    <Button
                        onPress={this.props.flip}
                        buttonStyle={[styles.button, styles.flip_button]}
                        text={ServiceFacade.getTranslation('Quiz.flip')}
                    />
                </View>

            </View>
        );
    }
}
export default FaceComponent;