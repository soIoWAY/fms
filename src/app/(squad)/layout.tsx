import Navbar from '@/components/Dashboard/Navbar/Navbar'
import { ReactNode } from 'react'

interface ISquadLayout {
	children: ReactNode
}

export default function SquadLayout({ children }: ISquadLayout) {
	return (
		<div className='flex'>
			<Navbar />
			<div className='flex-1'>{children}</div>
		</div>
	)
}
