import "./App.css"
import { useState } from "react"
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

function sortProductsByCategory(productList, category) {
	const filteredProducts = productList.filter((product) => product.category.toLowerCase() === category.toLowerCase())

	return filteredProducts
}

function App() {
	const [productList, setProductList] = useState(mockProducts)
	const [selectedCategory, setSelectedCategory] = useState("All categories")

	function handleClickCategory(e) {
		const categoryName = e.target.textContent
		const filteredProducts = sortProductsByCategory(mockProducts, categoryName)

		setProductList(categoryName === "All categories" ? mockProducts : filteredProducts)
		setSelectedCategory(categoryName)
	}

	return (
		<>
			<Header />
			<CategoryBar
				productsList={mockProducts}
				onClick={handleClickCategory}
				selectedCategory={selectedCategory}
			/>
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
		</>
	)
}

export default App
