// import ActionsBar from "./ActionsBar"
import ProductList from "./ProductList"
import SearchAndFilter from "../SearchAndFilter/SearchAndFilter"

function HomePage() {
	return (
		<>
			<div className="home">
				<SearchAndFilter />
				<ProductList />
			</div>
		</>
	)
}

export default HomePage
