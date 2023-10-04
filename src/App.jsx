import "./App.css"
import { mockProducts } from "./consts/mockProducts"

import Header from "./components/Header"
import CategoryBar from "./components/CategoryBar"
import ProductCard from "./components/ProductCard"

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

// function sortProductsByCategory(productList) {}

function App() {
	// const first = mappedProduct(mockProducts[0])
	// const second = mappedProduct(mockProducts[1])
	// const third = mappedProduct(mockProducts[2])
	// const fourth = mappedProduct(mockProducts[3])

	return (
		<>
			<Header />
			<CategoryBar productsList={mockProducts} />
			<main>
				{mockProducts.map((product) => {
					const PRODUCT = mappedProduct(product)
					return (
						<ProductCard
							key={PRODUCT.id}
							product={PRODUCT}
						/>
					)
				})}
			</main>
		</>
	)
}

export default App
