import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { preferencesReducer } from './preferences/reducer';
import { authReducer } from './auth/reducer';
import { sessionReducer } from './session/reducer';
import { userReducer } from './user/reducer';
import { gameReducer } from './game/reducer';
import { ratingReducer } from './rating/reducer';

export function configureRedux() {
    const rootReducer = combineReducers({
        preferences: preferencesReducer,
        auth: authReducer,
        session: sessionReducer,
        user: userReducer,
        game: gameReducer,
        rating: ratingReducer
    });

    return createStore(rootReducer, {}, applyMiddleware(thunkMiddleware));
}