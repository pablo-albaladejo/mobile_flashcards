import { StackNavigator } from 'react-navigation'

import DecksScreen from '../screens/deck/DecksScreen';
import DeckViewScreen from '../screens/deck/DeckViewScreen';
import QuizScreen from '../screens/deck/QuizScreen';

const DeckStackNavigation = StackNavigator({
    Decks: {
        screen: DecksScreen,
        navigationOptions: {
            tabBarVisible: true,
        }
    },
    DeckView: {
        screen: DeckViewScreen,
    },
    Quiz: {
        screen: QuizScreen,
    }
},
    {
        initialRouteName: 'Decks',
        headerMode: 'none',
        navigationOptions: {
            tabBarVisible: false,
        }
    })
export default DeckStackNavigation;