import { db } from '@/server/db/db'
import { seasons } from '@/server/db/schemas/seasons'
import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'
import { desc, eq } from 'drizzle-orm'
import { getValidatedQuery } from 'vinxi/http'
import { z } from 'zod'

const validateSearch = z.object({
  women: z.enum(['true', 'false']),
})

export const Route = createAPIFileRoute('/api/seasons')({
  GET: async ({ request }) => {
    const query = await getValidatedQuery(validateSearch.safeParse)

    if (query.error) {
      return json(
        { message: query.error.errors.map((error) => error.message).join(',') },
        { status: 400, statusText: 'Invalid search params' }
      )
    }

    const { women } = query.data
    const allSeasons = await db
      .select({ seasonId: seasons.seasonId, year: seasons.year })
      .from(seasons)
      .where(eq(seasons.women, women === 'true' ? true : false))
      .orderBy(desc(seasons.seasonId))

    return json({ seasons: allSeasons })
  },
})
