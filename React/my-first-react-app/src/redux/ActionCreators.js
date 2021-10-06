import * as ActionTypes from './ActionTypes';

export const addSuggestion = (author, message) => ({
    type: ActionTypes.ADD_SUGGESTION,
    payload: {
        author: author,
        message: message
    }
});