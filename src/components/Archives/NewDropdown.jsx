import { ChevronDownIcon } from "@chakra-ui/icons"
import { createContext, useContext, useState } from "react"

/*
--> REFERENCIA

function NewDropdown() {
	return (
		<div className="dropdown-container">
			<button className="dropdown">
				Sort
				<ChevronDownIcon />
			</button>

			<div className="dropdown-menu">
				<button className="item">Default</button>
				<div className="divider"></div>
				<p className="group-title">Alphabetically</p>
				<button className="item">A to Z</button>
				<button className="item">Z to A</button>
				<div className="divider"></div>

				<p className="group-title">By price</p>
				<button className="item">Lowest first</button>
				<button className="item">Highest first</button>
				<div className="divider"></div>
				<p className="group-title">By rate</p>
				<button className="item">Highest first</button>
				<button className="item">Lowest first</button>
			</div>
		</div>
	)
}

*/

const SortContext = createContext({
	sortSelected: {},
	handleClickItem: () => {},
})

function NewDropdown() {
	const [isOpen, setIsOpen] = useState(false)
	const [sortSelected, setSortSelected] = useState({
		group: "Default",
		item: "Default",
	})

	const handleOpenMenu = () => setIsOpen(!isOpen)

	function handleClickItem(e) {
		const groupName = e.target.closest(".group") === null ? "Default" : e.target.closest(".group").dataset.groupName

		const itemName = e.target.textContent

		console.log({ group: groupName, item: itemName })

		setSortSelected({ group: groupName, item: itemName })
	}

	function checkSelected(group, item) {
		if (sortSelected.group === group && sortSelected.item === item) return "selected"
	}

	return (
		<Menu>
			<MenuButton
				right={<ChevronDownIcon className="chevron-down" />}
				onClick={handleOpenMenu}>
				Sort
			</MenuButton>

			{isOpen && (
				<MenuList>
					<SortContext.Provider value={{ handleClickItem }}>
						<MenuItem>Default</MenuItem>
						<MenuDivider />
						<MenuGroup title="Alphabetically">
							<MenuItem isSelected={checkSelected("Alphabetically", "A to Z")}>A to Z</MenuItem>
							<MenuItem>Z to A</MenuItem>
						</MenuGroup>
						<MenuDivider />
						<MenuGroup title="By price">
							<MenuItem>Lowest first</MenuItem>
							<MenuItem>Highest first</MenuItem>
						</MenuGroup>
						<MenuDivider />
						<MenuGroup title="By rate">
							<MenuItem>Highest first</MenuItem>
							<MenuItem>Lowest first</MenuItem>
						</MenuGroup>
					</SortContext.Provider>
				</MenuList>
			)}
		</Menu>
	)
}

function Menu({ children }) {
	return <div className="dropdown-container">{children}</div>
}

function MenuButton({ left, right, children, onClick }) {
	return (
		<button
			className="dropdown"
			onClick={onClick}>
			{left}
			{children}
			{right}
		</button>
	)
}

function MenuList({ children }) {
	return <div className="dropdown-menu">{children}</div>
}
function MenuGroup({ title, children }) {
	return (
		<div
			className="group"
			data-group-name={title}>
			<p className="group-title">{title}</p>
			{children}
		</div>
	)
}
function MenuDivider() {
	return <div className="divider"></div>
}
function MenuItem({ children, isSelected = false }) {
	const { handleClickItem } = useContext(SortContext)

	const styles = isSelected ? "item selected" : "item"

	return (
		<button
			className={styles}
			onClick={handleClickItem}>
			{children}
		</button>
	)
}

export default NewDropdown
