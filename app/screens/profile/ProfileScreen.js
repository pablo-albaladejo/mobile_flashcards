import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { Ionicons } from 'react-native-vector-icons';

import ServiceFacade from '../../services/ServiceFacade';
import CustomNavigationBar from '../../components/common/CustomNavigationBar';

import { connect } from 'react-redux';

import Colors from '../../constants/Colors';

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
        textAlign: 'center',
        color: Colors.info,
    },
    counter: {
        textAlign: 'center',
        color: Colors.primary,
    },

    global: {
        color: Colors.warning,
    }

});

class ProfileScreen extends Component {

    onSettingsPressHandler = () => {
        this.props.navigation.navigate('Settings');
    }

    render() {

        navBarOptions = {
            title: {
                text: ServiceFacade.getTranslation('Menu.profile'),
            },
            rightButton: {
                icon: <Ionicons name='ios-cog' size={30} color={Colors.dark} />,
                handler: this.onSettingsPressHandler,
            },
        }

        return (
            <View style={styles.container} >

                {/* Nav Bar */}
                <CustomNavigationBar options={navBarOptions} />

                {/* Content */}
                <View style={styles.content}>

                    {/* Times played */}
                    <View>
                        <Text h3 style={styles.title}>{ServiceFacade.getTranslation("Stats.times_played")}</Text>
                        <Text h4 style={styles.counter}>{this.props.times_played}</Text>
                    </View>

                    {/* Answered */}
                    <View>
                        <Text h3 style={styles.title}>{ServiceFacade.getTranslation("Stats.answered")}</Text>
                        <Text h4 style={styles.counter}>{this.props.answered}</Text>
                    </View>

                    {/* Correct */}
                    <View>
                        <Text h3 style={styles.title}>{ServiceFacade.getTranslation("Stats.correct")}</Text>
                        <Text h4 style={styles.counter}>{this.props.correct}</Text>
                    </View>

                    {/* Accuracy*/}
                    <View>
                        <Text h3 style={[styles.title, styles.global]}>{ServiceFacade.getTranslation("Stats.accuracy")}</Text>
                        <Text h4 style={[styles.counter, styles.global]}>{this.props.accuracy} %</Text>
                    </View>

                </View>

            </View>
        );
    };
}
function mapStateToProps(state) {
    const { times_played, answered, correct } = state.stats;

    let accuracy = Math.floor(correct / answered * 100);

    return {
        times_played: times_played || 0,
        answered: answered || 0,
        correct: correct || 0,
        accuracy: accuracy || 0,
    }
}
export default connect(mapStateToProps)(ProfileScreen);