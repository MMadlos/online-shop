import { describe, it, expect, vi } from "vitest"
import { screen, render } from "@testing-library/react"

import ProductDetails from "../ProductDetails/ProductDetails"

vi.mock("../ProductDetails/ProductAbout", () => ({
	default: ({ description }) => {
		return <div data-testid="produt-about">{description}</div>
	},
}))

const mockProductSelected = {
	id: 1,
	name: "Product 1",
	price: "ProductPrice",
	url: "Url",
	rate: "ProductRate",
	countRates: "CountRates",
	description: "Description",
}

describe("ProductDetails", () => {
	it.skip("renders component", () => {
		const { container } = render(<ProductDetails productSelected={mockProductSelected} />)

		expect(container).toMatchSnapshot()
	})

	it("renders image and it contains product url", () => {
		render(<ProductDetails productSelected={mockProductSelected} />)

		const allIMG = screen.getAllByRole("img")

		expect(allIMG).toHaveLength(2)
		expect(allIMG[0]).toBeInTheDocument()
		expect(allIMG[0]).toHaveAttribute("src", mockProductSelected.url)
	})

	it("renders promoImage and its src is not empty", () => {
		render(<ProductDetails productSelected={mockProductSelected} />)

		const allIMG = screen.getAllByRole("img")

		expect(allIMG).toHaveLength(2)
		expect(allIMG[1]).toBeInTheDocument()
		expect(allIMG[1]).toHaveAttribute("src", expect.not.stringContaining(" "))
	})

	it("renders product price", () => {
		render(<ProductDetails productSelected={mockProductSelected} />)

		const regex = new RegExp(mockProductSelected.price)

		const price = screen.getByText(regex)
		expect(price).toBeInTheDocument()
	})

	it("renders rate and countRates", () => {
		render(<ProductDetails productSelected={mockProductSelected} />)

		const regexRates = new RegExp(mockProductSelected.rate)
		const regexCountRates = new RegExp(mockProductSelected.countRates)

		const rates = screen.getByText(regexRates)
		const countRates = screen.getByText(regexCountRates)

		expect(rates).toBeInTheDocument()
		expect(countRates).toBeInTheDocument()
	})

	it("renders description", () => {
		render(<ProductDetails productSelected={mockProductSelected} />)

		const regex = new RegExp(mockProductSelected.description)
		const description = screen.getByText(regex)

		expect(description).toBeInTheDocument()
	})
})
