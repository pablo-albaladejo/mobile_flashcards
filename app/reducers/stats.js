import { STATS_UPDATE } from '../actions/stats';
import { LOAD_DATA, CLEAR_DATA } from '../actions';

function stats(state = {}, action) {

    switch (action.type) {

        case STATS_UPDATE:
            return action.stats;
        
        //common
        case LOAD_DATA:
            return action.stats;
        case CLEAR_DATA:
            return {};
            
        default:
            return state;
    }
}
export default stats;