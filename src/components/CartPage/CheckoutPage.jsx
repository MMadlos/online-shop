import { Link } from "react-router-dom"

import Chip from "../Elements/Chip"
import CelebrationIMG from "../../assets/celebration.svg"
import Button from "../Elements/Button"

function CheckoutPage() {
	return (
		<div id="checkout-page">
			<Chip
				text="Checkout completed!"
				type="accent"
			/>
			<img
				src={CelebrationIMG}
				alt=""
			/>
			<div className="checkout-text-container">
				<h4>The payment process is out of the scope of this project.</h4>
				<p>{`Thank you for going throught this project! :)`}</p>
				<Link to="/">
					<button>
						<i className="fa-solid fa-arrow-left"></i>Back to the shop
					</button>
				</Link>
			</div>
			<div className="link-container">
				<Button
					text="Portfolio"
					btnID="back"
				/>
				<i className="fa-brands fa-github"></i>
				<i className="fa-brands fa-linkedin-in"></i>
			</div>
		</div>
	)
}

export default CheckoutPage
