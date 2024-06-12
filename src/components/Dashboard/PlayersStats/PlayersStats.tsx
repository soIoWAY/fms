'use client'
import { Player } from '@/types/Player'
import { useEffect, useState } from 'react'
import { IoMdFootball } from 'react-icons/io'
const PlayersStats = () => {
	const [players, setPlayers] = useState<Player[]>([])
	useEffect(() => {
		const storedPlayersJSON = localStorage.getItem('players')
		if (storedPlayersJSON) {
			const storedPlayers = JSON.parse(storedPlayersJSON)
			setPlayers(storedPlayers)
		}
	}, [])

	const getGoalscorer = () => {
		return players.reduce(
			(maxPlayer, currentPlayer) =>
				currentPlayer.goal > maxPlayer.goal ? currentPlayer : maxPlayer,
			players[0]
		)
	}
	const getAssistant = () => {
		return players.reduce(
			(maxPlayer, currentPlayer) =>
				currentPlayer.gpas > maxPlayer.gpas ? currentPlayer : maxPlayer,
			players[0]
		)
	}

	const topGoalscorer: Player = getGoalscorer() || ''
	const topAssistant: Player = getAssistant() || ''

	return (
		<div className='bg-[#252837] rounded-md p-2'>
			<h2 className='text-[#05C7C7] uppercase font-bold text-sm tracking-widest'>
				Players stats
			</h2>
			<div className='flex flex-col'>
				<div className='flex items-center gap-2 border-b border-gray-500 py-1'>
					<IoMdFootball className='text-5xl' />
					<div className='leading-6'>
						<h2 className='uppercase text-gray-300'>Best goalscorer</h2>
						<h3 className='text-white font-bold'>{topGoalscorer.name}</h3>
						<h4>
							Goals: <span>{topGoalscorer.goal}</span>
						</h4>
					</div>
				</div>
				<div className='flex items-center gap-2 border-b border-gray-500 py-1'>
					<IoMdFootball className='text-5xl' />
					<div className='leading-6'>
						<h2 className='uppercase text-gray-300'>Best assistant</h2>
						<h3 className='text-white font-bold'>{topAssistant.name}</h3>
						<h4>
							Assists: <span>{topAssistant.gpas}</span>
						</h4>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PlayersStats
