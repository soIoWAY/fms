'use client'
import { Team } from '@/types/Team'
import { useEffect, useState } from 'react'

interface ITable {
	tableDataUpdated: boolean
}

const Table = ({ tableDataUpdated }: ITable) => {
	const [teams, setTeams] = useState<Team[]>([])
	const fetchTeams = async () => {
		try {
			const res = await fetch('/api/teams')
			const data = await res.json()
			localStorage.setItem('teams', JSON.stringify(data.teams))
		} catch (error) {
			console.error(error)
		}
	}
	// transfer players
	const fetchPlayers = async () => {
		try {
			const res = await fetch('/api/players')
			const data = await res.json()
			localStorage.setItem('players', JSON.stringify(data.players))
			localStorage.setItem('transferBalance', JSON.stringify(1000000))
		} catch (error) {
			console.error(error)
		}
	}
	useEffect(() => {
		const storedTeams = localStorage.getItem('teams')
		if (storedTeams) {
			const parsedTeams: Team[] = JSON.parse(storedTeams)
			const sortedTeams = parsedTeams.sort(
				(a: Team, b: Team) =>
					b.draws * 1 + b.wins * 3 - (a.draws * 1 + a.wins * 3)
			)

			setTeams(sortedTeams)
		} else {
			fetchTeams()
			fetchPlayers()
		}
	}, [tableDataUpdated])

	return (
		<div className='flex flex-col gap-2'>
			<h2 className='text-[#05C7C7] uppercase font-bold text-sm tracking-widest'>
				Table of league
			</h2>
			<table className='text-center w-full bg-[#252837]'>
				<thead className='border-b border-purple-600'>
					<tr>
						<th className='p-1'>POS</th>
						<th className='p-1'>TEAM</th>
						<th className='p-1'>PLD</th>
						<th className='p-1 text-green-500'>WON</th>
						<th className='p-1 text-yellow-500'>DRN</th>
						<th className='p-1 text-red-600'>LST</th>
						<th className='p-1'>PTS</th>
					</tr>
				</thead>
				<tbody>
					{teams.map((team, index) => (
						<tr
							className={`${index % 2 === 0 ? 'bg-[#1C1F2E]' : 'bg-[#2B3040]'}${
								team.name == 'Rukh Lviv' ? 'text-purple-500' : 'text-white'
							} `}
							key={index}
						>
							<td className='p-1'>{index + 1}</td>
							<td
								className={`${
									team.name == 'Rukh Lviv' ? 'text-purple-500' : 'text-white'
								} p-1`}
							>
								{team.name}
							</td>
							<td className='p-1'>{team.wins + team.loses + team.draws}</td>
							<td className='p-1'>{team.wins}</td>
							<td className='p-1'>{team.draws}</td>
							<td className='p-1'>{team.loses}</td>
							<td className='p-1'>{team.wins * 3 + team.draws * 1}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Table
