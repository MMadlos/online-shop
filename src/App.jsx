import "./App.css"
import { useState } from "react"
import { mockProducts } from "./consts/mockProducts"
import { mapProductList } from "./utilities/utilities"

import Header from "./components/Header"
import CategoryBar from "./components/CategoryBar"
import ProductsList from "./components/Products"

function sortProductsByCategory(productList, category) {
	const filteredProducts = productList.filter((product) => product.category.toLowerCase() === category.toLowerCase())

	return filteredProducts
}

function App() {
	const mappedProducts = mapProductList(mockProducts)

	const [productList, setProductList] = useState(mappedProducts)
	const [selectedCategory, setSelectedCategory] = useState("All categories")
	const [cartList, setCartList] = useState([])

	function handleClickCategory(e) {
		const categoryName = e.target.textContent
		if (categoryName === selectedCategory) return

		const filteredProducts = sortProductsByCategory(mappedProducts, categoryName)
		setProductList(categoryName === "All categories" ? mappedProducts : filteredProducts)
		setSelectedCategory(categoryName)
	}

	function handleClickAddCart(e) {
		const productID = Number(e.target.closest(".product-card").dataset.productId)

		const [productSelected] = productList.filter((product) => product.id === productID)
		console.log(productSelected)

		// Check if the item is already in the cartList
		const isInCart = cartList.includes(productSelected)

		if (!isInCart) {
			setCartList((prev) => [...prev, productSelected])

			// Change value of isAdded to true in the productList of the item Selected

			// - Find the index of the item selected in the productList
			const indexProductSelected = productList.indexOf(productSelected)
			console.log(productList[indexProductSelected])

			// - Create a new array and replace the old product with the new one in the same index
			let newProductList = []
			productList.forEach((product, index) => {
				if (index !== indexProductSelected) newProductList.push(product)
				if (index === indexProductSelected) {
					const newProductSelected = { ...productSelected, isAdded: true }
					newProductList.push(newProductSelected)
				}
			})

			setProductList(newProductList)
		}
	}

	function handleClickRemoveCart(e) {
		const productID = Number(e.target.closest(".product-card").dataset.productId)

		// 1. Eliminar el producto de la lista de compra
		const newCart = cartList.filter((product) => product.id !== productID)
		setCartList(newCart)

		// 2. Modificar "isAdded" de la lista de productos

		const itemFiltered = productList.filter((product) => product.id === productID)[0]
		const indexItemFiltered = productList.indexOf(itemFiltered)

		itemFiltered.isAdded = false

		let newProductList = []
		productList.forEach((product, index) => {
			newProductList.push(index === indexItemFiltered ? itemFiltered : product)
		})
		console.log(newProductList)
		console.log(productList)
		setProductList(newProductList)
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
				onClickRemoveCart={handleClickRemoveCart}
			/>
		</>
	)
}

export default App
