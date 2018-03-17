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

class CreateDeckScreen extends Component {

    onClosePressed = () => {
        this.props.navigation.goBack();
    }

    render() {

        navBarOptions = {
            leftButton: {
                icon: <Ionicons name='ios-close' size={30} color={Colors.dark} />,
                handler: this.onClosePressed,
            },
            title: {
                text: ServiceFacade.getTranslation('Menu.create_deck'),
            }
        }

        return (
            <View style={styles.container} >
                <CustomNavigationBar options={navBarOptions}/>
            </View>
        );
    };
}
export default CreateDeckScreen;