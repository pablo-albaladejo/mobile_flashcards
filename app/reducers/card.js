import { CARD_ADD, } from '../actions/card';

function card(state = {}, action) {
    switch (action.type) {

        case CARD_ADD: 
            return action.cardAdd;

        default:
            return state;
    }
}
export default card;