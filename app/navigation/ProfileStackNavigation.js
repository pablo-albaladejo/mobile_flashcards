import { StackNavigator } from 'react-navigation'

import ProfileScreen from '../screens/profile/ProfileScreen';
import SettingsScreen from '../screens/profile/SettingsScreen';

const ProfileStackNavigation = StackNavigator({
    Profile: {
        screen: ProfileScreen,
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarVisible: false,
        }
    },
},
    {
        initialRouteName: 'Profile',
        headerMode: 'none',
    })
export default ProfileStackNavigation;