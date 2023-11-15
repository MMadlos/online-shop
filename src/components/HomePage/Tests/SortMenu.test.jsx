import { describe, expect, it, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { SearchAndSortContext } from "../../../App"
import SortMenu from "../SearchAndSort/SortMenu"

describe("SortMenu", () => {
	it("renders component", () => {
		const { container } = render(<SortMenu />)

		expect(container).toMatchSnapshot()
	})
	it("renders default item", () => {
		render(<SortMenu />)

		const defaultValue = screen.getByText(/default/i)
		expect(defaultValue).toBeInTheDocument()
	})
	it("renders group titles (Alphabetically, By price, and By Rate", () => {
		render(<SortMenu />)
		const alphabetically = screen.getByText(/alphabetically/i)
		const byPrice = screen.getByText(/by price/i)
		const byRate = screen.getByText(/by rate/i)

		expect(alphabetically).toBeInTheDocument()
		expect(byPrice).toBeInTheDocument()
		expect(byRate).toBeInTheDocument()
	})

	it("renders sort items", () => {
		render(<SortMenu />)

		const alphaAsc = screen.getByText(/a to z/i)
		const alphaDesc = screen.getByText(/z to a/i)
		const lowestFirst = screen.queryAllByText(/lowest first/i)
		const highestFirst = screen.queryAllByText(/highest first/i)

		expect(alphaAsc).toBeInTheDocument()
		expect(alphaDesc).toBeInTheDocument()
		expect(lowestFirst).toHaveLength(2)
		expect(highestFirst).toHaveLength(2)
	})
	it("adds className='selected' to default item", () => {
		const defaultSortItem = { group: "Default", item: "Default" }
		const sortValue = { sort: defaultSortItem }

		render(
			<SearchAndSortContext.Provider value={sortValue}>
				<SortMenu />
			</SearchAndSortContext.Provider>
		)

		const defaultValue = screen.getByText(/default/i)
		expect(defaultValue).toHaveClass("selected")
	})
	it("calls setSort and onClickClose when another item than default is clicked", async () => {
		const defaultSort = { group: "Default", item: "Default" }
		const onClickClose = vi.fn()
		const setSortFn = vi.fn()

		const user = userEvent.setup()

		render(
			<SearchAndSortContext.Provider
				value={{
					sort: defaultSort,
					setSort: setSortFn,
				}}>
				<SortMenu onClickClose={onClickClose} />
			</SearchAndSortContext.Provider>
		)
		const itemAToZ = screen.getByText(/a to z/i)
		await user.click(itemAToZ)

		expect(onClickClose).toHaveBeenCalled()
		expect(setSortFn).toHaveBeenCalled()
	})

	it("doesn't call setSort and onClickClose when another item than default is not clicked", async () => {
		const defaultSort = { group: "Default", item: "Default" }
		const onClickClose = vi.fn()
		const setSortFn = vi.fn()

		render(
			<SearchAndSortContext.Provider
				value={{
					sort: defaultSort,
					setSort: setSortFn,
				}}>
				<SortMenu onClickClose={onClickClose} />
			</SearchAndSortContext.Provider>
		)

		expect(onClickClose).not.toHaveBeenCalled()
		expect(setSortFn).not.toHaveBeenCalled()
	})

	it("adds className='selected' to A to Z item when sort has that value", async () => {
		const alphaAToZSort = { group: "Alphabetically", item: "A to Z" }

		render(
			<SearchAndSortContext.Provider
				value={{
					sort: alphaAToZSort,
				}}>
				<SortMenu />
			</SearchAndSortContext.Provider>
		)

		const defaultItem = screen.getByText(/default/i)
		const itemAToZ = screen.getByText(/a to z/i)

		expect(defaultItem).not.toHaveClass("selected")
		expect(itemAToZ).toHaveClass("selected")
	})
})
