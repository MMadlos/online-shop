import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import userEvent from "@testing-library/user-event"

import Dropdown from "../Atoms/Dropdown"

const sortItems = [
	{
		groupTitle: "Alphabetically",
		items: ["A to Z", "Z to A"],
	},
	{
		groupTitle: "By price",
		items: ["Lowest first", "Highest first"],
	},
	{
		groupTitle: "By rate",
		items: ["Highest first", "Lowest first"],
	},
]

describe("Dropdown", () => {
	it("renders sort button", () => {
		render(<Dropdown />)

		expect(screen.getByText(/sort/i)).toBeInTheDocument()
		expect(screen.getByText(/sort/i)).toHaveProperty("id", "sort")
	})
	it("renders group titles when sort button is clicked", async () => {
		const user = userEvent.setup()

		render(<Dropdown />)

		const sortButton = screen.getByRole("button")
		await user.click(sortButton)

		expect(screen.getByText(sortItems[0].groupTitle)).toBeInTheDocument()
		expect(screen.getByText(sortItems[1].groupTitle)).toBeInTheDocument()
		expect(screen.getByText(sortItems[2].groupTitle)).toBeInTheDocument()
	})

	it("renders items when sort button is clicked", async () => {
		const user = userEvent.setup()

		render(<Dropdown />)

		const sortButton = screen.getByRole("button")
		await user.click(sortButton)

		expect(screen.getByText(sortItems[0].items[0])).toBeInTheDocument()
		expect(screen.getAllByText(sortItems[1].items[1]).length).toBe(2)
		expect(screen.getByText(/default/i)).toBeInTheDocument()
		expect(screen.getAllByRole("button").length).toBe(8)
	})
})
