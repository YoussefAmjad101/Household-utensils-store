
const Categories = ({ setActiveCategory, categories, activeCategory }) => {
	return (
		<div className='d-flex justify-content-center my-3'>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='select-form'
			>
				<option value=''>Select a product</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button className='btn btn-sm btn-outline-danger mx-3' onClick={() => setActiveCategory('')}>Reset</button>
		</div>
	)
}

export default Categories;