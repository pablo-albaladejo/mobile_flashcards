import ServiceFacade from '../services/ServiceFacade';

export const STATS_UPDATE = 'STATS_UPDATE';
export const statsUpdate = (answered, correct) => dispatch => {

    ServiceFacade.updateStats(answered, correct)
    .then(stats => {
        dispatch(statsUpdateSync(stats));
    });
};

function statsUpdateSync(stats) {
    return {
        type: STATS_UPDATE,
        stats,
    }
}