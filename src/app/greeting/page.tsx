'use client'
import Contract from '@/components/Greeting/Contract'
import Greeting from '@/components/Greeting/Greeting'
import NewProfile from '@/components/Greeting/NewProfile'
import { motion, useAnimation } from 'framer-motion'
import { useState } from 'react'

export default function GreetingPage() {
	const [showNewProfile, setShowNewProfile] = useState(false)
	const [showContract, setShowContract] = useState(false)
	const controls = useAnimation()
	const newProfileControls = useAnimation()
	const startClickHandler = () => {
		setShowNewProfile(true)
		controls.start({ x: '-100%' })
	}
	const newProfileSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault()
		newProfileControls.start({ x: '-100%' }).then(() => {
			setShowContract(true)
			setTimeout(() => setShowNewProfile(false), 500)
		})
	}
	return (
		<div className='flex flex-col w-3/4 gap-6 mx-auto justify-center items-center min-h-screen overflow-x-hidden'>
			<motion.div
				animate={controls}
				initial={{ x: 0 }}
				transition={{ duration: 0.5 }}
				style={{ position: 'absolute', left: 0, width: '100%' }}
			>
				<Greeting onStartClick={startClickHandler} />
			</motion.div>
			{showNewProfile && (
				<motion.div
					initial={{ x: '100%' }}
					animate={{ x: 0 }}
					transition={{ duration: 0.5 }}
					className='absolute left-0 w-full'
				>
					<NewProfile onSubmit={newProfileSubmitHandler} />
				</motion.div>
			)}
			{showContract && (
				<motion.div
					initial={{ x: '100%' }}
					animate={{ x: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className='absolute left-0 w-full'
				>
					<Contract />
				</motion.div>
			)}
		</div>
	)
}
