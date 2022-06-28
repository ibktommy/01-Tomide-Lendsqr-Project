import React from "react";
import "./Login.scss";
import Logo from "../../images/logo.png";
import loginImage from "../../images/pablo-sign-in 1.png";

const Login = () => {
	return (
		<>
			<div className="container">
				<div className="container-body">
					<header>
						<img src={Logo} alt="logo" />
					</header>

					<div className="content row-flex">
						<div className="left">
							<img src={loginImage} alt="loginImage" />
						</div>

						<div className="right">
							<div className="header">
								<h1 className="title">Welcome!</h1>
								<p>Enter details to login.</p>
							</div>

							<form className="col-flex">
								<input type="email" placeholder="Email" />
								<input type="password" placeholder="Password" />

								<p className="link">Forgot Password?</p>

								<button type="submit">Log In</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
