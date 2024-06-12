'use client'
import { Player } from '@/types/Player'
import { useEffect, useState } from 'react'

export default function SquadPage() {
	const [players, setPlayers] = useState<Player[]>([])
	const [filter, setFilter] = useState('position')
	const changeFilterHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFilter(e.target.value)
	}
	const getFilteredPlayer = () => {
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
	useEffect(() => {
		const storedPlayersJSON = localStorage.getItem('players')
		if (storedPlayersJSON) {
			const storedPlayer = JSON.parse(storedPlayersJSON)
			setPlayers(storedPlayer)
		}
	}, [])
	return (
		<div className='min-h-screen bg-[#1b1e2d] py-6 px-10'>
			<div className='flex justify-between items-center'>
				<h2 className='text-[#0acddd] uppercase font-semibold tracking-wider'>
					Players
				</h2>
				<select
					className='flex items-center tracking-wider bg-[#5d6573] px-1 py-1 rounded-lg'
					value={filter}
					onChange={changeFilterHandler}
				>
					<option value='goals'>Goals</option>
					<option value='gpasses'>Gpasses</option>
					<option value='age'>Age</option>
					<option value='position'>Position</option>
				</select>
			</div>
			<table className='text-start w-full bg-[#252837] mt-6 text-sm'>
				<thead className='border-b border-purple-600'>
					<tr>
						<th className='p-1 text-left'>NAME</th>
						<th className='p-1 text-left'>POSITION</th>
						<th className='p-1 text-left'>AGE</th>
						<th className='p-1 text-left'>GAMES</th>
						<th className='p-1 text-left'>GOAL</th>
						<th className='p-1 text-left'>GPASS</th>
					</tr>
				</thead>
				<tbody>
					{getFilteredPlayer().map((player, index) => (
						<tr
							className={`${
								index % 2 === 0 ? 'bg-[#1f2231]' : 'bg-[#1b1e2d]'
							} key={index}`}
							key={index}
						>
							<td className='px-2 py-1'>{player.name}</td>
							<td className='px-2 py-1'>{player.pos}</td>
							<td className='px-2 py-1'>{player.age}</td>
							<td className='px-2 py-1'>{player.games}</td>
							<td className='px-2 py-1'>{player.goal}</td>
							<td className='px-2 py-1'>{player.gpas}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
