import * as actions from './actions';

const defaultState = {
    loading: false,
    newGame: null,
    liveGames: [],
    waitingGames: [],
    gameDetails: {},
    waitingGameDetails: {},
    error: null
};

export function gameReducer(state = defaultState, action) {
    switch (action.type) {
        case actions.GAME_REQUEST: return { ...state, loading: true, error: null };
        case actions.SET_NEW_GAME: return { ...state, newGame: action.newGame };
        case actions.ADD_NEW_GAME: return { ...state, loading: false, error: null };
        case actions.GET_LIVE_GAMES_SUCCESS: return { ...state, loading: false, error: null, liveGames: action.liveGames };
        case actions.GET_WAITING_GAMES_SUCCESS: return { ...state, loading: false, error: null, waitingGames: action.waitingGames };
        case actions.GET_GAME_DETAILS_SUCCESS: return { ...state, loading: false, error: null, gameDetails: action.gameDetails };
        case actions.GET_WAITING_GAME_DETAILS_SUCCESS: return { ...state, loading: false, error: null, waitingGameDetails: action.waitingGameDetails };
        case actions.GAME_FAIL: return { ...state, loading: false, error: action.error };

        default: return state;
    }
}