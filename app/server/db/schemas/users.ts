import { boolean, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  userId: serial('user_id').primaryKey().notNull(),
  userName: text('user_name').notNull(),
  email: text('email').notNull(),
  admin: boolean('admin').notNull(),
  password: varchar('password').notNull(),
})
