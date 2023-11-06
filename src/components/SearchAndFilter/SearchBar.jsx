import { useContext } from "react"
import { SearchAndSortContext } from "../../App"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

function SearchBar() {
	const { handleChangeSearch, isProductFound } = useContext(SearchAndSortContext)
	// TODO - Add a wrapper for search-container and search-not-found to put the message below the container
	return (
		<div className="search-container">
			<div className="search-bar">
				<form action="search">
					<FontAwesomeIcon icon={faMagnifyingGlass} />
					<input
						name="search"
						type="search"
						placeholder="Casual jacket"
						onChange={handleChangeSearch}
					/>
				</form>
			</div>
			{!isProductFound && <p className="search-not-found"> Product not found. Try to use other words.</p>}
		</div>
	)
}

export default SearchBar
