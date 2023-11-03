import "./styles.css"

import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import CartIcon from "./CartIcon"
import CategoryList from "./CategoryList"

function HeaderContainer({ children }) {
	return (
		<header>
			<div className="header-container">{children}</div>
		</header>
	)
}

function Header({ cartQuantity }) {
	return (
		<HeaderContainer>
			<FontAwesomeIcon icon={faBars} />
			<h1>OSHOP</h1>

			<CategoryList />

			<Link to="/cart">
				<CartIcon cartQuantity={cartQuantity} />
			</Link>
		</HeaderContainer>
	)
}

export default Header
