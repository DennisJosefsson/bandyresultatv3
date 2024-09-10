import {
  boolean,
  date,
  foreignKey,
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core'

import { seasons } from './seasons'
import { series } from './series'
import { teams } from './teams'

export const games = pgTable(
  'games',
  {
    gameId: serial('game_id').primaryKey().notNull(),
    date: date('date'),
    seasonId: integer('season_id').notNull(),
    homeTeamId: integer('home_team_id'),
    awayTeamId: integer('away_team_id'),
    women: boolean('women').default(false),
    result: varchar('result', { length: 255 }),
    homeGoal: integer('home_goal'),
    awayGoal: integer('away_goal'),
    round: integer('round'),
    category: varchar('category'),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }),
    updatedAt: timestamp('updated_at', { withTimezone: true, mode: 'string' }),
    halftimeResult: varchar('halftime_result', { length: 255 }),
    halftimeHomeGoal: integer('halftime_home_goal'),
    halftimeAwayGoal: integer('halftime_away_goal'),
    playoff: boolean('playoff').default(false),
    extraTime: boolean('extra_time').default(false),
    penalties: boolean('penalties').default(false),
    group: varchar('group').default('elitserien'),
    mix: boolean('mix').default(false),
    serieId: integer('serie_id'),
    played: boolean('played'),
  },
  (table) => {
    return {
      fkSerieId: foreignKey({
        columns: [table.serieId],
        foreignColumns: [series.serieId],
        name: 'fk_serie_id',
      }),
      gamesAwayTeamIdFkey: foreignKey({
        columns: [table.awayTeamId],
        foreignColumns: [teams.teamId],
        name: 'games_away_team_id_fkey',
      })
        .onUpdate('cascade')
        .onDelete('cascade'),
      gamesHomeTeamIdFkey: foreignKey({
        columns: [table.homeTeamId],
        foreignColumns: [teams.teamId],
        name: 'games_home_team_id_fkey',
      })
        .onUpdate('cascade')
        .onDelete('cascade'),
      gamesSeasonIdFkey: foreignKey({
        columns: [table.seasonId],
        foreignColumns: [seasons.seasonId],
        name: 'games_season_id_fkey',
      })
        .onUpdate('cascade')
        .onDelete('cascade'),
    }
  }
)
