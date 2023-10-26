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

function getSortType(object) {
	const { group, item } = object

	const isDefault = group === "Default"
	const isAlph = group === "Alphabetically"
	const isPrice = group === "By price"
	const isRate = group === "By rate"

	const isAtoZ = item === "A to Z"
	const isZtoA = item === "Z to A"
	const isHighestFirst = item === "Highest first"
	const isLowestFirst = item === "Lowest first"

	return { isDefault, isAlph, isPrice, isRate, isAtoZ, isZtoA, isHighestFirst, isLowestFirst }
}

function sortProducts(
	product,
	sortType = {
		group: "Default",
		item: "Default",
	}
) {
	const { isDefault, isAlph, isPrice, isRate, isAtoZ, isZtoA, isHighestFirst, isLowestFirst } = getSortType(sortType)

	if (isDefault) return product.toSorted((a, b) => a.id - b.id)
	if (isPrice && isLowestFirst) return product.toSorted((a, b) => a.price - b.price)
	if (isPrice && isHighestFirst) return product.toSorted((a, b) => b.price - a.price)
	if (isAlph && isAtoZ) {
		return product.toSorted((a, b) => {
			const nameA = a.name.toUpperCase()
			const nameB = b.name.toUpperCase()
			if (nameA < nameB) return -1
			if (nameA > nameB) return 1
			return 0
		})
	}
	if (isAlph && isZtoA) {
		return product.toSorted((a, b) => {
			const nameA = a.name.toUpperCase()
			const nameB = b.name.toUpperCase()
			if (nameA > nameB) return -1
			if (nameA < nameB) return 1
			return 0
		})
	}
	if (isRate && isLowestFirst) return product.toSorted((a, b) => a.rate - b.rate)
	if (isRate && isHighestFirst) return product.toSorted((a, b) => b.rate - a.rate)
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
	sortProducts,
}
