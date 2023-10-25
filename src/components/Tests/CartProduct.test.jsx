import { render, screen } from "@testing-library/react"
import { describe, it, expect, beforeEach } from "vitest"
import { BrowserRouter } from "react-router-dom"

import CartProduct from "../CartPage/CartProduct"

describe("CartProduct()", () => {
	describe("Render all elements", () => {
		const mockProduct = {
			name: "name",
			price: 21,
			url: "url",
			quantity: 3,
			description: "description",
		}

		const { name, url, quantity, description } = mockProduct

		beforeEach(() => {
			render(
				<BrowserRouter>
					<CartProduct product={mockProduct} />
				</BrowserRouter>
			)
		})

		it("renders product name", () => {
			expect(screen.getByText(name)).toBeInTheDocument()
		})
		it("renders price", () => {
			expect(screen.getByText(/21/i)).toBeInTheDocument()
		})
		it("renders image url", () => {
			expect(screen.getByRole("img")).toHaveAttribute("src", url)
		})
		it("renders quantity", () => {
			expect(screen.getByText(quantity)).toBeInTheDocument()
		})
		it("renders description", () => {
			expect(screen.getByText(description)).toBeInTheDocument()
		})
	})
})
