export const PREFERENCES_REQUEST = 'PREFERENCES_REQUEST';
export const MARK_FINISHED_INTRO_SUCCESS = 'MARK_FINISHED_INTRO_SUCCESS';
export const IS_FINISHED_INTRO_SUCCESS = 'IS_FINISHED_INTRO_SUCCESS';
export const PREFERENCES_FAIL = 'PREFERENCES_FAIL';

export const preferencesRequest = () => ({ type: PREFERENCES_REQUEST });
export const markFinishedIntroSuccess = () => ({ type: MARK_FINISHED_INTRO_SUCCESS });
export const isFinishedIntroSuccess = (finishedIntro) => ({ type: IS_FINISHED_INTRO_SUCCESS, finishedIntro });
export const preferencesFail = (error) => ({ type: PREFERENCES_FAIL, error });
