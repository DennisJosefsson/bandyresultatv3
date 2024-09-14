import { z } from 'zod'

export const staticTable = z.object({
  tableId: z.number(),
  teamId: z.number(),
  seasonId: z.number(),
  position: z.number(),
  games: z.number(),
  won: z.number(),
  draw: z.number(),
  lost: z.number(),
  scoredGoals: z.number(),
  concededGoals: z.number(),
  goalDifference: z.number(),
  points: z.number(),
  qualification: z.boolean(),
  group: z.string(),
})

export const inputStaticTable = staticTable.omit({ tableId: true })

export type StaticTable = z.infer<typeof staticTable>
export type InputStaticTable = z.infer<typeof inputStaticTable>
