import { useContext } from "react"
import { ShopContext } from "../App"
import Dropdown from "./Atoms/Dropdown"

function ActionsBar() {
	const { handleChangeSearch, isProductFound, sort } = useContext(ShopContext)
	const { item, group } = sort

	return (
		<div className="action-bar">
			<input
				type="search"
				id="search"
				placeholder="Mens Cotton Jacket"
				onChange={handleChangeSearch}
			/>
			{item !== "Default" && (
				<p>
					Sorted: {group} - {item}
				</p>
			)}
			{!isProductFound && <p id="search-not-found"> Product not found with your search</p>}
			<div className="buttons-container">
				<Dropdown />
			</div>
		</div>
	)
}

export default ActionsBar
