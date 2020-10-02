import axios from 'axios';
import { RatingTransformer } from './RatingTransformer';

export class RatingService {
    constructor() {
        this._transformer = new RatingTransformer();
    }

    /**
     * Returns game leagues
     */
    async getLeagues() {
        const response = await axios.get('/site/leagues');
        const repsonseData = await response.data;


        const leagues = this._transformer.transformLeagues(repsonseData.data);

        const leaguePromises = leagues.map(async (league) => {
            const ratingPromises = league.groups.map((group) => this.getGroupRating(group));
            const rating = await Promise.all(ratingPromises);
            return { ...league, rating };
        });

        return await Promise.all(leaguePromises);
    }

    async getGroupRating(groupId) {
        const response = await axios.get(`/site/rating?group_id=${groupId}`);
        const responseData = await response.data;
        if (responseData == null) {
            return [];
        }
        return this._transformer.transformRatings(responseData.data);
    }
}