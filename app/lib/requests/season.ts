import axios from 'axios'
import { Metadata } from '../types/metadata/metadata'
import { Season } from '../types/season/season'
import { Serie } from '../types/serie/serie'
import { StaticTable } from '../types/table/table'
import { Team } from '../types/team/team'
import { TeamSeason } from '../types/teamseason/teamseason'
import { baseUrl, header } from './requestConfig'

const seasonsApi = axios.create({
  baseURL: `${baseUrl}/api/seasons`,
  headers: header,
})

type PaginatedSeason = Omit<Season, 'women'>

export const getPaginatedSeasons = async ({
  page,
}: {
  page: number
}): Promise<PaginatedSeason[]> => {
  const response = await seasonsApi.get(`/paginated?page=${page}`)
  return response.data
}

type TeamSeasonWithTeam = TeamSeason & { team: Team }
type MetadataWithTeam = Metadata & { team: Team }

type SingleSeason = Season & {
  series: Serie[]
  teamseasons: TeamSeasonWithTeam[]
  tables: StaticTable[]
  metadata: MetadataWithTeam
}

export const getSingleSeason = async (
  seasonId: number
): Promise<SingleSeason | { error: true; message: string }> => {
  const response = await seasonsApi.get(`/${seasonId}`, {
    validateStatus: (status) => {
      return status < 500
    },
  })
  return response.data
}
