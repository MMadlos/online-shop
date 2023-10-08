import "./App.css"
import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
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

	const [productsToShow, setProductsToShow] = useState([])
	const [isProductFound, setIsProductFound] = useState(true)
	const [sort, setSort] = useState("default")

	useEffect(() => {
		const filteredProducts = filterProductsByCategory(productList, selectedCategory)
		setProductsToShow(filteredProducts)
	}, [productList, selectedCategory])

	const handleClickCategory = (e) => setSelectedCategory(e.target.textContent)

	function handleClickAddCart(e) {
		const productID = Number(e.target.closest(".product-card").dataset.productId)
		const [productSelected] = getProductByID(productsToShow, productID)

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

	function handleChangeSearch(e) {
		const query = e.target.value

		const filteredProducts = filterProductsByCategory(productList, selectedCategory)
		const productsFound = filteredProducts.filter((product) => product.name.includes(query) || product.name.startsWith(query))

		setIsProductFound(productsFound.length === 0 ? false : true)
		setProductsToShow(productsFound.length === 0 ? filteredProducts : productsFound)
	}

	function handleClickSort() {
		// Create loop: if it's default, go to BA. If it's BA, go to AB. If it's AB, go to Default
		const isDefault = sort === "default"
		const isLowestToHighest = sort === "BA"
		const isHighestToLowest = sort === "AB"

		function sortProducts() {
			if (isDefault) return productsToShow.sort((a, b) => b.price - a.price)
			if (isLowestToHighest) return productsToShow.sort((a, b) => a.price - b.price)
			if (isHighestToLowest) return filterProductsByCategory(productList, selectedCategory)
		}

		const productsSorted = sortProducts()
		setProductsToShow([...productsSorted])
		setSort(isDefault ? "BA" : isLowestToHighest ? "AB" : "default")
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
							productList={productsToShow}
							onClickAddCart={handleClickAddCart}
							onClickRemoveCart={handleClickRemoveCart}
							onChangeSearch={handleChangeSearch}
							isFound={isProductFound}
							onClickSort={handleClickSort}
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
