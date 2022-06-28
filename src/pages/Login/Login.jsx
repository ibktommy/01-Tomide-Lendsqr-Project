import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import Logo from "../../images/logo.png";
import loginImage from "../../images/pablo-sign-in 1.png";

const Login = () => {
	return (
		<>
			<div className="container">
				<header>
					<img src={Logo} alt="logo" />
				</header>

				<div className="content">
					<div className="left">
						<img src={loginImage} alt="loginImage" />
					</div>

					<div className="right">
						<div className="header">
							<h1 className="title">Welcome!</h1>
							<p>Enter details to login.</p>
						</div>

						<form>
							<input type="email" placeholder="Email" />
							<input type="password" placeholder="Password" />

							<Link to="#">Forgot Password?</Link>

							<button type="submit">Log In</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
