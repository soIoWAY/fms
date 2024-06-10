import { IoMdFootball } from 'react-icons/io'
const PlayersStats = () => {
	return (
		<div className='bg-[#252837] rounded-md p-2'>
			<h2 className='text-[#05C7C7] uppercase font-bold text-sm tracking-widest'>
				Players stats
			</h2>
			<div className='flex flex-col'>
				<div className='flex items-center gap-2 border-b border-gray-500 py-1'>
					<IoMdFootball className='text-5xl' />
					<div className='leading-6'>
						<h2 className='uppercase text-gray-300'>Best goalscorer</h2>
						<h3 className='text-white font-bold'>Yarmolenko</h3>
						<h4>
							Goals: <span>11</span>
						</h4>
					</div>
				</div>
				<div className='flex items-center gap-2 border-b border-gray-500 py-1'>
					<IoMdFootball className='text-5xl' />
					<div className='leading-6'>
						<h2 className='uppercase text-gray-300'>Best goalscorer</h2>
						<h3 className='text-white font-bold'>Yarmolenko</h3>
						<h4>
							Goals: <span>11</span>
						</h4>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PlayersStats
