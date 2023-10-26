import { useState, useEffect } from "react"

function getSortType() {
	const isDefault = sort.group === "Default"
	const isAlph = sort.group === "Alphabetically"
	const isPrice = sort.group === "By price"
	const isRate = sort.group === "By rate"

	const isAtoZ = sort.item === "A to Z"
	const isZtoA = sort.item === "Z to A"
	const isHighestFirst = sort.item === "Highest first"
	const isLowestFirst = sort.item === "Lowest first"
}

const useDisplayAndSort = () => {
	const [productsToShow, setProductsToShow] = useState([])
	const [sort, setSort] = useState({
		group: "Default",
		item: "Default",
	})

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

	return { sort, setSort, productsToShow, setProductsToShow }
}

export default useDisplayAndSort
