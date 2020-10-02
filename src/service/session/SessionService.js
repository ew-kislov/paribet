import axios from 'axios';
import { SessionTransformer } from './SessionTransformer';

export class SessionService {
    constructor() {
        this._transformer = new SessionTransformer();
    }

    /**
     * Returns available game sessions
     */
    async getAvailable() {
        const response = await axios.get('/games-sessions/available-sessions');
        const repsonseData = await response.data;

        if (repsonseData == null) {
            return [];
        }

        return this._transformer.transformSessions(repsonseData.data);
    }
}