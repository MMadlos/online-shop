import { ShopContext } from "../../App"
import { useContext } from "react"

import ProductCard from "../Elements/ProductCard"
import Counter from "../Atoms/Counter"
import Button from "../Elements/Button"

function EditCartItem({ productIDtoEdit, onClickClose }) {
	const { cartList } = useContext(ShopContext)
	const [product] = cartList.filter((productCart) => productCart.id === productIDtoEdit)

	return (
		<div className="edit-product-container">
			<i
				className="fa-solid fa-xmark"
				onClick={onClickClose}></i>
			<ProductCard
				product={product}
				context="editCart"
			/>
			<Counter />
			<Button
				text="Update quantity"
				btnID="apply"
			/>
		</div>
	)
}

export default EditCartItem
