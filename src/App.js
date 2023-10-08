import { Routes, Route } from "react-router-dom";
import UserListPage from "./pages/UserListPage/UserListPage.js";

import "./App.scss";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<UserListPage />} />
			</Routes>
		</div>
	);
}

export default App;
