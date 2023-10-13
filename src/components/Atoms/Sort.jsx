import { Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"

function SortButton() {
	return (
		<Menu>
			<MenuButton
				as={Button}
				rightIcon={<ChevronDownIcon />}>
				Sort
			</MenuButton>
			<MenuList>
				<MenuOptionGroup
					title="Alfabetically"
					type="radio"
					defaultValue="default">
					<MenuItemOption value="default">Recommended</MenuItemOption>
					<MenuItemOption value="asc">Ascending</MenuItemOption>
					<MenuItemOption value="des">Descending</MenuItemOption>
				</MenuOptionGroup>
				<MenuDivider />
				<MenuOptionGroup title="Price">
					<MenuItemOption>Lowest first</MenuItemOption>
					<MenuItemOption>Highest first</MenuItemOption>
				</MenuOptionGroup>
				<MenuDivider />
				<MenuOptionGroup title="Rate">
					<MenuItemOption>Highest first</MenuItemOption>
					<MenuItemOption>Lowest first</MenuItemOption>
				</MenuOptionGroup>
			</MenuList>
		</Menu>
	)
}

export default SortButton
