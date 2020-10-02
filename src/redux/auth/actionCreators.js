import * as actions from './actions';
import { AuthService } from '../../service';

const authService = new AuthService();

export function register(user) {
    return async dispatch => {
        dispatch(actions.authRequest());
        try {
            const { token, id, username } = await authService.register(user);
            return dispatch(actions.registrationSuccess({ token, id, username }));
        } catch (error) {
            dispatch(actions.authFail(error.message || error));
            throw error;
        }
    }
}

export function login(user) {
    return async dispatch => {
        dispatch(actions.authRequest());
        try {
            const { token, id, username } = await authService.login(user);
            return dispatch(actions.loginSuccess({ token, id, username }));
        } catch (error) {
            console.log(error);
            dispatch(actions.authFail(error.message || error));
            throw error;
        }
    }
}

export function googleLogin() {
    return async dispatch => {
        dispatch(actions.authRequest());
        try {
            const { token, id, username } = await authService.googleLogin();
            return dispatch(actions.googleLoginSuccess({ token, id, username }));
        } catch (error) {
            dispatch(actions.authFail(error.message || error));
            throw error;
        }
    }
}

export function loadAuthInfo() {
    return async dispatch => {
        dispatch(actions.authRequest());
        try {
            const { token, id, username } = await authService.loadAuthInfo();
            return dispatch(actions.loadAuthInfoSuccess({ token, id, username }));
        } catch (error) {
            dispatch(actions.authFail(error.message || error));
            throw error;
        }
    }
}

export function logout() {
    return async dispatch => {
        dispatch(actions.authRequest());
        try {
            await authService.logout();
            return dispatch(actions.logoutSuccess());
        } catch (error) {
            dispatch(actions.authFail(error.message || error));
            throw error;
        }
    }
}