import { capitalizeText, getCategories } from "../utilities/utilities"

function CategoryBar({ productsList }) {
	const categoryList = getCategories(productsList)

	return (
		<div className="category-container">
			<div className="category">
				<p>All categories</p>
			</div>
			{categoryList.map((category) => {
				return (
					<div
						key={category}
						className="category">
						<a>{capitalizeText(category)}</a>
					</div>
				)
			})}
		</div>
	)
}

export default CategoryBar
