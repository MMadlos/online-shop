import { capitalizeText, getCategories } from "../utilities/utilities"

function CategoryBar({ productsList, onClick, selectedCategory }) {
	const categoryList = getCategories(productsList)

	function isSelectedCategory(category) {
		return selectedCategory.toLowerCase() === category ? "selected" : ""
	}

	return (
		<div className="category-container">
			<div className={`category ${isSelectedCategory("All categories")}`}>
				<a onClick={onClick}>All categories</a>
			</div>
			{categoryList.map((category) => {
				const ifSelected = isSelectedCategory(category)

				return (
					<div
						key={category}
						className={`category ${ifSelected}`}>
						<a onClick={onClick}>{capitalizeText(category)}</a>
					</div>
				)
			})}
		</div>
	)
}

export default CategoryBar
