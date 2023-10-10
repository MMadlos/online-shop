import { useContext } from "react"
import { ShopContext } from "../App"

function Counter({ quantity }) {
	const { handleCounter } = useContext(ShopContext)
	return (
		<div className="counter">
			<button
				id="decrease"
				onClick={handleCounter}
				disabled={quantity === 0}>
				-
			</button>
			<p>{quantity}</p>
			<button
				id="increase"
				onClick={handleCounter}>
				+
			</button>
		</div>
	)
}

export default Counter
