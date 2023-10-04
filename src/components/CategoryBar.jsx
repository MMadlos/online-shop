function capitalizeText(text) {
	const firstLetter = text.slice(0, 1).toUpperCase()
	const restText = text.slice(1)
	const word = firstLetter + restText
	return word
}

function CategoryBar({ categories }) {
	return (
		<div className="category-container">
			<div className="category">
				<p>All categories</p>
			</div>
			{categories.map((category) => {
				return (
					<div
						key={category}
						className="category">
						<p>{capitalizeText(category)}</p>
					</div>
				)
			})}
		</div>
	)
}

export default CategoryBar
