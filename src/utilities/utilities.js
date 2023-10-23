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
	const [product] = productList.filter((product) => product.id === ID)
	return product
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

function replaceProductInList(productSelected, productList) {
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

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function getMultipleUniqueRandomInt(length, minNumRange, maxNumRange, excludeNum) {
	let randomNumbers = []

	for (let i = 0; i < length; i++) {
		loopRandomNumsUntilFound()
	}

	function loopRandomNumsUntilFound() {
		const randomNumber = getRandomIntInclusive(minNumRange, maxNumRange)
		if (!randomNumbers.includes(randomNumber)) {
			randomNumbers.push(randomNumber)
			return
		}
		if (randomNumbers.includes(randomNumber) || randomNumber === excludeNum) loopRandomNumsUntilFound()
	}

	return randomNumbers
}

export {
	mapProductList,
	capitalizeText,
	getCategories,
	filterProductsByCategory,
	getProductByID,
	toggleIsProductAddedTo,
	replaceProductInList,
	getRandomIntInclusive,
	getMultipleUniqueRandomInt,
}
