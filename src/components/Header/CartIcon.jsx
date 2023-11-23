import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

function CartIcon({ cartQuantity, onClick }) {
	const cartHasProduct = cartQuantity !== 0

	let location = useLocation()

	const isCartPage = location.pathname === "/cart"

	const iconStyle = isCartPage ? "selected" : ""

	return (
		<Link
			to="/cart"
			onClick={onClick}>
			<div className="icon-cart">
				{cartHasProduct && (
					<div className="cart-counter">
						<p>{cartQuantity}</p>
					</div>
				)}

				<FontAwesomeIcon
					icon={faCartShopping}
					className={iconStyle}
				/>
			</div>
		</Link>
	)
}

export default CartIcon
