import { parseSearchParams } from '@/lib/utils/parsersForApi'
import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'
import { z } from 'zod'

const validateSearch = z.object({
  women: z.enum(['true', 'false']),
})

export const Route = createAPIFileRoute('/api/healthcheck')({
  GET: ({ request }) => {
    const searchParams = parseSearchParams({
      schema: validateSearch,
      url: request.url,
    })
    console.log(searchParams)
    return json({ message: 'Hello, world!' })
  },
})
