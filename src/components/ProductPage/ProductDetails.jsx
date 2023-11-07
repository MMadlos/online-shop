import AddCartBtn from "../Elements/AddCartBtn"

function ProductDetails({ productSelected }) {
	const { id, name, price, url, rate, countRates, description } = productSelected

	return (
		<div
			className="product-container"
			data-product-id={id}>
			<div className="image-container">
				<img
					src={url}
					alt="#"
				/>
			</div>
			<div className="product-header-container">
				<h1 className="product-header">{name}</h1>
				<div className="rate-container">
					<div className="star-container">
						<i className="fa-solid fa-star" />
						<i className="fa-solid fa-star" />
						<i className="fa-solid fa-star" />
						<i className="fa-solid fa-star" />
					</div>
					<p className="rate">{`${rate} (${countRates})`}</p>
				</div>
				<p className="price">{`$ ${price}`}</p>
			</div>
			<AddCartBtn />

			<div className="description-container">
				<p>About the product</p>
				<div className="product-description">
					<p>{description}</p>
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
