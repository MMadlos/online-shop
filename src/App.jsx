import "./App.css"
import { Outlet } from "react-router-dom"
import { createContext, useEffect, useState } from "react"
import { filterProductsByCategory, getProductByID, toggleIsProductAddedTo, getCategories, replaceProductInList } from "./utilities/utilities"

import useFetchProducts from "./utilities/custom-hook"

import Header from "./components/Header"

export const ShopContext = createContext({
	error: null,
	loading: true,
	productList: [],
	setProductList: () => {},
	selectedCategory: "Men's clothing",
	cartList: [],
	setCartList: () => {},
	productsToShow: [],
	categoryList: [],

	handleClickCategory: () => {},
	handleClickAddCart: () => {},
	handleClickRemoveCart: () => {},
})

export const SearchAndSortContext = createContext({
	sort: {},
	isProductFound: true,

	setSort: () => {},
	handleClickSort: () => {},
	handleChangeSearch: () => {},
})

function App() {
	const { productList, setProductList, error, loading, categoryList } = useFetchProducts()

	// const categoryList = ["All categories", ...getCategories(productList)]

	const [selectedCategory, setSelectedCategory] = useState("Men's clothing")

	const [cartList, setCartList] = useState([])

	const [productsToShow, setProductsToShow] = useState([])
	const [isProductFound, setIsProductFound] = useState(true)
	const [sort, setSort] = useState({
		group: "Default",
		item: "Default",
	})

	useEffect(() => {
		const filteredProducts = filterProductsByCategory(productList, selectedCategory)
		setProductsToShow(filteredProducts)
	}, [productList, selectedCategory])

	const handleClickCategory = (e) => setSelectedCategory(e.target.textContent)

	function handleClickAddCart(e) {
		e.preventDefault()
		e.stopPropagation()

		const getSection = e.target.closest(".product-card") || e.target.closest(".product-details-container")

		const getClass = getSection.classList.value
		const { dataset } = getSection

		const productID = Number(dataset.productId)
		const productSelected = getProductByID(productsToShow, productID)

		if (getClass === "product-card") {
			setCartList((prev) => [...prev, productSelected])

			productSelected.quantity++
			const newProductList = toggleIsProductAddedTo(true, productSelected, productList)
			setProductList(newProductList)
		}
		if (getClass === "product-details-container") {
			const containerElement = e.target.closest(".add-cart-container")
			const counterElement = containerElement.querySelector(".counter > p")
			const counterQuantity = Number(counterElement.textContent)

			productSelected.quantity += counterQuantity

			const isProductInCart = cartList.some((product) => product.id === productSelected.id)

			if (isProductInCart) {
				const newCartList = replaceProductInList(productSelected, cartList)
				setCartList(newCartList)

				const newProductList = replaceProductInList(productSelected, productList)
				setProductList(newProductList)
				return
			}
			if (!isProductInCart) {
				setCartList((prev) => [...prev, productSelected])

				const newProductList = toggleIsProductAddedTo(true, productSelected, productList)
				setProductList(newProductList)
				return
			}
		}
	}

	function handleClickRemoveCart(e) {
		e.preventDefault()
		e.stopPropagation()

		const { dataset } = e.target.closest("[data-product-id]")
		const productID = Number(dataset.productId)

		const newCart = cartList.filter((product) => product.id !== productID)
		setCartList(newCart)

		const productSelected = getProductByID(productList, productID)
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

	function handleClickSort(e) {
		const { groupName } = e.target.dataset
		const itemName = e.target.textContent
		const selectedItem = { group: groupName, item: itemName }
		setSort(selectedItem)
	}

	useEffect(() => {
		const isDefault = sort.group === "Default"
		const isAlph = sort.group === "Alphabetically"
		const isPrice = sort.group === "By price"
		const isRate = sort.group === "By rate"

		const isAtoZ = sort.item === "A to Z"
		const isZtoA = sort.item === "Z to A"
		const isHighestFirst = sort.item === "Highest first"
		const isLowestFirst = sort.item === "Lowest first"

		function sortProducts(product) {
			if (isDefault) return product.toSorted((a, b) => a.id - b.id)
			if (isPrice && isLowestFirst) return product.toSorted((a, b) => a.price - b.price)
			if (isPrice && isHighestFirst) return product.toSorted((a, b) => b.price - a.price)
			if (isAlph && isAtoZ) {
				return product.toSorted((a, b) => {
					const nameA = a.name.toUpperCase()
					const nameB = b.name.toUpperCase()
					if (nameA < nameB) return -1
					if (nameA > nameB) return 1
					return 0
				})
			}
			if (isAlph && isZtoA) {
				return product.toSorted((a, b) => {
					const nameA = a.name.toUpperCase()
					const nameB = b.name.toUpperCase()
					if (nameA > nameB) return -1
					if (nameA < nameB) return 1
					return 0
				})
			}
			if (isRate && isLowestFirst) return product.toSorted((a, b) => a.rate - b.rate)
			if (isRate && isHighestFirst) return product.toSorted((a, b) => b.rate - a.rate)
		}

		if (productsToShow.length === 0) return
		const productsSorted = sortProducts(productsToShow)
		setProductsToShow(productsSorted)
	}, [sort])

	return (
		<>
			<Header cartQuantity={cartList.length} />

			<ShopContext.Provider
				value={{
					error,
					loading,
					productList,
					categoryList,
					selectedCategory,
					cartList,
					productsToShow,
					isProductFound,
					setProductList,
					setCartList,

					handleClickCategory,
					handleClickAddCart,
					handleClickRemoveCart,
				}}>
				<SearchAndSortContext.Provider value={{ sort, isProductFound, setSort, handleChangeSearch, handleClickSort }}>
					<Outlet />
				</SearchAndSortContext.Provider>
			</ShopContext.Provider>
			{/* <footer>
				<p>Created by M.Madlos</p>
			</footer> */}
		</>
	)
}

export default App
