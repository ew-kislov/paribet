export class RatingTransformer {
    transformLeagues(leaguesRaw) {
        return leaguesRaw.map((leagueRaw) => this.transformLeague(leagueRaw));
    }

    transformLeague(leagueRaw) {
        return {
            id: +leagueRaw.id,
            name: leagueRaw.name,
            groups: leagueRaw.groups.map((group) => +(group.id))
        };
    }

    transformRatings(ratingsRaw) {
        return ratingsRaw.map((ratingRaw) => this.transformRating(ratingRaw));
    }

    transformRating(ratingRaw) {
        return {
            id: ratingRaw.user_id,
            position: ratingRaw.position,
            score: ratingRaw.scored,
            category: ratingRaw.position_category,
            username: ratingRaw.user.username,
            photo: ratingRaw.user.avatar?.filename
        }
    }
}