import "./App.css"
import { useState } from "react"
import { mockProducts } from "./consts/mockProducts"
import { mappedProductList } from "./utilities/utilities"

import Header from "./components/Header"
import CategoryBar from "./components/CategoryBar"
import ProductsList from "./components/Products"

function sortProductsByCategory(productList, category) {
	const filteredProducts = productList.filter((product) => product.category.toLowerCase() === category.toLowerCase())

	return filteredProducts
}

function App() {
	const mappedProducts = mappedProductList(mockProducts)

	const [productList, setProductList] = useState(mappedProducts)
	const [selectedCategory, setSelectedCategory] = useState("All categories")
	const [cartList, setCartList] = useState([])

	function handleClickCategory(e) {
		const categoryName = e.target.textContent
		const filteredProducts = sortProductsByCategory(mappedProducts, categoryName)

		setProductList(categoryName === "All categories" ? mappedProducts : filteredProducts)
		setSelectedCategory(categoryName)
	}

	function handleClickAddCart(e) {
		const productID = Number(e.target.closest(".product-card").dataset.productId)

		const productFiltered = productList.filter((product) => product.id === productID)
		productFiltered[0].isAdded = true

		setCartList((prev) => [...prev, ...productFiltered])
	}

	return (
		<>
			<Header cartQuantity={cartList.length} />
			<CategoryBar
				productsList={mappedProducts}
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
