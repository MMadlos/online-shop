function Chip({ text, type, iconRight }) {
	// Types: default / option / accent
	return (
		<div className={type ? `chip ${type}` : "chip"}>
			<p>{text}</p>
			{iconRight}
		</div>
	)
}

export default Chip
