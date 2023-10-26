import { Link } from "react-router-dom"

function Header({ cartQuantity }) {
	return (
		<header>
			<div className="logo-container">
				<h1>ONLINE SHOP</h1>
			</div>
			<Link to="/cart">Cart ( {cartQuantity} )</Link>
		</header>
	)
}

export default Header
