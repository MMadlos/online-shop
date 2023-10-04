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

function mappedProductList(products) {
	let mappedProductList = []
	products.forEach((product) => {
		const mappedProduct = {
			id: product.id,
			name: product.title,
			price: product.price,
			description: product.description,
			category: product.category,
			url: product.image,
			rate: product.rating.rate,
			countRates: product.rating.count,
			isAdded: false,
		}

		mappedProductList.push(mappedProduct)
	})

	return mappedProductList
}

export { mappedProductList, capitalizeText, getCategories }
