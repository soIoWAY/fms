'use client'
import { useEffect, useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'

interface ITransferPlayer {
	name: string
	price: number
	rating: number
	age: number
	pos: string
}

export default function TransfersPage() {
	const [transferPlayers, setTransferPlayers] = useState<ITransferPlayer[]>([])
	const fetchTransferPlayers = async () => {
		try {
			const res = await fetch('/api/transferPlayers')
			const data = await res.json()
			console.log(data)
			localStorage.setItem(
				'transferPlayers',
				JSON.stringify(data.transferPlayers)
			)
		} catch (error) {
			console.error(error)
		}
	}
	useEffect(() => {
		const storedTransferPlayers = localStorage.getItem('transferPlayers')
		if (storedTransferPlayers) {
			setTransferPlayers(JSON.parse(storedTransferPlayers))
		} else {
			fetchTransferPlayers()
		}
	}, [])

	function formatNumber(num: number): string {
		return num.toLocaleString('uk-UA', {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		})
	}
	return (
		<div className='min-h-screen py-6 px-10 bg-[#1b1e2d]'>
			<div className='bg-[#242736] rounded-md flex justify-between items-center py-2 px-3'>
				<h2 className='text-[#0acddd] uppercase font-semibold tracking-wider'>
					players in the available zone
				</h2>
				<button className='flex items-center gap-1 tracking-wider bg-[#5d6573] px-3 py-1 rounded-lg'>
					<span>Filter</span>
					<FaCaretDown />
				</button>
			</div>
			<div className='mt-6 flex justify-between items-center'>
				<h2 className='text-[#0acddd] uppercase font-semibold tracking-wider'>
					players found - 43
				</h2>
				<div className='flex flex-col text-center bg-[#242633] p-2 rounded-md'>
					<h2 className='uppercase text-sm text-gray-300'>Transfer balance</h2>
					<span className='text-white font-semibold'>2 000 000</span>
				</div>
			</div>
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
					{transferPlayers.map((player, index) => (
						<tr
							className={`${
								index % 2 === 0 ? 'bg-[#1f2231]' : 'bg-[#1b1e2d]'
							} key={index}`}
						>
							<td className='px-2 py-1'>{player.name}</td>
							<td className='px-2 py-1'>{player.pos}</td>
							<td className='px-2 py-1'>{player.age}</td>
							<td className='px-2 py-1'>{player.rating}</td>
							<td className='px-2 py-1'>{formatNumber(player.price)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
