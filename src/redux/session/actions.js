export const SESSION_REQUEST = 'SESSION_REQUEST';
export const GET_AVAILABLE_SESSIONS_SUCCESS = 'GET_AVAILABLE_SESSIONS_SUCCESS';
export const RESET_SESSIONS = 'RESET_SESSIONS';
export const SESSION_FAIL = 'SESSION_FAIL';

export const sessionRequest = () => ({ type: SESSION_REQUEST });
export const getAvailableSessionsSuccess = (availableSessions) => ({ type: GET_AVAILABLE_SESSIONS_SUCCESS, availableSessions });
export const resetSessions = () => ({ type: RESET_SESSIONS });
export const sessionFail = (error) => ({ type: SESSION_FAIL, error });