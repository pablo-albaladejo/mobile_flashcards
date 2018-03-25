import React, { Component } from 'react';
import { View, StyleSheet, Alert } from 'react-native';

import { Button, Text } from 'react-native-elements';

import { connect } from 'react-redux';
import { clearData } from '../../actions';

import { Ionicons } from 'react-native-vector-icons';

import ServiceFacade from '../../services/ServiceFacade';
import CustomNavigationBar from '../../components/common/CustomNavigationBar';

import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

class SettingsScreen extends Component {

    onBackPressHandler = () => {
        this.props.navigation.goBack();
    }

    onClearHandler = () => {
/*         ServiceFacade.clearData()
        .then(() => {
            this.props.dispatch(deckLoadList());

            Alert.alert(
                ServiceFacade.getTranslation("Settings.success"),
                ServiceFacade.getTranslation("Settings.data_cleared"),
                [
                    { text: ServiceFacade.getTranslation("Settings.data_cleared_ok") },
                ]
            )
            
        })
        .catch(err => {
            Alert.alert(
                ServiceFacade.getTranslation("Settings.error"),
                ServiceFacade.getTranslation("Settings.data_cleared_error"),
                [
                    { text: ServiceFacade.getTranslation("Settings.data_cleared_error_ok") },
                ]
            )
        }); */

        this.props.dispatch(clearData());
    }

    render() {

        navBarOptions = {
            leftButton: {
                icon: <Ionicons name='ios-arrow-back' size={30} color={Colors.dark} />,
                handler: this.onBackPressHandler,
            },
            title: {
                text: ServiceFacade.getTranslation('Menu.settings'),
            }
        }

        return (
            <View style={styles.container} >
                <CustomNavigationBar options={navBarOptions}/>

                <View style={styles.buttons}>
                    {/* Clear data */}
                    <Button
                        onPress={this.onClearHandler}
                        //buttonStyle={[styles.button, styles.flip_button]}
                        text={ServiceFacade.getTranslation('Settings.clear_data')}
                    />
                </View>
            </View>
        );
    };
}
export default connect()(SettingsScreen);