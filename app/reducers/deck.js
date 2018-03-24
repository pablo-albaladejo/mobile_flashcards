import { DECK_ADD, DECK_REMOVE, DECK_LOAD_LIST } from '../actions/deck';

function deck(state = {}, action) {

    switch (action.type) {

        case DECK_LOAD_LIST:
            return action.decks;

        case DECK_REMOVE:
            return action.decks;

        case DECK_ADD:
            return action.decks;

        default:
            return state;
    }
}
export default deck;