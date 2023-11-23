import "./styles.css"

import { useContext } from "react"
import { ShopContext } from "../../App"

import ProductCard from "../Elements/ProductCard"

function ProductList() {
	const { loading, error, productsToShow } = useContext(ShopContext)

	const isEmpty = productsToShow.length === 0

	const loadingElement = <h2>Loading products...</h2>
	const errorElement = <h2>A network error was encountered</h2>

	return (
		<main className="product-list">
			{loading && loadingElement}
			{!loading && error && errorElement}
			{!loading && isEmpty && errorElement}
			{!isEmpty &&
				productsToShow.map((product) => {
					return (
						<ProductCard
							key={product.id}
							product={product}
						/>
					)
				})}
		</main>
	)
}

export default ProductList
