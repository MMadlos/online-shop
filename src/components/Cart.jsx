function Cart({ productList }) {
	return (
		<section id="cart">
			{productList.map((product) => {
				const { id, name, price, url } = product
				return (
					<div
						key={id}
						className="product-card-cart">
						<div className="product-info">
							<img
								src={url}
								alt=""
							/>

							<p>
								<strong>{name}</strong>
							</p>
							<p>{price}</p>
							<div className="product-quantity">
								<p>Quantity</p>
								<p>1</p>
							</div>
							<button>Remove</button>
						</div>
					</div>
				)
			})}
		</section>
	)
}

export default Cart
