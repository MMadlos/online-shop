function ProductInfo({ product }) {
	const { name, price, quantity } = product

	return (
		<div className="product-info">
			<h3>{name}</h3>
			<p>{price}</p>
			<p>{quantity}</p>
		</div>
	)
}

export default ProductInfo
