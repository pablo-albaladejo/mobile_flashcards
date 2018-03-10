import { StackNavigator } from 'react-navigation'

import DecksScreen from '../screens/deck/DecksScreen';
import DeckViewScreen from '../screens/deck/DeckViewScreen';

const DeckStackNavigation = StackNavigator({
    Decks: {
        screen: DecksScreen,
    },
    DeckView: {
        screen: DeckViewScreen,
        navigationOptions: {
            tabBarVisible: false,
        }
    }
},
    {
        initialRouteName: 'Decks',
        headerMode: 'none',
    })
export default DeckStackNavigation;