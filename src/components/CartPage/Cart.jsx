import { Link } from "react-router-dom"
import CartList from "./CartList"
import "./styles.css"

function Cart() {
	return (
		<section id="cart">
			<div className="return-container">
				<i className="fa-solid fa-chevron-left"></i>
				<Link to="/">Return to shop</Link>
			</div>

			<h1>Order</h1>

			<CartList />
		</section>
	)
}

export default Cart
