import ProductCard from "./ProductCard"

function mappedProduct(product) {
	return {
		id: product.id,
		name: product.title,
		price: product.price,
		description: product.description,
		category: product.category,
		url: product.image,
		rate: product.rating.rate,
		countRates: product.rating.count,
	}
}

function ProductsList({ productList }) {
	return (
		<main>
			{productList.map((product) => {
				const PRODUCT = mappedProduct(product)
				return (
					<ProductCard
						key={PRODUCT.id}
						product={PRODUCT}
					/>
				)
			})}
		</main>
	)
}

export default ProductsList
