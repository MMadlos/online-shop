import "./App.css"
import { mockProducts } from "./consts/mockProducts"
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

function App() {
	const first = mappedProduct(mockProducts[0])
	const second = mappedProduct(mockProducts[1])
	const third = mappedProduct(mockProducts[2])
	const fourth = mappedProduct(mockProducts[3])

	return (
		<main>
			<ProductCard product={first} />
			<ProductCard product={second} />
			<ProductCard product={third} />
			<ProductCard product={fourth} />
		</main>
	)
}

export default App
