export class UserTransformer {
    transformGames(gamesRaw) {
        return gamesRaw.map((gameRaw) => this.transformGame(gameRaw));
    }

    transformGame(gameRaw) {
        return {
            id: gameRaw.id,
            isFinished: gameRaw.is_finished === 'Y' ? true : false,
            firstMember: this._transformUser(gameRaw.memberFirst),
            secondMember: this._transformUser(gameRaw.memberSecond)
        }
    }

    transformMainInfo(mainInfoRaw) {
        return {
            position: mainInfoRaw.position,
            points: mainInfoRaw.points,
            groupId: mainInfoRaw.group_id,
            leagueId: mainInfoRaw.league_id,
            registrationDate: mainInfoRaw.reg_date,
            photo: mainInfoRaw.avatar?.filename,
        }
    }

    _transformUser(userRaw) {
        return {
            username: userRaw.username,
            email: userRaw.email,
            photo: userRaw.avatar?.filename
        }
    }
}