import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi, beforeEach } from "vitest"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"

import ProductCard from "../ProductCard"
import AddCartButton from "../Atoms/AddCartButton"

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

	describe("Actions and dynamic elements", () => {
		it("should call the onClickAddCart function when clicked", async () => {
			const onClick = vi.fn()
			const user = userEvent.setup()

			render(<AddCartButton />)

			const spy = vi.spyOn(onClick)

			const button = screen.getByRole("button")
			await user.click(button)

			expect(spy.getMockImplementation).toHaveBeenCalled()
		})

		// it("should not call onClickAddCart function when it isn't clicked", async () => {
		// 	const onClick = vi.fn()
		// 	const newProduct = { isAdded: false }

		// 	render(
		// 		<ProductCard
		// 			product={newProduct}
		// 			onClickAddCart={onClick}
		// 		/>
		// 	)

		// 	expect(onClick).not.toHaveBeenCalled()
		// })

		// it("should call the onClickRemoveCart function when clicked", async () => {
		// 	const onClickRemoveCart = vi.fn()
		// 	const user = userEvent.setup()
		// 	const newProduct = { isAdded: true }

		// 	render(
		// 		<ProductCard
		// 			product={newProduct}
		// 			onClickRemoveCart={onClickRemoveCart}
		// 		/>
		// 	)

		// 	const button = screen.getByRole("button")
		// 	await user.click(button)

		// 	expect(onClickRemoveCart).toHaveBeenCalled()
		// })

		// it("should not call onClickRemoveCart function when it isn't clicked", async () => {
		// 	const onClickRemoveCart = vi.fn()
		// 	const newProduct = { isAdded: true }

		// 	render(
		// 		<ProductCard
		// 			product={newProduct}
		// 			onClickRemoveCart={onClickRemoveCart}
		// 		/>
		// 	)

		// 	expect(onClickRemoveCart).not.toHaveBeenCalled()
		// })

		// it("renders only add to cart button when the product is not in the cart", async () => {
		// 	const newProduct = { isAdded: false }

		// 	render(<ProductCard product={newProduct} />)

		// 	expect(screen.getByText("Add to cart")).toBeInTheDocument()
		// 	expect(screen.queryByText("Remove from cart")).not.toBeInTheDocument()
		// })

		// it("renders only remove from cart button when the product is already added in the cart", async () => {
		// 	const newProduct = { isAdded: true }

		// 	render(<ProductCard product={newProduct} />)

		// 	expect(screen.getByText("Remove from cart")).toBeInTheDocument()
		// 	expect(screen.queryByText("Add to cart")).not.toBeInTheDocument()
		// })

		// it("renders a checkmark text when the product is added to the cart", () => {
		// 	const newProduct = { isAdded: true }

		// 	render(<ProductCard product={newProduct} />)

		// 	expect(screen.getByText("Added to cart")).toBeInTheDocument()
		// })

		// it("doesn't render a checkmark text when the product is added to the cart", () => {
		// 	const newProduct = { isAdded: false }

		// 	render(<ProductCard product={newProduct} />)

		// 	expect(screen.queryByText("Added to cart")).not.toBeInTheDocument()
		// })
	})
})
