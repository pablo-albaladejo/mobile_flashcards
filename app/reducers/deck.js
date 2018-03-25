import { DECK_ADD, DECK_REMOVE, DECK_LOAD_LIST } from '../actions/deck';
import { CARD_ADD } from '../actions/card';
import { LOAD_DATA, CLEAR_DATA } from '../actions';

function deck(state = {}, action) {

    switch (action.type) {

        //deck
        case DECK_REMOVE:
            return action.decks;

        case DECK_ADD:
            return action.decks;

        //card
        case CARD_ADD:
            return action.decks;

        //common
        case LOAD_DATA:
            return action.decks;
        case CLEAR_DATA:
            return {};
            
        default:
            return state;
    }
}
export default deck;