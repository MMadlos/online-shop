import PropTypes from "prop-types"

function ProductCard({ product, onClickAddCart }) {
	const { id, name, description, price, url, rate, countRates } = product

	return (
		<div
			className="product-card"
			data-product-id={id}>
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
				<button
					id="add-cart"
					onClick={onClickAddCart}>
					Add to cart
				</button>
				<button id="remove-cart">Remove from cart</button>
			</div>
		</div>
	)
}

ProductCard.propTypes = {
	product: PropTypes.object,
}

export default ProductCard
