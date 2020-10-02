import * as actions from './actions';

const defaultState = {
    loading: false,
    leagues: [],
    error: null
}

export function ratingReducer(state = defaultState, action) {
    switch (action.type) {
        case actions.RATING_REQUEST: return { loading: true, error: null };
        case actions.GET_LEAGUES_SUCCESS: return { loading: false, leagues: action.leagues, error: null };
        case actions.RATING_FAIL: return { loading: false, error: action.error };
        default: return state;
    }
}