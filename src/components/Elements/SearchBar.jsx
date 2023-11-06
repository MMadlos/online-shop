import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

function SearchBar() {
	return (
		<div className="search-container">
			<FontAwesomeIcon icon={faMagnifyingGlass} />
			<input
				type="search"
				placeholder="Casual jacket"
			/>
		</div>
	)
}

export default SearchBar
