import { SUGGESTIONS } from '../shared/suggestions';
import * as ActionTypes from './ActionTypes';

export const Suggestions = (state = SUGGESTIONS, action) => {
    switch(action.type) {
        case ActionTypes.ADD_SUGGESTION:
            var suggestion = action.payload;
            suggestion.id = state.length;
            suggestion.date = new Date().toUTCString();

            console.log("Suggestion: ", suggestion);

            return state.concat(suggestion);
        default:
            return state;
    }
};