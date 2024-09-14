import { z } from 'zod'

export const user = z.object({
  userId: z.number(),
  userName: z.string(),
  email: z.string(),
  admin: z.boolean(),
  password: z.string(),
})

export type User = z.infer<typeof user>
