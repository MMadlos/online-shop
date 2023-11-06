import "./styles.css"
import { ShopContext } from "../../App"
import { useContext } from "react"
import { capitalizeFirstLetter } from "../../utilities/utilities"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

import Chip from "../Elements/Chip"
import Filter from "../Elements/Filter"
import SearchBar from "../Elements/SearchBar"

function SearchAndFilter() {
	const { selectedCategory } = useContext(ShopContext)

	return (
		<div className="search-filter">
			<Chip
				text={capitalizeFirstLetter(selectedCategory)}
				type="default"
			/>

			<SearchBar />

			<div className="filter">
				<Filter />
				<Chip
					text="Option selected"
					type="option"
					iconRight={<FontAwesomeIcon icon={faXmark} />}
				/>
			</div>
		</div>
	)
}

export default SearchAndFilter
