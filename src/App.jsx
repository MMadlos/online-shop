import "./App.css"
import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import { mockProducts } from "./consts/mockProducts"
import { mapProductList, filterProductsByCategory } from "./utilities/utilities"

import Header from "./components/Header"
import HomePage from "./components/Pages/Home"
import Cart from "./components/Cart"

function App() {
	const mappedProducts = mapProductList(mockProducts)

	const [productList, setProductList] = useState(mappedProducts)
	const [selectedCategory, setSelectedCategory] = useState("Men's clothing")
	const [cartList, setCartList] = useState([])

	const filteredProductsByCategory = filterProductsByCategory(productList, selectedCategory)

	function handleClickCategory(e) {
		const categoryName = e.target.textContent
		setSelectedCategory(categoryName)
	}

	function handleClickAddCart(e) {
		const productID = Number(e.target.closest(".product-card").dataset.productId)
		const [productSelected] = filteredProductsByCategory.filter((product) => product.id === productID)

		const isInCart = cartList.includes(productSelected)
		if (isInCart) return
		setCartList((prev) => [...prev, productSelected])

		productSelected.quantity++

		let newProductList = []
		productList.forEach((product) => {
			const newProduct = { ...productSelected, isAdded: true }

			newProductList.push(product.id !== productID ? product : newProduct)
		})

		setProductList(newProductList)
	}

	function handleClickRemoveCart(e) {
		const productID = Number(e.target.closest(".product-card").dataset.productId)

		const newCart = cartList.filter((product) => product.id !== productID)
		setCartList(newCart)

		const [productSelected] = productList.filter((product) => product.id === productID)

		productSelected.quantity = 0

		let newProductList = []
		productList.forEach((product) => {
			newProductList.push(product.id !== productID ? product : { ...productSelected, isAdded: false })
		})
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
