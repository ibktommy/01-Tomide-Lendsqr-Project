import React from "react";
import Logo from "../../images/login/logo.png";

const Navbar = () => {
	return (
		<>
			<div className="navbar">
				<div className="logo">
					<img src={Logo} alt="logo" />
				</div>
			</div>
		</>
	);
};

export default Navbar;
