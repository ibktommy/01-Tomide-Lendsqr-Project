import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/SideBar/SideBar";
import "./UserGenDetails.scss";

const UsersGenDetails = () => {
	return (
		<>
			<section className="section section-details">
				<Navbar />
				<SideBar />
			</section>
		</>
	);
};

export default UsersGenDetails;
