function ProductInfo({ product }) {
	const { name, description, price, url, rate, countRates, isAdded, quantity } = product

	return (
		<div className="product-info">
			<img
				src={url}
				alt="#"
			/>
			<div className="info-container">
				<h1>{name}</h1>
				<p>{`${rate} (${countRates})`}</p>
				<p>{description}</p>

				<p className="price">{`$ ${price}`}</p>

				{isAdded ? <p>{quantity}</p> : <button>Add to cart</button>}
			</div>
		</div>
	)
}

export default ProductInfo
