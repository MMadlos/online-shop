import { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons"

import CategoryList from "./CategoryList"

function Menu({ onClick }) {
	return (
		<nav className="categories mobile">
			<div className="title">
				<p>Categories</p>
				<FontAwesomeIcon
					icon={faChevronLeft}
					onClick={onClick}
				/>
			</div>
			<div className="separator"></div>

			<CategoryList
				isMobile={true}
				onClick={onClick}
			/>
		</nav>
	)
}

function CategoryMobileMenu() {
	const [isNavOpen, setIsNavOpen] = useState(false)

	return (
		<>
			<FontAwesomeIcon
				data-testid="icon-menu-mobile"
				className="mobile"
				icon={faBars}
				onClick={() => setIsNavOpen(true)}
			/>
			{isNavOpen && <Menu onClick={() => setIsNavOpen(false)} />}
		</>
	)
}

export default CategoryMobileMenu
