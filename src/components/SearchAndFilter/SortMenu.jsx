import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

import { useContext } from "react"
import { SearchAndSortContext } from "../../App"

const sortItems = [
	{
		groupTitle: "Alphabetically",
		items: ["A to Z", "Z to A"],
	},
	{
		groupTitle: "By price",
		items: ["Lowest first", "Highest first"],
	},
	{
		groupTitle: "By rate",
		items: ["Highest first", "Lowest first"],
	},
]

function SortMenu({ onClickClose }) {
	const { sort, setSort } = useContext(SearchAndSortContext)

	const isSortDefault = sort.group === "Default"

	function handleClickSortItem(groupName, itemName) {
		const sortItem = { group: groupName, item: itemName }
		setSort(sortItem)
		onClickClose()
	}

	return (
		<div className="sort-menu-container">
			<div className="title">
				<p>Sort</p>
				<FontAwesomeIcon
					icon={faChevronLeft}
					onClick={onClickClose}
				/>
			</div>
			<div className="separator"></div>

			<p
				className={isSortDefault ? "sort-item selected" : "sort-item"}
				data-group-name="Default"
				onClick={() => handleClickSortItem("Default", "Default")}>
				Default
			</p>

			{sortItems.map((group, index) => {
				const { groupTitle, items } = group

				return (
					<div
						key={index}
						className="sort-group">
						<p className="group-title">{groupTitle}</p>
						<div className="separator"></div>
						{items.map((item, index) => {
							const isSelected = sort.group === groupTitle && sort.item === item

							return (
								<p
									key={index}
									className={isSelected ? "sort-item selected" : "sort-item"}
									data-group-name={groupTitle}
									onClick={() => handleClickSortItem(groupTitle, item)}>
									{item}
								</p>
							)
						})}
					</div>
				)
			})}
		</div>
	)
}

export default SortMenu
