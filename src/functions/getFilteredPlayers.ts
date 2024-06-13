import { Player } from '@/types/Player'

export const getFilteredPlayers = (players: Player[], filter: string) => {
	return [...players].sort((a, b) => {
		switch (filter) {
			case 'goals':
				return b.goal - a.goal
			case 'gpasses':
				return b.gpas - a.gpas
			case 'age':
				return a.age - b.age
			case 'position':
				return a.pos.localeCompare(b.pos)
			default:
				return 0
		}
	})
}
