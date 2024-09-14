import { parseSeasonYear } from '@/lib/utils/parsersForApi'
import { db } from '@/server/db/db'
import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'
import { z } from 'zod'
const validateSearch = z.object({
  page: z.coerce.number().int().positive(),
})

export const Route = createAPIFileRoute('/api/season/$seasonId')({
  GET: async ({ params }) => {
    const parsedSeasonYear = parseSeasonYear(params.seasonId)
    if (!parsedSeasonYear) {
      return json(
        {
          message: 'Säsongsid saknas eller är felaktigt',
        },
        { status: 400, statusText: 'Invalid search params' }
      )
    }
    if (typeof parsedSeasonYear === 'object' && 'error' in parsedSeasonYear) {
      return json(
        { error: true, message: parsedSeasonYear.message },
        { status: 400, statusText: 'Invalid search params' }
      )
    }

    const getSeasons = await db.query.seasons.findMany({
      where: (seasons, { eq }) => eq(seasons.year, parsedSeasonYear),
      with: {
        series: true,
        teamseasons: { with: { team: true } },
        tables: { with: { team: true } },
        metadata: true,
      },
    })
    return json({ season: getSeasons })
  },
})

export type SingleSeason = typeof Route
