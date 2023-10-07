import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

import "./UserListItem.scss";

const UserListItem = ({ user }) => {
	return (
		<>
			<li className="user">
				<Link className="user-link" to={`/${user.id}`} key={user.id}>
					{user.email}
				</Link>
			</li>
			<Divider />
		</>
	);
};

export default UserListItem;
