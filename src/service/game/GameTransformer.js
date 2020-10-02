export class GameTransformer {
    transformGames(gamesRaw) {
        return gamesRaw.map((gameRaw) => this.transformGame(gameRaw));
    }

    transformGame(gameRaw) {
        return {
            id: gameRaw.id,
            isFinished: gameRaw.is_finished === 'Y' ? true : false,
            firstUsername: gameRaw.memberFirst.username,
            firstPhoto: gameRaw.memberFirst.avatar?.filename,
            firstGoal: gameRaw.goal_first_member,
            secondUsername: gameRaw.memberSecond.username,
            secondPhoto: gameRaw.memberSecond.avatar?.filename,
            secondGoal: gameRaw.goal_second_member
        }
    }

    transformWaitingGames(gamesRaw) {
        return gamesRaw.map((gameRaw) => this.transformWaitingGame(gameRaw));
    }

    transformWaitingGame(gameRaw) {
        return {
            id: gameRaw.id,
            date: new Date(gameRaw.created_at * 1000)
        };
    }

    transformWaitingGameDetails(gameRaw) {
        return {
            matches: gameRaw.map((match) => ({
                id: match.id,
                day: match.match.date_start.day,
                time: match.match.date_start.time,
                tournament: match.match.tournament.name,
                firstBet: match.oddstype.name,
                homeName: match.match.home.name,
                homeLogo: match.match.home?.logo?.filename,
                awayName: match.match.away.name,
                awayLogo: match.match.away?.logo?.filename
            }))
        };
    }

    transformGameDetails(gameRaw) {
        return {
            id: gameRaw.id,
            firstUsername: gameRaw.memberFirst.username,
            firstGoal: gameRaw.goal_first_member,
            firstPhoto: gameRaw.memberFirst.avatar?.filename,
            secondUsername: gameRaw.memberSecond.username,
            secondGoal: gameRaw.goal_second_member,
            secondPhoto: gameRaw.memberSecond.avatar?.filename,
            matches: gameRaw.session.matches.map((matchRaw) => ({
                id: matchRaw.id,
                homeName: matchRaw.home.name,
                homeLogo: matchRaw.home.logo?.filename,
                homeScore: !matchRaw.scoresMatches ? null : matchRaw?.scoresMatches?.result[0],
                awayName: matchRaw.away.name,
                awayLogo: matchRaw.away.logo?.filename,
                awayScore: !matchRaw.scoresMatches ? null : matchRaw?.scoresMatches?.result[2],
                tournament: matchRaw.tournament.name,
                day: matchRaw.date_start.day,
                time: matchRaw.date_start.time,
                firstBet: matchRaw.bets.member_first[0].oddstype.name,
                firstStatus: +(matchRaw.bets.member_first[0].status_id),
                secondStatus: +(matchRaw.bets.member_second[0].status_id),
                secondBet: matchRaw.bets.member_second[0].oddstype.name,
            }))
        };
    }
}