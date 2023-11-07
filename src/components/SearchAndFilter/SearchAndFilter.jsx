import "./styles.css"
import { ShopContext } from "../../App"
import { useContext } from "react"

import Chip from "../Elements/Chip"
import SearchBar from "./SearchBar"
import Sort from "./Sort"

function SearchAndFilter() {
	const { selectedCategory } = useContext(ShopContext)
	return (
		<div className="search-sort">
			<Chip
				text={selectedCategory}
				type="default"
			/>
			<SearchBar />
			<Sort />
		</div>
	)
}

export default SearchAndFilter
