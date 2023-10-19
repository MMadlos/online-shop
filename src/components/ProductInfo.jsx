import { useContext } from "react"
import { ShopContext } from "../App"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

import ErrorProduct from "./Pages/ErrorProduct"
import Counter from "./Atoms/Counter"
import AddCartButton from "./Atoms/AddCartButton"

function ProductDetails({ productSelected }) {
	const { id, name, description, price, url, rate, countRates, quantity } = productSelected

	return (
		<div
			className="product-details-container"
			data-product-id={id}>
			<div className="image-container">
				<img
					src={url}
					alt="#"
				/>
			</div>
			<div className="product-details">
				<div className="details-container">
					<h1>{name}</h1>
					<div className="rate-container">
						<i className="fa-solid fa-star" />
						<p>{`${rate} (${countRates})`}</p>
					</div>
					<p className="description">{description}</p>

					<p className="price">{`$ ${price}`}</p>
				</div>
				<div className="add-cart-container">
					<Counter
						context="product"
						quantity={quantity}
					/>
					<AddCartButton context="info" />
				</div>
			</div>
		</div>
	)
}

function ProductInfo() {
	const { productID } = useParams()
	const { productList } = useContext(ShopContext)

	const [productSelected] = productList.filter((product) => product.id === Number(productID))

	return (
		<section className="product-info">
			<Link to="/">
				<i className="fa-solid fa-chevron-left"></i>
				Back to all results
			</Link>

			{productSelected ? <ProductDetails productSelected={productSelected} /> : <ErrorProduct />}
		</section>
	)
}

export default ProductInfo
