import { Link } from "react-router-dom"
import { useContext } from "react"
import { ShopContext } from "../App"

import Counter from "./Atoms/Counter"

function CartProduct({ product }) {
	const { handleClickRemoveCart } = useContext(ShopContext)

	const { id, name, price, url, quantity, description } = product

	return (
		<Link to={`/product/${id}`}>
			<div
				key={id}
				className="product-card cart"
				data-product-id={id}>
				<div className="product-info">
					<div className="product-info-details-container">
						<img
							src={url}
							alt=""
						/>

						<div className="produt-info-name-price-container">
							<p className="name">
								<strong>{name}</strong>
							</p>
							<p className="description">{description}</p>
							<p className="price">$ {price}</p>
						</div>
					</div>

					<Counter
						context="cart"
						currentQuantity={quantity}
					/>
					<button
						id="remove-cart"
						onClick={handleClickRemoveCart}>
						Remove
					</button>
				</div>
			</div>
		</Link>
	)
}

function CartList() {
	const { cartList } = useContext(ShopContext)

	const sumCart = cartList.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
	const totalToPay = sumCart.toFixed(2)

	const isCartEmpty = cartList.length === 0

	if (isCartEmpty)
		return (
			<div className="cart-emtpy">
				<h2> YOUR CART IS EMPTY</h2>
			</div>
		)
	if (!isCartEmpty) {
		return (
			<>
				{cartList?.map((product) => {
					return (
						<CartProduct
							key={product.id}
							product={product}
						/>
					)
				})}

				<div className="check-out-container">
					<div className="total-container">
						<p>
							Total amount:
							<span>$ {totalToPay}</span>
						</p>
					</div>
					<button id="checkout">Checkout</button>
				</div>
			</>
		)
	}
}

export default CartList
