import { Link } from "react-router-dom"
import { useContext } from "react"
import { ShopContext } from "../../App"
import { getCategories } from "../../utilities/utilities"

function CategoryList({ styles = null, onClickCategory }) {
	const { productList, selectedCategory, setSelectedCategory } = useContext(ShopContext)

	const categoryList = ["All products", ...getCategories(productList)]
	const handleClickCategory = (e) => setSelectedCategory(e.target.textContent)

	return (
		<div className={styles ? `category-list ${styles}` : "category-list"}>
			<ul>
				{categoryList.map((category, index) => {
					const isCategorySelected = selectedCategory.toLowerCase() === category.toLowerCase()
					const addClassIfSelected = isCategorySelected ? " selected" : ""

					return (
						<li
							key={index}
							className={"category" + addClassIfSelected}
							onClick={onClickCategory}>
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
