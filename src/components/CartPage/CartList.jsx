import { Fragment, useContext } from "react"
import { ShopContext } from "../../App"
import { Link } from "react-router-dom"

import CartProduct from "./CartProduct"
import Checkout from "./Checkout"

function CartList() {
	const { cartList } = useContext(ShopContext)

	const sumCart = cartList.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
	const totalToPay = sumCart.toFixed(2)

	const isCartEmpty = cartList.length === 0

	if (isCartEmpty) {
		return (
			<div className="cart-emtpy">
				<h2> YOUR CART IS EMPTY</h2>
			</div>
		)
	}

	if (!isCartEmpty) {
		return (
			<>
				{cartList?.map((product, index) => {
					const { id } = product
					const isLastProduct = index === cartList.length - 1

					return (
						<Fragment key={id}>
							<Link to={`/product/${id}`}>
								<CartProduct product={product} />
							</Link>
							{!isLastProduct && <div className="divider"></div>}
						</Fragment>
					)
				})}

				<Checkout totalToPay={totalToPay} />
			</>
		)
	}
}

export default CartList
