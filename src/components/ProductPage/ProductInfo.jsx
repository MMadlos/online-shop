import { useContext } from "react"
import { ShopContext } from "../../App"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

import ProductDetails from "./ProductDetails"
import ErrorProduct from "../Error/ErrorProduct"

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
