import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { ShopContext } from "../../App"
import ProductList from "../HomePage/ProductList"
import { BrowserRouter } from "react-router-dom"

const valueToShow = {
	productsToShow: [
		{
			id: 0,
			name: "firstTest",
		},
		{
			id: 1,
			name: "secondTest",
		},
	],
}

describe("HomePage", () => {
	it("Renders ProductList()", () => {
		const { container } = render(
			<BrowserRouter>
				<ShopContext.Provider value={valueToShow}>
					<ProductList />
				</ShopContext.Provider>
			</BrowserRouter>
		)

		expect(container).toMatchSnapshot()
	})

	it("Renders all values", () => {
		render(
			<BrowserRouter>
				<ShopContext.Provider value={valueToShow}>
					<ProductList />
				</ShopContext.Provider>
			</BrowserRouter>
		)

		expect(screen.getAllByRole("button")).toHaveLength(2)
	})
	it("renders the exact values provided", () => {
		render(
			<BrowserRouter>
				<ShopContext.Provider value={valueToShow}>
					<ProductList />
				</ShopContext.Provider>
			</BrowserRouter>
		)

		expect(screen.getAllByRole("button").length).not.toBeGreaterThan(2)
		expect(screen.getAllByRole("button").length).not.toBeLessThan(2)
	})
})
