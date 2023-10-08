function ActionsBar({ onChange, isFound, onClickSort }) {
	return (
		<div className="action-bar">
			<input
				type="search"
				id="search"
				placeholder="Mens Cotton Jacket"
				onChange={onChange}
			/>
			{!isFound && <p id="search-not-found"> Product not found with your search</p>}
			<div className="buttons-container">
				<button>Filter</button>
				<button onClick={onClickSort}>Sort by price</button>
			</div>
		</div>
	)
}

export default ActionsBar
