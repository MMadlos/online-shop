function capitalizeText(text) {
	const firstLetter = text.slice(0, 1).toUpperCase()
	const restText = text.slice(1)
	const word = firstLetter + restText
	return word
}

function getCategories(productList) {
	let categoriesList = []
	productList.forEach((product) => {
		categoriesList.push(product.category)
	})
	return [...new Set(categoriesList)]
}

function mapProductList(products) {
	return products.map((product) => ({
		id: product.id,
		name: product.title,
		price: product.price,
		description: product.description,
		category: product.category,
		url: product.image,
		rate: product.rating.rate,
		countRates: product.rating.count,
		isAdded: false,
		quantity: 0,
	}))
}

function filterProductsByCategory(productList, category) {
	if (category === "All categories") return productList

	return productList.filter((product) => product.category.toLowerCase() === category.toLowerCase())
}

function getProductByID(productList, ID) {
	return productList.filter((product) => product.id === ID)
}

function toggleIsProductAddedTo(boolean, productSelected, productList) {
	let newProductList = []

	productList.forEach((product) => {
		const newProduct = { ...productSelected, isAdded: boolean }
		newProductList.push(product.id !== productSelected.id ? product : newProduct)
	})

	return newProductList
}

export { mapProductList, capitalizeText, getCategories, filterProductsByCategory, getProductByID, toggleIsProductAddedTo }
