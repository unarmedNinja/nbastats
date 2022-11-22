import fetch from 'node-fetch';
import { NBA_API_URL, NBA_API_HEADER } from '../constants/nba.constants';
import { boxscore } from './models/boxscore.models';
import { LeagueSchedule, GameDate } from './models/schedule.model';
import { DataFilter } from '../helpers/data.filter';
import { injectable } from 'tsyringe';

@injectable()
export default class NbaService {  
  dataFilter: DataFilter;
  constructor(dataFilter: DataFilter) {
    this.dataFilter = dataFilter;
  }

  async getBoxscore(): Promise<boxscore> {
    const response = await fetch(NBA_API_URL.SCOREBOARD, { headers: NBA_API_HEADER });
    const data: boxscore = await response.json();
    console.log('boxscore data: ', data);
    return data;
  }

  async getSchedule(): Promise<LeagueSchedule> {
    const response = await fetch(NBA_API_URL.SCHEDULE, { headers: NBA_API_HEADER });
    const data: LeagueSchedule = await response.json();
    return data;
  }

  async getScheduleByTeamId(id: number): Promise<GameDate[]> {
    const response = await fetch(NBA_API_URL.SCHEDULE, { headers: NBA_API_HEADER });
    const data: LeagueSchedule = await response.json();
    const teamGames = data.leagueSchedule.gameDates;
    const filteredData = this.dataFilter.getTeamGameDates(id, teamGames);
    return filteredData;
  }
}