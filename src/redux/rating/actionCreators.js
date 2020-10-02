import * as actions from './actions';
import { createActionCreator } from '../createActionCreator';

import { RatingService } from '../../service';

const ratingService = new RatingService();

export const getLeagues = () => createActionCreator({
    serviceFunction: () => ratingService.getLeagues(),
    requestAction: actions.ratingRequest,
    successAction: actions.getLeaguesSuccess,
    failAction: actions.ratingFail
})();