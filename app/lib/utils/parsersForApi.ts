import { z } from 'zod'

const seasonIdCheck = z.coerce
  .string({ invalid_type_error: 'Fel format, säsongsId' })
  .regex(/^[0-9]{4}$/, { message: 'Fel säsongsId' })
  .transform((value) => {
    const seasonId = Number(value)
    if (!isNaN(seasonId)) {
      if (seasonId > 1906 && seasonId < 1964) {
        return String(seasonId)
      } else if (seasonId > 1963) {
        return `${seasonId - 1}/${seasonId}`
      }
    }
  })

export function parseSeasonYear(seasonId: string) {
  const parsedSeasonYear = seasonIdCheck.safeParse(seasonId)
  if (parsedSeasonYear.error) {
    const message = parsedSeasonYear.error.errors
      .map((error) => error.message)
      .join(',')
    return { error: true, message: message }
  }
  return parsedSeasonYear.data
}
