import * as actions from './actions';

const defaultState = {
    loading: false,
    token: null,
    id: null,
    username: null,
    error: null
};

export function authReducer(state = defaultState, action) {
    switch (action.type) {
        case actions.AUTH_REQUEST: return { ...state, loading: true, error: null };
        case actions.LOGIN_SUCCESS: return { ...state, loading: false, token: action.token, id: action.id, username: action.username, error: null };
        case actions.GOOGLE_LOGIN_SUCCESS: return { ...state, loading: false, token: action.token, id: action.id, username: action.username, error: null };
        case actions.REGISTRATION_SUCCESS: return { ...state, loading: false, token: action.token, id: action.id, username: action.username, error: null };
        case actions.LOAD_AUTH_INFO_SUCCESS: return { ...state, loading: false, token: action.token, id: action.id, username: action.username, error: null };
        case actions.LOGOUT_SUCCESS: return { loading: false, error: null, token: null };
        case actions.AUTH_FAIL: return { ...state, loading: false, error: action.error };

        default: return state;
    }
}