import { formatNumber } from '@/functions/formatNumber'

interface ITransfersModal {
	buyPlayerName: string
	buyPlayerRating: number
	buyPlayerPrice: number
	buyPlayerAge: number
	buyPlayerPosition: string
	cancelBuyPlayer: () => void
	confirmBuyPlayer: (
		name: string,
		position: string,
		age: number,
		rating: number
	) => void
}

const TransfersModal = ({
	buyPlayerName,
	buyPlayerAge,
	buyPlayerPosition,
	buyPlayerPrice,
	buyPlayerRating,
	cancelBuyPlayer,
	confirmBuyPlayer,
}: ITransfersModal) => {
	return (
		<div className='bg-[#000] bg-opacity-50 absolute h-screen top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
			<div className='flex flex-col bg-[#1d2031] px-5 py-3 rounded-md w-2/12'>
				<h2 className='uppercase text-center font-semibold'>Transfer</h2>
				<div className='mt-2 flex flex-col'>
					<div className='flex flex-col'>
						<span className='uppercase text-[12px] font-semibold text-gray-400'>
							player name
						</span>
						<span className='tracking-wide'>{buyPlayerName}</span>
					</div>
					<div className='flex flex-col'>
						<span className='uppercase text-[12px] font-semibold text-gray-400'>
							age
						</span>
						<span className='tracking-wide'>{buyPlayerAge}</span>
					</div>
					<div className='flex flex-col'>
						<span className='uppercase text-[12px] font-semibold text-gray-400'>
							rating
						</span>
						<span className='tracking-wide'>{buyPlayerRating}</span>
					</div>
					<div className='flex flex-col'>
						<span className='uppercase text-[12px] font-semibold text-gray-400'>
							position
						</span>
						<span className='tracking-wide'>{buyPlayerPosition}</span>
					</div>
					<div className='flex flex-col'>
						<span className='uppercase text-[12px] font-semibold text-gray-400'>
							price
						</span>
						<span className='tracking-wide'>
							{formatNumber(buyPlayerPrice)}$
						</span>
					</div>
				</div>
				<div className='flex gap-3 justify-end mt-3'>
					<button
						className='bg-[#027781] px-3 rounded-md'
						onClick={() =>
							confirmBuyPlayer(
								buyPlayerName,
								buyPlayerPosition,
								buyPlayerAge,
								buyPlayerRating
							)
						}
					>
						Yes
					</button>
					<button
						className='border-2 px-3 rounded-md'
						onClick={cancelBuyPlayer}
					>
						No
					</button>
				</div>
			</div>
		</div>
	)
}

export default TransfersModal
