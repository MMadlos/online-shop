import "./styles.css"
import { useContext } from "react"
import { ShopContext } from "../../App"

import CartList from "./CartListContainer"
import CartEmpty from "./CartEmpty"

function Cart() {
	const { cartList } = useContext(ShopContext)
	const isCartEmpty = cartList.length === 0

	return <section id="cart">{isCartEmpty ? <CartEmpty /> : <CartList />}</section>
}

export default Cart
