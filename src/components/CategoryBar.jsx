import { capitalizeText, getCategories } from "../utilities/utilities"

function CategoryBar({ productsList, onClick }) {
	const categoryList = getCategories(productsList)

	return (
		<div className="category-container">
			<div className="category">
				<a onClick={onClick}>All categories</a>
			</div>
			{categoryList.map((category) => {
				return (
					<div
						key={category}
						className="category">
						<a onClick={onClick}>{capitalizeText(category)}</a>
					</div>
				)
			})}
		</div>
	)
}

export default CategoryBar
