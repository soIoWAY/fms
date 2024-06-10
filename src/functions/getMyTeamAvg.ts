import { Player } from '@/types/Player'

export const getMyTeamAvg = (players: Player[]) => {
	let totalAvg = 0
	players.forEach(player => (totalAvg += player.rating))
	return totalAvg / players.length
}
