function CartProduct({ product }) {
	const { name, price, url, quantity } = product

	return (
		<div className="cart-product">
			<img
				src={url}
				alt=""
				className="cart-product-image"
			/>
			<div className="cart-info-container">
				<div className="cart-header-container">
					<p className="name">{name}</p>
					<i className="fa-regular fa-trash-can"></i>
				</div>
				<div className="product-quantity-container">
					<p>{`Quantity: ${quantity}`}</p>
					<i className="fa-solid fa-pencil"></i>
				</div>
				<p className="price">$ {price}</p>
			</div>
		</div>
	)
}

export default CartProduct
