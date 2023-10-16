import { ChevronDownIcon } from "@chakra-ui/icons"

function Dropdown() {
	return (
		<div className="dropdown-container">
			<button className="dropdown">
				<p>Sort</p>
				<ChevronDownIcon className="chevron-down" />
			</button>

			<Menu>
				<MenuItem
					text="Default"
					isSelected="true"
				/>
				<MenuDivider />
				<MenuGroupTitle text="Alphabetically" />
				<MenuItem text="A to Z" />
				<MenuItem text="Z to A" />
				<MenuDivider />
				<MenuGroupTitle text="By price" />
				<MenuItem text="Lowest first" />
				<MenuItem text="Highest first" />
				<MenuDivider />
				<MenuGroupTitle text="By rate" />
				<MenuItem text="Highest first" />
				<MenuItem text="Lowest first" />
			</Menu>
		</div>
	)
}

function Menu({ children }) {
	return <div className="dropdown-menu">{children}</div>
}

function MenuItem({ text, isSelected = false }) {
	const ifSelected = isSelected ? "item selected" : "item"

	return <button className={ifSelected}>{text}</button>
}

function MenuGroupTitle({ text }) {
	return <p className="group-title">{text}</p>
}
function MenuDivider() {
	return <div className="divider"></div>
}

export default Dropdown
