import { z } from 'zod'

export const metadata = z.object({
  metadataId: z.number(),
  seasonId: z.number(),
  name: z.string(),
  year: z.string(),
  winnerId: z.coerce.number().nullable(),
  winnerName: z.string(),
  hostCity: z.string(),
  finalDate: z.string(),
  northSouth: z.boolean(),
  multipleGroupStages: z.boolean(),
  eight: z.boolean(),
  quarter: z.boolean(),
  semi: z.boolean(),
  final: z.boolean(),
  comment: z.string().optional(),
})

export const inputMetadata = metadata.omit({ metadataId: true })

export type Metadata = z.infer<typeof metadata>
export type InputMetadata = z.infer<typeof inputMetadata>
