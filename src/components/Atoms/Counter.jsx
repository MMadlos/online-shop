import { useState, useContext } from "react"
import { ShopContext } from "../../App"
import { getProductByID } from "../../utilities/utilities"
import { replaceProductInList } from "../../utilities/utilities"

function Counter({ context, currentQuantity }) {
	// TODO - If counter is in ProductPage, minimum quantity is "1"
	// TODO - IF counter is in Cart, when counter is 0, it deletes the product from the Cart List

	// TODO - quantity es diferente en la página de producto que en Cart.
	// -> En ProductPage() es del >= 1 independientemente de la cantidad que haya en el carrito
	// -> En CartPage() es = a la cantidad que haya en el carrito.

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
			// Detect the product
			const productID = Number(e.target.closest(".product-card").dataset.productId)
			const productSelected = getProductByID(productList, productID)
			productSelected.quantity = newQuantity

			// Change the quantity to CartList
			const newCartList = replaceProductInList(productSelected, cartList)
			setCartList(newCartList)

			// Change the quantity to productList
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
			<p className="quantity">{quantity}</p>
			<button
				id="increase"
				onClick={handleCounter}>
				<i className="fa-solid fa-plus"></i>
			</button>
		</div>
	)
}

export default Counter
