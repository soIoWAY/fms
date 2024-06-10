'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface INewProfile {
	onSubmit: (e: React.FormEvent) => void
}

const NewProfile = ({ onSubmit }: INewProfile) => {
	const inputStyle =
		'bg-transparent border-purple-600 border-2 rounded-md py-1 outline-none text-center font-semibold tracking-wide'
	const divInputStyle = 'flex flex-col gap-1'

	return (
		<motion.div
			initial={{ x: '100%' }}
			animate={{ x: 0 }}
			transition={{ duration: 0.5 }}
			className='flex flex-col mx-auto justify-center items-center min-h-screen gap-6 w-full'
		>
			<Image
				src='/newManager.jpg'
				width={300}
				height={300}
				alt='new manager'
				className='rounded-full border-2 border-purple-600'
			/>
			<form className='flex flex-col w-2/12' onSubmit={onSubmit}>
				<div className={divInputStyle}>
					<label htmlFor='firstName' className='font-semibold'>
						Username
					</label>
					<input type='text' id='firstName' className={inputStyle} />
				</div>
				<div className={divInputStyle}>
					<label htmlFor='firstName' className='font-semibold'>
						First name
					</label>
					<input type='text' id='firstName' className={inputStyle} />
				</div>
				<div className={divInputStyle}>
					<label htmlFor='lastName' className='font-semibold'>
						Last name
					</label>
					<input type='text' id='lastName' className={inputStyle} />
				</div>
				<div className={divInputStyle}>
					<label htmlFor='dob' className='font-semibold'>
						Date of birth
					</label>
					<input
						type='date'
						min='1960-01-01'
						max='2006-01-01'
						id='dob'
						className={inputStyle}
					/>
				</div>
				<div className={`${divInputStyle} flex items-end`}>
					<label htmlFor='signature' className='font-semibold'>
						Signature
					</label>
					<input type='text' id='signature' className={`${inputStyle} w-9`} />
				</div>
				<input
					type='submit'
					value='Continue'
					className='bg-purple-600 mt-5 py-2 cursor-pointer text-lg font-semibold'
				/>
			</form>
		</motion.div>
	)
}

export default NewProfile
