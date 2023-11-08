import Counter from "../Atoms/Counter"
import RemoveCartButton from "../Atoms/RemoveCartButton"
import { Link } from "react-router-dom"

function CartProduct({ product }) {
	const { id, name, price, url, quantity, description } = product

	return (
		<Link to={`/product/${id}`}>
			<div className="cart-product">
				<img
					src="url"
					alt=""
				/>
				<div className="cart-info-container">
					<div className="cart-header-container">
						<p className="name">{name}</p>
						<i className="fa-regular fa-trash-can"></i>
					</div>
					<div className="product-quantity-container">
						<p>{`Quantity: ${quantity}`}</p>
						<i className="fa-solid fa-pencil"></i>
					</div>
					<p className="price">$ {price}</p>
				</div>
			</div>

			<div
				key={id}
				className="product-card cart"
				data-product-id={id}>
				<div className="product-info">
					<div className="product-info-details-container">
						<img
							src={url}
							alt=""
						/>

						<div className="produt-info-name-price-container">
							<p className="name">
								<strong>{name}</strong>
							</p>
							<p className="description">{description}</p>
							<p className="price">$ {price}</p>
						</div>
					</div>

					<Counter
						context="cart"
						currentQuantity={quantity}
					/>
					<RemoveCartButton />
				</div>
			</div>
		</Link>
	)
}

export default CartProduct
