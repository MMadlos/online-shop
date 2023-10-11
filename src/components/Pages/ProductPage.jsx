import { Link, useParams } from "react-router-dom"
import ProductInfo from "../ProductInfo"
import ErrorProduct from "./ErrorProduct"
import { useContext } from "react"
import { ShopContext } from "../../App"

import CategoryBar from "../CategoryBar"

function ProductPage() {
	return (
		<>
			<CategoryBar />
			<Link to="/">Return to results</Link>
			<ProductSection />
			{/* <Recomended /> */}
		</>
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

export default ProductPage
