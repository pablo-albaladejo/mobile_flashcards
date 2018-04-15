import React, { Component } from 'react';
import { View, StyleSheet, Switch } from 'react-native';

import { Button, Text } from 'react-native-elements';

import { connect } from 'react-redux';
import { clearData } from '../../actions';
import { notificationSet, notificationClear } from '../../actions/notification';

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
        this.props.dispatch(clearData());
    }

    onNotificationChange = (enabled) => {
        let title = "title";
        let body = "body";
        let hours = 14;
        let minutes = 8;

        if (enabled) {
            this.props.dispatch(notificationSet(title, body, hours, minutes));
        } else {
            this.props.dispatch(notificationClear());
        }
        
        this.setState({
            enableNotifications: enabled
        });
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
                <CustomNavigationBar options={navBarOptions} />

                <View style={styles.buttons}>

                    {/* Set notification*/}
                    <Switch
                        onValueChange={this.onNotificationChange}
                        value={this.props.enableNotifications}
                    />

                    {/* Clear data */}
                    <Button
                        onPress={this.onClearHandler}
                        buttonStyle={[styles.button, styles.clear_button]}
                        text={ServiceFacade.getTranslation('Settings.clear_data')}
                    />
                </View>
            </View>
        );
    };
}
function mapStateToProps(state) {
    let enableNotifications = Object.keys(state.notification).length > 0;

    if (enableNotifications) {
        console.log(state.notification);
    }

    return {
        enableNotifications,
    }
}
export default connect(mapStateToProps)(SettingsScreen);