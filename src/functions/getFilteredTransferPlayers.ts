import { TransferPlayer } from '@/types/TransferPlayer'

export const getFilteredTransferPlayers = (
	transferPlayers: TransferPlayer[],
	filter: string
) => {
	return [...transferPlayers].sort((a, b) => {
		switch (filter) {
			case 'age':
				return a.age - b.age
			case 'minPrice':
				return a.price - b.price
			case 'maxPrice':
				return b.price - a.price
			case 'minRate':
				return a.rating - b.rating
			case 'maxRate':
				return b.rating - a.rating
			case 'maxAge':
				return b.age - a.age
			case 'minAge':
				return a.age - b.age
			case 'position':
				return a.pos.localeCompare(b.pos)
			default:
				return 0
		}
	})
}
