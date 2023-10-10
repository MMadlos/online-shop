import ProductCard from "./ProductCard"
import { useContext } from "react"
import { ShopContext } from "../App"

function ProductsList() {
	const { productsToShow, handleClickAddCart, handleClickRemoveCart, handleClickProduct } = useContext(ShopContext)

	return (
		<main>
			{productsToShow.map((product) => {
				return (
					<ProductCard
						key={product.id}
						product={product}
						onClickAddCart={handleClickAddCart}
						onClickRemoveCart={handleClickRemoveCart}
						onClickProduct={handleClickProduct}
					/>
				)
			})}
		</main>
	)
}

export default ProductsList
