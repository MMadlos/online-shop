import { describe, expect, it, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { BrowserRouter } from "react-router-dom"
import { ShopContext } from "../../../App"

import CategoryList from "../CategoryList"

const mockProductList = [
	{
		id: 1,
		category: "Category A",
	},
	{
		id: 2,
		category: "Category B",
	},
]

const mockSelectedCategory = "Category A"
const categoryAllProducts = "All products"

describe("CategoryList", () => {
	it("renders all categories", () => {
		render(
			<BrowserRouter>
				<ShopContext.Provider value={{ productList: mockProductList, selectedCategory: mockSelectedCategory }}>
					<CategoryList />
				</ShopContext.Provider>
			</BrowserRouter>
		)

		const allProductsCategory = screen.getByText(categoryAllProducts)
		const categoryA = screen.getByText(mockProductList[0].category)
		const categoryB = screen.getByText(mockProductList[1].category)

		expect(allProductsCategory).toBeInTheDocument()
		expect(categoryA).toBeInTheDocument()
		expect(categoryB).toBeInTheDocument()
	})

	it("renders only 'All product' category if there is no other categories", () => {
		render(
			<BrowserRouter>
				<CategoryList />
			</BrowserRouter>
		)

		const allProductsEl = screen.getByText("All products")
		const ulEl = allProductsEl.parentElement.parentElement
		const allLiEl = ulEl.children

		expect(allProductsEl).toBeInTheDocument()
		expect(allLiEl).toHaveLength(1)
	})

	it("adds class 'selected' to the selected class by default", () => {
		render(
			<BrowserRouter>
				<ShopContext.Provider value={{ productList: mockProductList, selectedCategory: mockSelectedCategory }}>
					<CategoryList />
				</ShopContext.Provider>
			</BrowserRouter>
		)

		const defaultSelectedCataegory = screen.getByText(mockSelectedCategory)

		expect(defaultSelectedCataegory).toBeInTheDocument()
		expect(defaultSelectedCataegory.parentElement).toHaveClass("selected")
	})

	it("adds class 'selected' if another category than the default is clicked and is removed from the default category", async () => {
		const onClick = vi.fn()
		const mockSelectedCategoryFn = vi.fn()
		const user = userEvent.setup()

		render(
			<BrowserRouter>
				<ShopContext.Provider value={{ productList: mockProductList, selectedCategory: mockSelectedCategory, setSelectedCategory: mockSelectedCategoryFn }}>
					<CategoryList onClickCategory={onClick} />
				</ShopContext.Provider>
			</BrowserRouter>
		)

		const categoryA = screen.getByText(mockProductList[0].category)
		const defaultCategory = screen.getByText(mockSelectedCategory)
		await user.click(categoryA)

		expect(categoryA.parentElement).toHaveClass("selected")
		expect(defaultCategory).not.toHaveClass("selected")
	})

	it("adds class 'mobile' if isMobile prop is true", () => {
		render(
			<BrowserRouter>
				<ShopContext.Provider value={{ productList: mockProductList, selectedCategory: mockSelectedCategory }}>
					<CategoryList isMobile={true} />
				</ShopContext.Provider>
			</BrowserRouter>
		)

		const liElement = screen.getByText(categoryAllProducts).parentElement
		const divElement = liElement.parentElement.parentElement

		expect(divElement).toHaveClass("mobile")
	})

	it("calls onClickCategory if Link is clicked", async () => {
		const onClick = vi.fn()
		const mockSelectedCategoryFn = vi.fn(onClick)
		const user = userEvent.setup()

		render(
			<BrowserRouter>
				<ShopContext.Provider value={{ productList: mockProductList, selectedCategory: mockSelectedCategory, setSelectedCategory: mockSelectedCategoryFn }}>
					<CategoryList onClickCategory={onClick} />
				</ShopContext.Provider>
			</BrowserRouter>
		)

		const categoryA = screen.getByText(mockProductList[0].category)
		await user.click(categoryA)

		expect(onClick).toHaveBeenCalled()
	})

	it("doesn't call onClickCategory if Link is not clicked", () => {
		const onClick = vi.fn()
		const mockSetSelectedCategoryFn = vi.fn()

		render(
			<BrowserRouter>
				<ShopContext.Provider value={{ productList: mockProductList, selectedCategory: mockSelectedCategory, setSelectedCategory: mockSetSelectedCategoryFn }}>
					<CategoryList onClickCategory={onClick} />
				</ShopContext.Provider>
			</BrowserRouter>
		)

		expect(onClick).not.toHaveBeenCalled()
	})
})
