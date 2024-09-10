import { sql } from 'drizzle-orm'
import {} from 'drizzle-orm/mysql-core'
import {
  boolean,
  date,
  foreignKey,
  integer,
  pgTable,
  serial,
  varchar,
} from 'drizzle-orm/pg-core'

import { games } from './games'
import { seasons } from './seasons'
import { series } from './series'
import { teams } from './teams'

export const teamgames = pgTable(
  'teamgames',
  {
    teamGameId: serial('team_game_id').primaryKey().notNull(),
    gameId: integer('game_id'),
    team: integer('team'),
    opponent: integer('opponent'),
    goalsScored: integer('goals_scored'),
    goalsConceded: integer('goals_conceded'),
    goalDifference: integer('goal_difference'),
    points: integer('points'),
    win: boolean('win'),
    lost: boolean('lost'),
    draw: boolean('draw'),
    qualificationGame: boolean('qualification_game'),
    women: boolean('women'),
    category: varchar('category', { length: 30 }),
    group: varchar('group', { length: 30 }),
    date: date('date'),
    playoff: boolean('playoff'),
    mix: boolean('mix').default(false),
    seasonId: integer('season_id'),
    homeGame: boolean('home_game').default(false),
    serieId: integer('serie_id'),
    totalGoals: integer('total_goals').generatedAlwaysAs(
      sql`(goals_scored + goals_conceded)`
    ),
    played: boolean('played'),
    currInoffChamp: boolean('curr_inoff_champ'),
  },
  (table) => {
    return {
      fkSerieId: foreignKey({
        columns: [table.serieId],
        foreignColumns: [series.serieId],
        name: 'fk_serie_id',
      }),
      teamgamesGameIdFkey: foreignKey({
        columns: [table.gameId],
        foreignColumns: [games.gameId],
        name: 'teamgames_game_id_fkey',
      }).onDelete('cascade'),
      teamgamesOpponentFkey: foreignKey({
        columns: [table.opponent],
        foreignColumns: [teams.teamId],
        name: 'teamgames_opponent_fkey',
      }),
      teamgamesSeasonIdFkey: foreignKey({
        columns: [table.seasonId],
        foreignColumns: [seasons.seasonId],
        name: 'teamgames_season_id_fkey',
      }).onDelete('cascade'),
      teamgamesTeamFkey: foreignKey({
        columns: [table.team],
        foreignColumns: [teams.teamId],
        name: 'teamgames_team_fkey',
      }),
    }
  }
)
