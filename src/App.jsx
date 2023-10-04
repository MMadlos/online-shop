import "./App.css"
import { useState } from "react"
import { mockProducts } from "./consts/mockProducts"

import Header from "./components/Header"
import CategoryBar from "./components/CategoryBar"
import ProductsList from "./components/Products"

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
			<ProductsList productList={productList} />
		</>
	)
}

export default App
