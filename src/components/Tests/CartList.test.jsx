import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { ShopContext } from "../../App"
import { BrowserRouter } from "react-router-dom"

import CartList from "../CartPage/CartList"

describe("CartList()", () => {
	describe("Render all elements", () => {
		it("renders empty message if cart is empty", () => {
			const testValue = { cartList: [] }

			render(
				<ShopContext.Provider value={testValue}>
					<CartList />
				</ShopContext.Provider>
			)

			expect(screen.getByRole("heading")).toBeInTheDocument()
			expect(screen.getByRole("heading").textContent).toMatch(/your cart is empty/i)
		})

		it("renders product if cart is not empty", () => {
			const testValue = {
				cartList: [
					{
						id: 0,
						name: "firstProduct",
					},
					{
						id: 1,
						name: "secondProduct",
					},
				],
			}

			render(
				<ShopContext.Provider value={testValue}>
					<BrowserRouter>
						<CartList />
					</BrowserRouter>
				</ShopContext.Provider>
			)

			expect(screen.getByText("firstProduct")).toBeInTheDocument()
			expect(screen.getByText("secondProduct")).toBeInTheDocument()
			expect(screen.getByText("Checkout")).toBeInTheDocument()
			expect(screen.getByText(/total amount/i)).toBeInTheDocument()
		})
	})
})
