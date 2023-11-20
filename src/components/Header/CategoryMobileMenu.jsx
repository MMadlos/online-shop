import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import CategoryList from "./CategoryList"

function CategoryMobileMenu({ onClick }) {
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

export default CategoryMobileMenu
