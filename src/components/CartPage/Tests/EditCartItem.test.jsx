import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ShopContext } from "../../../App"

import EditCartItem from "../EditCartItem"
import { testMockProduct } from "../../../consts/testMockProduct"

const cartList = { cartList: testMockProduct }

describe("EditCartItem", () => {
	it.skip("renders component", () => {
		const { container } = render(
			<ShopContext.Provider value={cartList}>
				<EditCartItem productIDtoEdit={testMockProduct[0].id} />
			</ShopContext.Provider>
		)

		expect(container).toMatchSnapshot()
	})

	it("renders button to close the component with the icon close on it", () => {
		render(
			<ShopContext.Provider value={cartList}>
				<EditCartItem productIDtoEdit={testMockProduct[0].id} />
			</ShopContext.Provider>
		)

		const closeButton = screen.getAllByRole("button")[0]

		expect(closeButton).toContainHTML('<i class="fa-solid fa-xmark"></i>')
		expect(closeButton.querySelector(".fa-xmark")).toBeInTheDocument()
		expect(closeButton).toHaveClass("none")
		expect(closeButton).toHaveAttribute("id", "close-edit")
	})

	it("renders product image for desktop", () => {
		render(
			<ShopContext.Provider value={cartList}>
				<EditCartItem productIDtoEdit={testMockProduct[0].id} />
			</ShopContext.Provider>
		)

		const productImage = screen.getByRole("img", { name: "product image for desktop" })

		expect(productImage).toBeInTheDocument()
		expect(productImage).toHaveProperty("src")
		expect(productImage).toHaveAttribute("src", `${testMockProduct[0].url}`)
		expect(productImage).toHaveAttribute("src", testMockProduct[0].url)
	})

	it("renders price for desktop", () => {
		render(
			<ShopContext.Provider value={cartList}>
				<EditCartItem productIDtoEdit={testMockProduct[0].id} />
			</ShopContext.Provider>
		)

		const price = screen.getByTestId("product-desktop-price")

		expect(price).toBeInTheDocument()
		expect(price.textContent).toMatch(`$ ${testMockProduct[0].price}`)
	})
	it("renders product name for desktop", () => {
		render(
			<ShopContext.Provider value={cartList}>
				<EditCartItem productIDtoEdit={testMockProduct[0].id} />
			</ShopContext.Provider>
		)

		const productName = screen.getByTestId("product-desktop-name")
		expect(productName).toBeInTheDocument()
		expect(productName.textContent).toMatch(`${testMockProduct[0].name}`)
	})

	it("calls onClickClose fn when close button is clicked", async () => {
		const onClick = vi.fn()
		const user = userEvent.setup()

		render(
			<ShopContext.Provider value={cartList}>
				<EditCartItem
					onClickClose={onClick}
					productIDtoEdit={testMockProduct[0].id}
				/>
			</ShopContext.Provider>
		)

		const closeButton = screen.getAllByRole("button")[0]
		await user.click(closeButton)

		expect(onClick).toHaveBeenCalled()
	})

	it("calls onClickClose fn when overlay is clicked", async () => {
		const onClick = vi.fn()
		const user = userEvent.setup()

		render(
			<ShopContext.Provider value={cartList}>
				<EditCartItem
					onClickClose={onClick}
					productIDtoEdit={testMockProduct[0].id}
				/>
			</ShopContext.Provider>
		)

		const overlay = screen.getByTestId("overlay")
		await user.click(overlay)

		expect(onClick).toHaveBeenCalled()
	})
})
