import { CARD_ADD, } from '../actions/card';
import { LOAD_DATA, CLEAR_DATA } from '../actions';
import { DECK_REMOVE } from '../actions/deck';

function card(state = {}, action) {

    switch (action.type) {

        //card
        case CARD_ADD: 
            return action.cards;
        
        //decks
        case DECK_REMOVE:
            return action.cards;

        //common
        case LOAD_DATA:
            return action.cards;
        case CLEAR_DATA:
            return {};

        default:
            return state;
    }
}
export default card;