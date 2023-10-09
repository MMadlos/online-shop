import { Link } from "react-router-dom"
import { useContext } from "react"
import { ShopContext } from "../App"

function Header() {
	const { cartList } = useContext(ShopContext)

	const cartQuantity = cartList.length

	return (
		<header>
			<div className="logo-container">
				<h1>Online shop</h1>
			</div>
			<ul>
				<li>
					<a href="#">Ver en Github</a>
				</li>
				<li>
					<Link to="/cart">Cart ({cartQuantity})</Link>
				</li>
			</ul>
		</header>
	)
}

export default Header
