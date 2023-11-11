import "./styles.css"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import CartIcon from "./CartIcon"
import CategoryList from "./CategoryList"
import CategoryPage from "./CategoryPage"
import Notification from "./Notification"

function HeaderContainer({ children }) {
	return (
		<header>
			<div className="header-container">{children}</div>
		</header>
	)
}

function Header({ cartQuantity }) {
	const [isNavOpen, setIsNavOpen] = useState(false)
	const [isNotificationOpen, setIsNotificationOpen] = useState(false)

	useEffect(() => {
		if (cartQuantity !== 0) setIsNotificationOpen(true)

		setTimeout(setIsNotificationOpen, 2000, false)
	}, [cartQuantity])

	return (
		<HeaderContainer>
			{isNavOpen && (
				<CategoryPage
					onClickClose={() => setIsNavOpen(false)}
					onClickCategory={() => setIsNavOpen(false)}
				/>
			)}
			<FontAwesomeIcon
				icon={faBars}
				onClick={() => setIsNavOpen(true)}
			/>

			<h1>
				<Link to="/">OSHOP </Link>
			</h1>

			<CategoryList />

			<Link to="/cart">
				<CartIcon cartQuantity={cartQuantity} />
			</Link>
			{isNotificationOpen && <Notification />}
		</HeaderContainer>
	)
}

export default Header
