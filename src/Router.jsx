import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.jsx"
import Cart from "./components/Pages/Cart.jsx"
import HomePage from "./components/Pages/Home.jsx"
import ErrorPage from "./components/Pages/ErrorPage.jsx"
import ProductPage from "./components/Pages/ProductPage.jsx"
import ErrorProduct from "./components/Pages/ErrorProduct.jsx"

const Router = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <App />,
			children: [
				{ index: true, element: <HomePage /> },
				{ path: "cart", element: <Cart /> },
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
