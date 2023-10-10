function ShopButton({ type, onClick }) {
	if (type === "Add") {
		return (
			<button
				id="add-cart"
				onClick={onClick}>
				Add to cart
			</button>
		)
	}

	if (type === "Remove") {
		return (
			<button
				id="remove-cart"
				onClick={onClick}>
				Remove from cart
			</button>
		)
	}
}

export default ShopButton
