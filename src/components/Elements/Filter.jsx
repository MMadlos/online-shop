import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter } from "@fortawesome/free-solid-svg-icons"

function Filter() {
	return (
		<div className="filter-btn">
			<FontAwesomeIcon icon={faFilter} />
			<p>Filter</p>
		</div>
	)
}

export default Filter
