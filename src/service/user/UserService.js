import axios from 'axios';

import { UserTransformer } from './UserTransformer';
import { GameTransformer } from '../game/GameTransformer';

export class UserService {
    constructor() {
        this._transformer = new UserTransformer();
        this._gameTransformer = new GameTransformer();
    }

    /**
     * Returns user game statistics
     * @param {number} userId
     */
    async getStats(userId) {
        const response = await axios.get(`/user/stats?user_id=${userId}`);
        const responseData = await response.data;

        return responseData.data;
    }

    /**
     * Returns user game statistics
     * @param {number} userId
     */
    async getLastGames(userId) {
        const response = await axios.get(`/games/last?user_id=${userId}`);
        const responseData = await response.data;

        return this._gameTransformer.transformGames(responseData.data);
    }

    /**
     * Returns user main info
     * @param {number} userId
     */
    async getMainInfo(userId) {
        const response = await axios.get(`/user/main-info?user_id=${userId}`);
        const responseData = await response.data;

        return this._transformer.transformMainInfo(responseData.data);
    }

    async changeProfilePhoto() {
        // TODO
    }
}