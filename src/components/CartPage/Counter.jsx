function Counter({ onClickButton, quantity }) {
	return (
		<div className="counter">
			<button
				id="decrease"
				onClick={onClickButton}
				disabled={quantity === 1}>
				<i className="fa-solid fa-minus"></i>
			</button>
			<div className="quantity-container">
				<p className="quantity">{quantity}</p>
			</div>
			<button
				id="increase"
				onClick={onClickButton}>
				<i className="fa-solid fa-plus"></i>
			</button>
		</div>
	)
}

export default Counter
