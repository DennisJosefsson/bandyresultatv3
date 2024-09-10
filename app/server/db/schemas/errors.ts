import { boolean, pgTable, serial, varchar } from 'drizzle-orm/pg-core'

export const errors = pgTable('errors', {
  errorId: serial('error_id').primaryKey().notNull(),
  name: varchar('name'),
  message: varchar('message'),
  origin: varchar('origin'),
  body: varchar('body'),
  production: boolean('production'),
  backend: boolean('backend'),
  date: varchar('date'),
})
