import * as ActionTypes from './ActionTypes';

export const Species = (state = {
	isLoading: true,
	errormsg: null,
	species: []
	}, action) => {
    switch(action.type) {
		case ActionTypes.ADD_SPECIES:
			return{...state, isLoading:false, errormsg:null, species: action.payload};
		case ActionTypes.SPECIES_LOADING:
			return{...state, isLoading:true, errormsg:null, species: []};
		case ActionTypes.SPECIES_FAILED:
			return{...state, isLoading:false, errormsg:action.payload};
        default:
            return state;
    }
};