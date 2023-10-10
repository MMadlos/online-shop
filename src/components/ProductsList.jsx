import ProductCard from "./ProductCard"
import { useContext } from "react"
import { ShopContext } from "../App"

function ProductsList() {
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

export default ProductsList
