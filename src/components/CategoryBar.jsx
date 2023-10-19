import { capitalizeText } from "../utilities/utilities"
import { Link } from "react-router-dom"

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
						<Link
							key={category}
							to="/"
							onClick={handleClickCategory}>
							{capitalizeText(category)}
						</Link>
						<div className={"category-underline" + addClassIfSelected}></div>
					</div>
				)
			})}
		</div>
	)
}

export default CategoryBar
