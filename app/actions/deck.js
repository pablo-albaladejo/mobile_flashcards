import ServiceFacade from "../services/ServiceFacade";

export const DECK_ADD = 'DECK_ADD';
export function deckAdd(deck) {
    return {
        type: DECK_ADD,
        deck,
    }
}

export const DECK_REMOVE = 'DECK_REMOVE';
export function deckRemove(id) {
    return {
        type: DECK_REMOVE,
        id,
    }
}

export const DECK_LOAD_LIST = 'DECK_LOAD_LIST';
export function deckLoadList() {
    return {
        type: DECK_LOAD_LIST,
        decks: ServiceFacade.getDecks(),
    }
}