import { z } from 'zod'

export const game = z.object({
  gameId: z.number().int().positive(),
  seasonId: z.number(),
  serieId: z.number(),
  homeTeamId: z.number().optional(),
  awayTeamId: z.number().optional(),
  result: z
    .string()
    .regex(/^\d{1,2}-\d{1,2}$/, { message: 'Fel resultat, ny match' })
    .optional()
    .or(z.literal('')),
  halftimeResult: z
    .string()
    .regex(/^\d{1,2}-\d{1,2}$/, { message: 'Fel halvtidsresultat, ny match' })
    .optional()
    .or(z.literal('')),
  homeGoal: z.number().optional(),
  awayGoal: z.number().optional(),
  halftimeHomeGoal: z.number().optional(),
  halftimeAwayGoal: z.number().optional(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'Fel datum' }),
  category: z
    .enum(['qualification', 'regular', 'eight', 'quarter', 'semi', 'final'])
    .default('regular'),
  group: z.string().default('Elitserien'),
  playoff: z.boolean().default(false),
  extraTime: z.boolean().default(false),
  penalties: z.boolean().default(false),
  women: z.boolean().default(false),
  played: z.boolean().default(false),
  mix: z.boolean().default(false),
})

export const inputGame = game.omit({ gameId: true, serieId: true })

export type Game = z.infer<typeof game>
export type InputGame = z.infer<typeof inputGame>
