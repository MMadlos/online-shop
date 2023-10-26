import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { BrowserRouter, MemoryRouter } from "react-router-dom"
import { ShopContext } from "../../App"

import ProductInfo from "../ProductPage/ProductInfo"

describe("ProductInfo", () => {
	it("renders ProductInfo", () => {
		const { container } = render(
			<BrowserRouter>
				<ProductInfo />
			</BrowserRouter>
		)
		expect(container).toMatchSnapshot
	})

	it("renders error product if there's no product", () => {
		render(<ProductInfo />, { wrapper: BrowserRouter })

		expect(screen.getByText(/no product/i)).toBeInTheDocument()
	})

	it.skip("renders content if there is a product", () => {
		// Pending to investigate more on how to test when a component uses useParams()

		const testValue = {
			productList: [
				{
					id: 1,
					name: "name",
					description: "description",
					price: 2,
					url: "url",
					rate: 3,
					countRates: 4,
					quantity: 5,
				},
				{
					id: 2,
					name: "name",
					description: "description",
					price: 2,
					url: "url",
					rate: 3,
					countRates: 4,
					quantity: 5,
				},
			],
		}

		const route = "/product/1"

		render(
			<MemoryRouter initialEntries={[route]}>
				<ShopContext.Provider value={testValue}>
					<ProductInfo />
				</ShopContext.Provider>
			</MemoryRouter>
		)

		screen.debug()
	})
})
