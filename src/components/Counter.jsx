function Counter({ quantity }) {
	return (
		<div className="counter">
			<button id="increase"> - </button>
			<p>{quantity}</p>
			<button id="decrease"> + </button>
		</div>
	)
}

export default Counter
