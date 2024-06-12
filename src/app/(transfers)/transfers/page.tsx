'use client'
import TransfersBalance from '@/components/Transfers/TransfersBalance'
import TransfersModal from '@/components/Transfers/TransfersModal'
import TransfersSelector from '@/components/Transfers/TransfersSelector'
import TransfersTable from '@/components/Transfers/TransfersTable'
import { Player } from '@/types/Player'
import { TransferPlayer } from '@/types/TransferPlayer'
import React, { useEffect, useState } from 'react'

// перевірка на гравців якщо в команді залишиться менше 4 захисників заборонити продаж

export default function TransfersPage() {
	const [transferPlayers, setTransferPlayers] = useState<TransferPlayer[]>([])
	const [filter, setFilter] = useState('Position')
	const [isBuyPlayerModalOpen, setIsBuyPlayerModalOpen] = useState(false)
	const [buyPlayerName, setBuyPlayerName] = useState('')
	const [buyPlayerRating, setBuyPlayerRating] = useState(0)
	const [buyPlayerAge, setBuyPlayerAge] = useState(0)
	const [buyPlayerPosition, setBuyPlayerPosition] = useState('')
	const [buyPlayerPrice, setBuyPlayerPrice] = useState(0)
	const [players, setPlayers] = useState<Player[]>([])
	// забрати фетч
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
		const storedPlayers = localStorage.getItem('players')
		if (storedTransferPlayers && storedPlayers) {
			setTransferPlayers(JSON.parse(storedTransferPlayers))
			setPlayers(JSON.parse(storedPlayers))
		} else {
			fetchTransferPlayers()
		}
	}, [])

	const changeFilterHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFilter(e.target.value)
	}

	const cancelBuyPlayer = () => {
		setIsBuyPlayerModalOpen(false)
	}

	const confirmBuyPlayer = (
		name: string,
		position: string,
		age: number,
		rating: number
	) => {
		players.push({
			name: name,
			pos: position,
			age: age,
			rating: rating,
			games: 0,
			gpas: 0,
			goal: 0,
		})
		localStorage.setItem('players', JSON.stringify(players))
	}

	const buyPlayer = (
		name: string,
		age: number,
		rating: number,
		position: string,
		price: number
	) => {
		setIsBuyPlayerModalOpen(true)
		setBuyPlayerName(name)
		setBuyPlayerPosition(position)
		setBuyPlayerRating(rating)
		setBuyPlayerAge(age)
		setBuyPlayerPrice(price)
		console.log(name, age, rating, position)
	}

	return (
		<div className='min-h-screen py-6 px-10 bg-[#1b1e2d]'>
			<div className='bg-[#242736] rounded-md flex justify-between items-center py-2 px-3'>
				<h2 className='text-[#0acddd] uppercase font-semibold tracking-wider'>
					players in the available zone
				</h2>
				<TransfersSelector
					filter={filter}
					changeFilterHandler={changeFilterHandler}
				/>
			</div>
			<div className='mt-6 flex justify-between items-center'>
				<h2 className='text-[#0acddd] uppercase font-semibold tracking-wider'>
					players found - {transferPlayers.length}
				</h2>
				<TransfersBalance />
			</div>
			<TransfersTable
				transferPlayers={transferPlayers}
				filter={filter}
				buyPlayer={buyPlayer}
			/>
			{isBuyPlayerModalOpen && (
				<TransfersModal
					buyPlayerAge={buyPlayerAge}
					buyPlayerPosition={buyPlayerPosition}
					buyPlayerName={buyPlayerName}
					buyPlayerPrice={buyPlayerPrice}
					buyPlayerRating={buyPlayerRating}
					cancelBuyPlayer={cancelBuyPlayer}
					confirmBuyPlayer={confirmBuyPlayer}
				/>
			)}
		</div>
	)
}
