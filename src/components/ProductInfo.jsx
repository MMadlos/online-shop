import { useContext } from "react"
import { ShopContext } from "../App"
import { useParams } from "react-router-dom"

import ErrorProduct from "./Pages/ErrorProduct"
import ShopButton from "./Atoms/ShopButton"
import Counter from "./Atoms/Counter"

function ProductDetails({ productSelected }) {
	const { id, name, description, price, url, rate, countRates, quantity, isAdded } = productSelected

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

function ProductInfo() {
	const { productID } = useParams()
	const { productList } = useContext(ShopContext)

	const [productSelected] = productList.filter((product) => product.id === Number(productID))

	return (
		<section className="product-info">
			<h2>Product section</h2>

			{productSelected ? <ProductDetails productSelected={productSelected} /> : <ErrorProduct />}
		</section>
	)
}

export default ProductInfo
