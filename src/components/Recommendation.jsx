import { getMultipleUniqueRandomInt, getProductByID } from "../utilities/utilities"
import { useContext } from "react"
import { ShopContext } from "../App"
import { useParams } from "react-router-dom"

function RecommendationCard({ product }) {
	const { url, name, rate, countRates, price } = product

	return (
		<div className="recommendation-card">
			<img
				src={url}
				alt=""
			/>
			<div className="recommendation-card-details">
				<h3 id="name">{name}</h3>
				<div className="rate-container">
					<i className="fa-solid fa-star" />
					<p id="rate">{rate}</p>
					<p id="count-rates">({countRates})</p>
				</div>
				<p id="price">{"$ " + price}</p>
			</div>

			{/* {!isAdded && <AddCartButton context="card" />} */}
		</div>
	)
}

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
						<RecommendationCard
							key={productToShow.id}
							product={productToShow}
						/>
					)
				})}
			</div>
		</section>
	)
}

export default Recommendation
