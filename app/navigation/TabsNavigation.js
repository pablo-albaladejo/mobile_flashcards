import { View } from 'react-native';
import { TabNavigator } from 'react-navigation'

import CustomTabBar from '../components/common/CustomTabBar'

import DecksScreen from '../screens/DecksScreen';
import ProfileScreen from '../screens/ProfileScreen';

const TabsNavigation = TabNavigator({
    Decks: {
        screen: DecksScreen,
    },
    Modal: {
        screen: View,
    },
    Profile: {
        screen: ProfileScreen,
    },
}, {
        tabBarComponent: CustomTabBar,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
)
export default TabsNavigation;