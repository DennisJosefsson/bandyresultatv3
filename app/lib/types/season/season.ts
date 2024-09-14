import { z } from 'zod'

export const season = z.object({
  seasonId: z.number(),
  year: z.string(),
  women: z.boolean(),
})

export const inputSeason = season.omit({ seasonId: true })

export type Season = z.infer<typeof season>
export type InputSeason = z.infer<typeof inputSeason>
