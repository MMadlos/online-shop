import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { ShopContext } from "../../../App"
import { BrowserRouter } from "react-router-dom"

import CartProduct from "../CartProduct"

const product = {
	name: "Product 1",
	price: 4,
	url: "test/url",
	quantity: 2,
	id: 3,
}

describe("Cart Product", () => {
	it.skip("renders component", () => {
		const { container } = render(
			<BrowserRouter>
				<CartProduct product={product} />
			</BrowserRouter>
		)

		expect(container).toMatchSnapshot()
	})

	it("renders product values", () => {
		render(
			<BrowserRouter>
				<CartProduct product={product} />
			</BrowserRouter>
		)

		const { name, price, quantity } = product

		const nameEl = screen.getByText(name)
		const priceEl = screen.getByText(`$ ${price}`)
		const quantityEl = screen.getByText(`Quantity: ${quantity}`)

		expect(nameEl).toBeInTheDocument()
		expect(priceEl).toBeInTheDocument()
		expect(quantityEl).toBeInTheDocument()
	})

	it("renders product img and it contains the url", () => {
		render(
			<BrowserRouter>
				<CartProduct product={product} />
			</BrowserRouter>
		)

		const { url } = product
		const img = screen.getByRole("img")

		expect(img).toBeInTheDocument()
		expect(img).toHaveAttribute("src", url)
	})

	it("calls handleRemove when delete icon is clicked", async () => {
		const clickRemoveCart = vi.fn()
		const handleClick = { handleClickRemoveCart: clickRemoveCart }
		const user = userEvent.setup()

		render(
			<BrowserRouter>
				<ShopContext.Provider value={handleClick}>
					<CartProduct product={product} />
				</ShopContext.Provider>
			</BrowserRouter>
		)

		const deleteIcon = screen.getByTestId("remove-icon")
		await user.click(deleteIcon)

		expect(clickRemoveCart).toHaveBeenCalled()
	})

	it("doesn't call handleRemove when delete icon is not clicked", () => {
		const clickRemoveCart = vi.fn()
		const handleClick = { handleClickRemoveCart: clickRemoveCart }

		render(
			<BrowserRouter>
				<ShopContext.Provider value={handleClick}>
					<CartProduct product={product} />
				</ShopContext.Provider>
			</BrowserRouter>
		)

		expect(clickRemoveCart).not.toHaveBeenCalled()
	})

	it("calls onClickEdit when edit icon is clicked", async () => {
		const clickEdit = vi.fn()
		const user = userEvent.setup()

		render(
			<BrowserRouter>
				<CartProduct
					product={product}
					onClickEdit={clickEdit}
				/>
			</BrowserRouter>
		)

		const editIcon = screen.getByTestId("edit-icon")
		await user.click(editIcon)

		expect(clickEdit).toHaveBeenCalled()
	})

	it("doesn't call onClickEdit when edit icon is not clicked", () => {
		const clickEdit = vi.fn()

		render(
			<BrowserRouter>
				<CartProduct
					product={product}
					onClickEdit={clickEdit}
				/>
			</BrowserRouter>
		)

		expect(clickEdit).not.toHaveBeenCalled()
	})
})
