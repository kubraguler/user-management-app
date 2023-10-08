import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

import "./UserListItem.scss";

const UserListItem = ({ user }) => {
	return (
		<>
			<Link className="user-link" to={`/${user.id}`} key={user.id}>
				<li className="user">{user.email}</li>
			</Link>
			<Divider />
		</>
	);
};

export default UserListItem;
