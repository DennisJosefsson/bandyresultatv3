import { z } from 'zod'

export const teamGame = z.object({
  gameId: z.number(),
  teamGameId: z.number(),
  team: z.number(),
  opponent: z.number(),
  date: z.string(),
  scoredGoals: z.number(),
  concededGoals: z.number(),
  goalDifference: z.number(),
  totalGoals: z.number(),
  points: z.number(),
  win: z.boolean(),
  lost: z.boolean(),
  draw: z.boolean(),
  category: z.string(),
  group: z.string(),
  played: z.boolean(),
  homeGame: z.boolean(),
})

export const inputTeamGame = teamGame.omit({ teamGameId: true })

export type TeamGame = z.infer<typeof teamGame>
export type InputTeamGame = z.infer<typeof inputTeamGame>
