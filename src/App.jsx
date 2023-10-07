import "./App.css"
import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import { mockProducts } from "./consts/mockProducts"
import { mapProductList, filterProductsByCategory, getProductByID, toggleIsProductAddedTo } from "./utilities/utilities"

import Header from "./components/Header"
import HomePage from "./components/Pages/Home"
import Cart from "./components/Cart"

function App() {
	const mappedProducts = mapProductList(mockProducts)

	const [productList, setProductList] = useState(mappedProducts)
	const [selectedCategory, setSelectedCategory] = useState("Men's clothing")
	const [cartList, setCartList] = useState([])

	const filteredProductsByCategory = filterProductsByCategory(productList, selectedCategory)

	const handleClickCategory = (e) => setSelectedCategory(e.target.textContent)

	function handleClickAddCart(e) {
		const productID = Number(e.target.closest(".product-card").dataset.productId)
		const [productSelected] = getProductByID(filteredProductsByCategory, productID)

		if (cartList.includes(productSelected)) return

		setCartList((prev) => [...prev, productSelected])

		productSelected.quantity++

		const newProductList = toggleIsProductAddedTo(true, productSelected, productList)
		setProductList(newProductList)
	}

	function handleClickRemoveCart(e) {
		const productID = Number(e.target.closest(".product-card").dataset.productId)

		const newCart = cartList.filter((product) => product.id !== productID)
		setCartList(newCart)

		const [productSelected] = getProductByID(productList, productID)
		productSelected.quantity = 0

		const newProductList = toggleIsProductAddedTo(false, productSelected, productList)
		setProductList(newProductList)
	}

	return (
		<>
			<Header cartQuantity={cartList.length} />

			<Routes>
				<Route
					path="/"
					element={
						<HomePage
							categoryList={mappedProducts}
							onClickCategory={handleClickCategory}
							selectedCategory={selectedCategory}
							productList={filteredProductsByCategory}
							onClickAddCart={handleClickAddCart}
							onClickRemoveCart={handleClickRemoveCart}
						/>
					}
				/>
				<Route
					path="/cart"
					element={
						<Cart
							productList={cartList}
							onClickRemoveCart={handleClickRemoveCart}
						/>
					}
				/>
			</Routes>
		</>
	)
}

export default App
