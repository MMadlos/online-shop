import { useContext } from "react"
import { SearchAndSortContext } from "../../App"
import Dropdown from "../Atoms/Dropdown"

function ActionsBar() {
	const { handleChangeSearch, isProductFound, sort, setSort } = useContext(SearchAndSortContext)
	const { item, group } = sort

	return (
		<>
			<div className="action-bar">
				<form action="search">
					<i className="fa-solid fa-magnifying-glass"></i>
					<input
						name="search"
						type="search"
						id="search"
						placeholder="Backpack"
						onChange={handleChangeSearch}
					/>
				</form>

				<Dropdown />
			</div>
			<div className="action-messages">
				{!isProductFound && <p className="search-not-found"> Product not found with your search</p>}

				{item !== "Default" && (
					<div className="chip-sort">
						<p>Sorted:</p>

						<div className="sort-selected">
							<p>
								{group} - {item}
							</p>
							<i
								className="fa-solid fa-circle-xmark"
								onClick={() => setSort({ group: "Default", item: "Default" })}></i>
						</div>
					</div>
				)}
			</div>
		</>
	)
}

export default ActionsBar
