export const RATING_REQUEST = 'RATING_REQUEST';
export const GET_LEAGUES_SUCCESS = 'GET_LEAGUES_SUCCESS';
export const RATING_FAIL = 'RATING_FAIL';

export const ratingRequest = () => ({ type: RATING_REQUEST });
export const getLeaguesSuccess = (leagues) => ({ type: GET_LEAGUES_SUCCESS, leagues });
export const ratingFail = (error) => ({ type: RATING_FAIL, error });