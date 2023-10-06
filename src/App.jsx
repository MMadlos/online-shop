import "./App.css"
import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import { mockProducts } from "./consts/mockProducts"
import { mapProductList, sortProductsByCategory } from "./utilities/utilities"

import Header from "./components/Header"
import CategoryBar from "./components/CategoryBar"
import ProductsList from "./components/Products"
import Cart from "./components/Cart"

function App() {
	const mappedProducts = mapProductList(mockProducts)

	const [productList, setProductList] = useState(mappedProducts)
	const [filteredProductList, setFilteredProductList] = useState(mappedProducts)
	const [selectedCategory, setSelectedCategory] = useState("Men's clothing")
	const [cartList, setCartList] = useState([])

	useEffect(() => {
		const filteredProducts = sortProductsByCategory(productList, selectedCategory)
		setFilteredProductList(filteredProducts)
	}, [selectedCategory, productList])

	function handleClickCategory(e) {
		const categoryName = e.target.textContent
		setSelectedCategory(categoryName)
	}

	function handleClickAddCart(e) {
		const productID = Number(e.target.closest(".product-card").dataset.productId)
		const [productSelected] = filteredProductList.filter((product) => product.id === productID)

		// Check if the item is already in the cartList and add it if not
		const isInCart = cartList.includes(productSelected)
		if (isInCart) return
		setCartList((prev) => [...prev, productSelected])

		productSelected.quantity++

		// Change value of isAdded to true in the productList of the item Selected
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

		// Change value of isAdded to false in the productList of the item Selected
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
						<>
							<CategoryBar
								productsList={mappedProducts}
								onClickCategory={handleClickCategory}
								selectedCategory={selectedCategory}
							/>
							<ProductsList
								productList={filteredProductList}
								onClickAddCart={handleClickAddCart}
								onClickRemoveCart={handleClickRemoveCart}
							/>
						</>
					}
				/>
				<Route
					path="/cart"
					element={
						<>
							<Cart
								productList={cartList}
								onClickRemoveCart={handleClickRemoveCart}
							/>
						</>
					}
				/>
			</Routes>
		</>
	)
}

export default App
