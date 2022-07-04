import React from "react";
import { Link } from "react-router-dom";
import "./LoginError.scss";
import errorImage from "../../images/login/error-icon.png";

const LoginError = () => {
	return (
		<>
			<section className="error">
				<div className="error-content col-flex">
					<h4 className="error-content-message">
						ENTER ANY EMAIL AND PASSWORD TO PROCEED TO USER-DASHBOARD PAGE!
					</h4>
					<img src={errorImage} alt="error" className="error-content-img" />

					<button className="error-btn">
						<Link to="/">
							<i className="fa-solid fa-left-long"></i>
							Back to Login
						</Link>
					</button>
				</div>
			</section>
		</>
	);
};

export default LoginError;
