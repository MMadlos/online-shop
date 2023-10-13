import { useState } from "react"

function Counter({ context, currentQuantity }) {
	// TODO - If counter is in ProductPage, minimum quantity is "1"
	// TODO - IF counter is in Cart, when counter is 0, it deletes the product from the Cart List

	// TODO - quantity es diferente en la página de producto que en Cart.
	// -> En ProductPage() es del >= 1 independientemente de la cantidad que haya en el carrito
	// -> En CartPage() es = a la cantidad que haya en el carrito.

	const initialQuantity = context === "product" ? 1 : currentQuantity

	const [quantity, setQuantity] = useState(initialQuantity)

	function handleCounter(e) {
		e.preventDefault()
		e.stopPropagation()

		const buttonType = e.target.id

		setQuantity(buttonType === "increase" ? quantity + 1 : quantity - 1)
	}

	return (
		<div className="counter">
			<button
				id="decrease"
				onClick={handleCounter}
				disabled={quantity === 0 || (context === "product" && quantity === 1)}>
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
