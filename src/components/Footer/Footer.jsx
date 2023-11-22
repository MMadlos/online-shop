import "./styles.css"
import { Link } from "react-router-dom"
import ExternalLinkIcon from "../ExternalLinkIcon"

function Footer() {
	return (
		<footer>
			<section className="footer-about">
				<h3>About</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consectetur veritatis harum, quidem eum saepe eligendi beatae repellendus nesciunt.</p>

				<div className="footer-links">
					<a href="https://www.linkedin.com/in/michaelmadlos/">
						<i className="fa-brands fa-linkedin-in" />
					</a>

					<a href="https://github.com/MMadlos/online-shop">
						<i className="fa-brands fa-github" />
					</a>
					<a href="#">Portfolio</a>
				</div>
			</section>

			<section className="footer-credits">
				<h3>Credits</h3>

				<div className="credit-item-container">
					<h5>API</h5>
					<a
						className="credit-link"
						href="https://fakestoreapi.com/"
						rel="noreferrer"
						target="_blank">
						Fake Store API
						<ExternalLinkIcon />
					</a>
				</div>

				<div className="credit-item-container">
					<h5>Ilustrations</h5>
					<a
						className="credit-link"
						href="https://storyset.com/"
						rel="noreferrer"
						target="_blank">
						Storyset
						<ExternalLinkIcon />
					</a>
				</div>

				<div className="credit-item-container">
					<h5>Icons</h5>
					<a
						className="credit-link"
						href="https://fontawesome.com/"
						rel="noreferrer"
						target="_blank">
						Fontawesome
						<ExternalLinkIcon />
					</a>
				</div>
				<div className="credit-item-container">
					<h5>Project made for</h5>
					<a
						className="credit-link"
						href="https://theodinproject.com/"
						rel="noreferrer"
						target="_blank">
						The Odin Project
						<ExternalLinkIcon />
					</a>
				</div>
			</section>

			<section className="footer-menu">
				<h3>Menu</h3>

				<ul>
					<li>
						<Link to={"/"}>Home</Link>
					</li>
					<li>
						<Link to={"/cart"}>Cart</Link>
					</li>
				</ul>
			</section>
		</footer>
	)
}

export default Footer
