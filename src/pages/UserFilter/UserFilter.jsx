import React from "react";
import "./UserFilter.scss";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/SideBar/SideBar";
import UserMetrics from "../../components/UserMetrics/UserMetrics.jsx";
import usersMetric from "../../components/UserMetrics/userMetrics.js";

const UserFilter = () => {
	return (
		<>
			<div className="section section-details" id="user-filter">
				<Navbar />
				<SideBar />

				<main>
					<div className="top">
						<h2 className="title-heading">Users</h2>
					</div>

					<div className="users-metric">
						{usersMetric.map(({ id, ...props }) => {
							return <UserMetrics key={id} {...props} />;
						})}
					</div>
				</main>
			</div>
		</>
	);
};

export default UserFilter;
