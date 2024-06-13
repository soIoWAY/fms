import { getFilteredPlayers } from '@/functions/getFilteredPlayers'
import { Player } from '@/types/Player'

interface ISquadTable {
	players: Player[]
	filter: string
	sellPlayer: (
		name: string,
		age: number,
		rating: number,
		position: string
	) => void
}

const SquadTable = ({ players, filter, sellPlayer }: ISquadTable) => {
	return (
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
				{getFilteredPlayers(players, filter).map((player, index) => (
					<tr
						className={`${
							index % 2 === 0 ? 'bg-[#1f2231]' : 'bg-[#1b1e2d]'
						} key={index}`}
						key={index}
					>
						<td
							className='px-2 py-1 cursor-pointer	'
							onClick={() =>
								sellPlayer(player.name, player.age, player.rating, player.pos)
							}
						>
							{player.name}
						</td>
						<td className='px-2 py-1'>{player.pos}</td>
						<td className='px-2 py-1'>{player.age}</td>
						<td className='px-2 py-1'>{player.games}</td>
						<td className='px-2 py-1'>{player.goal}</td>
						<td className='px-2 py-1'>{player.gpas}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default SquadTable
