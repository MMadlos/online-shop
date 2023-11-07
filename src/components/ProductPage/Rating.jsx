function Rating({ rate, countRates }) {
	const stars = []
	for (let i = 1; i < rate; i++) {
		stars.push(i)
	}

	const rateINT = Math.floor(rate)

	return (
		<div className="rate-container">
			<div className="star-container">
				{stars.map((index) => {
					return (
						<i
							className="fa-solid fa-star"
							key={index}
						/>
					)
				})}
				{rate - rateINT > 0 && <i className="fa-solid fa-star-half" />}
			</div>
			<p className="rate">{`${rate} (${countRates})`}</p>
		</div>
	)
}

export default Rating
