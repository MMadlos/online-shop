import { useState } from "react"

function ProductAbout({ description }) {
	const [isSeeMoreOpen, setIsSeeMoreOpen] = useState(false)

	return (
		<div className="product-about-container">
			<p>About the product</p>
			<div className="product-about">
				<p className={isSeeMoreOpen ? "full" : null}>{description}</p>

				{!isSeeMoreOpen && (
					<div
						className="see-more-btn"
						onClick={() => setIsSeeMoreOpen(true)}>
						<p>See more</p>
						<i className="fa-solid fa-chevron-down"></i>
					</div>
				)}

				{isSeeMoreOpen && (
					<div
						className="see-less-btn"
						onClick={() => setIsSeeMoreOpen(false)}>
						<p>See less</p>
						<i className="fa-solid fa-chevron-up"></i>
					</div>
				)}
			</div>
		</div>
	)
}

export default ProductAbout
