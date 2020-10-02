export const GAME_REQUEST = 'GAME_REQUEST';
export const SET_NEW_GAME = 'SET_NEW_GAME';
export const ADD_NEW_GAME = 'ADD_NEW_GAME';
export const GET_LIVE_GAMES_SUCCESS = 'GET_LIVE_GAMES_SUCCESS';
export const GET_WAITING_GAMES_SUCCESS = 'GET_WAITING_GAMES_SUCCESS';
export const GET_GAME_DETAILS_SUCCESS = 'GET_GAME_DETAILS_SUCCESS';
export const GET_WAITING_GAME_DETAILS_SUCCESS = 'GET_WAITING_GAME_DETAILS_SUCCESS';
export const GAME_FAIL = 'GAME_FAIL';

export const gameRequest = () => ({ type: GAME_REQUEST });
export const addNewGame = () => ({ type: ADD_NEW_GAME });
export const setNewGame = (newGame) => ({ type: SET_NEW_GAME, newGame });
export const getLiveGamesSuccess = (liveGames) => ({ type: GET_LIVE_GAMES_SUCCESS, liveGames });
export const getWaitingGamesSuccess = (waitingGames) => ({ type: GET_WAITING_GAMES_SUCCESS, waitingGames });
export const getGameDetailsSuccess = (gameDetails) => ({ type: GET_GAME_DETAILS_SUCCESS, gameDetails });
export const getWaitingGameDetailsSuccess = (waitingGameDetails) => ({ type: GET_WAITING_GAME_DETAILS_SUCCESS, waitingGameDetails });
export const gameFail = (error) => ({ type: GAME_FAIL, error });