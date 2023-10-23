import CategoryBar from "../CategoryBar"
import ActionsBar from "../ActionsBar"
import ProductCard from "../ProductList"
import { useContext } from "react"
import { ShopContext } from "../../App"

function HomePage() {
	const { productsToShow } = useContext(ShopContext)

	return (
		<>
			<CategoryBar />
			<ActionsBar />

			<main>
				{productsToShow.map((product) => {
					return (
						<ProductCard
							key={product.id}
							product={product}
						/>
					)
				})}
			</main>
			{/* <ProductList /> */}
		</>
	)
}

export default HomePage
