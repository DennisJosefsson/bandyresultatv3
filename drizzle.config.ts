import type { Config } from 'drizzle-kit'

export default {
  schema: './app/server/db/schemas/*.ts',
  out: './app/server/db/drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DEVELOPMENT_URL as string,
  },
  verbose: true,
  strict: true,
  introspect: {
    casing: 'camel',
  },
} satisfies Config
