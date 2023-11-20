import "./styles.css"

import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../../App"

import Logo from "./Logo"
import CartIcon from "./CartIcon"
import CategoryList from "./CategoryList"
import CategoryMobileMenu from "./CategoryMobileMenu"
import Notification from "./Notification"

function Header() {
	const { cartList } = useContext(ShopContext)
	const cartQuantity = cartList.length

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
				<CategoryMobileMenu />
				<Logo />
				<CategoryList />
				<CartIcon cartQuantity={cartQuantity} />

				{isNotificationOpen && <Notification />}
			</div>
		</header>
	)
}

export default Header
