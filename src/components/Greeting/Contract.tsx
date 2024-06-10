import Image from 'next/image'
import Link from 'next/link'

const Contract = () => {
	return (
		<div className='flex flex-col mx-auto justify-center items-center min-h-screen gap-6 w-2/4 '>
			<Image
				src='/contract.jpg'
				width={300}
				height={300}
				alt='contract'
				className='rounded-full border-2 border-purple-600'
			/>
			<div className='flex flex-col gap-3 border border-purple-600 p-3 rounded-md'>
				<p>
					Football club
					<span className='text-purple-500 font-bold'>"Rukh"</span> and the
					general director conclude this contract with{' '}
					<span className='text-purple-500 font-bold'>Vitaly Myronyuk</span> for
					the position of head coach for team management of the football club
					<span className='text-purple-500 font-bold'>"Rukh"</span>.
				</p>
				<p>
					This contract is valid for{' '}
					<span className='text-purple-500 font-bold'>two years</span>.
				</p>
				<p>
					Vitaliy Myronyuk will receive a salary of{' '}
					<span className='text-purple-500 font-bold'>2.5k$</span> per month,
					which will be paid monthly during the term of the contract.
				</p>

				<p>
					After a long search, the{' '}
					<span className='text-purple-500 font-bold'>Rukh</span> club hired a
					new manager without significant work experience. Fans were surprised
					by the appearance of such an inexperienced specialist, however, we
					believe in the potential and abilities of Mr. Myronyuk. We hope that
					he will be able to show his skills and bring success to the team in
					the new season.
				</p>

				<div className='flex flex-col items-end text-left mt-6'>
					<p>
						Dated this{' '}
						<span className='text-purple-500 font-bold'>01.05.2024</span>.
					</p>
					<p>
						Football team "Rukh"{' '}
						<em className='text-purple-500 font-bold underline'>KL</em>
					</p>
					<p>
						Віталій Миронюк{' '}
						<em className='text-purple-600 font-bold underline'>VM</em>
					</p>
				</div>
			</div>
			<Link
				href='/dashboard'
				className='bg-purple-600 px-5 py-2 rounded-md font-bold mb-5'
			>
				Okay
			</Link>
		</div>
	)
}

export default Contract
