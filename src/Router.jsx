import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.jsx"

import HomePage from "./components/HomePage/HomePage.jsx"
import ProductPage from "./components/ProductPage/ProductPage.jsx"
import CartPage from "./components/CartPage/CartPage.jsx"

import ErrorProduct from "./components/Error/ErrorProduct.jsx"
import ErrorPage from "./components/Error/ErrorPage.jsx"

const Router = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <App />,
			children: [
				{ index: true, element: <HomePage /> },
				{ path: "cart", element: <CartPage /> },
				{ path: "product", element: <ErrorProduct /> },
				{
					path: "product/:productID",
					element: <ProductPage />,
				},
			],
			errorElement: <ErrorPage />,
		},
	])

	return <RouterProvider router={router} />
}

export default Router
