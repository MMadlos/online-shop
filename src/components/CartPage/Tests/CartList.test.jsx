import { describe, expect, it, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import { ShopContext } from "../../../App"
import { testMockMultipleProducts } from "../../../consts/testMockProduct"

import CartList from "../CartList"

vi.mock("../CartProduct", () => ({
	default: ({ product, onClickEdit }) => (
		<div>
			<div data-testid="product-id">{product.id}</div>
			<div data-testid="product-name">{product.name}</div>
			<button
				data-testid="button"
				onClick={onClickEdit}>
				Click
			</button>
		</div>
	),
}))

describe("CartList", () => {
	it.skip("renders the component", () => {
		const cartList = { cartList: testMockMultipleProducts }

		const container = render(
			<ShopContext.Provider value={cartList}>
				<BrowserRouter>
					<CartList />
				</BrowserRouter>
			</ShopContext.Provider>
		)

		expect(container).toMatchSnapshot()
	})

	it("renders the cartList array in no particular order", () => {
		const mockProducts = [
			{ id: 1, name: "Product 1" },
			{ id: 2, name: "Product 2" },
			{ id: 3, name: "Product 3" },
		]

		const cartList = { cartList: mockProducts }

		render(
			<ShopContext.Provider value={cartList}>
				<BrowserRouter>
					<CartList />
				</BrowserRouter>
			</ShopContext.Provider>
		)

		const allIDs = screen.getAllByTestId("product-id")

		expect(allIDs.length).toBe(mockProducts.length)
		expect(allIDs[0].textContent).toMatch(`${mockProducts[0].id}`)
		expect(allIDs[1].textContent).toMatch(`${mockProducts[1].id}`)
		expect(allIDs[2].textContent).toMatch(`${mockProducts[2].id}`)

		const allProductNames = screen.queryAllByTestId("product-name")

		expect(allProductNames.length).toBe(mockProducts.length)
	})
})

// Qué es lo más importante de este componente?
/*
- Renderizar lista de productos
- Si isEditOpen = true, que se muestre el componente EditCartItem
- Se renderiza "Checkout"

*/
