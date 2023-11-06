import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

function SearchBar() {
	return (
		<div>
			<FontAwesomeIcon icon={faMagnifyingGlass} />
			<input type="search" />
		</div>
	)
}

export default SearchBar
