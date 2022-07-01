import React, { useState } from 'react'
import './Card.scss'
import FilterMenuIcon from '../../images/body-icons/png/filterMenuIcon.png'
import EyeIcon from '../../images/body-icons/png/view.png'
import CancelUser from '../../images/body-icons/png/cancel-user.png'
import ActivateUser from '../../images/body-icons/png/check-user.png'

const Card = ({ organization, name, email, phoneNumber, status, data }) => {
  // Set States
  const [modal, setModal] = useState(false)

  // Check Status
  function checkStatus(status) {
    if (status === "active") {
      return "active"
    } else if (status === "inactive") {
      return "inactive"
    } else if (status === "pending") {
      return "pending"
    } else {
      return "blacklisted"
    }
  }
  // Toggle Modal
  function toggleModal() {
    setModal(!modal)
  }
  return (

    <>
      <div className="user-card_content row-flex">
        <ul className="user-card">
          <li>{organization}</li>
          <li>{name}</li>
          <li>{email}</li>
          <li>{phoneNumber}</li>
          <li>{data}</li>
          <li
            className={checkStatus(status)}
          >
            {status}
          </li>
        </ul>

        <div className="user-card_div">
          <img src={FilterMenuIcon} alt="FilterMenuIcon" className='user-card_icon' onClick={toggleModal} />

          <div className={modal ? "user-card_modal" : "user-card_modal hidden"} >
            <div className="user-card_modal-div row-flex">
              <img src={EyeIcon} alt="EyeIcon" />
              <p>View Details</p>
            </div>
            <div className="user-card_modal-div row-flex">
              <img src={CancelUser} alt="CancelUser" />
              <p>Blacklist user</p>
            </div>
            <div className="user-card_modal-div row-flex">
              <img src={ActivateUser} alt="ActivateUser" />
              <p>Activate User</p>
            </div>
          </div >
        </div>
      </div>
    </>
  )
}

export default Card