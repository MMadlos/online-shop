import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter } from "@fortawesome/free-solid-svg-icons"

function Filter({ onClick }) {
	return (
		<div
			className="filter-btn"
			onClick={onClick}>
			<FontAwesomeIcon icon={faFilter} />
			<p>Filter</p>
		</div>
	)
}

export default Filter
