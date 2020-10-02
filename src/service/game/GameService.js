import axios from 'axios';
import qs from 'querystring';

import { GameTransformer } from './GameTransformer';

export class GameService {
    constructor() {
        this._transformer = new GameTransformer();
    }

    async getLive(userId) {
        const response = await axios.get(`/games/live-games-user?user_id=${userId}`);
        const responseData = await response.data;

        return this._transformer.transformGames(responseData.data);
    }

    async getWaiting(userId) {
        const response = await axios.get(`/games-sessions/waiting-list?user_id=${userId}`);
        const responseData = await response.data;

        return this._transformer.transformWaitingGames(responseData.data);
    }

    async getDetails(gameId) {
        const response = await axios.get(`/games/details?game_id=${gameId}`);
        const responseData = await response.data;

        return this._transformer.transformGameDetails(responseData.data.game);
    }

    async getWaitingDetails(gameId) {
        const response = await axios.get(`/games-sessions/waiting-game?waiting_id=${gameId}`);
        const responseData = await response.data;

        return this._transformer.transformWaitingGameDetails(responseData.data);
    }

    async addGame(sessionId, matches) {
        const matchesRequest = {};

        let i = 0;
        for (const matchId in matches) {
            matchesRequest[`bets[${i}][match_id]`] = matchId;
            matchesRequest[`bets[${i}][oddstype_id]`] = matches[matchId];
            i++
        }

        const response = await axios.post(`/games-sessions/add-bets?session_id=${sessionId}`, qs.stringify(matchesRequest));
        const responseData = await response.data;
    }
}