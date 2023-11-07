import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter } from "@fortawesome/free-solid-svg-icons"

function SortButton({ onClick, isActive }) {
	return (
		<div
			className={isActive ? "sort-btn selected" : "sort-btn"}
			onClick={onClick}>
			<FontAwesomeIcon icon={faFilter} />
			<p>Sort</p>
		</div>
	)
}

export default SortButton
