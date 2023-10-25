import { useContext } from "react"
import { ShopContext } from "../../App"

function ShopButton({ isAdded }) {
	const { handleClickAddCart, handleClickRemoveCart } = useContext(ShopContext)
	if (!isAdded) {
		return (
			<button
				id="add-cart"
				onClick={handleClickAddCart}>
				Add to cart
			</button>
		)
	} else {
		return (
			<>
				<div className="product-added">
					<i className="fa-solid fa-check" />
					<p>Added to cart</p>
				</div>
				<button
					id="remove-cart"
					onClick={handleClickRemoveCart}>
					Remove from cart
				</button>
			</>
		)
	}
}
export default ShopButton
