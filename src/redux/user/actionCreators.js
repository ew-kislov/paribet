import * as actions from './actions';
import { createActionCreator } from '../createActionCreator';

import { UserService } from '../../service';

const userService = new UserService();

export const getUserMainInfo = (userId) => createActionCreator({
    serviceFunction: () => userService.getMainInfo(userId),
    requestAction: actions.userRequest,
    successAction: actions.getUserMainInfoSuccess,
    failAction: actions.userFail
})();

export const getUserStats = (userId) => createActionCreator({
    serviceFunction: () => userService.getStats(userId),
    requestAction: actions.userRequest,
    successAction: actions.getUserStatsSuccess,
    failAction: actions.userFail
})();

export const getUserLastGames = (userId) => createActionCreator({
    serviceFunction: () => userService.getLastGames(userId),
    requestAction: actions.userRequest,
    successAction: actions.getUserLastGamesSuccess,
    failAction: actions.userFail
})();

export const getChosenUserMainInfo = (userId) => createActionCreator({
    serviceFunction: () => userService.getMainInfo(userId),
    requestAction: actions.userRequest,
    successAction: actions.getChosenUserMainInfoSuccess,
    failAction: actions.userFail
})();

export const getChosenUserStats = (userId) => createActionCreator({
    serviceFunction: () => userService.getStats(userId),
    requestAction: actions.userRequest,
    successAction: actions.getChosenUserStatsSuccess,
    failAction: actions.userFail
})();

export const getChosenUserLastGames = (userId) => createActionCreator({
    serviceFunction: () => userService.getLastGames(userId),
    requestAction: actions.userRequest,
    successAction: actions.getChosenUserLastGamesSuccess,
    failAction: actions.userFail
})();