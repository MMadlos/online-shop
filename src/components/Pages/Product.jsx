import { Link, useParams } from "react-router-dom"
import ProductInfo from "../ProductInfo"
import { useContext } from "react"
import { ShopContext } from "../../App"

function Product() {
	const { productID } = useParams()
	const { productList } = useContext(ShopContext)

	// Find the product in the productList
	const [productSelected] = productList.filter((product) => product.id === Number(productID))

	return (
		<section className="product-info">
			<Link to="/">Return to Home</Link>
			<h2>Product section</h2>

			{productSelected ? <ProductInfo product={productSelected} /> : <p>No hay producto</p>}
		</section>
	)
}

export default Product
