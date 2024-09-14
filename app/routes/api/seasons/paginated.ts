import { db } from '@/server/db/db'
import { seasons } from '@/server/db/schemas/seasons'
import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'
import { count, desc, eq } from 'drizzle-orm'
import { getValidatedQuery } from 'vinxi/http'
import { z } from 'zod'
const validateSearch = z.object({
  page: z.coerce.number().int().positive(),
})

export const Route = createAPIFileRoute('/api/seasons/paginated')({
  GET: async () => {
    const query = await getValidatedQuery(validateSearch.safeParse)

    if (query.error) {
      return json(
        { message: query.error.errors.map((error) => error.message).join(',') },
        { status: 400, statusText: 'Invalid search params' }
      )
    }

    const { page } = query.data

    const getSeasons = await db
      .select({
        seasonId: seasons.seasonId,
        year: seasons.year,
      })
      .from(seasons)
      .where(eq(seasons.women, false))
      .limit(12)
      .offset((page - 1) * 12)
      .orderBy(desc(seasons.seasonId))
    const getCount = await db
      .select({ count: count() })
      .from(seasons)
      .where(eq(seasons.women, false))

    return json({ seasons: getSeasons, count: getCount[0].count })
  },
})
