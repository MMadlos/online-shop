import ErrorProduct from "./ErrorProduct"
import { useContext } from "react"
import { ShopContext } from "../../App"
import { useParams } from "react-router-dom"

import ShopButton from "./ShopButton"
import Counter from "./Counter"

function ProductInfo({ product }) {
	const { id, name, description, price, url, rate, countRates, quantity, isAdded } = product

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

				<Counter quantity={quantity} />
				<ShopButton isAdded={isAdded} />
			</div>
		</div>
	)
}

function ProductSection() {
	const { productID } = useParams()
	const { productList } = useContext(ShopContext)

	// Find the product in the productList
	const [productSelected] = productList.filter((product) => product.id === Number(productID))

	return (
		<section className="product-info">
			<h2>Product section</h2>

			{productSelected ? <ProductInfo product={productSelected} /> : <ErrorProduct />}
		</section>
	)
}

export default ProductSection
