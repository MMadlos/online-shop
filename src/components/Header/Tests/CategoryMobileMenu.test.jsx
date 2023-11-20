import { describe, expect, it, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import CategoryMobileMenu from "../CategoryMobileMenu"

vi.mock("../CategoryList", () => ({
	default: () => {
		return <div data-testid="category-list"></div>
	},
}))

describe("CategoryMobileMenu", () => {
	it("renders icon faBars with class mobile", () => {
		render(<CategoryMobileMenu />)

		const svgEl = screen.getByTestId("icon-menu-mobile")

		expect(svgEl).toHaveClass("fa-bars")
		expect(svgEl).toHaveClass("mobile")
	})

	it("opens mobile menu if faBars icon is clicked", async () => {
		const user = userEvent.setup()

		render(<CategoryMobileMenu />)

		const svgEl = screen.getByTestId("icon-menu-mobile")

		await user.click(svgEl)

		const menuElement = screen.getByText("Categories")
		const categoryList = screen.getByTestId("category-list")

		expect(menuElement).toBeInTheDocument()
		expect(categoryList).toBeInTheDocument()
	})

	it("doesn't open mobile menu if faBars is not clicked", () => {
		render(<CategoryMobileMenu />)

		const menuElement = screen.queryByText("Categories")
		const categoryList = screen.queryByTestId("category-list")
		expect(menuElement).not.toBeInTheDocument()
		expect(categoryList).not.toBeInTheDocument()
	})
})
