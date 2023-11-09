import { useState, useContext } from "react"
import { ShopContext } from "../../App"
import { getProductByID } from "../../utilities/utilities"
import { replaceProductInList } from "../../utilities/utilities"

function Counter({ context, currentQuantity }) {
	const { productList, setProductList, cartList, setCartList } = useContext(ShopContext)

	const initialQuantity = context === "product" ? 1 : currentQuantity

	const [quantity, setQuantity] = useState(initialQuantity)

	function handleCounter(e) {
		e.preventDefault()
		e.stopPropagation()

		const buttonType = e.target.closest("button").id
		const newQuantity = buttonType === "increase" ? quantity + 1 : quantity - 1

		setQuantity(newQuantity)

		if (context === "cart") {
			const productID = Number(e.target.closest(".product-card").dataset.productId)
			const productSelected = getProductByID(productList, productID)
			productSelected.quantity = newQuantity

			const newCartList = replaceProductInList(productSelected, cartList)
			setCartList(newCartList)

			const newProductList = replaceProductInList(productSelected, productList)
			setProductList(newProductList)
		}
	}

	return (
		<div className="counter">
			<button
				id="decrease"
				onClick={handleCounter}
				disabled={quantity === 0 || (context === "product" && quantity === 1)}>
				<i className="fa-solid fa-minus"></i>
			</button>
			<div className="quantity-container">
				<p className="quantity">{quantity}</p>
			</div>
			<button
				id="increase"
				onClick={handleCounter}>
				<i className="fa-solid fa-plus"></i>
			</button>
		</div>
	)
}

export default Counter
