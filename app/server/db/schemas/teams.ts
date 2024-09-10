import {
  boolean,
  pgTable,
  real,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core'

export const teams = pgTable('teams', {
  teamId: serial('team_id').primaryKey().notNull(),
  name: varchar('name', { length: 255 }),
  city: varchar('city', { length: 255 }),
  women: boolean('women').default(false),
  createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }),
  updatedAt: timestamp('updated_at', { withTimezone: true, mode: 'string' }),
  casualName: varchar('casual_name', { length: 255 }),
  shortName: varchar('short_name', { length: 255 }),
  lat: real('lat'),
  long: real('long'),
})
