import "./App.css"
import { Outlet } from "react-router-dom"
import { createContext, useEffect, useState } from "react"
import { mockProducts } from "./consts/mockProducts"
import { mapProductList, filterProductsByCategory, getProductByID, toggleIsProductAddedTo, getCategories } from "./utilities/utilities"

import Header from "./components/Header"

export const ShopContext = createContext({
	productList: [],
	selectedCategory: "Men's clothing",
	cartList: [],
	productsToShow: [],
	isProductFound: true,
	sort: "default",
	categoryList: [],

	handleClickCategory: () => {},
	handleClickAddCart: () => {},
	handleClickRemoveCart: () => {},
	handleChangeSearch: () => {},
	handleClickSort: () => {},
})

function App() {
	const mappedProducts = mapProductList(mockProducts)

	const [productList, setProductList] = useState(mappedProducts)
	const categoryList = ["All categories", ...getCategories(productList)]

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
		e.preventDefault()
		e.stopPropagation()

		const { dataset } = e.target.closest(".product-card") || e.target.closest(".product-info")

		const productID = Number(dataset.productId)
		const [productSelected] = getProductByID(productsToShow, productID)

		if (cartList.includes(productSelected)) return

		setCartList((prev) => [...prev, productSelected])

		productSelected.quantity++

		const newProductList = toggleIsProductAddedTo(true, productSelected, productList)
		setProductList(newProductList)
	}

	function handleClickRemoveCart(e) {
		e.preventDefault()
		e.stopPropagation()

		const { dataset } = e.target.closest(".product-card") || e.target.closest(".product-info")

		const productID = Number(dataset.productId)

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
		const productsFound = filteredProducts.filter(
			(product) => product.name.toLowerCase().includes(query.toLowerCase()) || product.name.startsWith(query.toLowerCase())
		)

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
					categoryList,
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
			{/* <footer>
				<p>Created by M.Madlos</p>
			</footer> */}
		</>
	)
}

export default App
