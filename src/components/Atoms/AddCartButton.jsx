import { useContext } from "react"
import { ShopContext } from "../../App"

function AddCartButton({ context }) {
	const { handleClickAddCart } = useContext(ShopContext)
	return (
		<button
			id="add-cart"
			data-context={context}
			onClick={handleClickAddCart}>
			Add to cart
		</button>
	)
}

export default AddCartButton
