import { Fragment, useContext, useState } from "react"
import { ShopContext } from "../../App"

import CartProduct from "./CartProduct"
import Checkout from "./Checkout"
import EditCartItem from "./EditCartItem"

function CartList() {
	const { cartList } = useContext(ShopContext)

	const [isEditOpen, setIsEditOpen] = useState(false)
	const [productIdToEdit, setProductIdToEdit] = useState(null)

	const sumCart = cartList.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
	const sumItemsCart = cartList.reduce((acc, curr) => acc + curr.quantity, 0)

	const totalToPay = sumCart.toFixed(2)

	function handleClickEdit(e) {
		const element = e.target.closest(".cart-product")
		const productID = Number(element.dataset.productId)

		setProductIdToEdit(productID)
		setIsEditOpen(true)
	}

	return (
		<>
			<div className="cart-list-container">
				{cartList?.map((product, index) => {
					const { id } = product
					const isLastProduct = index === cartList.length - 1

					return (
						<Fragment key={id}>
							<CartProduct
								product={product}
								onClickEdit={handleClickEdit}
							/>
							{!isLastProduct && <div className="divider"></div>}
						</Fragment>
					)
				})}
			</div>
			{isEditOpen && (
				<EditCartItem
					productIDtoEdit={productIdToEdit}
					onClickClose={() => setIsEditOpen(false)}
				/>
			)}
			<Checkout
				totalToPay={totalToPay}
				totalItems={sumItemsCart}
			/>
		</>
	)
}

export default CartList
