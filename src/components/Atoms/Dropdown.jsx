import { Fragment, useState } from "react"
import { SearchAndSortContext } from "../../App"
import { useContext } from "react"

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

function Dropdown() {
	const [isOpen, setIsOpen] = useState(false)
	const { sort, setSort } = useContext(SearchAndSortContext)

	const stylesIfOpen = isOpen ? "dropdown selected" : "dropdown"

	function handleClickItem(e) {
		setIsOpen(!isOpen)
		handleClickSort(e)
	}

	function handleClickSort(e) {
		const { groupName } = e.target.dataset
		const itemName = e.target.textContent
		const selectedItem = { group: groupName, item: itemName }
		setSort(selectedItem)
	}

	function checkIfSelected(group, item) {
		return sort.group === group && sort.item === item
	}

	return (
		<div className="dropdown-container">
			<button
				id="sort"
				className={stylesIfOpen}
				onClick={() => setIsOpen(!isOpen)}>
				Sort <i className="fa-solid fa-chevron-down"></i>
			</button>

			{isOpen && (
				<div className="dropdown-menu">
					<MenuItem
						text="Default"
						groupName="Default"
						isSelected={sort.item === "Default"}
						onClick={handleClickItem}
					/>
					{sortItems.map((group, index) => {
						const { groupTitle, items } = group

						return (
							<Fragment key={index}>
								<MenuDivider />
								<MenuGroupTitle text={groupTitle} />
								{items.map((item, index) => {
									return (
										<MenuItem
											key={index}
											text={item}
											groupName={groupTitle}
											onClick={handleClickItem}
											isSelected={checkIfSelected(groupTitle, item)}
										/>
									)
								})}
							</Fragment>
						)
					})}
				</div>
			)}
		</div>
	)
}

function MenuItem({ text, isSelected = false, onClick, groupName }) {
	const styles = isSelected ? "item selected" : "item"

	return (
		<button
			data-group-name={groupName}
			className={styles}
			onClick={onClick}>
			{text}
		</button>
	)
}

function MenuGroupTitle({ text }) {
	return <p className="group-title">{text}</p>
}
function MenuDivider() {
	return <div className="divider"></div>
}

export default Dropdown
