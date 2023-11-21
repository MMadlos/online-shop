import "./styles.css"
import errorPageSVG from "../../assets/error-page.svg"
import { Link } from "react-router-dom"

function ErrorPage() {
	return (
		<section className="error-page">
			<img
				src={errorPageSVG}
				alt=""
			/>
			<div className="content-container">
				<div className="title-error">
					<p>404</p>
					<h1>Something's missing.</h1>
				</div>
				<p className="explanation-error">This page is missing or you assembled the link incorrectly</p>

				<Link to="/">
					<button>
						<i className="fa-solid fa-arrow-left" /> Go back to home
					</button>
				</Link>
			</div>
		</section>
	)
}

export default ErrorPage
