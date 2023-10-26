import { useState, useEffect } from "react"
import { sortProducts } from "../utilities/utilities"

const useDisplayAndSort = () => {
	const [productsToShow, setProductsToShow] = useState([])
	const [sort, setSort] = useState({
		group: "Default",
		item: "Default",
	})

	useEffect(() => {
		if (productsToShow.length === 0) return
		const productsSorted = sortProducts(productsToShow, sort)
		setProductsToShow(productsSorted)
	}, [sort])

	return { sort, setSort, productsToShow, setProductsToShow }
}

export default useDisplayAndSort
