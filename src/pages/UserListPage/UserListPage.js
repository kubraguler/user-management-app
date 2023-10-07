import { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CreateUserModal from "../../components/CreateUserModal/CreateUserModal.js";
import UserListItem from "../../components/UserListItem/UserListItem.js";
import "./UserListPage.scss";

const UserListPage = ({ users }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<section className="users">
			<h1 className="user-title">User Listing</h1>
			<ul className="user-list">
				{users &&
					users.map((user) => <UserListItem key={user.id} user={user} />)}
			</ul>
			<Button
				onClick={handleOpen}
				sx={{
					color: "text.primary",
					position: "absolute",
					right: 0
				}}
			>
				<span>Add</span>
				<AddIcon />
			</Button>
			<CreateUserModal onClose={handleClose} open={open} users={users} />
		</section>
	);
};

export default UserListPage;
