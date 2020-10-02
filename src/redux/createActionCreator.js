export function createActionCreator({ serviceFunction, requestAction, successAction, failAction }) {
    return function () {
        return async dispatch => {
            dispatch(requestAction());
            try {
                const payload = await serviceFunction();
                return dispatch(successAction(payload));
            } catch (error) {
                dispatch(failAction(error.message || error));
                throw error;
            }
        }
    }
}