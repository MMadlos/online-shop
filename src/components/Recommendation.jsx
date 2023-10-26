import { getMultipleUniqueRandomInt, getProductByID } from "../utilities/utilities"
import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../App"
import { useParams } from "react-router-dom"
import ProductCard from "./ProductCard"

function Recommendation() {
	const { productList } = useContext(ShopContext)
	const currentProductID = useParams().productID

	const [randomIDs, setRandomIDs] = useState([])

	// TODO - Check why I can't access directly to /product/:id. It appears an error page because "productList" is empty. It also happens if I go to /cart directly.
	// console.log(productList) -> []
	// If I access through the main page, it renders correctly.

	useEffect(() => {
		const maxNum = productList.length === 0 ? 20 : productList.length - 1
		const currentID = currentProductID ? currentProductID : 0
		const getRandomIDs = getMultipleUniqueRandomInt(4, 1, maxNum, currentID)
		setRandomIDs(getRandomIDs)
	}, [])

	return (
		<section className="recommendation">
			<h2>Recommended products</h2>

			<div className="recommendation-container">
				{randomIDs.map((randomID) => {
					const productToShow = getProductByID(productList, randomID)

					return (
						<ProductCard
							key={productToShow.id}
							product={productToShow}
							cardSize="small"
						/>
					)
				})}
			</div>
		</section>
	)
}

export default Recommendation
