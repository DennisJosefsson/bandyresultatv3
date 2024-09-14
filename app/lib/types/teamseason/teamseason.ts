import { z } from 'zod'

export const teamSeason = z.object({
  teamseasonId: z.number(),
  seasonId: z.number(),
  teamId: z.number(),
  tableId: z.number().nullable().optional(),
  women: z.boolean(),
  qualification: z.boolean(),
  negQualification: z.boolean().optional(),
  promoted: z.boolean().optional(),
  relegated: z.boolean().optional(),
  position: z.number().optional().nullable(),
  points: z.number().optional().nullable(),
  playoff: z.boolean().optional(),
  eight: z.boolean().optional(),
  quarter: z.boolean().optional(),
  semi: z.boolean().optional(),
  final: z.boolean().optional(),
  gold: z.boolean().optional(),
})

export const inputTeamSeason = teamSeason.omit({ teamseasonId: true })

export type TeamSeason = z.infer<typeof teamSeason>
export type InputTeamSeason = z.infer<typeof inputTeamSeason>
