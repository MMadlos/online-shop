import { useContext } from "react"
import { ShopContext } from "../../App"
import CartProduct from "./CartProduct"

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
