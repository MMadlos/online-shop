function ActionsBar({ onChange, isFound }) {
	return (
		<div className="action-bar">
			<input
				type="search"
				id="search"
				placeholder="Mens Cotton Jacket"
				onChange={onChange}
			/>
			{!isFound && <p> Product not found with your search</p>}
			<div className="buttons-container">
				<button>Filter</button>
				<button>Sort</button>
			</div>
		</div>
	)
}

export default ActionsBar
