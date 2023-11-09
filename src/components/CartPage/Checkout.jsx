import Chip from "../Elements/Chip"
import shippingIMG from "../../assets/free-shipping-tiny.png"
import Button from "../Elements/Button"

function Checkout({ totalToPay, totalItems }) {
	return (
		<div className="checkout-container">
			<img
				src={shippingIMG}
				alt=""
				className="shipping-image"
			/>
			<div className="cost-list">
				<div className="subtotal">
					<p>Number of items</p>
					<p>{totalItems}</p>
				</div>
				<div className="subtotal">
					<p>Subtotal</p>
					<p>$ {totalToPay}</p>
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
					<p>$ {totalToPay}</p>
				</div>
				<p className="taxes">(Taxes included)</p>
			</div>
			<Button
				text="Checkout"
				btnID="checkout"
			/>
		</div>
	)
}

export default Checkout
