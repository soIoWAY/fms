interface ITransfersSelector {
	filter: string
	changeFilterHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const TransfersSelector = ({
	filter,
	changeFilterHandler,
}: ITransfersSelector) => {
	return (
		<select
			value={filter}
			onChange={changeFilterHandler}
			className='flex items-center tracking-wider bg-[#5d6573] px-3 py-2 rounded-lg'
		>
			<option value='maxPrice'>Max price</option>
			<option value='minPrice'>Min price</option>
			<option value='maxAge'>Max age</option>
			<option value='minAge'>Min age</option>
			<option value='maxRate'>Max rate</option>
			<option value='minRate'>Min rate</option>
			<option value='position'>Position</option>
		</select>
	)
}

export default TransfersSelector
