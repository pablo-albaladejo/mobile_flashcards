import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { Ionicons } from 'react-native-vector-icons';

import ServiceFacade from '../../services/ServiceFacade';
import CustomNavigationBar from '../../components/common/CustomNavigationBar';

import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        //flex: 1,
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
                icon: <Ionicons name='ios-cog' size={30} color={Colors.DARK} />,
                handler: this.onSettingsPressHandler,
            },
        }

        return (
            <View style={styles.container} >
                <CustomNavigationBar options={navBarOptions}/>
            </View>
        );
    };
}
export default ProfileScreen;