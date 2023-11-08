import { useContext } from "react"
import { ShopContext } from "../../App"
import { Link } from "react-router-dom"

import CartProduct from "./CartProduct"
import Checkout from "./Checkout"

function CartList() {
	const { cartList } = useContext(ShopContext)

	const sumCart = cartList.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
	const totalToPay = sumCart.toFixed(2)

	const isCartEmpty = cartList.length === 0

	return isCartEmpty ? (
		<div className="cart-emtpy">
			<h2> YOUR CART IS EMPTY</h2>
		</div>
	) : (
		<>
			{cartList?.map((product) => {
				const { id } = product
				return (
					<Link
						key={id}
						to={`/product/${id}`}>
						<CartProduct product={product} />
					</Link>
				)
			})}

			<Checkout totalToPay={totalToPay} />
		</>
	)
}

export default CartList
