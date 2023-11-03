import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

function CartIcon({ cartQuantity }) {
	const cartHasProduct = cartQuantity !== 0

	return (
		<div className="icon-cart">
			{cartHasProduct && (
				<div className="cart-counter">
					<p>{cartQuantity}</p>
				</div>
			)}

			<FontAwesomeIcon icon={faCartShopping} />
		</div>
	)
}

export default CartIcon
