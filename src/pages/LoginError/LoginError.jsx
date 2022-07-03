import React from "react";
import "./LoginError.scss";
import errorImage from "../../images/login/error.jpeg";

const LoginError = () => {
	return (
		<>
			<section className="error">
				<div className="error-content col-flex">
					<h4 className="error-content-message">
						YOU NEED TO ENTER ADMIN LOGIN DETAILS TO PROCEED TO ANOTHER PAGE!
					</h4>
					<img src={errorImage} alt="error" className="error-content-img" />
				</div>
			</section>
		</>
	);
};

export default LoginError;
