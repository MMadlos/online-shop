import { Link } from "react-router-dom"

function Header({ cartQuantity }) {
	return (
		<header>
			<div className="logo-container">
				<h1>ONLINE SHOP</h1>
			</div>
			<ul>
				<li>
					<a href="#">Ver en Github</a>
				</li>
				<li>
					<Link to="/cart">Cart ( {cartQuantity} )</Link>
				</li>
			</ul>
		</header>
	)
}

export default Header
