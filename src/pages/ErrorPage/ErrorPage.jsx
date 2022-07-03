import React from "react";
import { Link } from "react-router-dom";
import "../../pages/LoginError/LoginError.scss";
import errorImage from "../../images/login/error.jpeg";

const ErrorPage = () => {
	return (
		<>
			<section className="error">
				<div className="error-content col-flex">
					<h4 className="error-content-message">THIS PAGE DOES NOT EXIST!</h4>
					<img src={errorImage} alt="error" className="error-content-img" />

					<button className="error-btn">
						<Link to="/users-filter">
							<i className="fa-solid fa-left-long"></i>
							Back to Filter users page
						</Link>
					</button>
				</div>
			</section>
		</>
	);
};

export default ErrorPage;
