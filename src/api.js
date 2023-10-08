const headers = {
	accept: "application/json",
	"content-type": "application/json",
	authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
};

export const getUsers = async () => {
	try {
		const result = await fetch(
			"https://laravel-api.albrecht.uk.com/api/users/all",
			{
				method: "GET",
				headers
			}
		);

		if (!result.ok) {
			throw new Error("Failed to fetch user data");
		}

		const data = await result.json();
		return data.data;
	} catch (error) {
		console.error("Error fetching user data:", error);
		throw error;
	}
};

export const addUser = async (email, password, cPassword) => {
	try {
		const result = await fetch(
			"https://laravel-api.albrecht.uk.com/api/users",
			{
				method: "POST",
				headers,
				body: JSON.stringify({
					email,
					password,
					c_password: cPassword,
					roles: [1]
				})
			}
		);

		if (!result.ok) {
			throw new Error("Failed to add user");
		}

		const users = await result.json();
		return users.data;
	} catch (error) {
		console.error("Error adding user:", error);
		throw error;
	}
};
