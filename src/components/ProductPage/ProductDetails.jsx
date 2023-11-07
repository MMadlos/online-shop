import AddCartBtn from "../Elements/AddCartBtn"
import Rating from "./Rating"
// import promoImage from "/home/michael/repos/online-shop/public/promo-image - Optim.png"
import promoImage from "/public/promo-image-tiny.png"

function ProductDetails({ productSelected }) {
	const { id, name, price, url, rate, countRates, description } = productSelected

	return (
		<div
			className="product-container"
			data-product-id={id}>
			{/* <div className="image-container"> */}
			<img
				src={url}
				alt="#"
				className="product-image"
			/>
			{/* </div> */}

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

// function ProductDetails({ productSelected }) {
// 	const { id, name, description, price, url, rate, countRates, quantity } = productSelected

// 	return (
// 		<div
// 			className="product-details-container"
// 			data-product-id={id}>
// 			<div className="image-container">
// 				<img
// 					src={url}
// 					alt="#"
// 				/>
// 			</div>
// 			<div className="product-details">
// 				<div className="details-container">
// 					<h1>{name}</h1>
// 					<div className="rate-container">
// 						<i className="fa-solid fa-star" />
// 						<p>{`${rate} (${countRates})`}</p>
// 					</div>
// 					<p className="description">{description}</p>

// 					<p className="price">{`$ ${price}`}</p>
// 				</div>
// 				<div className="add-cart-container">
// 					<Counter
// 						context="product"
// 						quantity={quantity}
// 					/>
// 					<AddCartButton context="info" />
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

export default ProductDetails
