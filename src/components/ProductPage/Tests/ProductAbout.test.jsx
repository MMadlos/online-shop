import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import ProductAbout from "../ProductDetails/ProductAbout"

// Importante:
/*
* - Renderiza description (prop)
* - Renderiza expand button -> div"

* - Description tiene por defecto sólo la clase "description"
* - Al hacer click en el botón, description tiene, además, la clase "full"
* - Por defecto, el texto del botón es "See more"
*- Al hacer click en el botón, el texto es "See less"

Todo -> Revisar visualmente si se ve bien
*/

const description = "Descripción de ejemplo"

describe("ProductAbout", () => {
	it("renders description", () => {
		render(<ProductAbout description={description} />)
		expect(screen.getByText(description)).toBeInTheDocument()
	})

	it("renders a button with a class 'expand-btn' ", () => {
		render(<ProductAbout description={description} />)

		const expandBtn = screen.getByRole("button")
		expect(expandBtn).toBeInTheDocument()
	})

	it("renders only the class 'description' to description element", () => {
		render(<ProductAbout description={description} />)

		const descriptionEl = screen.getByText(description)
		expect(descriptionEl).toHaveClass("description")
		expect(descriptionEl).not.toHaveClass("full")
	})

	it("renders 'See more' text by default", () => {
		render(<ProductAbout description={description} />)

		expect(screen.getByText("See more")).toBeInTheDocument()
		expect(screen.queryByText("See less")).not.toBeInTheDocument()
	})

	it("adds class 'full' to description element when button 'see more' is clicked", async () => {
		const user = userEvent.setup()

		render(<ProductAbout description={description} />)

		const button = screen.getByRole("button")
		await user.click(button)

		const descriptionEl = screen.getByText(description)
		expect(descriptionEl).toHaveClass("full")
	})

	it("replaces button text from 'See more' to 'See less' after being clicked", async () => {
		const user = userEvent.setup()

		render(<ProductAbout description={description} />)

		const button = screen.getByRole("button")
		await user.click(button)

		expect(button).toHaveTextContent("See less")
		expect(button).not.toHaveTextContent("See more")
	})

	it("replaces chevron down icon to chevron up icon after button being clicked", async () => {
		const user = userEvent.setup()

		render(<ProductAbout description={description} />)

		const button = screen.getByRole("button")
		const icon = button.querySelector("i.fa-solid")

		await user.click(button)

		expect(icon).toHaveClass("fa-chevron-up")
		expect(icon).not.toHaveClass("fa-chevron-down")
	})
})
