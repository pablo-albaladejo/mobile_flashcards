import { View } from 'react-native';
import { TabNavigator } from 'react-navigation'

import CustomTabBar from '../components/common/CustomTabBar'

import DeckStackNavigation from './DeckStackNavigation';
import ProfileStackNavigation from './ProfileStackNavigation';

const TabsNavigation = TabNavigator({
    DeckList: {
        screen: DeckStackNavigation,
    },
    Modal: {
        screen: View,
    },
    Profile: {
        screen: ProfileStackNavigation,
    },
}, {

        tabBarComponent: CustomTabBar,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
)
export default TabsNavigation;