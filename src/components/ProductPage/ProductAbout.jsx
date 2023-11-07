function ProductAbout({ description }) {
	return (
		<div className="product-about-container">
			<p>About the product</p>
			<div className="product-about">
				<p>{description}</p>
			</div>
		</div>
	)
}

export default ProductAbout
