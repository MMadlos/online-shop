function capitalizeText(text) {
	const firstLetter = text.slice(0, 1).toUpperCase()
	const restText = text.slice(1)
	const word = firstLetter + restText
	return word
}

function getCategories(productList) {
	let Categories = []
	productList.forEach((product) => {
		Categories.push(product.category)
	})
	return [...new Set(Categories)]
}

export { capitalizeText, getCategories }
