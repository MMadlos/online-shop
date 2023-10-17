import { Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { useState } from "react"

function SortButton() {
	const [selected, setSelected] = useState("asc")

	return (
		<Menu id="sort-btn">
			<MenuButton
				as={Button}
				rightIcon={<ChevronDownIcon />}>
				Sort
			</MenuButton>
			<MenuList>
				<MenuItem
					className={selected === "default" ? "selected" : ""}
					onClick={setSelected("def")}>
					Default
				</MenuItem>
				<MenuDivider />
				<MenuGroup title="Alphabetically">
					<MenuItem
						pl="32px"
						className={selected === "asc" ? "selected" : ""}>
						A to Z
					</MenuItem>
					<MenuItem pl="32px">Z to A</MenuItem>
				</MenuGroup>
				<MenuDivider />
				<MenuGroup title="Price">
					<MenuItem pl="32px">Lowest first</MenuItem>
					<MenuItem pl="32px">Highest first</MenuItem>
				</MenuGroup>
				<MenuDivider />
				<MenuGroup title="Rate">
					<MenuItem pl="32px">Highest first</MenuItem>
					<MenuItem pl="32px">Lowest first</MenuItem>
				</MenuGroup>
			</MenuList>
		</Menu>
	)
}

export default SortButton
