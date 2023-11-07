import { Link } from "react-router-dom"

import AddCartButton from "./Atoms/AddCartButton"
import RemoveCartButton from "./Atoms/RemoveCartButton"

function ProductCard({ product, cardSize }) {
	const { id, name, description, price, url, rate, countRates, isAdded } = product

	const isCardSmall = cardSize === "small"
	const urlLink = isCardSmall ? `/product/${id}` : `product/${id}`

	return (
		<Link to={urlLink}>
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
						{!isCardSmall && <p id="description">{description}</p>}
						<p id="price">{"$ " + price}</p>
					</div>

					{!isCardSmall && !isAdded && <AddCartButton context="card" />}
					{!isCardSmall && isAdded && (
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

export function NewProductCard({ product }) {
	const { id, name, price, url } = product
	const urlLink = `product/${id}`

	return (
		<Link to={urlLink}>
			<div
				className="product-card"
				data-product-id={id}>
				<img
					src={url}
					alt="#"
				/>
				<div className="product-info">
					<p id="price">{"$ " + price}</p>
					<h2 id="name">{name}</h2>
				</div>
			</div>
		</Link>
	)
}

export default ProductCard
