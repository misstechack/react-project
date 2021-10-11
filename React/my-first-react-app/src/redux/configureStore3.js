import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Species } from './species';
import { Suggestions } from './suggestions';
import { Leaders } from './team';
import { createForms } from 'react-redux-form';
import { InitialNewsletterForm } from './newsletterForm';

export const ConfigureStore3 = () => {

    const store = createStore(
        combineReducers({
            species: Species,
            leaders: Leaders,
            suggestions: Suggestions,
            ...createForms({
                newsletter: InitialNewsletterForm
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
};
