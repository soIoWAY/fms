'use client'
import { getMyTeamIndex } from '@/functions/getMyTeam'
import { getMyTeamAvg } from '@/functions/getMyTeamAvg'
import { getRandomEnemyTeam } from '@/functions/getRandomEnemyTeam'
import { simulateMatch } from '@/functions/simulateMatch'
import { updatePlayerStats } from '@/functions/updatePlayersStats'
import { Team } from '@/types/Team'
import { useState } from 'react'
import { MdOutlineStadium } from 'react-icons/md'
import Match from './Match'

interface INextMatch {
	updateTableData: () => void
	updateLastResults: () => void
	updatePlayerLocalStats: () => void
}

const NextMatch = ({
	updateTableData,
	updateLastResults,
	updatePlayerLocalStats,
}: INextMatch) => {
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

							updatePlayerStats(storedPlayers, result)

							setNextMatch({ myTeam: storedTeams[myTeamIndex], enemyTeam })
							results.push(result)
							if (results.length > 10) results.shift()
							localStorage.setItem('players', JSON.stringify(storedPlayers))
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
		updatePlayerLocalStats()
	}
	return (
		<div className='flex flex-col items-center bg-[#252837] py-5 rounded-md'>
			<Match
				myTeamName={nextMatch?.myTeam.name || ''}
				enemyTeamName={nextMatch?.enemyTeam.name || ''}
			/>
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
