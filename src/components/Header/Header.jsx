import "./styles.css"

import { useState } from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import CartIcon from "./CartIcon"
import CategoryList from "./CategoryList"
import CategoryPage from "./CategoryPage"

function HeaderContainer({ children }) {
	return (
		<header>
			<div className="header-container">{children}</div>
		</header>
	)
}

function Header({ cartQuantity }) {
	const [isNavOpen, setIsNavOpen] = useState(true)

	return (
		<HeaderContainer>
			{isNavOpen && <CategoryPage />}
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
