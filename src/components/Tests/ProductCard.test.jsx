import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import userEvent from "@testing-library/user-event"

import ProductCard from "../ProductCard"

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

	describe("Initial elements", () => {
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
		it('renders button "add" when the item is not added to cart', () => {
			const newProduct = { isAdded: false }
			render(<ProductCard product={newProduct} />)
			expect(screen.getByRole("button").textContent).toBe("Add to cart")
		})
		it('renders button "remove" when the item has been added to cart', () => {
			const newProduct = { isAdded: true }
			render(<ProductCard product={newProduct} />)
			expect(screen.getByRole("button").textContent).toBe("Remove from cart")
		})
	})

	describe("Actions and dynamic elements", () => {
		it("should call the onClickAddCart function when clicked", async () => {
			const onClick = vi.fn()
			const user = userEvent.setup()
			const newProduct = { isAdded: false }

			render(
				<ProductCard
					product={newProduct}
					onClickAddCart={onClick}
				/>
			)

			const button = screen.getByRole("button")
			await user.click(button)

			expect(onClick).toHaveBeenCalled()
		})
		it("should not call onClickAddCart function when it isn't clicked", async () => {
			const onClick = vi.fn()
			const newProduct = { isAdded: false }

			render(
				<ProductCard
					product={newProduct}
					onClickAddCart={onClick}
				/>
			)

			expect(onClick).not.toHaveBeenCalled()
		})

		it("should call the onClickRemoveCart function when clicked", async () => {
			const onClickRemoveCart = vi.fn()
			const user = userEvent.setup()
			const newProduct = { isAdded: true }

			render(
				<ProductCard
					product={newProduct}
					onClickRemoveCart={onClickRemoveCart}
				/>
			)

			const button = screen.getByRole("button")
			await user.click(button)

			expect(onClickRemoveCart).toHaveBeenCalled()
		})

		it("should not call onClickRemoveCart function when it isn't clicked", async () => {
			const onClickRemoveCart = vi.fn()
			const newProduct = { isAdded: true }

			render(
				<ProductCard
					product={newProduct}
					onClickRemoveCart={onClickRemoveCart}
				/>
			)

			expect(onClickRemoveCart).not.toHaveBeenCalled()
		})

		it("renders only add to cart button when the product is not in the cart", async () => {
			const newProduct = { isAdded: false }

			render(<ProductCard product={newProduct} />)

			expect(screen.getByText("Add to cart")).toBeInTheDocument()
			expect(screen.queryByText("Remove from cart")).not.toBeInTheDocument()
		})

		it("renders only remove from cart button when the product is already added in the cart", async () => {
			const newProduct = { isAdded: true }

			render(<ProductCard product={newProduct} />)

			expect(screen.getByText("Remove from cart")).toBeInTheDocument()
			expect(screen.queryByText("Add to cart")).not.toBeInTheDocument()
		})

		it("renders a checkmark text when the product is added to the cart", () => {
			const newProduct = { isAdded: true }

			render(<ProductCard product={newProduct} />)

			expect(screen.getByText("Added to cart")).toBeInTheDocument()
		})

		it("doesn't render a checkmark text when the product is added to the cart", () => {
			const newProduct = { isAdded: false }

			render(<ProductCard product={newProduct} />)

			expect(screen.queryByText("Added to cart")).not.toBeInTheDocument()
		})
	})
})
