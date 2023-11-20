import { Link } from "react-router-dom"
import { ShopContext } from "../../App"
import { useContext } from "react"

function Logo() {
	const { setSelectedCategory } = useContext(ShopContext)

	return (
		<h1>
			<Link
				to="/"
				onClick={() => setSelectedCategory("All products")}>
				OSHOP{" "}
			</Link>
		</h1>
	)
}

export default Logo
