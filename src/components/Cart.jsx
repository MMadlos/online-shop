import { Link } from "react-router-dom"

function Cart({ productList, onClickRemoveCart }) {
	return (
		<section id="cart">
			<Link to="/">Return to shop</Link>
			<p>Cart</p>

			{productList?.map((product) => {
				const { id, name, price, url, quantity } = product
				return (
					<div
						key={id}
						className="product-card cart"
						data-product-id={id}>
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
								<p>{quantity}</p>
							</div>
							<button
								id="remove-cart"
								onClick={onClickRemoveCart}>
								Remove
							</button>
						</div>
					</div>
				)
			})}
		</section>
	)
}

export default Cart
