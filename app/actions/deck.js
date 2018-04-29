import ServiceFacade from "../services/ServiceFacade";

export const DECK_ADD = 'DECK_ADD';
export const deckAdd = (deck_id, title) => dispatch => {
    ServiceFacade.addDeck(deck_id, title)
        .then(decks => {
            dispatch(deckAddSync(decks));
        }).catch(err => {
            console.warn(err);
            dispatch(deckAddSync({}));
        });
};
function deckAddSync(decks) {
    return {
        type: DECK_ADD,
        decks,
    }
}

export const DECK_REMOVE = 'DECK_REMOVE';
export const deckRemove = (id) => dispatch => (
    ServiceFacade.removeDeck(id)
        .then(result => {

            console.log(result);

            dispatch(deckRemoveSync(result.decks, result.cards));
        }).catch(err => {
            console.warn(err);
            dispatch(deckRemoveSync({}));
        })
);

function deckRemoveSync(decks, cards) {
    return {
        type: DECK_REMOVE,
        decks,
        cards,
    }
}