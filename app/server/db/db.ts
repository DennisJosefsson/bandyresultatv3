import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as errors from './schemas/errors'
import * as games from './schemas/games'
import * as metadata from './schemas/metadata'
import * as relations from './schemas/relations'
import * as seasons from './schemas/seasons'
import * as series from './schemas/series'
import * as tables from './schemas/tables'
import * as tableseasons from './schemas/tableseasons'
import * as teamgames from './schemas/teamgames'
import * as teams from './schemas/teams'
import * as teamseasons from './schemas/teamseasons'
import * as users from './schemas/users'

export const queryClient = postgres(process.env.DEVELOPMENT_URL as string)
export const db = drizzle(queryClient, {
  schema: {
    ...seasons,
    ...errors,
    ...games,
    ...metadata,
    ...series,
    ...tables,
    ...tableseasons,
    ...teamgames,
    ...teams,
    ...teamseasons,
    ...users,
    ...relations,
  },
})
