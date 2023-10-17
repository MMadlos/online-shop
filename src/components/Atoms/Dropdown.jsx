import { Fragment, useState } from "react"
import { ChevronDownIcon } from "@chakra-ui/icons"

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
	const [sort, setSort] = useState({
		group: "Default",
		item: "Default",
	})

	const stylesIfOpen = isOpen ? "dropdown selected" : "dropdown"

	function handleClickMenuItem(e) {
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
				className={stylesIfOpen}
				onClick={() => setIsOpen(!isOpen)}>
				<p>Sort</p>
				<ChevronDownIcon className="chevron-down" />
			</button>

			{isOpen && (
				<Menu>
					<MenuItem
						text="Default"
						groupName="Default"
						isSelected={sort.item === "Default"}
						onClick={handleClickMenuItem}
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
											onClick={handleClickMenuItem}
											isSelected={checkIfSelected(groupTitle, item)}
										/>
									)
								})}
							</Fragment>
						)
					})}
				</Menu>
			)}
		</div>
	)
}

function Menu({ children }) {
	return <div className="dropdown-menu">{children}</div>
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
