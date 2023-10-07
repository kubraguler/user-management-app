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
	return (
		<div>
			<Modal
				open={open}
				onClose={onClose}
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
								id="standard-basic"
								label="Email"
								variant="standard"
								sx={{ width: 1, pb: 2, color: "#000" }}
								color=""
							/>
							<TextField
								id="standard-basic"
								label="Password"
								variant="standard"
								sx={{ width: 1, pb: 2 }}
							/>
							<TextField
								id="standard-basic"
								label="C-Password"
								variant="standard"
								sx={{ width: 1, pb: 2 }}
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
							>
								Cancel
							</Button>
							<Button
								sx={{
									color: "text.primary"
								}}
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
