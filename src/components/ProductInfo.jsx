import ShopButton from "./ShopButton"
import { useContext } from "react"
import { ShopContext } from "../App"

function ProductInfo({ product }) {
	const { handleClickAddCart, handleClickRemoveCart } = useContext(ShopContext)
	const { id, name, description, price, url, rate, countRates, isAdded, quantity } = product

	return (
		<div
			className="product-info"
			data-product-id={id}>
			<img
				src={url}
				alt="#"
			/>
			<div className="info-container">
				<h1>{name}</h1>
				<p>{`${rate} (${countRates})`}</p>
				<p>{description}</p>

				<p className="price">{`$ ${price}`}</p>

				{isAdded ? (
					<>
						<p>{quantity}</p>
						<ShopButton
							type="Remove"
							onClick={handleClickRemoveCart}
						/>
					</>
				) : (
					<ShopButton
						type="Add"
						onClick={handleClickAddCart}
					/>
				)}
			</div>
		</div>
	)
}

export default ProductInfo
