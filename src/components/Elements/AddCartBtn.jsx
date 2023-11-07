import { useContext } from "react"
import { ShopContext } from "../../App"

function AddCartBtn() {
	const { handleClickAddCart } = useContext(ShopContext)

	return (
		<button
			id="add-cart"
			onClick={handleClickAddCart}>
			Add to cart
		</button>
	)
}

export default AddCartBtn
