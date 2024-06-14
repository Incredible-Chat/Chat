import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';

import "./index.css";

// library.add(fas)

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <div>Error 404</div>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
