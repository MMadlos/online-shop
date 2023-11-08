import "./styles.css"

function Button({ text, btnID, onClick }) {
	return (
		<button
			id={btnID}
			onClick={onClick}>
			{text}
		</button>
	)
}

export default Button
