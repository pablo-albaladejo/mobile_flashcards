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

class SettingsScreen extends Component {

    onBackPressHandler = () => {
        this.props.navigation.goBack();
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
            </View>
        );
    };
}
export default SettingsScreen;