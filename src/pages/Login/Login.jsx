import React, { useState } from "react";
import "./Login.scss";
import Logo from "../../images/login/logo.png";
import loginImage from "../../images/login/pablo-sign-in 1.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
	// Set State to check for user Email & Password Input
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");

	// Set useNavigate Hook
	const navigate = useNavigate();

	// Function to check if User Login Details Have Been Entered Before Going to Another Page
	function isUserLoggedIn(e) {
		e.preventDefault();
		if (!name || !password) {
			navigate("/error");
		} else {
			setName({ name: name });
			setPassword({ password: password });
			navigate("/users-dashboard");
		}
	}

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

							<form className="col-flex" onSubmit={isUserLoggedIn}>
								<input
									type="email"
									placeholder="Email"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
								<input
									type="password"
									placeholder="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>

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
