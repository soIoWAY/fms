'use client'
import LastResults from '@/components/Dashboard/LastResults/LastResults'
import Navbar from '@/components/Dashboard/Navbar/Navbar'
import NextMatch from '@/components/Dashboard/NextMatch/NextMatch'
import PlayersStats from '@/components/Dashboard/PlayersStats/PlayersStats'
import Table from '@/components/Dashboard/Table/Table'
import { useState } from 'react'

export default function DashboardPage() {
	const [tableDataUpdate, setTableDataUpdated] = useState(false)
	const [lastResultsUpdate, setLastResultsUpdate] = useState(false)
	const updateTableData = () => {
		setTableDataUpdated(!tableDataUpdate)
	}
	const updateLastResults = () => {
		setLastResultsUpdate(!lastResultsUpdate)
	}
	return (
		<div className='flex bg-[#1D202F]'>
			<Navbar />
			<main className='w-[88%] flex gap-20 py-5 px-10'>
				<div className='flex flex-col gap-20 '>
					<NextMatch
						updateTableData={updateTableData}
						updateLastResults={updateLastResults}
					/>
					<Table tableDataUpdated={tableDataUpdate} />
				</div>
				<div className='w-3/12 flex flex-col gap-6'>
					<LastResults lastResultsUpdated={lastResultsUpdate} />
					<PlayersStats />
				</div>
			</main>
		</div>
	)
}
