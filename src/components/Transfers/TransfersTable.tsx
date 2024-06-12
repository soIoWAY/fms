import { formatNumber } from '@/functions/formatNumber'
import { getFilteredTransferPlayers } from '@/functions/getFilteredTransferPlayers'
import { TransferPlayer } from '@/types/TransferPlayer'

interface ITransfersTable {
	transferPlayers: TransferPlayer[]
	filter: string
	buyPlayer: (
		name: string,
		age: number,
		price: number,
		position: string,
		rating: number
	) => void
}

const TransfersTable = ({
	transferPlayers,
	filter,
	buyPlayer,
}: ITransfersTable) => {
	return (
		<table className='text-start w-full bg-[#252837] mt-2 text-sm'>
			<thead className='border-b border-purple-600'>
				<tr>
					<th className='p-1 text-left'>NAME</th>
					<th className='p-1 text-left'>POSITION</th>
					<th className='p-1 text-left'>AGE</th>
					<th className='p-1 text-left'>RATING</th>
					<th className='p-1 text-left'>PRICE</th>
				</tr>
			</thead>
			<tbody>
				{getFilteredTransferPlayers(transferPlayers, filter).map(
					(player, index) => (
						<tr
							className={`${
								index % 2 === 0 ? 'bg-[#1f2231]' : 'bg-[#1b1e2d]'
							} key={index}`}
						>
							<td
								className='px-2 py-1 cursor-pointer'
								onClick={() =>
									buyPlayer(
										player.name,
										player.age,
										player.rating,
										player.pos,
										player.price
									)
								}
							>
								{player.name}
							</td>
							<td className='px-2 py-1'>{player.pos}</td>
							<td className='px-2 py-1'>{player.age}</td>
							<td className='px-2 py-1'>{player.rating}</td>
							<td className='px-2 py-1'>{formatNumber(player.price)}$</td>
						</tr>
					)
				)}
			</tbody>
		</table>
	)
}

export default TransfersTable
