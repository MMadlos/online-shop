import PropTypes from "prop-types"

function ProductCard({ product }) {
	const { name, description, price, url, rate, countRates } = product

	return (
		<div className="product-card">
			<img
				src={url}
				alt="#"
			/>
			<div className="product-info">
				<h2 id="name">{name}</h2>
				<p id="description">{description}</p>
				<p id="price">{price}</p>
				<div className="rate-container">
					<p id="rate">{rate}</p>
					<i className="fa-solid fa-star-half-stroke" />
					<p id="count-rates">{countRates}</p>
				</div>
				<button id="add-cart">Add to cart</button>
			</div>
		</div>
	)
}

ProductCard.propTypes = {
	product: PropTypes.object,
}

export default ProductCard
