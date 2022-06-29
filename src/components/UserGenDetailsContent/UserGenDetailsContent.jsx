import React from "react";
import "./UserGenDetailsContent.scss";

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
          <div className="info">
            <div className="profile">
              <img src="" alt="" />
              .
            </div>
          </div>

          <div className="details"></div>
        </div>
			</main>
		</>
	);
};

export default UserGenDetailsContent;
