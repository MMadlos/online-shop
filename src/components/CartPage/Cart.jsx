import "./styles.css"
import { useContext } from "react"
import { ShopContext } from "../../App"
import { Link } from "react-router-dom"

import EmptyCartIMG from "../../assets/Empty-cuate.svg"
import CartList from "./CartList"
import Chip from "../Elements/Chip"
import Button from "../Elements/Button"

function CartEmpty() {
	return (
		<div className="cart-empty">
			<Chip
				text="Your cart is empty!"
				type="option"
			/>
			<img
				src={EmptyCartIMG}
				alt=""
			/>

			<h4>You have not added any products</h4>
			<p>There would be here a fantastic copy to convince you to add multiple products to this cart.</p>

			<Link to="/">
				<Button
					text="Keep shopping"
					btnID="cart-empty"
				/>
			</Link>
		</div>
	)
}

function Cart() {
	const { cartList } = useContext(ShopContext)
	const isCartEmpty = cartList.length === 0

	return <section id="cart">{isCartEmpty ? <CartEmpty /> : <CartList />}</section>
}

export default Cart
