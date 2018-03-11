import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Ionicons } from 'react-native-vector-icons';
import FlipCard from 'react-native-flip-card'
import { Card } from 'react-native-elements';

import ServiceFacade from '../../services/ServiceFacade';
import CustomNavigationBar from '../../components/common/CustomNavigationBar';

import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';

const { width, height } = Layout.window;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    cardContainer: {
        marginTop: height * 0.05, 
        height: height * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    card: {
        width: width * 0.8,
    },
    face: {
        flex: 1,
        backgroundColor: Colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    back: {
        flex: 1,
        backgroundColor: Colors.info,
        justifyContent: 'center',
        alignItems: 'center',
    },

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


                <View style={styles.cardContainer} >
                    <FlipCard
                        style={styles.card}
                        friction={6}
                        perspective={1000}
                        flipHorizontal={true}
                        flipVertical={false}
                        flip={false}
                        clickable={true}
                        onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
                    >

                        <View style={styles.face}>
                            <Text>The Face</Text>
                        </View>

                        <View style={styles.back}>
                            <Text>The Back</Text>
                        </View>
                    </FlipCard>
                </View>
            </View>
        );
    };
}
export default QuizScreen;