import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserListPage from "./pages/UserListPage/UserListPage.js";

import "./App.scss";

function App() {
	const [users, setUsers] = useState([]);

	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
		}
	};

	useEffect(() => {
		const getUsers = async () => {
			const result = await fetch(
				"https://laravel-api.albrecht.uk.com/api/users/all",
				options
			);
			const users = await result.json();
			setUsers(users.data);
		};
		getUsers();
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<UserListPage users={users} />} />
			</Routes>
		</div>
	);
}

export default App;
