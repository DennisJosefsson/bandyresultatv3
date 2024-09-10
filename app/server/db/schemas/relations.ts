import { relations } from 'drizzle-orm/relations'
import { games } from './games'
import { metadata } from './metadata'
import { seasons } from './seasons'
import { series } from './series'
import { tables } from './tables'
import { tableseasons } from './tableseasons'
import { teamgames } from './teamgames'
import { teams } from './teams'
import { teamseasons } from './teamseasons'

export const tablesRelations = relations(tables, ({ one, many }) => ({
  season: one(seasons, {
    fields: [tables.seasonId],
    references: [seasons.seasonId],
  }),
  team: one(teams, {
    fields: [tables.teamId],
    references: [teams.teamId],
  }),
  tableseasons: many(tableseasons),
  teamseasons: many(teamseasons),
}))

export const seasonsRelations = relations(seasons, ({ many }) => ({
  tables: many(tables),
  metadata: many(metadata),
  teamgames: many(teamgames),
  tableseasons: many(tableseasons),
  series: many(series),
  teamseasons: many(teamseasons),
  games: many(games),
}))

export const teamsRelations = relations(teams, ({ many }) => ({
  tables: many(tables),
  metadata: many(metadata),
  teamgames_opponent: many(teamgames, {
    relationName: 'teamgames_opponent_teams_teamId',
  }),
  teamgames_team: many(teamgames, {
    relationName: 'teamgames_team_teams_teamId',
  }),
  teamseasons: many(teamseasons),
  games_awayTeamId: many(games, {
    relationName: 'games_awayTeamId_teams_teamId',
  }),
  games_homeTeamId: many(games, {
    relationName: 'games_homeTeamId_teams_teamId',
  }),
}))

export const metadataRelations = relations(metadata, ({ one }) => ({
  season: one(seasons, {
    fields: [metadata.seasonId],
    references: [seasons.seasonId],
  }),
  team: one(teams, {
    fields: [metadata.winnerId],
    references: [teams.teamId],
  }),
}))

export const teamgamesRelations = relations(teamgames, ({ one }) => ({
  series: one(series, {
    fields: [teamgames.serieId],
    references: [series.serieId],
  }),
  game: one(games, {
    fields: [teamgames.gameId],
    references: [games.gameId],
  }),
  team_opponent: one(teams, {
    fields: [teamgames.opponent],
    references: [teams.teamId],
    relationName: 'teamgames_opponent_teams_teamId',
  }),
  season: one(seasons, {
    fields: [teamgames.seasonId],
    references: [seasons.seasonId],
  }),
  team_team: one(teams, {
    fields: [teamgames.team],
    references: [teams.teamId],
    relationName: 'teamgames_team_teams_teamId',
  }),
}))

export const seriesRelations = relations(series, ({ one, many }) => ({
  teamgames: many(teamgames),
  season: one(seasons, {
    fields: [series.seasonId],
    references: [seasons.seasonId],
  }),
  games: many(games),
}))

export const gamesRelations = relations(games, ({ one, many }) => ({
  teamgames: many(teamgames),
  series: one(series, {
    fields: [games.serieId],
    references: [series.serieId],
  }),
  team_awayTeamId: one(teams, {
    fields: [games.awayTeamId],
    references: [teams.teamId],
    relationName: 'games_awayTeamId_teams_teamId',
  }),
  team_homeTeamId: one(teams, {
    fields: [games.homeTeamId],
    references: [teams.teamId],
    relationName: 'games_homeTeamId_teams_teamId',
  }),
  season: one(seasons, {
    fields: [games.seasonId],
    references: [seasons.seasonId],
  }),
}))

export const tableseasonsRelations = relations(tableseasons, ({ one }) => ({
  season: one(seasons, {
    fields: [tableseasons.seasonId],
    references: [seasons.seasonId],
  }),
  table: one(tables, {
    fields: [tableseasons.tableId],
    references: [tables.tableId],
  }),
}))

export const teamseasonsRelations = relations(teamseasons, ({ one }) => ({
  season: one(seasons, {
    fields: [teamseasons.seasonId],
    references: [seasons.seasonId],
  }),
  table: one(tables, {
    fields: [teamseasons.tableId],
    references: [tables.tableId],
  }),
  team: one(teams, {
    fields: [teamseasons.teamId],
    references: [teams.teamId],
  }),
}))
