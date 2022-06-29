import React, { useState } from "react";
import "./SideBar.scss";
import BriefcaseIcon from "../../images/sidebar-icons/png/briefcase 1.png";
import DownArrowIcon from "../../images/sidebar-icons/png/downArrow.png";
import HomeIcon from "../../images/sidebar-icons/png/home 1.png";
import UserFriendsIcon from "../../images/sidebar-icons/png/user-friends 1.png";
import UserIcon from "../../images/sidebar-icons/png/users 1.png";
import SackIcon from "../../images/sidebar-icons/png/sack 1.png";
import HandSackIcon from "../../images/sidebar-icons/png/hand-sack.png";
import HandShakeIcon from "../../images/sidebar-icons/png/handshake-regular 1.png";
import PiggyBankIcon from "../../images/sidebar-icons/png/piggy-bank 1.png";
import UserCheckIcon from "../../images/sidebar-icons/png/user-check 1.png";
import UsersTimesIcon from "../../images/sidebar-icons/png/user-times 1.png";
import BankIcon from "../../images/sidebar-icons/png/np_bank_148501_000000 1.png";
import CoinsIcon from "../../images/sidebar-icons/png/coins-solid 1.png";
import TransferIcon from "../../images/sidebar-icons/png/icon.png";
import ServicesIcon from "../../images/sidebar-icons/png/galaxy 1.png";
import UsersServicesIcon from "../../images/sidebar-icons/png/user-cog 1.png";
import ScrollIcon from "../../images/sidebar-icons/png/scroll 1.png";
import ChartBarIcon from "../../images/sidebar-icons/png/chart-bar 2.png";
import SliderIcon from "../../images/sidebar-icons/png/sliders-h 1.png";
import BadgeIcon from "../../images/sidebar-icons/png/badge-percent 1.png";
import ClipBoardIcon from "../../images/sidebar-icons/png/clipboard-list 1.png";

const SideBar = () => {
	// State for Menu Button
	const [menuBtn, setMenuBtn] = useState(false);

	function toggle() {
		setMenuBtn(!menuBtn);
	}

	return (
		<>
			<div className="sidebar">
				<div
					className={menuBtn ? "sidebar-menu-item menu" : "sidebar-menu-item"}
				>
					<div className="sidebar-menu-item_bar" onClick={toggle}>
						<i className={menuBtn ? "fas fa-bars" : "fas fa-bars menu"}></i>
						<i className={menuBtn ? "fas fa-times" : "fas fa-times menu"}></i>
					</div>

					<div
						className={
							!menuBtn
								? "sidebar-content menu col-flex"
								: "sidebar-content col-flex"
						}
					>
						<div className="sidebar-content_top-options col-flex">
							<div className="sidebar-options row-flex">
								<img src={BriefcaseIcon} alt="briefcase" />
								<h4 className="sidebar-options-title">Switch Organization</h4>
								<img src={DownArrowIcon} alt="downArrow" />
							</div>
							<div className="sidebar-options row-flex">
								<img src={HomeIcon} alt="briefcase" />
								<h4 className="sidebar-options-title">Dashboard</h4>
							</div>
						</div>

						<div className="sidebar-content_other-options col-flex">
							<div className="sidebar-content_other-options_box col-flex">
								<h3 className="other-options-title">customers</h3>
								<ul className="other-options-list col-flex">
									<li className="sidebar-options">
										<img src={UserFriendsIcon} alt="user-friends" />
										<h4 className="sidebar-options-title">Users</h4>
									</li>
									<li className="sidebar-options">
										<img src={UserIcon} alt="users" />
										<h4 className="sidebar-options-title">guarantors</h4>
									</li>
									<li className="sidebar-options">
										<img src={SackIcon} alt="SackIcon" />
										<h4 className="sidebar-options-title">loans</h4>
									</li>
									<li className="sidebar-options">
										<img src={HandShakeIcon} alt="HandShakeIcon" />
										<h4 className="sidebar-options-title">decision models</h4>
									</li>
									<li className="sidebar-options">
										<img src={PiggyBankIcon} alt="PiggyBankIcon" />
										<h4 className="sidebar-options-title">savings</h4>
									</li>
									<li className="sidebar-options">
										<img src={HandSackIcon} alt="HandSackIcon" />
										<h4 className="sidebar-options-title">loan requests</h4>
									</li>
									<li className="sidebar-options">
										<img src={UserCheckIcon} alt="UserCheckIcon" />
										<h4 className="sidebar-options-title">whitelist</h4>
									</li>
									<li className="sidebar-options">
										<img src={UsersTimesIcon} alt="UsersTimesIcon" />
										<h4 className="sidebar-options-title">karma</h4>
									</li>
								</ul>
							</div>

							<div className="sidebar-content_other-options_box col-flex">
								<h3 className="other-options-title">Businesses</h3>
								<ul className="other-options-list col-flex">
									<li className="sidebar-options">
										<img src={BriefcaseIcon} alt="BriefcaseIcon" />
										<h4 className="sidebar-options-title">organization</h4>
									</li>
									<li className="sidebar-options">
										<img src={HandSackIcon} alt="HandSackIcon" />
										<h4 className="sidebar-options-title">loan products</h4>
									</li>
									<li className="sidebar-options">
										<img src={BankIcon} alt="BankIcon" />
										<h4 className="sidebar-options-title">savings products</h4>
									</li>
									<li className="sidebar-options">
										<img src={CoinsIcon} alt="CoinsIcon" />
										<h4 className="sidebar-options-title">Fees and Charges</h4>
									</li>
									<li className="sidebar-options">
										<img src={TransferIcon} alt="TransferIcon" />
										<h4 className="sidebar-options-title">Transactions</h4>
									</li>
									<li className="sidebar-options">
										<img src={ServicesIcon} alt="HandSackIcon" />
										<h4 className="sidebar-options-title">Services</h4>
									</li>
									<li className="sidebar-options">
										<img src={UsersServicesIcon} alt="UserCheckIcon" />
										<h4 className="sidebar-options-title">services account</h4>
									</li>
									<li className="sidebar-options">
										<img src={ScrollIcon} alt="ScrollIcon" />
										<h4 className="sidebar-options-title">settlements</h4>
									</li>
									<li className="sidebar-options">
										<img src={ChartBarIcon} alt="ScrollIcon" />
										<h4 className="sidebar-options-title">reports</h4>
									</li>
								</ul>
							</div>

							<div className="sidebar-content_other-options_box col-flex">
								<h3 className="other-options-title">Settings</h3>
								<ul className="other-options-list col-flex">
									<li className="sidebar-options">
										<img src={SliderIcon} alt="SliderIcon" />
										<h4 className="sidebar-options-title">organization</h4>
									</li>
									<li className="sidebar-options">
										<img src={BadgeIcon} alt="BadgeIcon" />
										<h4 className="sidebar-options-title">loan products</h4>
									</li>
									<li className="sidebar-options">
										<img src={ClipBoardIcon} alt="ClipBoardIcon" />
										<h4 className="sidebar-options-title">savings products</h4>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SideBar;
