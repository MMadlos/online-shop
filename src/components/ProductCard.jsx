// import { useContext } from "react"
// import { ShopContext } from "../App"
import { Link } from "react-router-dom"
// import { useParams } from "react-router-dom"

import AddCartButton from "./Atoms/AddCartButton"
import RemoveCartButton from "./Atoms/RemoveCartButton"

function ProductCard({ product, cardSize }) {
	const { id, name, description, price, url, rate, countRates, isAdded } = product

	if (cardSize === "small") {
		return (
			<Link to={`/product/${id}`}>
				<div
					className="product-card"
					data-product-id={id}>
					<img
						src={url}
						alt="#"
					/>
					<div className="product-info">
						<div className="product-info-container">
							<h2 id="name">{name}</h2>
							<div className="rate-container">
								<i className="fa-solid fa-star" />
								<p id="rate">{rate}</p>
								<p id="count-rates">({countRates})</p>
							</div>
							<p id="price">{"$ " + price}</p>
						</div>
					</div>
				</div>
			</Link>
		)
	}

	return (
		<Link to={`product/${id}`}>
			<div
				className="product-card"
				data-product-id={id}>
				<img
					src={url}
					alt="#"
				/>
				<div className="product-info">
					<div className="product-info-container">
						<h2 id="name">{name}</h2>
						<div className="rate-container">
							<i className="fa-solid fa-star" />
							<p id="rate">{rate}</p>
							<p id="count-rates">({countRates})</p>
						</div>
						<p id="description">{description}</p>
						<p id="price">{"$ " + price}</p>
					</div>

					{!isAdded && <AddCartButton context="card" />}
					{isAdded && (
						<div className="product-added-container">
							<div className="product-added">
								<i className="fa-solid fa-check" />
								<p>Added</p>
							</div>
							<RemoveCartButton />
						</div>
					)}
				</div>
			</div>
		</Link>
	)
}

export default ProductCard
