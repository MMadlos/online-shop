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
	const [cartList, setCartList] = useState([])

	function handleClickCategory(e) {
		const categoryName = e.target.textContent
		const filteredProducts = sortProductsByCategory(mockProducts, categoryName)

		setProductList(categoryName === "All categories" ? mockProducts : filteredProducts)
		setSelectedCategory(categoryName)
	}

	// Cuando hago click en Add to cart, debe aparecer el número de productos en Cart.

	function handleClickAddCart(e) {
		const productID = Number(e.target.closest(".product-card").dataset.productId)

		const product = productList.filter((product) => product.id === productID)

		setCartList((prev) => [...prev, ...product])
	}

	return (
		<>
			<Header cartQuantity={cartList.length} />
			<CategoryBar
				productsList={mockProducts}
				onClickCategory={handleClickCategory}
				selectedCategory={selectedCategory}
			/>
			<ProductsList
				productList={productList}
				onClickAddCart={handleClickAddCart}
			/>
		</>
	)
}

export default App
