import {
  boolean,
  foreignKey,
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core'

import { seasons } from './seasons'
import { teams } from './teams'

export const tables = pgTable(
  'tables',
  {
    tableId: serial('table_id').primaryKey().notNull(),
    teamId: integer('team_id').notNull(),
    seasonId: integer('season_id').notNull(),
    games: integer('games').notNull(),
    position: integer('position').notNull(),
    won: integer('won').notNull(),
    draw: integer('draw').notNull(),
    lost: integer('lost').notNull(),
    scoredGoals: integer('scored_goals').notNull(),
    concededGoals: integer('conceded_goals').notNull(),
    goalDifference: integer('goal_difference').notNull(),
    points: integer('points').notNull(),
    qualification: boolean('qualification').default(false),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }),
    updatedAt: timestamp('updated_at', { withTimezone: true, mode: 'string' }),
    women: boolean('women').default(false),
    group: varchar('group').default('elitserien'),
  },
  (table) => {
    return {
      tablesSeasonIdFkey: foreignKey({
        columns: [table.seasonId],
        foreignColumns: [seasons.seasonId],
        name: 'tables_season_id_fkey',
      }),
      tablesTeamIdFkey: foreignKey({
        columns: [table.teamId],
        foreignColumns: [teams.teamId],
        name: 'tables_team_id_fkey',
      }),
    }
  }
)
