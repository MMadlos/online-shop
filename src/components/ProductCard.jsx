import { Link } from "react-router-dom"

function ProductCard({ product }) {
	const { id, name, price, url } = product
	const urlLink = `product/${id}`

	return (
		<Link to={urlLink}>
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
		</Link>
	)
}

export default ProductCard
