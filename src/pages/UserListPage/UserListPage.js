import { useEffect, useState } from "react";
import { getUsers } from "../../api.js";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import CreateUserModal from "../../components/CreateUserModal/CreateUserModal.js";
import UserListItem from "../../components/UserListItem/UserListItem.js";
import "./UserListPage.scss";

const UserListPage = () => {
	const [users, setUsers] = useState([]);
	const [createUserModalOpen, setCreateUserModalOpen] = useState(false);

	const handleCreateUserModalClose = () => {
		setCreateUserModalOpen(false);
		fetchUsers();
	};

	const fetchUsers = () => {
		getUsers().then((data) => {
			setUsers(data);
		});
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<section className="users">
			<h1 className="user-title">User Listing</h1>
			<ul className="user-list">
				{users &&
					users.map((user) => <UserListItem key={user.id} user={user} />)}
			</ul>
			<Button
				onClick={() => setCreateUserModalOpen(true)}
				sx={{
					color: "text.primary",
					position: "absolute",
					right: 0
				}}
			>
				<span>Add</span>
				<AddIcon />
			</Button>
			<CreateUserModal
				onClose={handleCreateUserModalClose}
				open={createUserModalOpen}
				users={users}
			/>
		</section>
	);
};

export default UserListPage;
