import { useState } from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

import "./Sorting.scss";

export const SortingOptions = {
	Recommended: 1,
	First: 2,
	Latest: 3
};

const Sorting = ({ onValueChange }) => {
	const [sortValue, setSortValue] = useState(SortingOptions.Recommended);

	const handleSelectChange = (event) => {
		const newValue = event.target.value;
		setSortValue(newValue);
		onValueChange(newValue);
	};

	return (
		<Box
			sx={{
				maxWidth: 170,
				display: "flex",
				alignItems: "flex-end",
				justifyContent: "center",
				pb: 6
			}}
		>
			<FormControl fullWidth>
				<InputLabel id="sortLabel">Sort</InputLabel>
				<Select
					labelId="sortLabel"
					id="sortSelect"
					value={sortValue}
					label="Sort"
					onChange={handleSelectChange}
				>
					<MenuItem value={1}>Recommended</MenuItem>
					<MenuItem value={2}>First Added</MenuItem>
					<MenuItem value={3}>Last Added</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
};

export default Sorting;
