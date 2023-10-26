import { render, screen } from "@testing-library/react"
import { describe, it, expect, beforeEach } from "vitest"

import ProductDetails from "../ProductPage/ProductDetails"

describe("ProductDetails()", () => {
	describe("render all details", () => {
		beforeEach(() => {
			const testProduct = {
				id: 1,
				name: "name",
				description: "description",
				price: 2,
				url: "url",
				rate: 3,
				countRates: 4,
				quantity: 5,
			}

			render(<ProductDetails productSelected={testProduct} />)
		})

		it("renders image url", () => {
			const img = screen.getByRole("img")
			expect(img).toHaveAttribute("src", "url")
		})
		it("renders product name", () => {
			expect(screen.getByText("name")).toBeInTheDocument()
		})
		it("renders description", () => {
			expect(screen.getByText("description")).toBeInTheDocument()
		})
		it("renders price", () => {
			expect(screen.getByText(/2/i)).toBeInTheDocument()
		})
		it("renders rate", () => {
			expect(screen.getByText(/3/i)).toBeInTheDocument()
		})
		it("renders count rates", () => {
			expect(screen.getByText(/4/i)).toBeInTheDocument()
		})
		it("renders quantity = 1", () => {
			expect(screen.getByText(/1/i)).toBeInTheDocument()
			expect(screen.queryByText(/5/i)).not.toBeInTheDocument()
		})

		it("renders all buttons", () => {
			const allButtons = screen.getAllByRole("button")

			expect(allButtons.length).toBe(3)
			expect(allButtons[0]).toHaveAttribute("id", "decrease")
			expect(allButtons[1]).toHaveAttribute("id", "increase")
			expect(allButtons[2]).toHaveAttribute("id", "add-cart")
			expect(allButtons[2].textContent).toMatch(/add/i)
		})
	})
})
