import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Species } from './species';
import { Suggestions } from './suggestions';
import { Leaders } from './team';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore3 = () => {

    const store = createStore(
        combineReducers({
            species: Species,
            leaders: Leaders,
            suggestions: Suggestions
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
};
