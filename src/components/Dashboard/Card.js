import React, { useState } from 'react'
import './Card.scss'
import FilterMenuIcon from '../../images/body-icons/png/filterMenuIcon.png'
import EyeIcon from '../../images/body-icons/png/view.png'
import CancelUser from '../../images/body-icons/png/cancel-user.png'
import ActivateUser from '../../images/body-icons/png/check-user.png'

const Card = ({ organization, name, email, phoneNumber, status, data }) => {
  // Set States
  const [modal, setModal] = useState(false)
  // const [statuz, setStatuz] = useState('active')

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
        <img src={FilterMenuIcon} alt="FilterMenuIcon" className='user-cardIcon' onClick={toggleModal} />
      </ul>
    </>
  )
}

export default Card

  // < div className = { modal? "user-card_modal": "user-card_modal hidden" } >
  //       <div className="user-card_modal-div">
  //         <img src={EyeIcon} alt="EyeIcon" />
  //         View Details
  //       </div>
  //       <div className="user-card_modal-div">
  //         <img src={CancelUser} alt="CancelUser" />
  //         Blacklist user
  //       </div>
  //       <div className="user-card_modal-div">
  //         <img src={ActivateUser} alt="ActivateUser" />
  //         Activate User
  //       </div>
  //     </ >