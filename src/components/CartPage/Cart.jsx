import "./styles.css"

import CartList from "./CartList"

import { useContext } from "react"
import { ShopContext } from "../../App"

function CartEmpty() {
	return (
		<div className="cart-emtpy">
			<h2> YOUR CART IS EMPTY</h2>
		</div>
	)
}

function Cart() {
	const { cartList } = useContext(ShopContext)
	const isCartEmpty = cartList.length === 0

	return <section id="cart">{isCartEmpty ? <CartEmpty /> : <CartList />}</section>
}

export default Cart
