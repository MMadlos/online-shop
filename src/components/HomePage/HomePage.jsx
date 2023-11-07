// import ActionsBar from "./ActionsBar"
import ProductList from "./ProductList"
import SearchAndSort from "./SearchAndSort/SearchAndSort"

function HomePage() {
	return (
		<>
			<div className="home">
				<SearchAndSort />
				<ProductList />
			</div>
		</>
	)
}

export default HomePage
