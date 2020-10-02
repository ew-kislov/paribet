import * as actions from './actions';

const defaultState = {
    loading: false,
    stats: {},
    mainInfo: {},
    lastGames: [],
    chosenStats: {},
    chosenMainInfo: {},
    chosenLastGames: [],
    error: null
};

export function userReducer(state = defaultState, action) {
    switch (action.type) {
        case actions.USER_REQUEST: return { ...state, loading: true, error: false };
        case actions.GET_USER_STATS_SUCCESS: return { ...state, loading: false, stats: action.stats, error: null };
        case actions.GET_USER_MAIN_INFO_SUCCESS: return { ...state, loading: false, mainInfo: action.mainInfo, error: null };
        case actions.GET_USER_LAST_GAMES_SUCCESS: return { ...state, loading: false, lastGames: action.lastGames, error: null };
        case actions.CHOSEN_GET_USER_STATS_SUCCESS: return { ...state, loading: false, chosenStats: action.chosenStats, error: null };
        case actions.CHOSEN_GET_USER_MAIN_INFO_SUCCESS: return { ...state, loading: false, chosenMainInfo: action.chosenMainInfo, error: null };
        case actions.CHOSEN_GET_USER_LAST_GAMES_SUCCESS: return { ...state, loading: false, chosenLastGames: action.chosenLastGames, error: null };
        case actions.USER_FAIL: return { ...state, loading: false, error: action.error }

        default: return state;
    }
}