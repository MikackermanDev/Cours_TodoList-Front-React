import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/NavBar";

export default function App() {
	return (
		<Router>
			<div className="app">
				<Navbar />
				<div className="content">
					{/* <Header /> */}
					<MainContent />
				</div>
				<Footer />
			</div>
		</Router>
	);
}
