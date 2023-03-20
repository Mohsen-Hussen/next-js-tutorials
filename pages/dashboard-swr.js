import React from "react";
import useSWR from "swr";

const DashboardSwr = () => {
	const fetcher = async () => {
		const response = await fetch("http://localhost:4000/dashboard");
		const data = await response.json();
		return data;
	};

	const { data, error } = useSWR("dashboard-swr", fetcher);
	if (error) {
		return <h2>An error Occured</h2>;
	}
	if (!data) {
		return <h2>Loading ...</h2>;
	}
	return (
		<>
			<h2>dashboard</h2>
			<h2>Posts - {data.posts}</h2>
			<h2>Likes - {data.likes}</h2>
			<h2>Followers - {data.followers}</h2>
			<h2>Following - {data.following}</h2>
		</>
	);
};

export default DashboardSwr;
