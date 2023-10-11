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
		if (product.id !== productSelected.id) {
			newProductList.push(product)
		} else {
			const newProduct = { ...productSelected, isAdded: boolean }
			newProductList.push(newProduct)
		}
	})

	return newProductList
}

function counterQuantity(type, selectedProduct, listOfProducts) {
	if (type === "increase") selectedProduct.quantity++
	if (type === "decrease") {
		if (selectedProduct.quantity === 0) return

		selectedProduct.quantity--
	}

	let newList = []
	listOfProducts.forEach((product) => {
		if (product.id !== selectedProduct.id) {
			newList.push(product)
		} else {
			const newProduct = { ...selectedProduct }
			newList.push(newProduct)
		}
	})

	return newList
}

function increaseCounter(productSelected, productList) {
	let newProductList = []

	productList.forEach((product) => {
		if (product.id !== productSelected.id) {
			newProductList.push(product)
		} else {
			const newProduct = { ...productSelected }
			newProductList.push(newProduct)
		}
	})
	return newProductList
}

export { mapProductList, capitalizeText, getCategories, filterProductsByCategory, getProductByID, toggleIsProductAddedTo, counterQuantity, increaseCounter }
