import AddCartBtn from "../Elements/AddCartBtn"
import Rating from "./Rating"
import promoImage from "/public/promo-image-tiny.png"

function ProductDetails({ productSelected }) {
	const { id, name, price, url, rate, countRates, description } = productSelected

	return (
		<div
			className="product-container"
			data-product-id={id}>
			<img
				src={url}
				alt="#"
				className="product-image"
			/>

			<div className="product-details">
				<img
					src={promoImage}
					alt=""
					className="promo-image"
				/>
				<div className="product-header-container">
					<h1 className="product-header">{name}</h1>
					<Rating
						rate={rate}
						countRates={countRates}
					/>
					<p className="price">{`$ ${price}`}</p>
				</div>

				<AddCartBtn />

				<div className="product-about-container">
					<p>About the product</p>
					<div className="product-about">
						<p>{description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDetails
