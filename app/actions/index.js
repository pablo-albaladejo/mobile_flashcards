import ServiceFacade from '../services/ServiceFacade';

export const LOAD_DATA = 'LOAD_DATA';
export const loadData = () => dispatch => (
    ServiceFacade.loadData()
        .then(data => {
            dispatch(loadDataSync(data.decks, data.cards, data.stats));
        })
);
function loadDataSync(decks, cards, stats) {
    return {
        type: LOAD_DATA,
        decks,
        cards,
        stats,
    }
}

export const CLEAR_DATA = 'CLEAR_DATA';
export const clearData = () => dispatch => (
    ServiceFacade.clearData()
        .then(() => {
            dispatch(clearDataSync());
        })
);
function clearDataSync() {
    return {
        type: CLEAR_DATA,
    }
}