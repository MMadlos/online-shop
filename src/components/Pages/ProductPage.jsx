import { Link } from "react-router-dom"

import ProductSection from "../ProductInfo"
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

export default ProductPage
