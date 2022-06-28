import React from "react";
import "./Navbar.scss";
import Logo from "../../images/login/logo.png";
import SearchIcon from "../../images/navbar-icons/search-icon.png";
import NotificationIcon from "../../images/navbar-icons/notificationBell.png";
import User from "../../images/navbar-img/image 4 (1).png";
import DownArrowIcon from "../../images/navbar-icons/down-arrow.png";

const Navbar = () => {
	return (
		<>
			<div className="navbar row-flex">
				<div className="logo">
					<img src={Logo} alt="logo" />
				</div>

				<div className="search-bar row-flex">
					<input type="search" placeholder="Search for anything" />
					<button>
						<img src={SearchIcon} alt="searchIcon" />
					</button>
				</div>

				<div className="options row-flex">
					<p className="link">Docs</p>
					<img src={NotificationIcon} alt="notification-bell" />
					<div className="user row-flex">
						<img src={User} alt="User" />
						<p className="username">Adedeji</p>
						<img
							src={DownArrowIcon}
							alt="down-Arrow-Icon"
							className="user-options"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
