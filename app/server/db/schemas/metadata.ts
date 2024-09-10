import {
  boolean,
  foreignKey,
  integer,
  pgTable,
  serial,
  text,
  varchar,
} from 'drizzle-orm/pg-core'

import { seasons } from './seasons'
import { teams } from './teams'
export const metadata = pgTable(
  'metadata',
  {
    metadataId: serial('metadata_id').primaryKey().notNull(),
    seasonId: integer('season_id').notNull(),
    name: varchar('name', { length: 255 }).notNull(),
    year: varchar('year', { length: 255 }).notNull(),
    winnerId: integer('winner_id'),
    winnerName: varchar('winner_name', { length: 255 }),
    hostCity: varchar('host_city', { length: 255 }),
    finalDate: varchar('final_date', { length: 255 }),
    northSouth: boolean('north_south').notNull(),
    multipleGroupStages: boolean('multiple_group_stages').notNull(),
    eight: boolean('eight').notNull(),
    quarter: boolean('quarter').notNull(),
    semi: boolean('semi').notNull(),
    final: boolean('final').notNull(),
    comment: text('comment'),
  },
  (table) => {
    return {
      metadataSeasonIdFkey: foreignKey({
        columns: [table.seasonId],
        foreignColumns: [seasons.seasonId],
        name: 'metadata_season_id_fkey',
      }),
      metadataWinnerIdFkey: foreignKey({
        columns: [table.winnerId],
        foreignColumns: [teams.teamId],
        name: 'metadata_winner_id_fkey',
      }),
    }
  }
)
