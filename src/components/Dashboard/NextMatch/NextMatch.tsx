'use client'
import { getMyTeamIndex } from '@/functions/getMyTeam'
import { getMyTeamAvg } from '@/functions/getMyTeamAvg'
import { getRandomEnemyTeam } from '@/functions/getRandomEnemyTeam'
import { simulateMatch } from '@/functions/simulateMatch'
import { Team } from '@/types/Team'
import Image from 'next/image'
import { useState } from 'react'
import { MdOutlineStadium } from 'react-icons/md'

interface INextMatch {
	updateTableData: () => void
	updateLastResults: () => void
}

const NextMatch = ({ updateTableData, updateLastResults }: INextMatch) => {
	const [nextMatch, setNextMatch] = useState<{
		myTeam: Team
		enemyTeam: Team
	} | null>(null)

	const simulateTourHandler = () => {
		// в дешборді все в локал сторадж
		const storedTeamsJSON = localStorage.getItem('teams')
		const storedPlayersJSON = localStorage.getItem('players')
		const storedResultsJSON = localStorage.getItem('results')

		let results = storedResultsJSON ? JSON.parse(storedResultsJSON) : []
		if (storedTeamsJSON && storedPlayersJSON) {
			const storedTeams = JSON.parse(storedTeamsJSON)
			const storedPlayers = JSON.parse(storedPlayersJSON)

			const myTeamIndex = getMyTeamIndex(storedTeams)
			const myTeamAvg = getMyTeamAvg(storedPlayers)
			console.log(myTeamAvg)

			if (
				storedTeams[myTeamIndex].wins +
					storedTeams[myTeamIndex].loses +
					storedTeams[myTeamIndex].draws <
				20
			) {
				if (myTeamIndex !== -1) {
					const enemyTeamData = getRandomEnemyTeam(storedTeams, myTeamIndex)
					if (enemyTeamData) {
						const { team: enemyTeam, rating: enemyRating } = enemyTeamData
						const enemyTeamIndex = storedTeams.findIndex(
							(team: Team) => team.id === enemyTeam.id
						)
						if (enemyTeamIndex !== -1) {
							const result = simulateMatch(
								storedTeams[myTeamIndex],
								storedTeams[enemyTeamIndex],
								myTeamAvg,
								enemyRating
							)
							setNextMatch({ myTeam: storedTeams[myTeamIndex], enemyTeam })
							results.push(result)
							if (results.length > 10) results.shift()
						}
					}
					const remainingTeams = storedTeams.filter(
						(team: Team, index: number) =>
							index !== myTeamIndex && team !== enemyTeamData?.team
					)
					for (let i = 0; i < remainingTeams.length; i += 2) {
						if (i + 1 < remainingTeams.length) {
							const team1 = remainingTeams[i]
							const team2 = remainingTeams[i + 1]

							const team1Avg = team1.avgRating
							const team2Avg = team2.avgRating

							simulateMatch(team1, team2, team1Avg, team2Avg)
						}
					}
					localStorage.setItem('teams', JSON.stringify(storedTeams))
					localStorage.setItem('results', JSON.stringify(results))
				}
			}
		}
		updateTableData()
		updateLastResults()
	}
	return (
		<div className='flex flex-col items-center bg-[#252837] py-5 rounded-md'>
			<div className='flex items-center'>
				<div>
					<Image src='/sd.svg' alt='dk' width={200} height={200} />
				</div>
				<div className='font-semibold flex flex-col items-center'>
					<h2 className='uppercase text-md pb-2 text-[#05C7C7]'>Next match</h2>
					<div className='flex flex-col items-center border-t border-b py-2 text-lg'>
						<div className='flex gap-3'>
							<span className='w-20'>{nextMatch?.myTeam.name}</span>
							<span>-</span>
							<span className='w-20'>{nextMatch?.enemyTeam.name}</span>
						</div>
						<p className='text-base text-gray-300 flex gap-1'>
							<span>1</span>-<span>3</span>
						</p>
						<p className='text-sm text-gray-300'>Ukraine Premier League</p>
					</div>
				</div>
				<div>
					<Image src='/rukh.svg' alt='sd' width={200} height={200} />
				</div>
			</div>
			<div className='text-sm flex gap-2'>
				<span>
					<MdOutlineStadium className='fill-purple-600 text-xl' />
				</span>
				<span className='border-b border-purple-600'>Donbas Arena Stadium</span>
			</div>
			<button
				className='bg-purple-600 w-3/8 py-2 px-2 rounded-md font-semibold hover:bg-purple-700 transition-all mt-4'
				onClick={simulateTourHandler}
			>
				Simulate tour
			</button>
		</div>
	)
}

export default NextMatch
