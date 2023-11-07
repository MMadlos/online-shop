function ProductAbout({ description }) {
	return (
		<div className="product-about-container">
			<p>About the product</p>
			<div className="product-about">
				<p>{description}</p>

				<div className="see-more-btn">
					<p>See more</p>
					<i className="fa-solid fa-chevron-down"></i>
				</div>
			</div>
		</div>
	)
}

export default ProductAbout
