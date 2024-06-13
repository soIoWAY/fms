interface ISquadSelector {
	filter: string
	changeFilterHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SquadSelector = ({ filter, changeFilterHandler }: ISquadSelector) => {
	return (
		<div className='flex justify-between items-center'>
			<h2 className='text-[#0acddd] uppercase font-semibold tracking-wider'>
				Players
			</h2>
			<select
				className='flex items-center tracking-wider bg-[#5d6573] px-1 py-1 rounded-lg'
				value={filter}
				onChange={changeFilterHandler}
			>
				<option value='goals'>Goals</option>
				<option value='gpasses'>Gpasses</option>
				<option value='age'>Age</option>
				<option value='position'>Position</option>
			</select>
		</div>
	)
}

export default SquadSelector
