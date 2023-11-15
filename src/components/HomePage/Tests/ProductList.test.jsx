import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import { ShopContext } from "../../../App"

import ProductList from "../ProductList"

vi.mock("../../Elements/ProductCard", () => ({
	default: ({ product }) => {
		return (
			<div data-testid="product-container">
				<p>{product.name}</p>
			</div>
		)
	},
}))

const products = [
	{ id: 1, name: "Product 1" },
	{ id: 2, name: "Product 2" },
	{ id: 3, name: "Product 3" },
]

describe("ProductList", () => {
	it.skip("renders component", () => {
		const { container } = render(
			<ShopContext.Provider value={{ productsToShow: products }}>
				<ProductList />
			</ShopContext.Provider>
		)

		screen.debug()
		expect(container).toMatchSnapshot()
	})

	it("renders products if products > 0", () => {
		render(
			<ShopContext.Provider value={{ productsToShow: products }}>
				<ProductList />
			</ShopContext.Provider>
		)

		const allProducts = screen.getAllByTestId("product-container")

		expect(allProducts).toHaveLength(products.length)
		expect(screen.getByText(products[0].name)).toBeInTheDocument
		expect(screen.getByText(products[1].name)).toBeInTheDocument
		expect(screen.getByText(products[2].name)).toBeInTheDocument
	})

	it("doesn't render products if products = 0", () => {
		render(
			<ShopContext.Provider value={{ productsToShow: [] }}>
				<ProductList />
			</ShopContext.Provider>
		)

		const allProducts = screen.queryAllByTestId("product-container")
		expect(allProducts).toHaveLength(0)
	})
})
