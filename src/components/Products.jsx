import ProductCard from "./ProductCard"

function ProductsList({ productList, onClickAddCart, onClickRemoveCart }) {
	return (
		<main>
			{productList.map((product) => {
				return (
					<ProductCard
						key={product.id}
						product={product}
						onClickAddCart={onClickAddCart}
						onClickRemoveCart={onClickRemoveCart}
					/>
				)
			})}
		</main>
	)
}

export default ProductsList
