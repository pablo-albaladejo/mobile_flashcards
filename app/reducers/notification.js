import { NOTIFICATION_SET, NOTIFICATION_CLEAR } from '../actions/notification';
import { LOAD_DATA, CLEAR_DATA } from '../actions';

function notification(state = {}, action) {

    switch (action.type) {

        case NOTIFICATION_SET:
            return action.notification;

        case NOTIFICATION_CLEAR:
            return action.notification;

        //common
        case LOAD_DATA:
            return action.notification;
            
        case CLEAR_DATA:
            return {};

        default:
            return state;
    }
}
export default notification;