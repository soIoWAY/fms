'use client'
import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
import { FaSearch, FaSignOutAlt } from 'react-icons/fa'
import { FaPersonRunning } from 'react-icons/fa6'
import { GrPlan } from 'react-icons/gr'
import { MdPublishedWithChanges } from 'react-icons/md'

const navLinks = [
	{ name: 'Home', icon: <AiFillHome />, href: '/dashboard' },
	{ name: 'Selection', icon: <FaSearch />, href: '/selection' },
	{ name: 'Squad', icon: <FaPersonRunning />, href: '/squad' },
	{ name: 'Transfers', icon: <MdPublishedWithChanges />, href: '/transfers' },
	{ name: 'Tactics', icon: <GrPlan />, href: '/tactics' },
	{ name: 'Retire', icon: <FaSignOutAlt />, href: '/greeting' },
]

const Navbar = () => {
	return (
		<nav className='w-[12%] bg-[#19082A] h-screen'>
			<ul className='font-semibold'>
				{navLinks.map((navLink, index) => (
					<Link
						href={navLink.href}
						onClick={() => {
							if (navLink.name === 'Retire') {
								localStorage.clear()
							}
						}}
					>
						<li
							className='flex gap-2 py-2 px-3 items-center hover:bg-[#1D2031] hover:text-[#02808A] transition-all cursor-pointer'
							key={index}
						>
							<span>{navLink.icon}</span>
							<span>{navLink.name}</span>
						</li>
					</Link>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
