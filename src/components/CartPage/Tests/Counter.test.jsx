import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"

import Counter from "../Counter"
import userEvent from "@testing-library/user-event"

describe("Counter", () => {
	it("renders component", () => {
		const { container } = render(<Counter />)

		expect(container).toMatchSnapshot()
		// screen.debug()
	})

	it("renders quantity prop", () => {
		const quantity = 2

		render(<Counter quantity={quantity} />)
		expect(screen.getByText("2")).toBeInTheDocument()
		expect(screen.queryByText(/1/)).not.toBeInTheDocument()
		expect(screen.queryByText(/3/)).not.toBeInTheDocument()
	})
	it("renders buttons decrease and increase", () => {
		render(<Counter />)

		const buttons = screen.getAllByRole("button")

		expect(buttons.length).toBe(2)
		expect(buttons[0]).toBeInTheDocument()
		expect(buttons[1]).toBeInTheDocument()
		expect(buttons[0].id).toMatch("decrease")
		expect(buttons[1].id).toMatch("increase")
	})

	it("calls onClick function when button decrease is clicked", async () => {
		const onClickDecrease = vi.fn()
		const user = userEvent.setup()

		render(<Counter onClickButton={onClickDecrease} />)

		const decreaseButton = screen.getAllByRole("button")[0]

		await user.click(decreaseButton)
		expect(onClickDecrease).toHaveBeenCalled()
	})

	it("calls onClick function when button increase is clicked", async () => {
		const onClickIncrease = vi.fn()
		const user = userEvent.setup()

		render(<Counter onClickButton={onClickIncrease} />)

		const increaseButton = screen.getAllByRole("button")[1]

		await user.click(increaseButton)
		expect(onClickIncrease).toHaveBeenCalled()
	})

	it("doesn't call onClick fn when buttons are not clicked", () => {
		const onClick = vi.fn()

		render(<Counter onClickButton={onClick} />)

		expect(onClick).not.toHaveBeenCalled()
	})

	it("disables button decrease if quantity is 1", () => {
		render(<Counter quantity={1} />)
		const buttons = screen.getAllByRole("button")

		expect(buttons[0].disabled).toBe(true)
	})

	it("doesn't call onClick fn when button decrease is disabled and is clicked", async () => {
		const onClick = vi.fn()
		const user = userEvent.setup()
		const quantity = 1

		render(
			<Counter
				onClickButton={onClick}
				quantity={quantity}
			/>
		)

		const decreaseButton = screen.getAllByRole("button")[0]
		await user.click(decreaseButton)

		expect(onClick).not.toHaveBeenCalled()
	})
})
