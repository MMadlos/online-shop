import CartList from "../CartList"
import { Link } from "react-router-dom"
import Recommendation from "../Recommendation"

function CartPage() {
	return (
		<>
			<section id="cart">
				<div className="return-container">
					<i className="fa-solid fa-chevron-left"></i>
					<Link to="/">Return to shop</Link>
				</div>

				<h1>Order</h1>

				<CartList />
			</section>
			<Recommendation />
		</>
	)
}

export default CartPage
