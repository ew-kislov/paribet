export const AUTH_REQUEST = 'AUTH_REQUEST';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS';
export const LOAD_AUTH_INFO_SUCCESS = 'LOAD_AUTH_INFO';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';

export const authRequest = () => ({ type: AUTH_REQUEST });
export const registrationSuccess = ({ token, id, username }) => ({ type: REGISTRATION_SUCCESS, token, id, username });
export const loginSuccess = ({ token, id, username }) => ({ type: LOGIN_SUCCESS, token, id, username });
export const googleLoginSuccess = ({ token, id, username }) => ({ type: GOOGLE_LOGIN_SUCCESS, token, id, username });
export const loadAuthInfoSuccess = ({ token, id, username }) => ({ type: LOAD_AUTH_INFO_SUCCESS, token, id, username });
export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });
export const authFail = (error) => ({ type: AUTH_FAIL, error });
