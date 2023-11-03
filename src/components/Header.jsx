import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons"

import { useContext } from "react"
import { ShopContext } from "../App"
import { getCategories } from "../utilities/utilities"

export function CartIcon({ cartQuantity }) {
	const cartHasProduct = cartQuantity !== 0

	return (
		<div className="icon-cart">
			{cartHasProduct && (
				<div className="cart-counter">
					<p>{cartQuantity}</p>
				</div>
			)}

			<FontAwesomeIcon icon={faCartShopping} />
		</div>
	)
}

function CategoryList() {
	const { productList, selectedCategory, setSelectedCategory } = useContext(ShopContext)
	const categoryList = ["All categories", ...getCategories(productList)]
	const handleClickCategory = (e) => setSelectedCategory(e.target.textContent)

	return (
		<div className="category-list">
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

function Header({ cartQuantity }) {
	return (
		<header>
			<div className="header-container">
				<FontAwesomeIcon icon={faBars} />
				<h1>OSHOP</h1>

				<CategoryList />

				<Link to="/cart">
					<CartIcon cartQuantity={cartQuantity} />
				</Link>
			</div>
		</header>
	)
}

export default Header
