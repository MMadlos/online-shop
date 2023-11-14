import { useContext } from "react"
import { ShopContext } from "../../App"

import { Link } from "react-router-dom"

function CartProduct({ product, onClickEdit }) {
	const { name, price, url, quantity, id } = product
	const { handleClickRemoveCart } = useContext(ShopContext)

	return (
		<div
			className="cart-product"
			data-product-id={id}>
			<Link to={`/product/${id}`}>
				<img
					src={url}
					alt=""
					className="cart-product-image"
				/>
			</Link>
			<div className="cart-info-container">
				<div className="cart-header-container">
					<Link to={`/product/${id}`}>
						<p className="name">{name}</p>
					</Link>
					<i
						data-testid="remove-icon"
						className="fa-regular fa-trash-can"
						onClick={handleClickRemoveCart}></i>
				</div>
				<div className="product-quantity-container">
					<p>{`Quantity: ${quantity}`}</p>
					<i
						data-testid="edit-icon"
						className="fa-solid fa-pencil"
						onClick={onClickEdit}></i>
				</div>
				<p className="price">$ {price}</p>
			</div>
		</div>
	)
}

export default CartProduct
