import { useState } from "react"

function ProductAbout({ description }) {
	const [isSeeMoreOpen, setIsSeeMoreOpen] = useState(false)

	const expandBtn = {
		text: isSeeMoreOpen ? "See less" : "See more",
		icon: isSeeMoreOpen ? "fa-chevron-up" : "fa-chevron-down",
	}

	return (
		<div className="product-about-container">
			<p>About the product</p>
			<div className="product-about">
				<p className={isSeeMoreOpen ? "description full" : "description"}>{description}</p>
				<button
					className="expand-btn none"
					onClick={() => setIsSeeMoreOpen(!isSeeMoreOpen)}>
					<p>{expandBtn.text}</p>
					<i className={`fa-solid ${expandBtn.icon}`}></i>
				</button>
			</div>
		</div>
	)
}

export default ProductAbout
