export const USER_REQUEST = 'USER_REQUEST';
export const GET_USER_STATS_SUCCESS = 'GET_USER_STATS_SUCCESS';
export const GET_USER_LAST_GAMES_SUCCESS = 'GET_USER_LAST_GAMES_SUCCESS';
export const GET_USER_MAIN_INFO_SUCCESS = 'GET_USER_MAIN_INFO_SUCCESS';
export const CHOSEN_GET_USER_STATS_SUCCESS = 'CHOSEN_GET_USER_STATS_SUCCESS';
export const CHOSEN_GET_USER_LAST_GAMES_SUCCESS = 'CHOSEN_GET_USER_LAST_GAMES_SUCCESS';
export const CHOSEN_GET_USER_MAIN_INFO_SUCCESS = 'CHOSEN_GET_USER_MAIN_INFO_SUCCESS';
export const USER_FAIL = 'USER_FAIL';

export const userRequest = () => ({ type: USER_REQUEST });
export const getUserStatsSuccess = (stats) => ({ type: GET_USER_STATS_SUCCESS, stats });
export const getUserLastGamesSuccess = (lastGames) => ({ type: GET_USER_LAST_GAMES_SUCCESS, lastGames });
export const getUserMainInfoSuccess = (mainInfo) => ({ type: GET_USER_MAIN_INFO_SUCCESS, mainInfo });
export const getChosenUserStatsSuccess = (chosenStats) => ({ type: CHOSEN_GET_USER_STATS_SUCCESS, chosenStats });
export const getChosenUserLastGamesSuccess = (chosenLastGames) => ({ type: CHOSEN_GET_USER_LAST_GAMES_SUCCESS, chosenLastGames });
export const getChosenUserMainInfoSuccess = (chosenMainInfo) => ({ type: CHOSEN_GET_USER_MAIN_INFO_SUCCESS, chosenMainInfo });
export const userFail = (error) => ({ type: USER_REQUEST, error });