import { Router } from 'express';
import { autoInjectable } from 'tsyringe';
import NbaService from '../nba/nba.service';
import { asyncMiddleware } from '../helpers/async.middleware';
import { boxscore } from '../nba/models/boxscore.models';
import { GameDate } from '../nba/models/schedule.model';
import { NBA_API_TEAM_IDS } from '../constants/nba.constants';

@autoInjectable()
export default class StatsController {
  nbaService: NbaService;
  router: Router;

  constructor(nbaService: NbaService) {
    this.nbaService = nbaService;
    this.router = new Router();
  }

  async getBoxscoreRoute(): Promise<boxscore> {
    return await this.nbaService.getBoxscore();
  }

  async getTeamSchedule(id: number): Promise<GameDate[]> {
    return await this.nbaService.getScheduleByTeamId(id);
  }

  routes() {
    this.router.get('/boxscore', async (_req, res, next) => {
      const data: boxscore = await this.getBoxscoreRoute();
      console.log('boxscore: ', data.scoreboard.games[0]);
      res.json(data);
    });

    this.router.get('/schedule/:id', async (req, res, next) => {
      let data: GameDate[] = [];
      if(req.params.id) {
        data = await this.getTeamSchedule(req.params.id);
        res.json(data);
      } else {
        data = await this.getTeamSchedule(NBA_API_TEAM_IDS.TORONTO);
        res.json(data);
      }
    });
    return this.router;
  }
}