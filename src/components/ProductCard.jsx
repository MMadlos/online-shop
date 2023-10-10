import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import ShopButton from "./ShopButton"

function ProductCard({ product, onClickAddCart, onClickRemoveCart }) {
	const { id, name, description, price, url, rate, countRates, isAdded } = product

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
						<p id="description">{description}</p>
						<p id="price">{"$ " + price}</p>
						<div className="rate-container">
							<i className="fa-solid fa-star" />
							<p id="rate">{rate}</p>
							<p id="count-rates">({countRates})</p>
						</div>
					</div>
					{isAdded && (
						<div className="product-added">
							<i className="fa-solid fa-check" />
							<p>Added to cart</p>
						</div>
					)}
					{!isAdded ? (
						<ShopButton
							type="Add"
							onClick={onClickAddCart}
						/>
					) : (
						<ShopButton
							type="Remove"
							onClick={onClickRemoveCart}
						/>
					)}
				</div>
			</div>
		</Link>
	)
}

ProductCard.propTypes = {
	product: PropTypes.object,
}

export default ProductCard
