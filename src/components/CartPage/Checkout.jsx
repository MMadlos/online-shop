import Chip from "../Elements/Chip"
import shippingIMG from "/public/free-shipping-tiny.png"

function Checkout({ totalToPay }) {
	return (
		<div className="checkout-container">
			<img
				src={shippingIMG}
				alt=""
				className="shipping-image"
			/>

			<div className="cost-list">
				<div className="subtotal">
					<p>Subtotal</p>
					<p>XXX</p>
				</div>
				<div className="shipping-cost">
					<p>Shipping cost</p>
					<Chip
						text="FREE"
						type="accent"
					/>
				</div>
				<div className="divider"></div>
				<div className="total-amount">
					<p>TOTAL</p>
					<p>$ {totalToPay}</p>
				</div>
				<p className="taxes">(Taxes included)</p>
			</div>

			<button id="checkout">Checkout</button>
		</div>
	)
}

export default Checkout
