'use client'
import { Player } from '@/types/Player'
import { useEffect, useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'

export default function SquadPage() {
	const [players, setPlayers] = useState<Player[]>([])
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
				<button className='flex items-center gap-1 tracking-wider bg-[#5d6573] px-3 py-1 rounded-lg'>
					<span>Filter</span>
					<FaCaretDown />
				</button>
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
					{players.map((player, index) => (
						<tr
							className={`${
								index % 2 === 0 ? 'bg-[#1f2231]' : 'bg-[#1b1e2d]'
							} key={index}`}
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
