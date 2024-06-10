export const fetchPlayers = async () => {
	try {
		const res = await fetch('/api/players')
		const data = await res.json()
		localStorage.setItem('players', JSON.stringify(data.players))
	} catch (error) {
		console.error(error)
	}
}
