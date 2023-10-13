import { Link } from "react-router-dom"
import { useContext } from "react"
import { ShopContext } from "../App"

import Counter from "./Atoms/Counter"

function CartProduct({ product }) {
	const { handleClickRemoveCart } = useContext(ShopContext)

	const { id, name, price, url, quantity } = product

	return (
		<Link to={`/product/${id}`}>
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

	return (
		<section id="cart">
			<Link to="/">Return to shop</Link>
			<p>Cart</p>

			{cartList?.map((product) => {
				return (
					<CartProduct
						key={product.id}
						product={product}
					/>
				)
			})}
		</section>
	)
}

export default CartList
