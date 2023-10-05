import { render, screen } from "@testing-library/react"
import ProductCard from "../ProductCard"
import { describe, it, expect } from "vitest"

describe("ProductCard", () => {
	const product = {
		name: "Product Name",
		description: "Product description",
		price: 3,
		url: "https://loremimpsum.com",
		rate: 3.9,
		countRates: 320,
	}

	const { name, description, price, url, rate, countRates } = product

	it("renders product name", () => {
		render(<ProductCard product={product} />)
		expect(screen.getByText(name)).toBeInTheDocument()
	})
	it("renders product description", () => {
		render(<ProductCard product={product} />)
		expect(screen.getByText(description)).toBeInTheDocument()
	})
	it("renders price", () => {
		render(<ProductCard product={product} />)
		expect(screen.getByText("$ " + price)).toBeInTheDocument()
	})
	it("renders image", () => {
		render(<ProductCard product={product} />)
		expect(screen.getByRole("img").src).toMatch(url)
	})
	it("renders rate", () => {
		render(<ProductCard product={product} />)
		expect(screen.getByText(rate)).toBeInTheDocument()
	})

	it("renders count rates", () => {
		render(<ProductCard product={product} />)
		expect(screen.getByText(countRates)).toBeInTheDocument()
	})
	it("renders button add when the item is not added to cart", () => {
		const newProduct = { isAdded: false }
		render(<ProductCard product={newProduct} />)
		expect(screen.getByRole("button").textContent).toBe("Add to cart")
	})
	it("renders button remove when the item has been added to cart", () => {
		const newProduct = { isAdded: true }
		render(<ProductCard product={newProduct} />)
		expect(screen.getByRole("button").textContent).toBe("Remove from cart")
	})
})
