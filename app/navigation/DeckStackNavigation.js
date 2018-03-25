import { StackNavigator } from 'react-navigation'

import DeckListScreen from '../screens/deck/DeckListScreen';
import DeckViewScreen from '../screens/deck/DeckViewScreen';
import QuizScreen from '../screens/deck/QuizScreen';
import AddCardScreen from '../screens/deck/AddCardScreen';

const DeckStackNavigation = StackNavigator({
    DeckList: {
        screen: DeckListScreen,
        navigationOptions: {
            tabBarVisible: true,
        }
    },
    DeckView: {
        screen: DeckViewScreen,
    },
    Quiz: {
        screen: QuizScreen,
        navigationOptions: {
            gesturesEnabled: false,
        }
    },
    AddCard: {
        screen: AddCardScreen,
    }
},
    {
        initialRouteName: 'DeckList',
        headerMode: 'none',
        navigationOptions: {
            tabBarVisible: false,
        }
    })
export default DeckStackNavigation;