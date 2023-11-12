import "./styles.css"
import ProductInfo from "./ProductInfo"
import Recommendation from "../Recommendation/Recommendation"

// TODO - Change it to ProductLayout() ?
// If there is no useParam(), should show something about the product page and return to the main page.

function ProductPage() {
	return (
		<>
			<ProductInfo />
			<Recommendation />
		</>
	)
}

export default ProductPage
