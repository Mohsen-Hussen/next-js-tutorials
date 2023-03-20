import React, { useState, useEffect } from "react";

const Dashboard = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [dashBoardData, setDashBoardData] = useState(null);

	useEffect(() => {
		async function fetchDashBoardData() {
			const response = await fetch("http://localhost:4000/dashboard");
			const data = await response.json();
			setDashBoardData(data);
			setIsLoading(false);
		}
		fetchDashBoardData();
	}, []);

	if (isLoading) {
		return <h2>Loading ...</h2>;
	}
  
	return (
		<>
			<h2>dashboard</h2>
			<h2>Posts - {dashBoardData.posts}</h2>
			<h2>Likes - {dashBoardData.likes}</h2>
			<h2>Followers - {dashBoardData.followers}</h2>
			<h2>Following - {dashBoardData.following}</h2>
		</>
	);
};

export default Dashboard;
