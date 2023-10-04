import ProductCard from "./ProductCard"

function ProductsList({ productList, onClickAddCart }) {
	return (
		<main>
			{productList.map((product) => {
				return (
					<ProductCard
						key={product.id}
						product={product}
						onClickAddCart={onClickAddCart}
					/>
				)
			})}
		</main>
	)
}

export default ProductsList
