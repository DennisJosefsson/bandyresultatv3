import { z } from 'zod'

export const team = z.object({
  teamId: z.number(),
  name: z.string(),
  city: z.string(),
  casualName: z.string(),
  shortName: z.string(),
  women: z.boolean().optional(),
  lat: z.number().optional().nullable(),
  long: z.number().optional().nullable(),
})

export const inputTeam = team.omit({ teamId: true })

export type Team = z.infer<typeof team>
export type InputTeam = z.infer<typeof inputTeam>
