import { Player } from '@/types/Player'

export const updatePlayerStats = (storedPlayers: Player[]) => {
	return storedPlayers.forEach(player => {
		player.games += 1
	})
}
