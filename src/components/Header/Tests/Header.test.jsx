import { describe, expect, it, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import Header from "../Header"

import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import { ShopContext } from "../../../App"

vi.mock("../CategoryMobileMenu", () => ({
	default: () => {
		return <div data-testid="category-mobile-menu"></div>
	},
}))

vi.mock("../CategoryList", () => ({
	default: () => {
		return <div data-testid="category-list"></div>
	},
}))

vi.mock("../Notification", () => ({
	default: () => {
		return <div data-testid="notification"></div>
	},
}))

describe("Header", () => {
	it.skip("renders component", () => {
		const { container } = render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		)

		expect(container).toMatchSnapshot()
	})

	describe("Mobile menu icon behaviour", () => {
		it("renders icon faBars with class mobile", () => {
			render(
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			)

			const svgEl = screen.getByTestId("icon-menu-mobile")

			expect(svgEl).toHaveClass("fa-bars")
			expect(svgEl).toHaveClass("mobile")
		})

		it("opens mobile menu if faBars icon is clicked", async () => {
			const user = userEvent.setup()

			render(
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			)

			const svgEl = screen.getByTestId("icon-menu-mobile")

			await user.click(svgEl)

			const categoryMobileMenu = screen.getByTestId("category-mobile-menu")
			expect(categoryMobileMenu).toBeInTheDocument()
		})

		it("doesn't open mobile menu if faBars is not clicked", () => {
			render(
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			)

			const categoryMobileMenu = screen.queryByTestId("category-mobile-menu")
			expect(categoryMobileMenu).not.toBeInTheDocument()
		})
	})

	describe("Notification behaviour", () => {
		it("renders Notification when a product is added to Cart", () => {
			const mockCurrentCartList = [
				{
					id: 0,
					name: "Product 1",
				},
			]

			const mockNewCartList = [
				{
					id: 0,
					name: "Product 1",
				},
				{
					id: 1,
					name: "Product 2",
				},
			]

			const { rerender } = render(
				<BrowserRouter>
					<ShopContext.Provider value={{ cartList: mockCurrentCartList }}>
						<Header />
					</ShopContext.Provider>
				</BrowserRouter>
			)

			rerender(
				<BrowserRouter>
					<ShopContext.Provider value={{ cartList: mockNewCartList }}>
						<Header />
					</ShopContext.Provider>
				</BrowserRouter>
			)

			const notification = screen.getByTestId("notification")
			expect(notification).toBeInTheDocument()
		})

		it("doesn't render Notification when a product is removed from Cart", () => {
			const mockCurrentCartList = [
				{
					id: 0,
					name: "Product 1",
				},
				{
					id: 1,
					name: "Product 2",
				},
			]

			const mockNewCartList = [
				{
					id: 0,
					name: "Product 1",
				},
			]

			const { rerender } = render(
				<BrowserRouter>
					<ShopContext.Provider value={{ cartList: mockCurrentCartList }}>
						<Header />
					</ShopContext.Provider>
				</BrowserRouter>
			)

			rerender(
				<BrowserRouter>
					<ShopContext.Provider value={{ cartList: mockNewCartList }}>
						<Header />
					</ShopContext.Provider>
				</BrowserRouter>
			)

			const notification = screen.queryByTestId("notification")
			expect(notification).not.toBeInTheDocument()
		})

		it("doesn't render Notification when cartList doesn't change", () => {
			const mockCurrentCartList = [
				{
					id: 0,
					name: "Product 1",
				},
				{
					id: 1,
					name: "Product 2",
				},
			]

			const mockNewCartList = [
				{
					id: 0,
					name: "Product 1",
				},
				{
					id: 1,
					name: "Product 2",
				},
			]

			const { rerender } = render(
				<BrowserRouter>
					<ShopContext.Provider value={{ cartList: mockCurrentCartList }}>
						<Header />
					</ShopContext.Provider>
				</BrowserRouter>
			)

			rerender(
				<BrowserRouter>
					<ShopContext.Provider value={{ cartList: mockNewCartList }}>
						<Header />
					</ShopContext.Provider>
				</BrowserRouter>
			)

			const notification = screen.queryByTestId("notification")
			expect(notification).not.toBeInTheDocument()
		})

		it("doesn't render Notification when cartList is empty", () => {
			render(
				<BrowserRouter>
					<ShopContext.Provider value={{ cartList: [] }}>
						<Header />
					</ShopContext.Provider>
				</BrowserRouter>
			)

			const notification = screen.queryByTestId("notification")
			expect(notification).not.toBeInTheDocument()
		})

		it("doesn't render Notification when cartList remains empty", () => {
			const { rerender } = render(
				<BrowserRouter>
					<ShopContext.Provider value={{ cartList: [] }}>
						<Header />
					</ShopContext.Provider>
				</BrowserRouter>
			)

			rerender(
				<BrowserRouter>
					<ShopContext.Provider value={{ cartList: [] }}>
						<Header />
					</ShopContext.Provider>
				</BrowserRouter>
			)

			const notification = screen.queryByTestId("notification")
			expect(notification).not.toBeInTheDocument()
		})
	})

	describe("CartIcon behaviour", () => {
		it("renders quantity number of cart items when is > 0", () => {
			const mockCartList = [
				{
					id: 0,
					name: "Product 1",
				},
			]

			const cartQuantity = mockCartList.length

			render(
				<BrowserRouter>
					<ShopContext.Provider value={{ cartList: mockCartList }}>
						<Header />
					</ShopContext.Provider>
				</BrowserRouter>
			)

			const cartNumberElement = screen.queryByText(cartQuantity)
			expect(cartNumberElement).toBeInTheDocument()
		})
		it("doesn't render quantity number of cart items when is = 0", () => {
			const mockCartList = []

			const cartQuantity = mockCartList.length
			render(
				<BrowserRouter>
					<ShopContext.Provider value={{ cartList: mockCartList }}>
						<Header />
					</ShopContext.Provider>
				</BrowserRouter>
			)

			const cartNumberElement = screen.queryByText(cartQuantity)
			expect(cartNumberElement).not.toBeInTheDocument()
		})
	})
})
