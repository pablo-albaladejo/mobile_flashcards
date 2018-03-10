import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import ServiceFacade from '../services/ServiceFacade';
import CustomNavigationBar from '../components/common/CustomNavigationBar';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

class ProfileScreen extends Component {

    render() {

        navBarOptions = {
            title: {
                text: ServiceFacade.getTranslation('Menu.profile'),
            }
        }

        return (
            <View style={styles.containers} >
                <CustomNavigationBar options={navBarOptions}/>
            </View>
        );
    };
}
export default ProfileScreen;