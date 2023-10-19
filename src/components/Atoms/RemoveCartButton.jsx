import { useContext } from "react"
import { ShopContext } from "../../App"

function RemoveCartButton() {
	const { handleClickRemoveCart } = useContext(ShopContext)
	return (
		<button
			id="remove-cart"
			onClick={handleClickRemoveCart}>
			Remove
		</button>
	)
}

export default RemoveCartButton
