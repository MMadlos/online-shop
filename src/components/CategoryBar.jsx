import { capitalizeText, getCategories } from "../utilities/utilities"

function CategoryBar({ productsList, onClick, selectedCategory }) {
	const categoryList = ["All categories", ...getCategories(productsList)]

	return (
		<div className="category-container">
			{categoryList.map((category) => {
				const addClassIfSelected = selectedCategory.toLowerCase() === category.toLowerCase() ? "category selected" : "category"

				return (
					<div
						key={category}
						className={addClassIfSelected}>
						<a onClick={onClick}>{capitalizeText(category)}</a>
					</div>
				)
			})}
		</div>
	)
}

export default CategoryBar
