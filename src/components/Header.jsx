function Header({ cartQuantity = 0 }) {
	return (
		<header>
			<div className="logo-container">
				<h1>Online shop</h1>
			</div>
			<ul>
				<li>
					<a href="#">Ver en Github</a>
				</li>
				<li>
					<a href="#">Cart ({cartQuantity})</a>
				</li>
			</ul>
		</header>
	)
}

export default Header
