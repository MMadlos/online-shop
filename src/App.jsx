import "./App.css"
import { Outlet } from "react-router-dom"
import { createContext, useEffect, useState } from "react"
import { mockProducts } from "./consts/mockProducts"
import { mapProductList, filterProductsByCategory, getProductByID, toggleIsProductAddedTo } from "./utilities/utilities"

import Header from "./components/Header"

export const ShopContext = createContext({
	productList: [],
	selectedCategory: "Men's clothing",
	cartList: [],
	productsToShow: [],
	isProductFound: true,
	sort: "default",

	handleClickCategory: () => {},
	handleClickAddCart: () => {},
	handleClickRemoveCart: () => {},
	handleChangeSearch: () => {},
	handleClickSort: () => {},
	handleClickProduct: () => {},
})

export const FilterContext = createContext({})

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

	const isDefault = sort === "default"
	const isLowestToHighest = sort === "BA"
	const isHighestToLowest = sort === "AB"

	function sortProducts(product) {
		if (isDefault) return product.sort((a, b) => b.price - a.price)
		if (isLowestToHighest) return product.sort((a, b) => a.price - b.price)
		if (isHighestToLowest) return filterProductsByCategory(productList, selectedCategory)
	}

	function handleClickSort() {
		const productsSorted = sortProducts(productsToShow)
		setProductsToShow([...productsSorted])
		setSort(isDefault ? "BA" : isLowestToHighest ? "AB" : "default")
	}

	const cartQuantity = cartList.length

	return (
		<>
			<Header cartQuantity={cartQuantity} />

			<ShopContext.Provider
				value={{
					productList,
					selectedCategory,
					cartList,
					productsToShow,
					isProductFound,
					sort,

					handleClickCategory,
					handleClickAddCart,
					handleClickRemoveCart,
					handleChangeSearch,
					handleClickSort,
				}}>
				<Outlet />
			</ShopContext.Provider>
		</>
	)
}

export default App
