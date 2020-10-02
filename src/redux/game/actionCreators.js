import * as actions from './actions';
import { createActionCreator } from '../createActionCreator';

import { GameService } from '../../service';

const gameService = new GameService();

export const setGameLoading = () => dispatch => ({ type: actions.GAME_REQUEST });

export const setNewGame = (newGame) => dispatch => {
    return dispatch(actions.setNewGame(newGame));
}

export const addGame = (sessionId, matches) => createActionCreator({
    serviceFunction: () => gameService.addGame(sessionId, matches),
    requestAction: actions.gameRequest,
    successAction: actions.addNewGame,
    failAction: actions.gameFail
})();

export const getLiveGames = (userId) => createActionCreator({
    serviceFunction: () => gameService.getLive(userId),
    requestAction: actions.gameRequest,
    successAction: actions.getLiveGamesSuccess,
    failAction: actions.gameFail
})();

export const getWaitingGames = (userId) => createActionCreator({
    serviceFunction: () => gameService.getWaiting(userId),
    requestAction: actions.gameRequest,
    successAction: actions.getWaitingGamesSuccess,
    failAction: actions.gameFail
})();

export const getGameDetails = (gameId) => createActionCreator({
    serviceFunction: () => gameService.getDetails(gameId),
    requestAction: actions.gameRequest,
    successAction: actions.getGameDetailsSuccess,
    failAction: actions.gameFail
})();

export const getWaitingGameDetails = (gameId) => createActionCreator({
    serviceFunction: () => gameService.getWaitingDetails(gameId),
    requestAction: actions.gameRequest,
    successAction: actions.getWaitingGameDetailsSuccess,
    failAction: actions.gameFail
})();