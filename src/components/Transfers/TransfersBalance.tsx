import { formatNumber } from '@/functions/formatNumber'

interface ITransfersBalance {
	transferBalance: number
}

const TransfersBalance = ({ transferBalance }: ITransfersBalance) => {
	return (
		<div className='flex flex-col text-center bg-[#242633] p-2 rounded-md'>
			<h2 className='uppercase text-sm text-gray-300'>Transfer balance</h2>
			<span className='text-white font-semibold'>
				{formatNumber(transferBalance)}$
			</span>
		</div>
	)
}

export default TransfersBalance
