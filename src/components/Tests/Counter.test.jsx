import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"

import Counter from "../Atoms/Counter"
import userEvent from "@testing-library/user-event"

describe("Counter()", () => {
	describe("Render initial elements", () => {
		it("renders decrease and increase button", () => {
			render(<Counter />)

			expect(screen.getAllByRole("button").length).toBe(2)
		})

		it("renders the quantity (1) when context is 'product'", () => {
			render(<Counter context={"product"} />)

			expect(screen.getByText("1")).toBeInTheDocument()
		})

		it("doesn't render the initial quantity when context is 'product'", () => {
			render(
				<Counter
					context={"product"}
					currentQuantity={6}
				/>
			)

			expect(screen.getByText("1")).toBeInTheDocument()
		})

		it("renders the initial quantity when context is not 'product'", () => {
			render(
				<Counter
					context={"cart"}
					currentQuantity={6}
				/>
			)

			expect(screen.getByText("6")).toBeInTheDocument()
		})
	})

	describe("User actions", () => {
		it("decrease one unit in the number displayed when decrease button is clicked", async () => {
			const onClick = vi.fn()
			const user = userEvent.setup()

			render(
				<Counter
					onClick={onClick}
					currentQuantity={2}
				/>
			)

			const decreaseBtn = screen.getAllByRole("button")[0]
			await user.click(decreaseBtn)

			expect(screen.getByText("1")).toBeInTheDocument()
		})

		it("increase one unit in the document displayed when increase button is clicked", async () => {
			const onClick = vi.fn()
			const user = userEvent.setup()

			render(
				<Counter
					onClick={onClick}
					currentQuantity={2}
				/>
			)

			const increaseBtn = screen.getAllByRole("button")[1]
			await user.click(increaseBtn)

			expect(screen.getByText("3")).toBeInTheDocument()
		})

		it("disables decrease button when quantity is 0 in both context (cart and product)", () => {
			render(<Counter currentQuantity={0} />)

			const decreaseBtn = screen.getAllByRole("button")[0]
			expect(decreaseBtn.disabled).toBe(true)
		})

		it("disables decrease button when context is product and quantity === 1", () => {
			render(
				<Counter
					context="product"
					currentQuantity={1}
				/>
			)

			const decreaseBtn = screen.getAllByRole("button")[0]
			expect(decreaseBtn.disabled).toBe(true)
		})
	})
})
