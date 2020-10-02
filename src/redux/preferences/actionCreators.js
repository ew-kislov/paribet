import { PreferencesService } from "../../service/preferences/PreferencesService";
import * as actions from './actions'

const preferencesService = new PreferencesService();

export function markFinishedIntro() {
    return async dispatch => {
        dispatch(actions.preferencesRequest());
        try {
            await preferencesService.markFinishedIntro();
            return dispatch(actions.markFinishedIntroSuccess());
        } catch (error) {
            dispatch(actions.preferencesFail(error.message || error));
            throw error;
        }
    }
}

export function isFinishedIntro() {
    return async dispatch => {
        dispatch(actions.preferencesRequest());
        try {
            const finishedIntro = await preferencesService.isFinishedIntro();
            return dispatch(actions.isFinishedIntroSuccess(finishedIntro));
        } catch (error) {
            dispatch(actions.preferencesFail(error.message || error));
            throw error;
        }
    }
}