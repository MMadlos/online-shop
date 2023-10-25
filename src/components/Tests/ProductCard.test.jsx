import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi, beforeEach } from "vitest"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import { ShopContext } from "../../App"

import ProductCard from "../ProductCard"
import AddCartButton from "../Atoms/AddCartButton"
import RemoveCartButton from "../Atoms/RemoveCartButton"

const product = {
	name: "Product Name",
	description: "Product description",
	price: 3,
	url: "https://loremimpsum.com",
	rate: 3.9,
	countRates: 320,
	isAdded: false,
}

describe("ProductCard", () => {
	const { name, description, price, url, rate, countRates } = product

	describe("Initial elements", () => {
		beforeEach(() => {
			render(
				<BrowserRouter>
					<ProductCard product={product} />
				</BrowserRouter>
			)
		})

		it("renders product name", () => {
			expect(screen.getByText(name)).toBeInTheDocument()
		})
		it("renders product description", () => {
			expect(screen.getByText(description)).toBeInTheDocument()
		})
		it("renders price", () => {
			expect(screen.getByText("$ " + price)).toBeInTheDocument()
		})
		it("renders image", () => {
			expect(screen.getByRole("img").src).toMatch(url)
		})
		it("renders rate", () => {
			expect(screen.getByText(rate)).toBeInTheDocument()
		})

		it("renders count rates", () => {
			expect(screen.getByText(countRates, { exact: false })).toBeInTheDocument()
		})
	})

	describe("Buttons", () => {
		it('renders button "add" when the item is not added to cart', () => {
			render(
				<BrowserRouter>
					<ProductCard product={product} />
				</BrowserRouter>
			)
			expect(screen.getByRole("button").textContent).toBe("Add to cart")
		})
		it('renders button "remove" when the item has been added to cart', () => {
			const newProduct = { isAdded: true }

			render(
				<BrowserRouter>
					<ProductCard product={newProduct} />
				</BrowserRouter>
			)
			expect(screen.getByRole("button").textContent).toBe("Remove")
		})
	})

	describe("Click buttons", () => {
		it("calls onClick function when AddCartButton is clicked ", async () => {
			const onClick = vi.fn()
			const handleClick = { handleClickAddCart: onClick }

			const user = userEvent.setup()

			render(
				<ShopContext.Provider value={handleClick}>
					<AddCartButton />
				</ShopContext.Provider>
			)

			const button = screen.getByRole("button")
			await user.click(button)

			expect(onClick).toHaveBeenCalled()
		})

		it("doesn't call onClick function when AddCartButton isn't clicked", async () => {
			const onClick = vi.fn()
			const handleClick = { handleClickAddCart: onClick }

			render(
				<ShopContext.Provider value={handleClick}>
					<AddCartButton />
				</ShopContext.Provider>
			)

			expect(onClick).not.toHaveBeenCalled()
		})

		it("calls onClick function when RemoveCartButton() is clicked ", async () => {
			const onClick = vi.fn()
			const handleClick = { handleClickRemoveCart: onClick }

			const user = userEvent.setup()

			render(
				<ShopContext.Provider value={handleClick}>
					<RemoveCartButton />
				</ShopContext.Provider>
			)

			const button = screen.getByRole("button")
			await user.click(button)

			expect(onClick).toHaveBeenCalled()
		})

		it("doesn't call onClick function when RemoveCartButton() isn't clicked", async () => {
			const onClick = vi.fn()
			const handleClick = { handleClickRemoveCart: onClick }

			render(
				<ShopContext.Provider value={handleClick}>
					<RemoveCartButton />
				</ShopContext.Provider>
			)

			expect(onClick).not.toHaveBeenCalled()
		})
	})
})
