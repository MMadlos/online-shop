import { getMultipleUniqueRandomInt, getProductByID } from "../utilities/utilities"
import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../App"
import { useParams } from "react-router-dom"
import ProductCard from "./ProductCard"

function Recommendation() {
	const { productList } = useContext(ShopContext)
	const currentProductID = useParams().productID

	const [randomIDs, setRandomIDs] = useState([])

	useEffect(() => {
		const getRandomIDs = getMultipleUniqueRandomInt(4, 1, productList.length - 1, currentProductID)
		setRandomIDs(getRandomIDs)
	}, [currentProductID, productList.length])

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
