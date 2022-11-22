export interface meta {
    version: number;
    request: string;
    time: string;
    code: number;
}

export interface periods {
    period: number;
    periodType: string;
    score: number;
}

export interface teamScore {
    teamId: number;
    teamName: string;
    teamCity: string;
    teamTricode: string;
    wins: number;
    losses: number;
    score: number;
    seed: string;
    inBonus: string;
    timeoutsRemaining: number;
    periods: periods[];
}

export interface leaders {
    personId: number;
    name: string;
    jerseyNum: number;
    position: string;
    teamTricode: string;
    playerSlug: string;
    points: number,
    rebounds: number;
    assists: number;
}

export interface gameLeaders {
    homeLeaders: leaders;
    awayLeaders: leaders;
}

export interface pbOdds {
    team: string;
    odds: number;
    suspended: number;
}

export interface game {
    gameId: number;
    gameCode: string;
    gameStatus: number;
    gameStatusText: string;
    period: number;
    gameClock: string;
    gameTimeUTC: string;
    gameEt: string;
    regulationPeriods: number;
    ifNecessary: boolean;
    seriesGameNumber: string;
    seriesText: string;
    homeTeam: teamScore;
    awayTeam: teamScore;
    gameLeaders: gameLeaders;
    pbOdds: pbOdds;
}

export interface scoreboard {
    gameDate: string;
    leagueId: string;
    leagueName: string;
    games: game[];
}

export interface boxscore {
    meta: meta;
    scoreboard: scoreboard;
}
