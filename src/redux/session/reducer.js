import * as actions from './actions';

const defaultState = {
    loading: false,
    availableSessions: [],
    error: null
};

export function sessionReducer(state = defaultState, action) {
    switch (action.type) {
        case actions.SESSION_REQUEST: return { ...state, loading: true, error: null };
        case actions.GET_AVAILABLE_SESSIONS_SUCCESS: return { ...state, loading: false, availableSessions: action.availableSessions, error: null };
        case actions.RESET_SESSIONS: return { ...state, availableSessions: [] }
        case actions.SESSION_FAIL: return { ...state, loading: false, error: action.error };

        default: return state;
    }
}