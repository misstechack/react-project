import { createStore, combineReducers } from 'redux';
import { Species } from './species';
import { Leaders } from './team';

export const ConfigureNewStore = () => {

    const store = createStore(
        combineReducers({
            species: Species,
            leaders: Leaders
        })
    );
    return store;
};
