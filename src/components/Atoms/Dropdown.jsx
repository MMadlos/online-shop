import { ChevronDownIcon } from "@chakra-ui/icons"

function Dropdown() {
	return (
		<button className="dropdown">
			<p>Sort</p>
			<ChevronDownIcon className="chevron-down" />
		</button>
	)
}

export default Dropdown
