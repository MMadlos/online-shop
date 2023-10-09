import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.jsx"
import Cart from "./components/Cart.jsx"
import HomePage from "./components/Pages/Home.jsx"
import ErrorPage from "./components/Pages/ErrorPage.jsx"

const Router = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <App />,
			children: [
				{ index: true, element: <HomePage /> },
				{ path: "cart", element: <Cart /> },
			],
			errorElement: <ErrorPage />,
		},
	])

	return <RouterProvider router={router} />
}

export default Router
