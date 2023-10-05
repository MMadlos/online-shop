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

		// 1.Añadir el producto a la lista de compra
		const productFiltered = productList.filter((product) => product.id === productID)

		const productToAddCart = productFiltered
		productToAddCart[0].isAdded = true
		setCartList((prev) => [...prev, ...productToAddCart])

		// TODO - 2. Modificar "isAdded" de la lista de productos
		const indexProductFiltered = productList.indexOf(productFiltered)

		const newProductList = productList
		newProductList.splice(indexProductFiltered, 1, productToAddCart)
		setProductList(newProductList)
	}

	function handleClickRemoveCart(e) {
		const productID = Number(e.target.closest(".product-card").dataset.productId)

		// 1. Eliminar el producto de la lista de compra
		const newCart = cartList.filter((product) => product.id !== productID)
		setCartList(newCart)

		// 2. Modificar "isAdded" de la lista de productos

		const newProductList = productList
		const itemFiltered = newProductList.filter((product) => product.id === productID)[0]

		itemFiltered.isAdded = false

		const indexItemFiltered = newProductList.indexOf(itemFiltered)
		newProductList.splice(indexItemFiltered, 1, itemFiltered)

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
