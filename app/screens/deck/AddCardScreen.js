import React, { Component } from 'react';
import { View, StyleSheet, Alert } from 'react-native';

import { connect } from 'react-redux';
import { cardAdd } from '../../actions/card';

import { Ionicons } from 'react-native-vector-icons';
import { Input, Text, Button, Card } from 'react-native-elements';

import CustomNavigationBar from '../../components/common/CustomNavigationBar';

import ServiceFacade from '../../services/ServiceFacade';

import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
const { height, width } = Layout.window;
const verticalMargin = height * 0.02;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    content: {
        flex: 1,
        marginTop: verticalMargin,
        marginBottom: verticalMargin,
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
    },

    input: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    label: {
        textAlign: 'center'
    },

    button: {
        width: width * 0.5,
        backgroundColor: Colors.primary,
    }
});

class AddCardScreen extends Component {

    state = {
        question: '',
        answer: '',
    }

    onBackPressHandler = () => {
        this.props.navigation.goBack();
    }

    onSaveHandler = () => {
        let question = this.state.question.trim();
        let answer = this.state.answer.trim();

        if(question && answer){
            this.props.dispatch(cardAdd(this.props.navigation.state.params.deck_id, question, answer));
            this.props.navigation.goBack();
        }else{
            Alert.alert(
                ServiceFacade.getTranslation("Card.error"),
                ServiceFacade.getTranslation("Card.all_required"),
                [
                    { text: ServiceFacade.getTranslation("Card.all_required_ok") },
                ]
            )
        }

    }

    render() {

        navBarOptions = {
            leftButton: {
                icon: <Ionicons name='ios-arrow-back' size={30} color={Colors.dark} />,
                handler: this.onBackPressHandler,
            },
            title: {
                text: ServiceFacade.getTranslation('Card.title'),
            }
        }

        return (
            <View style={styles.container} >

                {/* Nav Bar */}
                <CustomNavigationBar options={navBarOptions} />

                {/* Content */}
                <Card containerStyle={styles.content} >

                    {/* Question */}
                    <View style={styles.input}>
                        {/* Label */}
                        <Text h4 style={styles.label}>{ServiceFacade.getTranslation('Card.question')}</Text>

                        {/*  Input */}
                        <Input onChangeText={(text) => this.setState({question: text})} />
                    </View>


                    {/* Answer */}
                    <View style={styles.input}>
                        {/* Label */}
                        <Text h4 style={styles.label}>{ServiceFacade.getTranslation('Card.answer')}</Text>

                        {/*  Input */}
                        <Input onChangeText={(text) => this.setState({answer: text})} />
                    </View>

                    {/* Submit button */}
                    <View style={styles.input}>
                        <Button
                            onPress={this.onSaveHandler}
                            buttonStyle={styles.button}
                            text={ServiceFacade.getTranslation('Card.create')}
                        />
                    </View>

                </Card>
            </View>
        );
    }
}
export default connect()(AddCardScreen);