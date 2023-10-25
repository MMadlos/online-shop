import Counter from "../Atoms/Counter"
import RemoveCartButton from "../Atoms/RemoveCartButton"
import { Link } from "react-router-dom"

function CartProduct({ product }) {
	const { id, name, price, url, quantity, description } = product

	return (
		<Link to={`/product/${id}`}>
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
