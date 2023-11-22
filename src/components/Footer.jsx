function Footer() {
	return (
		<footer>
			<section className="footer-about">
				<h3>About</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consectetur veritatis harum, quidem eum saepe eligendi beatae repellendus nesciunt, fugit
					voluptatum molestias temporibus quaerat nam cupiditate quia veniam inventore. Voluptatem.
				</p>

				<div className="footer-links">
					<i className="fa-brands fa-linkedin-in" />
					<i className="fa-brands fa-github" />
					<a href="#">Portfolio</a>
				</div>
			</section>

			<section className="footer-credits">
				<div className="credit-container">
					<h3>Credits</h3>

					<div className="credit-item-container">
						<h5>API</h5>
						<p>
							Fake Store API <span>(www.fakestoreapi.com)</span>
						</p>
					</div>

					<div className="credit-item-container">
						<h5>Ilustrations</h5>
						<p>
							Storyset <span>(www.storyset.com)</span>
						</p>
					</div>
					<div className="credit-item-container">
						<h5>Icons</h5>
						<p>
							Fontawesome <span>(www.fontawesome.com)</span>
						</p>
					</div>
					<div className="credit-item-container">
						<h5>Project from</h5>
						<p>
							The Odin Project <span>(www.theodinproject.com)</span>
						</p>
					</div>
				</div>
			</section>

			<section className="footer-menu">
				<h3>Menu</h3>

				<ul>
					<li>Home Page</li>
					<ul>
						<li>Men's Clothing</li>
						<li>Jewelry</li>
						<li>Electronics</li>
						<li>Women's clothing</li>
					</ul>
					<li>Product Page</li>
					<li>Cart page</li>
				</ul>
			</section>
		</footer>
	)
}

export default Footer
