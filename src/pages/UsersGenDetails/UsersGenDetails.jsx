import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/SideBar/SideBar";
import UserGenDetailsContent from "../../components/UserGenDetailsContent/UserGenDetailsContent";
import "./UserGenDetails.scss";

const UsersGenDetails = () => {
	return (
		<>
			<section className="section section-details">
				<Navbar />
				<SideBar />
				<UserGenDetailsContent />
			</section>
		</>
	);
};

export default UsersGenDetails;
