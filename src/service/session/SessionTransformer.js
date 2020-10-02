export class SessionTransformer {
    transformSessions(sessionsRaw) {
        return sessionsRaw.map((sessionRaw) => this.transformSession(sessionRaw));
    }

    transformSession(sessionRaw) {
        return {
            id: sessionRaw.id,
            startDate: new Date(sessionRaw.date_start * 1000),
            finishDate: new Date(sessionRaw.date_finish * 1000),
            matches: this._transformMatches(sessionRaw.matches)
        }
    }

    _transformMatches(matchesRaw) {
        return matchesRaw.map((matchRaw) => this._transformMatch(matchRaw));
    }

    _transformMatch(matchRaw) {
        return {
            id: matchRaw.id,
            startDay: matchRaw.date_start.day,
            startTime: matchRaw.date_start.time,
            tournament: matchRaw.tournament.name,
            homeName: matchRaw.home.name,
            homeLogo: matchRaw.home.logo?.filename,
            awayName: matchRaw.away.name,
            awayLogo: matchRaw.away.logo?.filename
        }
    }
}