import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import userEvent from "@testing-library/user-event"

import App from "../../App"

describe("App", () => {
	it("Renders App", () => {
		const { container } = render(<App />)

		expect(container).toMatchSnapshot()
	})

	it("renders without any item in the cart", () => {
		render(<App />)
		expect(screen.getByText("Cart (0)")).toBeInTheDocument()
	})

	it("Increments or decrements cart number when clicking in add to cart button", async () => {
		const user = userEvent.setup()

		render(<App />)

		const allButtons = screen.getAllByText("Add to cart")
		const addCartBtn = allButtons[0]

		await user.click(addCartBtn)

		expect(screen.getByText("Cart (1)")).toBeInTheDocument()

		const removeBtn = screen.getByText("Remove from cart")
		await user.click(removeBtn)

		expect(screen.getByText("Cart (0)")).toBeInTheDocument()
	})

	it("initially selects 'Men's clothing' category", () => {
		const { container } = render(<App />)

		const categorySelected = container.querySelector(".selected")
		expect(categorySelected.textContent).toBe("Men's clothing")
	})
})
