import { Link } from "react-router-dom";
import "./UserListing.scss";

const UserListing = () => {
	return (
		<section>
			<h1>User Listing</h1>
			<Link to="/user-detail">Take me detail page!</Link>
		</section>
	);
};

export default UserListing;
