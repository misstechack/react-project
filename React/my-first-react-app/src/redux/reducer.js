import { SPECIES } from '../shared/species';
import { TEAM } from '../shared/team';

export const initialState = {
    species: SPECIES,
    leaders: TEAM
};

export const Reducer = (state = initialState, action) => {
    return state;
};