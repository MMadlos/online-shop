import { capitalizeText } from "../utilities/utilities"
import { Link } from "react-router-dom"

import { useContext } from "react"
import { ShopContext } from "../App"
import { getCategories } from "../utilities/utilities"

function CategoryBar() {
	const { productList, selectedCategory, setSelectedCategory } = useContext(ShopContext)

	const categoryList = ["All categories", ...getCategories(productList)]
	const handleClickCategory = (e) => setSelectedCategory(e.target.textContent)

	return (
		<div className="category-container">
			{/* <div className="filler-container">
				<div className="filler"></div>
			</div> */}
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
