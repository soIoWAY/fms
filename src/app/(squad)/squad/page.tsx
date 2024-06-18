'use client'
import SquadSelector from '@/components/Squad/SquadSelector'
import SquadTable from '@/components/Squad/SquadTable'
import TransfersModal from '@/components/Transfers/TransfersModal'
import { Player } from '@/types/Player'
import { useEffect, useState } from 'react'

export default function SquadPage() {
	const [players, setPlayers] = useState<Player[]>([])
	const [transferBalance, setTransferBalance] = useState(0)
	const [filter, setFilter] = useState('position')
	const [isTransferModalOpen, setIsTransferModalOpen] = useState(false)
	const [sellPlayerName, setSellPlayerName] = useState('')
	const [sellPlayerRating, setSellPlayerRating] = useState(0)
	const [sellPlayerAge, setSellPlayerAge] = useState(0)
	const [sellPlayerPosition, setSellPlayerPosition] = useState('')
	const [sellPlayerPrice, setSellPlayerPrice] = useState(0)
	const changeFilterHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFilter(e.target.value)
	}
	const sellPlayer = (
		name: string,
		age: number,
		rating: number,
		position: string,
		price: number
	) => {
		setIsTransferModalOpen(true)
		setSellPlayerName(name)
		setSellPlayerRating(rating)
		setSellPlayerAge(age)
		setSellPlayerPosition(position)
		setSellPlayerPrice(price)
	}
	const cancelSellPlayer = () => {
		setIsTransferModalOpen(false)
	}
	const confirmSellPlayer = (
		name: string,
		position: string,
		age: number,
		rating: number,
		price: number
	) => {
		if (players.length > 11) {
			const soldPlayerIndex = players.findIndex(player => player.name === name)
			if (soldPlayerIndex !== -1) {
				players.splice(soldPlayerIndex, 1)
				localStorage.setItem('players', JSON.stringify(players))
				const currentBalance = localStorage.getItem('transferBalance')
				let transferBalance = 0
				if (currentBalance) {
					transferBalance = JSON.parse(currentBalance)
				}
				transferBalance += price
				localStorage.setItem('transferBalance', JSON.stringify(transferBalance))
				setIsTransferModalOpen(false)
			} else {
				console.error(`Player with name ${name} not found.`)
			}
		} else {
			alert('В команді має бути принаймі 11 гравців')
		}
	}
	useEffect(() => {
		const storedPlayersJSON = localStorage.getItem('players')
		const storedTransferBalanceJSON = localStorage.getItem('transferBalance')
		if (storedPlayersJSON && storedTransferBalanceJSON) {
			const storedPlayer = JSON.parse(storedPlayersJSON)
			const storedTransferBalance = JSON.parse(storedTransferBalanceJSON)
			setPlayers(storedPlayer)
			setTransferBalance(storedTransferBalance)
		}
	}, [])
	return (
		<div className='min-h-screen bg-[#1b1e2d] py-6 px-10'>
			<SquadSelector
				filter={filter}
				changeFilterHandler={changeFilterHandler}
			/>
			<SquadTable players={players} filter={filter} sellPlayer={sellPlayer} />
			{isTransferModalOpen && (
				<TransfersModal
					buyPlayerName={sellPlayerName}
					buyPlayerRating={sellPlayerRating}
					buyPlayerAge={sellPlayerAge}
					buyPlayerPosition={sellPlayerPosition}
					buyPlayerPrice={sellPlayerPrice}
					cancelBuyPlayer={cancelSellPlayer}
					confirmBuyPlayer={confirmSellPlayer}
				/>
			)}
		</div>
	)
}
