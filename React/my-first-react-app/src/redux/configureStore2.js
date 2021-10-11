import { createStore, combineReducers } from 'redux';
import { Species } from './species';
import { Suggestions } from './suggestions';
import { Leaders } from './team';

export const ConfigureStore2 = () => {

    const store = createStore(
        combineReducers({
            species: Species,
            leaders: Leaders,
            suggestions: Suggestions
        })
    );
    return store;
};
