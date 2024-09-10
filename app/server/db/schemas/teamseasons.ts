import {
  boolean,
  foreignKey,
  integer,
  pgTable,
  serial,
  smallint,
} from 'drizzle-orm/pg-core'

import { seasons } from './seasons'
import { tables } from './tables'
import { teams } from './teams'

export const teamseasons = pgTable(
  'teamseasons',
  {
    teamseasonId: serial('teamseason_id').primaryKey().notNull(),
    seasonId: integer('season_id').notNull(),
    teamId: integer('team_id').notNull(),
    tableId: integer('table_id'),
    qualification: boolean('qualification'),
    women: boolean('women').default(false),
    promoted: boolean('promoted').default(false),
    relegated: boolean('relegated').default(false),
    position: smallint('position'),
    points: smallint('points'),
    playoff: boolean('playoff').default(false),
    eight: boolean('eight').default(false),
    quarter: boolean('quarter').default(false),
    semi: boolean('semi').default(false),
    final: boolean('final').default(false),
    gold: boolean('gold').default(false),
    negQualification: boolean('neg_qualification').default(false),
  },
  (table) => {
    return {
      teamseasonsSeasonIdFkey: foreignKey({
        columns: [table.seasonId],
        foreignColumns: [seasons.seasonId],
        name: 'teamseasons_season_id_fkey',
      }),
      teamseasonsTableIdFkey: foreignKey({
        columns: [table.tableId],
        foreignColumns: [tables.tableId],
        name: 'teamseasons_table_id_fkey',
      }),
      teamseasonsTeamIdFkey: foreignKey({
        columns: [table.teamId],
        foreignColumns: [teams.teamId],
        name: 'teamseasons_team_id_fkey',
      }),
    }
  }
)
