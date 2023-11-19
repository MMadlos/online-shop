import { Link } from "react-router-dom"
import { useContext } from "react"
import { ShopContext } from "../../App"
import { getCategories } from "../../utilities/utilities"

function CategoryList({ isMobile = false, onClickCategory }) {
	const { productList, selectedCategory, setSelectedCategory } = useContext(ShopContext)

	const categoryList = ["All products", ...getCategories(productList)]
	const handleClickCategory = (e) => {
		setSelectedCategory(e.target.textContent)
		onClickCategory
	}

	const _isMobile = isMobile === true

	return (
		<div className={_isMobile ? `category-list mobile` : "category-list"}>
			<ul>
				{categoryList.map((category, index) => {
					const isCategorySelected = selectedCategory.toLowerCase() === category.toLowerCase()
					const addClassIfSelected = isCategorySelected ? " selected" : ""

					return (
						<li
							key={index}
							className={"category" + addClassIfSelected}>
							<Link
								to="/"
								onClick={handleClickCategory}>
								{category}
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default CategoryList
