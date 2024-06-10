import { Team } from '@/types/Team'

export const simulateMatch = (
	team1: Team,
	team2: Team,
	team1Avg: number,
	team2Avg: number
) => {
	const topTeamsScores = [3, 4, 5, 6, 7, 8, 9]
	const middleTeamScores = [2, 3, 4, 5]
	const weakTeamScores = [2, 3]
	const loseTeamScores = [0, 1]
	const topScore = Math.floor(Math.random() * topTeamsScores.length)
	const middleScore = Math.floor(Math.random() * middleTeamScores.length)
	const weakScore = Math.floor(Math.random() * weakTeamScores.length)
	let result = {
		team1,
		team2,
		team1Score: 0,
		team2Score: 0,
	}
	if (team1Avg === team2Avg) {
		team1.draws += 1
		team2.draws += 1
		result.team1Score = 1
		result.team2Score = 1
	} else if (team1Avg > team2Avg && team1Avg >= 80) {
		team1.wins += 1
		team2.loses += 1
		result.team1Score = topTeamsScores[topScore]
		result.team2Score =
			loseTeamScores[Math.floor(Math.random() * loseTeamScores.length)]
	} else if (team1Avg > team2Avg && team1Avg >= 75 && team1Avg < 80) {
		team1.wins += 1
		team2.loses += 1
		result.team1Score = middleTeamScores[middleScore]
		result.team2Score =
			loseTeamScores[Math.floor(Math.random() * loseTeamScores.length)]
	} else if (team1Avg > team2Avg && team1Avg < 75) {
		team1.wins += 1
		team2.loses += 1
		result.team1Score = weakTeamScores[weakScore]
		result.team2Score =
			loseTeamScores[Math.floor(Math.random() * loseTeamScores.length)]
	} else if (team2Avg > team1Avg && team2Avg >= 80) {
		team2.wins += 1
		team1.loses += 1
		result.team2Score = topTeamsScores[topScore]
		result.team1Score =
			loseTeamScores[Math.floor(Math.random() * loseTeamScores.length)]
	} else if (team2Avg > team1Avg && team2Avg >= 75 && team2Avg < 80) {
		team2.wins += 1
		team1.loses += 1
		result.team2Score = middleTeamScores[middleScore]
		result.team1Score =
			loseTeamScores[Math.floor(Math.random() * loseTeamScores.length)]
	} else if (team2Avg > team1Avg && team2Avg < 75) {
		team2.wins += 1
		team1.loses += 1
		result.team2Score = weakTeamScores[weakScore]
		result.team1Score =
			loseTeamScores[Math.floor(Math.random() * loseTeamScores.length)]
	}
	return result
}
