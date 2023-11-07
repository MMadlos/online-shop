import "./styles.css"

import { useContext } from "react"
import { ShopContext } from "../../App"

import ProductCard from "../ProductCard"

function ProductList() {
	const { loading, error, productsToShow } = useContext(ShopContext)

	if (loading) return <h2>Loading products...</h2>
	if (error) return <h2>A network error was encountered</h2>

	return (
		<main className="product-list">
			{productsToShow.map((product) => {
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
