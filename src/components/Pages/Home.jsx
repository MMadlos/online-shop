import CategoryBar from "../CategoryBar"
import ActionsBar from "../ActionsBar"
import ProductsList from "../Products"

function HomePage({ categoryList, onClickCategory, selectedCategory, productList, onClickAddCart, onClickRemoveCart, onChangeSearch, isFound }) {
	return (
		<>
			<CategoryBar
				productsList={categoryList}
				onClickCategory={onClickCategory}
				selectedCategory={selectedCategory}
			/>
			<ActionsBar
				onChange={onChangeSearch}
				isFound={isFound}
			/>
			<ProductsList
				productList={productList}
				onClickAddCart={onClickAddCart}
				onClickRemoveCart={onClickRemoveCart}
			/>
		</>
	)
}

export default HomePage
