import { useState } from "react"
import { useEffect } from "react"
import { mapProductList } from "./utilities"
import { getCategories } from "./utilities"

const useFetchProducts = () => {
	const [productList, setProductList] = useState([])
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetch("https://fakestoreapi.com/products", { mode: "cors" })
			.then((res) => {
				if (res.status >= 400) {
					throw new Error("server error")
				}

				return res.json()
			})
			.then((json) => {
				const mappedProducts = mapProductList(json)
				setProductList(mappedProducts)
			})
			.catch((error) => setError(error))
			.finally(() => setLoading(false))
	}, [])

	const categoryList = ["All categories", ...getCategories(productList)]

	return { productList, setProductList, error, loading, categoryList }
}

export default useFetchProducts
