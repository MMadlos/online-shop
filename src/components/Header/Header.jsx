import "./styles.css"

import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../../App"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import CartIcon from "./CartIcon"
import CategoryList from "./CategoryList"
import CategoryMobileMenu from "./CategoryMobileMenu"
import Notification from "./Notification"

function Header() {
	const { setSelectedCategory, cartList } = useContext(ShopContext)
	const cartQuantity = cartList.length
	const [isNavOpen, setIsNavOpen] = useState(false)

	const [currentCartQuantity, setCurrentCartQuantity] = useState(cartQuantity)
	const [isNotificationOpen, setIsNotificationOpen] = useState(false)

	function toggleNotification() {
		setIsNotificationOpen(true)
		setTimeout(setIsNotificationOpen, 2200, false)
	}

	useEffect(() => {
		if (cartQuantity > currentCartQuantity) toggleNotification()

		setCurrentCartQuantity(cartQuantity)
	}, [cartQuantity])

	return (
		<header>
			<div className="header-container">
				<FontAwesomeIcon
					data-testid="icon-menu-mobile"
					className="mobile"
					icon={faBars}
					onClick={() => setIsNavOpen(true)}
				/>
				{isNavOpen && <CategoryMobileMenu onClick={() => setIsNavOpen(false)} />}

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
			</div>
		</header>
	)
}

export default Header
