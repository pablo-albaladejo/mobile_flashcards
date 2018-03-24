import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import { Ionicons,  MaterialCommunityIcons } from 'react-native-vector-icons';

import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';

const { width, height } = Layout.window;

//https://snack.expo.io/rJ38ACYwG
const activeTintColor = Colors.primary;
const inactiveTintColor = Colors.secondary;
const styles = StyleSheet.create({
    tabBar: {
        height: height * 0.08,
        flexDirection: 'row',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: 'rgba(0, 0, 0, .3)',
        backgroundColor: Colors.CLEAR,
    },
    tab: {
        marginBottom: height * 0.02,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
});

class CustomTabBar extends Component {

    getIcon = (screen, color) => {
        switch (screen) {
            case 'DeckList':
                return <MaterialCommunityIcons name={'cards-outline'} size={25} color={color} />;
            case 'Profile':
                return <Ionicons name={'ios-trophy-outline'} size={25} color={color} />;
            case 'Modal'://case 'CreateDeck':
                return <Ionicons name={'ios-add-circle-outline'} size={25} color={color} />;
            default:
                return <Text style={{ color }}>{screen}</Text>;
        }
    }

    renderItem = (route, index) => {
        const {
            navigation,
            jumpToIndex,
        } = this.props;

        const isModal = route.routeName === 'Modal';
        
        const focused = index === navigation.state.index;
        const color = focused ? activeTintColor : inactiveTintColor;

        return (
            <TouchableWithoutFeedback
                key={route.key}
                style={styles.tab}
                onPress={() => isModal ? navigation.navigate('CreateDeck') : jumpToIndex(index)}
            >
                <View style={styles.tab}>
                    {this.getIcon(route.routeName, color)}
                </View>
            </TouchableWithoutFeedback>
        );
    };

    render() {

        const { navigation } = this.props;
        const { routes } = navigation.state;

        return (
            <View style={styles.tabBar}>
                {routes && routes.map(this.renderItem)}
            </View>
        );
    }
}
export default CustomTabBar;