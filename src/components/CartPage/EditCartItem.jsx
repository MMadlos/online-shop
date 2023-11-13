import { ShopContext } from "../../App"
import { useContext } from "react"
import { useState } from "react"

import ProductCard from "../Elements/ProductCard"
import Counter from "./Counter"
import Button from "../Elements/Button"

function EditCartItem({ productIDtoEdit, onClickClose }) {
	const { cartList } = useContext(ShopContext)
	const [product] = cartList.filter((productCart) => productCart.id === productIDtoEdit)

	const [counterNumber, setCounterNumber] = useState(product.quantity)

	function handleCounter(e) {
		const buttonType = e.target.closest("button").id

		const newQuantity = buttonType === "increase" ? counterNumber + 1 : counterNumber - 1

		setCounterNumber(newQuantity)
	}

	function handleClickUpdate() {
		product.quantity = counterNumber
		onClickClose()
	}

	return (
		<>
			<div className="edit-product-container">
				<button
					className="none"
					name="close-edit"
					id="close-edit"
					onClick={onClickClose}>
					<i className="fa-solid fa-xmark" />
				</button>
				<div className="product-mobile">
					<ProductCard
						product={product}
						context="editCart"
					/>
					<Counter
						quantity={counterNumber}
						onClickButton={handleCounter}
					/>
					<Button
						text="Update quantity"
						btnID="apply"
						onClick={handleClickUpdate}
					/>
				</div>
				<div
					className="product-desktop"
					data-product-id={product.id}>
					<img
						aria-label="product image for desktop"
						src={product.url}
						alt="#"
					/>
					<div className="product-info-desktop">
						<div className="product-info-header">
							<p
								id="price"
								data-testid="product-desktop-price">
								{"$ " + product.price}
							</p>
							<h2
								id="name"
								data-testid="product-desktop-name">
								{product.name}
							</h2>
						</div>
						<div className="product-info-actions">
							<Counter
								quantity={counterNumber}
								onClickButton={handleCounter}
							/>
							<Button
								text="Update quantity"
								btnID="apply"
								onClick={handleClickUpdate}
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				className="overlay"
				onClick={onClickClose}
				data-testid="overlay"></div>
		</>
	)
}

export default EditCartItem
