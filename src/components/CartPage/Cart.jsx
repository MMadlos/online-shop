import "./styles.css"
import { useContext } from "react"
import { ShopContext } from "../../App"

import CartListContainer from "./CartListContainer"
import CartEmpty from "./CartEmpty"

function Cart() {
	const { cartList } = useContext(ShopContext)
	const isCartEmpty = cartList.length === 0

	return <section id="cart">{isCartEmpty ? <CartEmpty /> : <CartListContainer />}</section>
}

export default Cart
