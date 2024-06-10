import { motion } from 'framer-motion'
import Image from 'next/image'

interface IGreeting {
	onStartClick: () => void
}

const Greeting = ({ onStartClick }: IGreeting) => {
	return (
		<motion.div
			initial={{ x: 0 }}
			animate={{ x: 0 }}
			exit={{ x: '-100%' }}
			transition={{ duration: 0.5 }}
			className='flex flex-col w-2/4 gap-6 mx-auto justify-center items-center'
		>
			<Image
				src='/greeting.jpg'
				alt='greeting'
				width={300}
				height={300}
				className='rounded-full border-2 border-purple-600'
			/>
			<div className='text-center'>
				<h1 className='text-3xl font-semibold'>Hello!</h1>
				<p>
					Are you a football fanatic? Then you would definitely like to become
					the manager of the club and lead it to the top. FSM24 will give you
					such an opportunity. Create your own club and win all possible
					trophies.
				</p>
			</div>
			<button
				className='bg-purple-600 px-3 py-2 font-bold rounded-md'
				onClick={onStartClick}
			>
				Let`s start
			</button>
		</motion.div>
	)
}

export default Greeting
