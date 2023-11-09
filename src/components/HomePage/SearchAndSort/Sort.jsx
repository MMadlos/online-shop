import { useContext, useState } from "react"
import { SearchAndSortContext } from "../../../App"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

import SortButton from "./SortButton"
import Chip from "../../Elements/Chip"
import SortMenu from "./SortMenu"

function Sort() {
	const [isSortOpen, setIsSortOpen] = useState(false)
	const { sort, setSort } = useContext(SearchAndSortContext)
	const isSortDefault = sort.item === "Default"

	return (
		<>
			<div className="sort-container">
				<SortButton
					onClick={() => setIsSortOpen(true)}
					isActive={!isSortDefault}
				/>
				{!isSortDefault && (
					<Chip
						text={`${sort.group}: ${sort.item}`}
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

			{isSortOpen && <SortMenu onClickClose={() => setIsSortOpen(false)} />}
		</>
	)
}

export default Sort
