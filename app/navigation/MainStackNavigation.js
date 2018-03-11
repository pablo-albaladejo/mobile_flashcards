import { StackNavigator } from 'react-navigation'

import TabsNavigation from './TabsNavigation';
import CreateDeckScreen from '../screens/deck/CreateDeckScreen';
import DeckStackNavigation from './DeckStackNavigation';

const MainStackNavigation = StackNavigator({
    Tabs: {
        screen: TabsNavigation,
    },
    CreateDeck:{
        screen: CreateDeckScreen,
    },

},
    {
        initialRouteName: 'Tabs',
        headerMode: 'none',
        mode: 'modal',
    })
export default MainStackNavigation;