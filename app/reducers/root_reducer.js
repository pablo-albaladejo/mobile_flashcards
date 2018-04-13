import card from './card';
import deck from './deck';
import stats from './stats';

import { combineReducers } from 'redux';

export default combineReducers({
    card,
    deck,
    stats,
});