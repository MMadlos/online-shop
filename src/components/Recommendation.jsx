import { getMultipleUniqueRandomInt, getProductByID } from "../utilities/utilities"
import { useContext } from "react"
import { ShopContext } from "../App"
import { useParams } from "react-router-dom"
import ProductCard from "./ProductCard"

function Recommendation() {
	const { productList } = useContext(ShopContext)
	const currentProductID = useParams().productID

	const getRandomIDs = getMultipleUniqueRandomInt(4, 0, productList.length, currentProductID)

	return (
		<section className="recommendation">
			<h2>Recommended products</h2>

			<div className="recommendation-container">
				{getRandomIDs.map((randomID) => {
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
