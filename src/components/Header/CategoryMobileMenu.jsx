import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import CategoryList from "./CategoryList"

function CategoryMobileMenu({ onClickClose, onClickCategory }) {
	return (
		<nav className="categories mobile">
			<div className="title">
				<p>Categories</p>
				<FontAwesomeIcon
					icon={faChevronLeft}
					onClick={onClickClose}
				/>
			</div>
			<div className="separator"></div>

			<CategoryList
				isMobile={true}
				onClickCategory={onClickCategory}
			/>
		</nav>
	)
}

export default CategoryMobileMenu
