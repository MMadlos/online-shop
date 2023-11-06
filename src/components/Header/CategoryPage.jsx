import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import CategoryList from "./CategoryList"

function CategoryPage() {
	return (
		<nav className="categories mobile">
			<div className="title">
				<p>Categories</p>
				<FontAwesomeIcon icon={faChevronLeft} />
			</div>
			<div className="separator"></div>

			<CategoryList styles="mobile" />
		</nav>
	)
}

export default CategoryPage
