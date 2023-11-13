import { useContext, useState } from "react"
import { ShopContext } from "../../App"

import CartList from "./CartList"
import Checkout from "./Checkout"
import EditCartItem from "./EditCartItem"

function CartListContainer() {
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
			<CartList
				cartList={cartList}
				onClickEdit={handleClickEdit}
			/>
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

export default CartListContainer
