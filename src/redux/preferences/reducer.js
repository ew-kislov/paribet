import * as actions from './actions';

const defaultState = {
    loading: false,
    finishedIntro: null,
    error: null
};

export function preferencesReducer(state = defaultState, action) {
    switch (action.type) {
        case actions.PREFERENCES_REQUEST: return { ...state, loading: true, error: null };
        case actions.MARK_FINISHED_INTRO_SUCCESS: return { ...state, loading: false, finishedIntro: true, error: null };
        case actions.IS_FINISHED_INTRO_SUCCESS: return { ...state, loading: false, finishedIntro: action.finishedIntro, error: null };
        case actions.PREFERENCES_FAIL: return { loading: false, error: action.error };

        default: return state;
    }
}