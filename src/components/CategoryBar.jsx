import { capitalizeText, getCategories } from "../utilities/utilities"

import { useContext } from "react"
import { ShopContext } from "../App"

function CategoryBar() {
	const { productList, handleClickCategory, selectedCategory } = useContext(ShopContext)

	const categoryList = ["All categories", ...getCategories(productList)]

	return (
		<div className="category-container">
			{categoryList.map((category) => {
				const addClassIfSelected = selectedCategory.toLowerCase() === category.toLowerCase() ? "category selected" : "category"

				return (
					<div
						key={category}
						className={addClassIfSelected}>
						<a onClick={handleClickCategory}>{capitalizeText(category)}</a>
					</div>
				)
			})}
		</div>
	)
}

export default CategoryBar
