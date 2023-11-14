import { describe, expect, it, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import CartList from "../CartList"

vi.mock("../CartProduct", () => ({
	default: ({ product, onClickEdit }) => (
		<div data-testid="product-container">
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
	it("renders the cartList array in no particular order", () => {
		const mockProducts = [
			{ id: 1, name: "Product 1" },
			{ id: 2, name: "Product 2" },
			{ id: 3, name: "Product 3" },
		]

		render(<CartList cartList={mockProducts} />)

		const allIDs = screen.getAllByTestId("product-id")

		expect(allIDs.length).toBe(mockProducts.length)
		expect(allIDs[0].textContent).toMatch(`${mockProducts[0].id}`)
		expect(allIDs[1].textContent).toMatch(`${mockProducts[1].id}`)
		expect(allIDs[2].textContent).toMatch(`${mockProducts[2].id}`)

		const allProductNames = screen.queryAllByTestId("product-name")

		expect(allProductNames.length).toBe(mockProducts.length)

		const allCartProducts = screen.getAllByTestId("product-container")
		expect(allCartProducts.length).toBe(3)
	})

	it("doesn't render any cartList when array is empty", () => {
		const mockProducts = []

		render(<CartList cartList={mockProducts} />)

		const allProductNames = screen.queryAllByTestId("product-name")
		expect(allProductNames.length).toBe(0)
	})

	it("calls onClickEdit function when cartProduct is clicked", async () => {
		const onClickEdit = vi.fn()
		const user = userEvent.setup()

		const mockProducts = [
			{ id: 1, name: "Product 1" },
			{ id: 2, name: "Product 2" },
			{ id: 3, name: "Product 3" },
		]

		render(
			<CartList
				cartList={mockProducts}
				onClickEdit={onClickEdit}
			/>
		)

		const allButtons = screen.getAllByTestId("button")

		expect(allButtons.length).toBe(mockProducts.length)

		const firstBtn = allButtons[0]
		await user.click(firstBtn)

		expect(onClickEdit).toHaveBeenCalled()
	})

	it("doesn't call onClickEdit fn when cartProduct is not clicked", () => {
		const onClickEdit = vi.fn()
		const mockProducts = [
			{ id: 1, name: "Product 1" },
			{ id: 2, name: "Product 2" },
			{ id: 3, name: "Product 3" },
		]

		render(<CartList cartList={mockProducts} />)

		expect(onClickEdit).not.toHaveBeenCalled()
	})
})
