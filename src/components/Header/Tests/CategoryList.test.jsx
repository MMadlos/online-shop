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

	it("adds class 'mobile' if it's passed to props (styles)", () => {
		render(
			<BrowserRouter>
				<ShopContext.Provider value={{ productList: mockProductList, selectedCategory: mockSelectedCategory }}>
					<CategoryList styles="mobile" />
				</ShopContext.Provider>
			</BrowserRouter>
		)

		const liElement = screen.getByText(categoryAllProducts).parentElement
		const divElement = liElement.parentElement.parentElement

		expect(divElement).toHaveClass("mobile")
	})

	it("calls onClickCategory if Link is clicked", async () => {
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
		await user.click(categoryA)

		expect(onClick).toHaveBeenCalled()
	})

	it("doesn't call onClickCategory if Link is not clicked", () => {
		const onClick = vi.fn()
		const mockSelectedCategoryFn = vi.fn()

		render(
			<BrowserRouter>
				<ShopContext.Provider value={{ productList: mockProductList, selectedCategory: mockSelectedCategory, setSelectedCategory: mockSelectedCategoryFn }}>
					<CategoryList onClickCategory={onClick} />
				</ShopContext.Provider>
			</BrowserRouter>
		)

		expect(onClick).not.toHaveBeenCalled()
	})
})