import ShopButton from "./ShopButton"
import Counter from "./Counter"

function ProductInfo({ product }) {
	const { id, name, description, price, url, rate, countRates, quantity, isAdded } = product

	return (
		<div
			className="product-info"
			data-product-id={id}>
			<img
				src={url}
				alt="#"
			/>
			<div className="info-container">
				<h1>{name}</h1>
				<p>{`${rate} (${countRates})`}</p>
				<p>{description}</p>

				<p className="price">{`$ ${price}`}</p>

				<Counter quantity={quantity} />
				<ShopButton isAdded={isAdded} />
			</div>
		</div>
	)
}

export default ProductInfo
