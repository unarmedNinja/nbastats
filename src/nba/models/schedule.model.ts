export interface Meta {
    version: number;
    request: string;
    time: string;
    code: number;
}

export interface Team {
    teamId: number;
    teamName: string;
    teamCity: string;
    teamTricode: string;
    teamSlug: string;
    wins: number;
    losses: number;
    score: number;
    seed: number;
}

export interface PointLeader {
    personId: number,
    firstName: string;
    lastName: string;
    teamId: number;
    teamCity: string;
    teamName: string;
    teamTricode: string;
    points: number;
}

export interface Game {
    gameId: number;
    gameCode: string;
    gameStatus: string;
    gameStatusText: string;
    gameSequence: number;
    gameDateEst: string;
    gameTimeEst: string;
    gameDateTimeEst: string;
    gameDateUTC: string;
    gameTimeUTC: string;
    gameDateTimeUTC: string;
    awayTeamTime: string;
    homeTeamTime: string;
    day: string;
    monthNum: number;
    weekNumber: number;
    weekName: number;
    ifNecessary: boolean;
    seriesGameNumber: number;
    seriesText: string;
    arenaName: string;
    arenaState:string;
    arenaCity: string;
    postponedStatus: string;
    branchLink: string;
    broadcasters: any;
    homeTeam: Team;
    awayTeam: Team;
    pointsLeader: PointLeader[];
}

export interface GameDate {
    gameDate: string;
    games: Game[];
}

export interface GameWeek {
    weekNumber: number;
    weekName: string;
    startDate: string;
    endDate: string;
}

export interface Schedule {
    seasonYear: string;
    leagueId: string;
    gameDates: GameDate[];
    weeks: GameWeek[];
}

export interface LeagueSchedule {
    meta: Meta;
    leagueSchedule: Schedule;
}
