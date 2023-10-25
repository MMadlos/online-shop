import { useContext } from "react"
import { ShopContext } from "../../App"

import ProductCard from "../ProductCard"

function ProductList() {
	const { productsToShow } = useContext(ShopContext)

	return (
		<main>
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
