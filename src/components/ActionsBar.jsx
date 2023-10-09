import { useContext } from "react"
import { ShopContext } from "../App"

function ActionsBar() {
	const { handleChangeSearch, isProductFound, handleClickSort } = useContext(ShopContext)

	return (
		<div className="action-bar">
			<input
				type="search"
				id="search"
				placeholder="Mens Cotton Jacket"
				onChange={handleChangeSearch}
			/>
			{!isProductFound && <p id="search-not-found"> Product not found with your search</p>}
			<div className="buttons-container">
				<button>Filter</button>
				<button onClick={handleClickSort}>Sort by price</button>
			</div>
		</div>
	)
}

export default ActionsBar
