import "../style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import Toast from "./Tools/Toastify/Toast";

const route = ReactDOM.createRoot(document.getElementById("root"));
route.render(
	<>
		<Toast />
		<App />
	</>
);
