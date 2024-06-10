import Navbar from '@/components/Dashboard/Navbar/Navbar'
import { ReactNode } from 'react'

interface ITransfersLayout {
	children: ReactNode
}

export default function TransfersLayout({ children }: ITransfersLayout) {
	return (
		<div className='flex'>
			<Navbar />
			<div className='flex-1'>{children}</div>
		</div>
	)
}
