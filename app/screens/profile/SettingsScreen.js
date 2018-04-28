import React, { Component } from 'react';
import { View, StyleSheet, Switch } from 'react-native';
import DatePicker from "react-native-datepicker";
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

    },
    content: {
        width: "80%",
        flex: 1,
        justifyContent: 'space-around',
        alignSelf: 'center',
    },
    date: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    reminders: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

class SettingsScreen extends Component {

    state = {
        title: ServiceFacade.getTranslation("Notifications.title"),
        body: ServiceFacade.getTranslation("Notifications.body"),
        time: this.props.time,
    }

    onBackPressHandler = () => {
        this.props.navigation.goBack();
    }

    onClearHandler = () => {
        this.props.dispatch(clearData());
    }

    onNotificationChange = (enabled) => {

        if (enabled) {
            this.props.dispatch(notificationSet(
                this.state.title,
                this.state.body,
                this.state.time.hours,
                this.state.time.minutes
            ));
        } else {
            this.props.dispatch(notificationClear());
        }

    }

    onTimeChange = (time) => {
        let timeArray = time.split(':');

        let hours = timeArray[0];
        let minutes = timeArray[1];

        this.setState({
            time: {
                hours,
                minutes,
            }
        });

        this.props.dispatch(notificationSet(
            this.state.title,
            this.state.body,
            hours,
            minutes,
        ));
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

        let time = new Date();
        time.setHours(this.state.time.hours);
        time.setMinutes(this.state.time.minutes);

        return (
            <View style={styles.container} >
                <CustomNavigationBar options={navBarOptions} />

                <View style={styles.content}>

                    {/* Set notification*/}
                    <View style={styles.reminders}>
                        <Text h3>{ServiceFacade.getTranslation("Settings.reminders")}</Text>
                        <Switch
                            onTintColor={Colors.primary}
                            onValueChange={this.onNotificationChange}
                            value={this.props.enableNotifications}
                        />
                    </View>

                    {/* Set time */}
                    {this.props.enableNotifications && (
                        <View style={styles.date}>
                            <DatePicker
                                style={this.props.inputStyle || null}
                                customStyles={this.props.customStyles || undefined}

                                locale={ServiceFacade.getCurrentLocale()}
                                mode="time"
                                onDateChange={this.onTimeChange}
                                date={time}
                                confirmBtnText={ServiceFacade.getTranslation("Settings.confirm")}
                                cancelBtnText={ServiceFacade.getTranslation("Settings.cancel")}

                                showIcon={this.props.icon !== undefined}
                                iconComponent={
                                    this.props.icon || undefined
                                }
                            />
                        </View>
                    )}

                    {/* Clear data */}
                    <Button
                        buttonStyle={{ backgroundColor: Colors.danger }}
                        onPress={this.onClearHandler}
                        text={ServiceFacade.getTranslation('Settings.clear_data')}
                    />
                </View>
            </View>
        );
    };
}
function mapStateToProps(state) {
    let enableNotifications = Object.keys(state.notification).length > 0;
    let time = {
        hours: 0,
        minutes: 0,
    };

    if (enableNotifications) {
        time.hours = state.notification.hours;
        time.minutes = state.notification.minutes;
    }

    return {
        enableNotifications,
        time,
    }
}
export default connect(mapStateToProps)(SettingsScreen);