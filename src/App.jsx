import "./App.css"
import { Outlet } from "react-router-dom"
import { createContext, useEffect, useState } from "react"
import { filterProductsByCategory, getProductByID, toggleIsProductAddedTo, replaceProductInList } from "./utilities/utilities"

import useMockProducts from "./hooks/useMockProducts"
// import useFetchProducts from "./hooks/useFetchProducts"
import useSearchAndSort from "./hooks/useSearchAndSort"

import Header from "./components/Header/Header"

export const ShopContext = createContext({
	// error: null,
	// loading: true,
	productList: [],
	setProductList: () => {},
	selectedCategory: "Men's clothing",
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
	const { productList, setProductList } = useMockProducts()
	// const { productList, setProductList, error, loading } = useFetchProducts()

	const [selectedCategory, setSelectedCategory] = useState("Men's clothing")

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

	return (
		<ShopContext.Provider
			value={{
				// error,
				// loading,
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
				<Header cartQuantity={cartList.length} />

				<Outlet />

				<footer>
					<p>TEST</p>
				</footer>
			</SearchAndSortContext.Provider>
		</ShopContext.Provider>
	)
}

export default App
