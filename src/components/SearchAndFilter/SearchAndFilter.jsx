import "./styles.css"
import { ShopContext, SearchAndSortContext } from "../../App"
import { useContext, useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

import Chip from "../Elements/Chip"
import Filter from "../Elements/Filter"
import SearchBar from "../Elements/SearchBar"
import FilterPage from "./FilterPage"

function SearchAndFilter() {
	const [isFilterOpen, setIsFilterOpen] = useState(false)

	const { selectedCategory } = useContext(ShopContext)
	const { sort, setSort } = useContext(SearchAndSortContext)

	const isSortDefault = sort.item === "Default"

	return (
		<div className="search-filter">
			<Chip
				text={selectedCategory}
				type="default"
			/>

			<SearchBar />

			<div className="filter">
				<Filter onClick={() => setIsFilterOpen(true)} />
				{!isSortDefault && (
					<Chip
						text={sort.item}
						type="option"
						iconRight={
							<FontAwesomeIcon
								icon={faXmark}
								onClick={() => setSort({ group: "Default", item: "Default" })}
							/>
						}
					/>
				)}
			</div>

			{isFilterOpen && <FilterPage onClickClose={() => setIsFilterOpen(false)} />}
		</div>
	)
}

export default SearchAndFilter
