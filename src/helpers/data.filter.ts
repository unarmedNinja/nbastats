import { Game, GameDate } from '../nba/models/schedule.model';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class DataFilter {
    constructor(){

    }

    public getTeamScheduleById(teamId: number, games: Game[]): Game[] {        
        const g = games.filter((game, index, arr) => {
            if(game.awayTeam.teamId == teamId || game.homeTeam.teamId == teamId) {
                return true;
            }
            return false;
        });
        
        return g;
    }

    public getTeamGameDates(teamId: number, gameDates: GameDate[]): GameDate[] {
        const g: GameDate[] = [];
        gameDates.forEach(gameDate => {
            const gd: GameDate = {
                gameDate: gameDate.gameDate,
                games: this.getTeamScheduleById(teamId, gameDate.games)
            };
            g.push(gd);
        })

        return g;
    }
    
}