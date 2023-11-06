// import ActionsBar from "./ActionsBar"
import ProductList from "./ProductList"
import SearchAndFilter from "../SearchAndFilter/SearchAndFilter"
function HomePage() {
	return (
		<>
			<SearchAndFilter />
			{/* <ActionsBar /> */}
			<ProductList />
		</>
	)
}

export default HomePage
