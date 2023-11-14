import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import Checkout from "../Checkout"
import userEvent from "@testing-library/user-event"

const totalToPay = 2
const totalItems = 1

describe("Checkout", () => {
	it.skip("renders component", () => {
		const { container } = render(
			<Checkout
				totalToPay={totalToPay}
				totalItems={totalItems}
			/>
		)
		expect(container).toMatchSnapshot()
	})
	it("renders subtotal, total and items number", () => {
		render(
			<Checkout
				totalToPay={totalToPay}
				totalItems={totalItems}
			/>
		)

		const totalItemsEl = screen.getByTestId("total-items")
		const subtotalAmountEl = screen.getByTestId("subtotal-amount")
		const totalAmountEl = screen.getByTestId("total-amount")

		expect(totalItemsEl).toBeInTheDocument()
		expect(totalItemsEl).toHaveTextContent(totalItems)

		expect(subtotalAmountEl).toBeInTheDocument()
		expect(subtotalAmountEl).toHaveTextContent(totalToPay)

		expect(totalAmountEl).toBeInTheDocument()
		expect(totalAmountEl).toHaveTextContent(totalToPay)
	})

	it("renders image with the corresponding url", () => {
		render(
			<Checkout
				totalToPay={totalToPay}
				totalItems={totalItems}
			/>
		)

		const img = screen.getByRole("img")
		expect(img).toHaveAttribute("src", expect.not.stringContaining(" "))
	})

	it("renders button with id = checkout", () => {
		render(
			<Checkout
				totalToPay={totalToPay}
				totalItems={totalItems}
			/>
		)

		const checkoutBtn = screen.getByRole("button")
		expect(checkoutBtn).toBeInTheDocument()
		expect(checkoutBtn).toHaveAttribute("id", "checkout")
		expect(checkoutBtn).toHaveTextContent(/checkout/i)
	})

	it("opens CheckoutPage if button is clicked", async () => {
		vi.mock("../CheckoutPage", () => ({
			default: () => {
				return <div data-testid="checkout-page">Checkout Page Content</div>
			},
		}))

		const user = userEvent.setup()

		render(
			<BrowserRouter>
				<Checkout
					totalToPay={totalToPay}
					totalItems={totalItems}
				/>
			</BrowserRouter>
		)

		const checkoutBtn = screen.getByRole("button", { name: /checkout/i })
		await user.click(checkoutBtn)
		screen.debug()

		const checkoutPage = screen.getByTestId("checkout-page")

		expect(checkoutPage).toBeInTheDocument()
		expect(checkoutPage).toHaveTextContent("Checkout Page")
	})

	it("doesn't open CheckoutPage if button is not clicked", () => {
		render(
			<BrowserRouter>
				<Checkout
					totalToPay={totalToPay}
					totalItems={totalItems}
				/>
			</BrowserRouter>
		)

		const checkoutPage = screen.queryByTestId("checkout-page")
		expect(checkoutPage).not.toBeInTheDocument()
	})
})
