import { useState } from "react"

import Chip from "../Elements/Chip"
import shippingIMG from "../../assets/free-shipping-tiny.png"
import Button from "../Elements/Button"

import CheckoutPage from "./CheckoutPage"

function Checkout({ totalToPay, totalItems }) {
	const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

	return (
		<>
			<div className="checkout-container">
				<img
					src={shippingIMG}
					alt=""
					className="shipping-image"
				/>
				<div className="cost-list">
					<div className="subtotal">
						<p>Number of items</p>
						<p data-testid="total-items">{totalItems}</p>
					</div>
					<div className="subtotal">
						<p>Subtotal</p>
						<p data-testid="subtotal-amount">$ {totalToPay}</p>
					</div>
					<div className="divider"></div>
					<div className="shipping-cost">
						<p>Shipping cost</p>
						<Chip
							text="FREE"
							type="accent"
						/>
					</div>
					<div className="total-amount">
						<p>TOTAL</p>
						<p data-testid="total-amount">$ {totalToPay}</p>
					</div>
					<p className="taxes">(Taxes included)</p>
				</div>
				<Button
					text="Checkout"
					btnID="checkout"
					onClick={() => setIsCheckoutOpen(true)}
				/>
			</div>
			{isCheckoutOpen && <CheckoutPage />}
		</>
	)
}

export default Checkout
