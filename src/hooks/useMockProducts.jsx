import { useState } from "react"
import { useEffect } from "react"
import { mapProductList } from "../utilities/utilities"
import { mockProducts } from "../consts/mockProducts"

export const useMockProducts = () => {
	const [productList, setProductList] = useState([])

	useEffect(() => {
		const mappedProducts = mapProductList(mockProducts)
		setProductList(mappedProducts)
	}, [])

	return { productList, setProductList }
}

export default useMockProducts
