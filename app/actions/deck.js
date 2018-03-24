import ServiceFacade from "../services/ServiceFacade";

export const DECK_ADD = 'DECK_ADD';
export const deckAdd = (title) => dispatch => (
    ServiceFacade.addDeck(title)
        .then(decks => {
            dispatch(deckAddSync(decks));
        }).catch(err => {
            console.warn(err);
            dispatch(deckAddSync({}));
        })
);
function deckAddSync(decks) {
    return {
        type: DECK_ADD,
        decks,
    }
}

export const DECK_REMOVE = 'DECK_REMOVE';
export const deckRemove = (id) => dispatch => (
    ServiceFacade.removeDeck(id)
        .then(decks => {
            console.log(decks);
            dispatch(deckRemoveSync(decks));
        }).catch(err => {
            console.warn(err);
            dispatch(deckRemoveSync({}));
        })
);

function deckRemoveSync(decks) {
    return {
        type: DECK_REMOVE,
        decks,
    }
}

export const DECK_LOAD_LIST = 'DECK_LOAD_LIST';

export const deckLoadList = () => dispatch => (
    ServiceFacade.getDecks()
        .then(decks => {
            dispatch(deckLoadListSync(decks));
        }).catch(err => {
            console.warn(err);
            dispatch(deckLoadListSync({}));
        })
);
function deckLoadListSync(decks) {
    return {
        type: DECK_LOAD_LIST,
        decks,
    }
}