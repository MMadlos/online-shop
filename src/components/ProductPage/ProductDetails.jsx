import Counter from "../Atoms/Counter"
import AddCartButton from "../Atoms/AddCartButton"

function ProductDetails({ productSelected }) {
	const { id, name, description, price, url, rate, countRates, quantity } = productSelected

	return (
		<div
			className="product-details-container"
			data-product-id={id}>
			<div className="image-container">
				<img
					src={url}
					alt="#"
				/>
			</div>
			<div className="product-details">
				<div className="details-container">
					<h1>{name}</h1>
					<div className="rate-container">
						<i className="fa-solid fa-star" />
						<p>{`${rate} (${countRates})`}</p>
					</div>
					<p className="description">{description}</p>

					<p className="price">{`$ ${price}`}</p>
				</div>
				<div className="add-cart-container">
					<Counter
						context="product"
						quantity={quantity}
					/>
					<AddCartButton context="info" />
				</div>
			</div>
		</div>
	)
}

export default ProductDetails
