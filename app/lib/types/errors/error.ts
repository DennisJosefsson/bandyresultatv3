import { z } from 'zod'

export const bandyError = z.object({
  errorId: z.number(),
  date: z.string(),
  name: z.string(),
  message: z.string(),
  origin: z.string(),
  body: z.string(),
  production: z.boolean(),
  backend: z.boolean(),
})

export const inputBandyError = bandyError.omit({ errorId: true })

export type BandyError = z.infer<typeof bandyError>
export type InputBandyError = z.infer<typeof inputBandyError>
