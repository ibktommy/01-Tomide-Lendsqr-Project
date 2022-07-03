import React from "react";
import "./UserGenDetailsContent.scss";
import ClientIcon from "../../images/body-icons/png/client.png";
import { Link } from "react-router-dom";

const UserGenDetailsContent = () => {
	return (
		<>
			<main>
				<div className="top col-flex">
					<Link to="/users-dashboard" className="link">
						<i className="fa-solid fa-left-long"></i>
						<span>Back to Users</span>
					</Link>

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
								<i className="fa-solid fa-star"></i>
								<i className="fa-regular fa-star"></i>
								<i className="fa-regular fa-star"></i>
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
					<div className="main-content_box col-flex">
						<h2 className="heading-bold">Personal Information</h2>

						<div className="contain row-flex">
							<div className="main-content_box-details col-flex">
								<div className="table">
									<h3 className=" heading-light">Full name</h3>
									<p className="para">Grace Effiom</p>
								</div>
								<div className="table">
									<h3 className=" heading-light">Marital Status</h3>
									<p className="para">Single</p>
								</div>
							</div>
							<div className="main-content_box-details col-flex">
								<div className="table">
									<h3 className=" heading-light">Phone Number</h3>
									<p className="para">07060780922</p>
								</div>
								<div className="table">
									<h3 className=" heading-light">Children</h3>
									<p className="para">None</p>
								</div>
							</div>
							<div className="main-content_box-details col-flex">
								<div className="table">
									<h3 className=" heading-light">Email Address</h3>
									<p className="para">grace@gmail.com</p>
								</div>
								<div className="table">
									<h3 className=" heading-light">Type of residence</h3>
									<p className="para">Parent’s Apartment</p>
								</div>
							</div>
							<div className="main-content_box-details col-flex">
								<div className="table">
									<h3 className=" heading-light">Bvn</h3>
									<p className="para">07060780922</p>
								</div>
							</div>
							<div className="main-content_box-details col-flex">
								<div className="table">
									<h3 className=" heading-light">Gender</h3>
									<p className="para">Female</p>
								</div>
							</div>
						</div>
					</div>
					<div className="main-content_box col-flex">
						<h2 className="heading-bold">Education and Employment</h2>

						<div className="contain row-flex">
							<div className="main-content_box-details col-flex">
								<div className="table">
									<h3 className=" heading-light">level of education</h3>
									<p className="para">B.Sc</p>
								</div>
								<div className="table">
									<h3 className=" heading-light">office email</h3>
									<p className="para">grace@lendsqr.com</p>
								</div>
							</div>
							<div className="main-content_box-details col-flex">
								<div className="table">
									<h3 className=" heading-light">employment status</h3>
									<p className="para">Employed</p>
								</div>
								<div className="table">
									<h3 className=" heading-light">Monthly income</h3>
									<p className="para">₦200,000.00- ₦400,000.00</p>
								</div>
							</div>
							<div className="main-content_box-details col-flex">
								<div className="table">
									<h3 className=" heading-light">sector of employment</h3>
									<p className="para">FinTech</p>
								</div>
								<div className="table">
									<h3 className=" heading-light">loan repayment</h3>
									<p className="para">40,000</p>
								</div>
							</div>
							<div className="main-content_box-details col-flex">
								<div className="table">
									<h3 className=" heading-light">Duration of employment</h3>
									<p className="para">2 years</p>
								</div>
							</div>
						</div>
					</div>
					<div className="main-content_box col-flex">
						<h2 className="heading-bold">Socials</h2>

						<div className="contain row-flex">
							<div className="main-content_box-details col-flex">
								<div className="table">
									<h3 className=" heading-light">Twitter</h3>
									<p className="para">@grace_effiom</p>
								</div>
							</div>
							<div className="main-content_box-details col-flex">
								<div className="table">
									<h3 className=" heading-light">Facebook</h3>
									<p className="para">Grace Effiom</p>
								</div>
							</div>
							<div className="main-content_box-details col-flex">
								<div className="table">
									<h3 className=" heading-light">Instagram</h3>
									<p className="para">@grace_effiom</p>
								</div>
							</div>
						</div>
					</div>
					<div className="main-content_box col-flex">
						<h2 className="heading-bold">Guarantor</h2>

						<div className="contain row-flex">
							<div className="main-content_box-details col-flex">
								<div className="table">
									<h3 className=" heading-light">full Name</h3>
									<p className="para">Debby Ogana</p>
								</div>
							</div>
							<div className="main-content_box-details col-flex">
								<div className="table">
									<h3 className=" heading-light">Phone Number</h3>
									<p className="para">07060780922</p>
								</div>
							</div>
							<div className="main-content_box-details col-flex">
								<div className="table">
									<h3 className=" heading-light">Email Address</h3>
									<p className="para">debby@gmail.com</p>
								</div>
							</div>
							<div className="main-content_box-details col-flex">
								<div className="table">
									<h3 className=" heading-light">Relationship</h3>
									<p className="para">Sister</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default UserGenDetailsContent;
