import Image from 'next/image'
interface IMatch {
	myTeamName: string
	enemyTeamName: string
}
const Match = ({ myTeamName, enemyTeamName }: IMatch) => {
	return (
		<div className='flex items-center'>
			<div>
				<Image src='/sd.svg' alt='enemyTeam' width={200} height={200} />
			</div>
			<div className='font-semibold flex flex-col items-center'>
				<h2 className='uppercase text-md pb-2 text-[#05C7C7]'>Next match</h2>
				<div className='flex flex-col items-center border-t border-b py-2 text-lg'>
					<div className='flex gap-3'>
						<span className='w-20'>
							{myTeamName === undefined ? '' : myTeamName}
						</span>
						<span>-</span>
						<span className='w-20'>{enemyTeamName}</span>
					</div>
					<p className='text-base text-gray-300 flex gap-1'>
						<span>1</span>-<span>3</span>
					</p>
					<p className='text-sm text-gray-300'>Ukraine Premier League</p>
				</div>
			</div>
			<div>
				<Image src='/rukh.svg' alt='myTeam' width={200} height={200} />
			</div>
		</div>
	)
}

export default Match
