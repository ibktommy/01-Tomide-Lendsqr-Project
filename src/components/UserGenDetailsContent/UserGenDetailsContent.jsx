import React from "react";
import "./UserGenDetailsContent.scss";
import ClientIcon from "../../images/body-icons/png/client.png";

const UserGenDetailsContent = () => {
	return (
		<>
			<main>
				<div className="top col-flex">
					<div className="link">
						<i class="fa-solid fa-left-long"></i>
						<span>Back to Users</span>
					</div>

					<div className="top-options row-flex">
						<h2 className="title-heading">User Details</h2>

						<div className="button">
							<button>Blacklist User</button>
							<button>Activate User</button>
						</div>
					</div>
				</div>

				<div className="client-summary">
					<div className="client-summary_info row-flex">
						<div className="client-summary_info_profile right-dash row-flex">
							<div className="client-img center-flex">
								<img src={ClientIcon} alt="client" />
							</div>
							<div className="text">
								<h4 className="text-name">Grace Effiom</h4>
								<div className="text-code">LSQFf587g90</div>
							</div>
						</div>

						<div className="client-summary_info_level right-dash col-flex">
							<p>User's Tier</p>
							<span className="level-rate">
								<i class="fa-solid fa-star"></i>
								<i class="fa-regular fa-star"></i>
								<i class="fa-regular fa-star"></i>
							</span>
						</div>

						<div className="client-summary_info_account col-flex">
							<h4>#200,000,00</h4>
							<p>9912345678/Providus Bank</p>
						</div>
					</div>

					<ul className="client-summary_details row-flex">
						<li className="client-summary_details-header active">
							General Details
						</li>
						<li className="client-summary_details-header">Documents</li>
						<li className="client-summary_details-header">bank details</li>
						<li className="client-summary_details-header">Loans</li>
						<li className="client-summary_details-header">Savings</li>
						<li className="client-summary_details-header">App and System</li>
					</ul>
				</div>

				<div className="main-content">
					<div className="main-content_box">
						<h2 className="main-content_box heading-bold">
							Personal Information
						</h2>
						<div className="main-content_box-details">
							<div className="table">
								<h3 className="main-content_box-details heading-light">
									Full name
								</h3>
								<p>Grace Effiom</p>
							</div>
							<div className="table">
								<h3 className="main-content_box-details heading-light">
									Marital Status
								</h3>
								<p>Single</p>
							</div>
						</div>
						<div className="main-content_box-details">
							<div className="table">
								<h3 className="main-content_box-details heading-light">
									Phone Number
								</h3>
								<p>07060780922</p>
							</div>
							<div className="table">
								<h3 className="main-content_box-details heading-light">
									Children
								</h3>
								<p>None</p>
							</div>
						</div>
						<div className="main-content_box-details">
							<div className="table">
								<h3 className="main-content_box-details heading-light">
									Email Address
								</h3>
								<p>grace@gmail.com</p>
							</div>
							<div className="table">
								<h3 className="main-content_box-details heading-light">
									Type of residence
								</h3>
								<p>Parent’s Apartment</p>
							</div>
						</div>
						<div className="main-content_box-details">
							<div className="table">
								<h3 className="main-content_box-details heading-light">Bvn</h3>
								<p>07060780922</p>
							</div>
						</div>
						<div className="main-content_box-details">
							<div className="table">
								<h3 className="main-content_box-details heading-light">
									Gender
								</h3>
								<p>Female</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default UserGenDetailsContent;
