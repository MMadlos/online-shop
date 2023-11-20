import "./styles.css"

import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../../App"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import CartIcon from "./CartIcon"
import CategoryList from "./CategoryList"
import CategoryMobileMenu from "./CategoryMobileMenu"
import Notification from "./Notification"

function HeaderContainer({ children }) {
	return (
		<header>
			<div className="header-container">{children}</div>
		</header>
	)
}

function Header() {
	const { setSelectedCategory, cartList } = useContext(ShopContext)
	const cartQuantity = cartList.length
	const [isNavOpen, setIsNavOpen] = useState(false)

	const [currentCartQuantity, setCurrentCartQuantity] = useState(cartQuantity)
	const [isNotificationOpen, setIsNotificationOpen] = useState(false)

	if (cartQuantity < currentCartQuantity) {
		setCurrentCartQuantity(cartQuantity)
		return
	}

	if (cartQuantity > currentCartQuantity) {
		setIsNotificationOpen(true)
		setCurrentCartQuantity(cartQuantity)

		setTimeout(setIsNotificationOpen, 2200, false)
	}

	return (
		<HeaderContainer>
			{isNavOpen && (
				<CategoryMobileMenu
					onClickClose={() => setIsNavOpen(false)}
					onClickCategory={() => setIsNavOpen(false)}
				/>
			)}
			<FontAwesomeIcon
				icon={faBars}
				onClick={() => setIsNavOpen(true)}
			/>

			<h1>
				<Link
					to="/"
					onClick={() => setSelectedCategory("All products")}>
					OSHOP{" "}
				</Link>
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
