import { useState } from "react";
import { addUser } from "../../api";
import {
	Box,
	Typography,
	Modal,
	TextField,
	FormControl,
	Button,
	FormGroup
} from "@mui/material";

import "./CreateUserModal.scss";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4
};

const CreateUserModal = ({ onClose, open }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cPassword, setCPassword] = useState("");

	const handleEmail = (event) => {
		setEmail(event.target.value);
	};

	const handlePassword = (event) => {
		setPassword(event.target.value);
	};

	const handleCPassword = (event) => {
		setCPassword(event.target.value);
	};

	const handleSave = async () => {
		try {
			let res = await addUser(email, password, cPassword);
			if (res) {
				onClose();
			}
		} catch (error) {
			console.error("Error adding user:", error);
			throw error;
		}
	};

	return (
		<div>
			<Modal
				open={open}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Add User
					</Typography>
					<FormControl
						sx={{
							width: 1
						}}
					>
						<FormGroup
							sx={{
								width: 1,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column"
							}}
						>
							<TextField
								id="email"
								label="Email"
								variant="standard"
								required
								type="email"
								sx={{ width: 1, pb: 2, color: "#000" }}
								onChange={handleEmail}
							/>
							<TextField
								id="password"
								label="Password"
								variant="standard"
								required
								type="password"
								sx={{ width: 1, pb: 2 }}
								onChange={handlePassword}
							/>
							<TextField
								id="cPassword"
								label="C-Password"
								variant="standard"
								required
								type="password"
								sx={{ width: 1, pb: 2 }}
								onChange={handleCPassword}
							/>
						</FormGroup>
						<FormGroup
							sx={{
								width: 1,
								display: "flex",
								alignItems: "center",
								justifyContent: "space-evenly",
								flexDirection: "row"
							}}
						>
							<Button
								sx={{
									color: "text.primary"
								}}
								onClick={onClose}
							>
								Cancel
							</Button>
							<Button
								sx={{
									color: "text.primary"
								}}
								onClick={handleSave}
							>
								Save
							</Button>
						</FormGroup>
					</FormControl>
				</Box>
			</Modal>
		</div>
	);
};

export default CreateUserModal;
