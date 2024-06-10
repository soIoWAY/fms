import { Team } from '@/types/Team'

export const getRandomEnemyTeam = (teams: Team[], myTeamIndex: number) => {
	const enemyTeams = teams.filter(
		(team: Team, index: number) => index !== myTeamIndex
	)

	const randomIndex = Math.floor(Math.random() * enemyTeams.length)
	const selectedEnemyTeam: Team = enemyTeams[randomIndex]
	return { team: selectedEnemyTeam, rating: selectedEnemyTeam.avgRating }
}
