import { Routes, Route } from "react-router-dom";
import UserListing from "./pages/UserListing/UserListing.js";
import UserDetail from "./pages/UserDetail/UserDetail.js";

import "./App.scss";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<UserListing />} />
				<Route path="/user-detail" element={<UserDetail />} />
			</Routes>
		</div>
	);
}

export default App;
