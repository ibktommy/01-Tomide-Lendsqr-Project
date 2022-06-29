import React from "react";
import "./UserMetrics.scss";

const UserMetrics = ({ image, heading, figure, DoubleUserIcon }) => {
	return (
		<>
			<div className="card col-flex">
				<img src={image} alt="users-xx" />
				<h2 className="card-title">{heading}</h2>
				<p className="card-figure">{figure}</p>
			</div>
		</>
	);
};

export default UserMetrics;
