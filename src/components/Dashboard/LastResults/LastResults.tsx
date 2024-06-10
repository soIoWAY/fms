'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface ILastResults {
	lastResultsUpdated: boolean
}

const LastResults = ({ lastResultsUpdated }: ILastResults) => {
	const [lastResults, setLastResults] = useState<any[]>([])
	useEffect(() => {
		const storedResultsJSON = localStorage.getItem('results')
		if (storedResultsJSON) {
			setLastResults(JSON.parse(storedResultsJSON))
		} else {
			setLastResults([])
		}
		// return () => {
		// 	second
		// }
	}, [lastResultsUpdated])
	console.log(lastResults)
	return (
		<div className='bg-[#252837] flex flex-col p-2 rounded-md'>
			<h2 className='text-[#05C7C7] uppercase font-bold text-sm tracking-widest mb-2'>
				Last results
			</h2>
			{lastResults.map((lastResult, index) => (
				<div
					className={`flex justify-between items-center py-1 px-2 ${
						index % 2 === 0 ? 'bg-[#1C1F2E]' : 'bg-[#2B3040]'
					}`}
					key={index}
				>
					<div className='flex items-center'>
						<Image
							src={
								lastResult.team2.name === 'Shakhtar' ? '/sd.svg' : '/zorya.svg'
							}
							width={35}
							height={35}
							alt={lastResult.name}
						/>
						<span className='ml-2 '>{lastResult.team2.name}</span>
					</div>
					<div className='flex items-center gap-6'>
						<div
							className={`w-4 h-4 rounded-full ${
								lastResult.team1Score > lastResult.team2Score
									? 'bg-green-500'
									: 'bg-red-500'
							}`}
						></div>
						<div className='flex gap-2'>
							<span>{lastResult.team1Score}</span>
							<span>-</span>
							<span>{lastResult.team2Score}</span>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default LastResults
