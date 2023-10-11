import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.jsx"

import HomePage from "./components/Pages/HomePage.jsx"
import ProductPage from "./components/Pages/ProductPage.jsx"
import CartPage from "./components/Pages/CartPage.jsx"

import ErrorProduct from "./components/Pages/ErrorProduct.jsx"
import ErrorPage from "./components/Pages/ErrorPage.jsx"

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
