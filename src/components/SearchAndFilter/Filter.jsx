import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter } from "@fortawesome/free-solid-svg-icons"

function Filter({ onClick, isActive }) {
	return (
		<div
			className={isActive ? "filter-btn selected" : "filter-btn"}
			onClick={onClick}>
			<FontAwesomeIcon icon={faFilter} />
			<p>Filter</p>
		</div>
	)
}

export default Filter
