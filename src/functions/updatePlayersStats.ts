import { Player } from '@/types/Player'
import { Team } from '@/types/Team'

export const updatePlayerStats = (
	storedPlayers: Player[],
	result: { team1: Team; team2: Team; team1Score: number; team2Score: number }
) => {
	const attackPlayers = storedPlayers.filter(player => player.pos === 'A')
	const middlePlayers = storedPlayers.filter(player => player.pos === 'M')
	const defenderPlayers = storedPlayers.filter(player => player.pos === 'D')
	const randomAttackPlayer = Math.floor(Math.random() * attackPlayers.length)
	const randomMiddlePlayer = Math.floor(Math.random() * middlePlayers.length)
	const randomDefPlayer = Math.floor(Math.random() * defenderPlayers.length)
	const totalGoals = result.team1Score
	const totalGpasses = Math.round(totalGoals * 0.5)
	const gpassesForAttack = Math.round(totalGpasses * 0.5)
	const gpassesForMiddle = Math.round(totalGpasses * 0.4)
	const gpassesForDef = Math.round(totalGpasses * 0.1)
	const goalsForAttack = Math.round(totalGoals * 0.6)
	const goalsForMiddle = Math.round(totalGoals * 0.3)
	const goalsForDef = Math.round(totalGoals * 0.1)
	// 11 гравців, якщо не 11 то не симулювати тур
	// продані гравці видаляються
	// рейтинг захисту на основі того скільки забив ворог
	storedPlayers.forEach(player => {
		player.games += 1
	})

	// циклом обходити кожен гол і не давати гравцю який забив робити гольову
	attackPlayers[randomAttackPlayer].goal += goalsForAttack
	middlePlayers[randomMiddlePlayer].goal += goalsForMiddle
	defenderPlayers[randomDefPlayer].goal += goalsForDef

	attackPlayers[randomAttackPlayer].gpas += gpassesForAttack
	middlePlayers[randomMiddlePlayer].gpas += gpassesForMiddle
	defenderPlayers[randomDefPlayer].gpas += gpassesForDef

	return storedPlayers
}
