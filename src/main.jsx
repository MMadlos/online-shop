import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from "./App.jsx"
import Layout from "./components/Pages/Layout.jsx"

import "./index.css"
import Cart from "./components/Cart.jsx"
import HomePage from "./components/Pages/Home.jsx"

const router = createBrowserRouter([
	{
		path: "*",
		element: <App />,
		// children: [
		// 	{ index: true, element: <HomePage /> },
		// 	{ path: "cart", element: <Cart /> },
		// ],
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
