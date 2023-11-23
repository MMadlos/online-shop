import "./App.css"
import { Outlet } from "react-router-dom"
import { createContext, useEffect, useState } from "react"
import { filterProductsByCategory, getProductByID, toggleIsProductAddedTo, replaceProductInList } from "./utilities/utilities"
import { ScrollRestoration } from "react-router-dom"

// import useMockProducts from "./hooks/useMockProducts"
import useFetchProducts from "./hooks/useFetchProducts"
import useSearchAndSort from "./hooks/useSearchAndSort"

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

const DEFAULT_SELECTED_CATEGORY = "All products"

export const ShopContext = createContext({
	error: null,
	loading: true,
	productList: [],
	setProductList: () => {},
	selectedCategory: DEFAULT_SELECTED_CATEGORY,
	setSelectedCategory: () => {},
	cartList: [],
	setCartList: () => {},
	productsToShow: [],

	handleClickAddCart: () => {},
	handleClickRemoveCart: () => {},
})

export const SearchAndSortContext = createContext({
	sort: {},
	isProductFound: true,

	setSort: () => {},
	setIsProductFound: () => {},
	handleChangeSearch: () => {},
})

function App() {
	// const { productList, setProductList } = useMockProducts()
	const { productList, setProductList, error, loading } = useFetchProducts()

	const [selectedCategory, setSelectedCategory] = useState(DEFAULT_SELECTED_CATEGORY)

	const { sort, setSort, productsToShow, setProductsToShow } = useSearchAndSort()
	const [isProductFound, setIsProductFound] = useState(true)

	const [cartList, setCartList] = useState([])

	useEffect(() => {
		const filteredProducts = filterProductsByCategory(productList, selectedCategory)
		setProductsToShow(filteredProducts)
	}, [productList, selectedCategory])

	function handleClickAddCart(e) {
		e.preventDefault()
		e.stopPropagation()

		const getIdElement = e.target.closest(".product-container")
		const { dataset } = getIdElement
		const productID = Number(dataset.productId)

		const isProductInCart = cartList.some((product) => product.id === productID)

		if (!isProductInCart) {
			const productSelected = getProductByID(productList, productID)
			productSelected.quantity++

			setCartList((prev) => [...prev, productSelected])
		}

		if (isProductInCart) {
			const productInCart = getProductByID(cartList, productID)
			productInCart.quantity++

			const newCartList = replaceProductInList(productInCart, cartList)
			setCartList(newCartList)
		}
	}

	function handleClickRemoveCart(e) {
		e.preventDefault()
		e.stopPropagation()

		const { dataset } = e.target.closest(".cart-product")
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

	return (
		<ShopContext.Provider
			value={{
				error,
				loading,
				productList,
				selectedCategory,
				cartList,
				productsToShow,
				setProductList,
				setCartList,
				setSelectedCategory,

				handleClickAddCart,
				handleClickRemoveCart,
			}}>
			<SearchAndSortContext.Provider value={{ sort, isProductFound, setSort, handleChangeSearch }}>
				<Header />
				<Outlet />
				<Footer />

				<ScrollRestoration />
			</SearchAndSortContext.Provider>
		</ShopContext.Provider>
	)
}

export default App
