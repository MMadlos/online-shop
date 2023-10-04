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

// Get list of categories
function getCategories(productList) {
	let getCategories = []
	productList.forEach((product) => {
		getCategories.push(product.category)
	})
	return [...new Set(getCategories)]
}

function capitalizeText(text) {
	const firstLetter = text.slice(0, 1).toUpperCase()
	const restText = text.slice(1)
	const word = firstLetter + restText
	return word
}

capitalizeText("hola")

function App() {
	const first = mappedProduct(mockProducts[0])
	const second = mappedProduct(mockProducts[1])
	const third = mappedProduct(mockProducts[2])
	const fourth = mappedProduct(mockProducts[3])

	const categoryList = getCategories(mockProducts)

	return (
		<>
			<Header />
			<CategoryBar categories={categoryList} />
			<main>
				<ProductCard product={first} />
				<ProductCard product={second} />
				<ProductCard product={third} />
				<ProductCard product={fourth} />
			</main>
		</>
	)
}

export default App
