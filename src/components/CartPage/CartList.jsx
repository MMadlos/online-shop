import { Fragment } from "react"
import CartProduct from "./CartProduct"

function CartList({ cartList, onClickEdit }) {
	return (
		<div className="cart-list-container">
			{cartList?.map((product, index) => {
				const { id } = product
				const isLastProduct = index === cartList.length - 1

				return (
					<Fragment key={id}>
						<CartProduct
							product={product}
							onClickEdit={onClickEdit}
						/>
						{!isLastProduct && <div className="divider"></div>}
					</Fragment>
				)
			})}
		</div>
	)
}

export default CartList
