import "./App.css"
import { Outlet } from "react-router-dom"
import { createContext, useEffect, useState } from "react"
import { mockProducts } from "./consts/mockProducts"
import { mapProductList, filterProductsByCategory, getProductByID, toggleIsProductAddedTo, getCategories, replaceProductInList } from "./utilities/utilities"

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
	// handleCounter: () => {},
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

		// TODO -> Pendiente refactor. No es lo mismo add cart en HomePage() que en ProductPage()

		// Si se hace click en HomePage() -> Se añade el producto con quantity = 1
		// Si se hace click en ProductInfo() -> Se añade la cantidad que aparece en el Counter a la cantidad que ya había antes: product.quantity = product.quantity + counterQuantity

		const getSection = e.target.closest(".product-card") || e.target.closest(".product-info")
		const getClass = getSection.classList.value
		const { dataset } = getSection

		const productID = Number(dataset.productId)
		const productSelected = getProductByID(productsToShow, productID)
		console.log(productSelected.quantity)

		if (getClass === "product-card") {
			setCartList((prev) => [...prev, productSelected])
			console.log(productSelected.quantity)

			productSelected.quantity++
			const newProductList = toggleIsProductAddedTo(true, productSelected, productList)
			setProductList(newProductList)
		}
		if (getClass === "product-info") {
			const containerElement = e.target.closest(".info-container")
			const counterElement = containerElement.querySelector(".counter > p")
			const counterQuantity = Number(counterElement.textContent)

			console.log(productSelected.quantity)

			productSelected.quantity += counterQuantity

			console.log(productSelected.quantity)

			const isProductInCart = cartList.some((product) => product.id === productSelected.id)

			// Si el producto existe en el carrito:
			// -> se añade counterQuantity a productQuantity -> product.quantity = product.quantity + counterQuantity
			// if (cartList.includes(productSelected)) -> Se actualiza el valor
			if (isProductInCart) {
				const newCartList = replaceProductInList(productSelected, cartList)
				setCartList(newCartList)

				const newProductList = replaceProductInList(productSelected, productList)
				setProductList(newProductList)
				return
			}

			//  Si el producto NO existe en el carrito:
			//  product.quantity = counterQuantity
			//  -> Se añade el producto
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

	function handleClickSort() {
		const isDefault = sort === "default"
		const isLowestToHighest = sort === "BA"
		const isHighestToLowest = sort === "AB"

		function sortProducts(product) {
			if (isDefault) return product.sort((a, b) => b.price - a.price)
			if (isLowestToHighest) return product.sort((a, b) => a.price - b.price)
			if (isHighestToLowest) return filterProductsByCategory(productList, selectedCategory)
		}

		const productsSorted = sortProducts(productsToShow)
		setProductsToShow([...productsSorted])
		setSort(isDefault ? "BA" : isLowestToHighest ? "AB" : "default")
	}

	// function handleCounter(e) {
	// 	e.preventDefault()
	// 	e.stopPropagation()

	// 	const getSection = e.target.closest(".cart") || e.target.closest(".product-info")
	// 	const getClass = getSection.classList.value

	// 	const buttonType = e.target.id // "increase" or "decrease"
	// 	const productID = Number(e.target.closest("[data-product-id]").dataset.productId)
	// 	const productSelected = getProductByID(productList, productID)

	// 	if (getClass === "product-info") {
	// 		console.log("HOLA")
	// 	}
	// 	if (getClass === "cart") {
	// 		if (buttonType === "increase") productSelected.quantity++
	// 		if ((buttonType === "decrease") & (productSelected.quantity !== 0)) {
	// 			productSelected.quantity--
	// 		}

	// 		const newProductList = replaceProductInList(productSelected, productList)
	// 		const newCartList = replaceProductInList(productSelected, cartList)

	// 		setProductList(newProductList)
	// 		setCartList(newCartList)
	// 	}
	// }

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
					// handleCounter,
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
