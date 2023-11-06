import "./styles.css"
import { capitalizeFirstLetter } from "../../utilities/utilities"

function Chip({ text, type, iconRight }) {
	// Types: default / option / accent
	return (
		<div className={type ? `chip ${type}` : "chip"}>
			<p>{capitalizeFirstLetter(text)}</p>
			{iconRight}
		</div>
	)
}

export default Chip
