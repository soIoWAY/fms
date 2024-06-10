import { Team } from '@/types/Team'

export const getMyTeamIndex = (teams: []) => {
	return teams.findIndex((team: Team) => team.name === 'Rukh Lviv')
}
