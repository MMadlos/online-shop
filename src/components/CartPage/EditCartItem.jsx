import { ShopContext } from "../../App"
import { useContext } from "react"

import ProductCard from "../Elements/ProductCard"
import Counter from "../Atoms/Counter"
import Button from "../Elements/Button"

function EditCartItem({ productIDtoEdit, onClickClose }) {
	const { cartList } = useContext(ShopContext)
	const [product] = cartList.filter((productCart) => productCart.id === productIDtoEdit)

	return (
		<>
			<div className="edit-product-container">
				<i
					className="fa-solid fa-xmark"
					onClick={onClickClose}></i>
				<div className="product-mobile">
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
				<div
					className="product-desktop"
					data-product-id={product.id}>
					<img
						src={product.url}
						alt="#"
					/>
					<div className="product-info-desktop">
						<div className="product-info-header">
							<p id="price">{"$ " + product.price}</p>
							<h2 id="name">{product.name}</h2>
						</div>
						<div className="product-info-actions">
							<Counter />
							<Button
								text="Update quantity"
								btnID="apply"
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				className="overlay"
				onClick={onClickClose}></div>
		</>
	)
}

export default EditCartItem
