import { foreignKey, integer, pgTable, serial } from 'drizzle-orm/pg-core'
import { seasons } from './seasons'
import { tables } from './tables'

export const tableseasons = pgTable(
  'tableseasons',
  {
    tableseasonId: serial('tableseason_id').primaryKey().notNull(),
    seasonId: integer('season_id').notNull(),
    tableId: integer('table_id').notNull(),
  },
  (table) => {
    return {
      tableseasonsSeasonIdFkey: foreignKey({
        columns: [table.seasonId],
        foreignColumns: [seasons.seasonId],
        name: 'tableseasons_season_id_fkey',
      }),
      tableseasonsTableIdFkey: foreignKey({
        columns: [table.tableId],
        foreignColumns: [tables.tableId],
        name: 'tableseasons_table_id_fkey',
      }),
    }
  }
)
