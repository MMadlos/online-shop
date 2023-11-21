import "./styles.css"

import { useParams } from "react-router-dom"

function ErrorProduct() {
	const { productID } = useParams()
	return (
		<section className="no-product-found">
			<h1>Oh no! There is no product that matches the ID {productID}</h1>
			<ul>
				<li>- Check if the ID you've introduced in the URL is correct</li>
				<li>- The product you're searching for may be discontinued or not yet on our site</li>
				<li>- Go back to the shop. We are sure that you'll find something that you like :)</li>
			</ul>
		</section>
	)
}

export default ErrorProduct
