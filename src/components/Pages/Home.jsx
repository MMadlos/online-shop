import CategoryBar from "../CategoryBar"
import ProductsList from "../Products"

function HomePage({ categoryList, onClickCategory, selectedCategory, productList, onClickAddCart, onClickRemoveCart }) {
	return (
		<>
			<CategoryBar
				productsList={categoryList}
				onClickCategory={onClickCategory}
				selectedCategory={selectedCategory}
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
