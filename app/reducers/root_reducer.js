import card from './card';
import deck from './deck';
import stats from './stats';
import notification from './notification';

import { combineReducers } from 'redux';

export default combineReducers({
    card,
    deck,
    stats,
    notification,
});