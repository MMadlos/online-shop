import { Link } from "react-router-dom"

import ProductInfo from "../ProductInfo"
import CategoryBar from "../CategoryBar"

function ProductPage() {
	return (
		<>
			<CategoryBar />
			<Link to="/">Return to results</Link>
			<ProductInfo />
			{/* <Recomended /> */}
		</>
	)
}

export default ProductPage
