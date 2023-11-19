import { Link } from "react-router-dom"

function Card({ product }) {
	const { id, name, price, url } = product

	return (
		<div
			className="product-card"
			data-product-id={id}>
			<img
				src={url}
				alt="#"
			/>
			<div className="product-info">
				<p id="price">{"$ " + price}</p>
				<h2 id="name">{name}</h2>
			</div>
		</div>
	)
}

function ProductCard({ product, context }) {
	if (context === "editCart") {
		return <Card product={product} />
	}

	return (
		<Link to={`/product/${product.id}`}>
			<Card product={product} />
		</Link>
	)
}

export default ProductCard
