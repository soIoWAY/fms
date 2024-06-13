'use client'
import SquadSelector from '@/components/Squad/SquadSelector'
import SquadTable from '@/components/Squad/SquadTable'
import TransfersModal from '@/components/Transfers/TransfersModal'
import { Player } from '@/types/Player'
import { useEffect, useState } from 'react'

export default function SquadPage() {
	const [players, setPlayers] = useState<Player[]>([])
	const [filter, setFilter] = useState('position')
	const [isTransferModalOpen, setIsTransferModalOpen] = useState(false)
	const [sellPlayerName, setSellPlayerName] = useState('')
	const [sellPlayerRating, setSellPlayerRating] = useState(0)
	const [sellPlayerAge, setSellPlayerAge] = useState(0)
	const [sellPlayerPosition, setSellPlayerPosition] = useState('')
	const changeFilterHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFilter(e.target.value)
	}
	const sellPlayer = (
		name: string,
		age: number,
		rating: number,
		position: string
	) => {
		setIsTransferModalOpen(true)
		setSellPlayerName(name)
		setSellPlayerRating(rating)
		setSellPlayerAge(age)
		setSellPlayerPosition(position)
	}
	const cancelSellPlayer = () => {
		setIsTransferModalOpen(false)
	}
	const confirmSellPlayer = (name: string) => {
		const soldPlayerIndex = players.findIndex(player => player.name === name)
		players.splice(soldPlayerIndex, 1)
		localStorage.setItem('players', JSON.stringify(players))
		setIsTransferModalOpen(false)
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
					cancelBuyPlayer={cancelSellPlayer}
					confirmBuyPlayer={confirmSellPlayer}
				/>
			)}
		</div>
	)
}
