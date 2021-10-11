import { SPECIES } from '../shared/species';
import * as ActionTypes from './ActionTypes';

export const addSuggestion = (author, message) => ({
    type: ActionTypes.ADD_SUGGESTION,
    payload: {
        author: author,
        message: message
    }
});

export const fetchSpecies = () => (dispatch) => {
	dispatch(speciesLoading(true));
	
	setTimeout(() => {
		dispatch(addSpecies(SPECIES));
	}, 3000);
}

export const speciesLoading = () => ({
	type: ActionTypes.SPECIES_LOADING
});

export const speciesFailed = (errormsg) => ({
	type: ActionTypes.SPECIES_FAILED,
	payload: errormsg
});

export const addSpecies = (species) => ({
	type: ActionTypes.ADD_SPECIES,
	payload: species
});