import * as actions from './actions';
import { SessionService } from '../../service';
import { createActionCreator } from '../createActionCreator';

const sessionService = new SessionService();

export const getAvailableSessions = createActionCreator({
    serviceFunction: () => sessionService.getAvailable(),
    requestAction: actions.sessionRequest,
    successAction: actions.getAvailableSessionsSuccess,
    failAction: actions.sessionFail
});

export function resetSessions() {
    return dispatch => {
        return dispatch(actions.resetSessions());
    }
}