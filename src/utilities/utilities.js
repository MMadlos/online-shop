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
	}))
}

export { mapProductList, capitalizeText, getCategories }
