import ServiceFacade from '../services/ServiceFacade';

export const CARD_ADD = 'CARD_ADD';
export const cardAdd = (deck_id, question, answer) => dispatch => {
    let card_id = ServiceFacade.generateID();
    
    ServiceFacade.addCardToDeck(deck_id, card_id, question, answer)
    .then(result => {
        dispatch(cardAddSync(result.decks, result.cards));
    });
};

function cardAddSync(decks, cards) {
    return {
        type: CARD_ADD,
        decks,
        cards,
    }
}