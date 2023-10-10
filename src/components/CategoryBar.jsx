import { capitalizeText } from "../utilities/utilities"

import { useContext } from "react"
import { ShopContext } from "../App"

function CategoryBar() {
	const { categoryList, handleClickCategory, selectedCategory } = useContext(ShopContext)

	return (
		<div className="category-container">
			{categoryList.map((category) => {
				const isCategorySelected = selectedCategory.toLowerCase() === category.toLowerCase()
				const addClassIfSelected = isCategorySelected ? " selected" : ""

				return (
					<div
						key={category}
						className={"category" + addClassIfSelected}>
						<a onClick={handleClickCategory}>{capitalizeText(category)}</a>
					</div>
				)
			})}
		</div>
	)
}

export default CategoryBar
