import React from 'react'
import './Card.scss'
import FilterMenuIcon from '../../images/body-icons/png/filterMenuIcon.png'

const Card = ({ organization, name, email, phoneNumber, status, data }) => {
  return (
    <>
      <ul className="user-card">
        <li>{organization}</li>
        <li>{name}</li>
        <li>{email}</li>
        <li>{phoneNumber}</li>
        <li>{data}</li>
        <li>{status}</li>
        <img src={FilterMenuIcon} alt="FilterMenuIcon" className='user-cardIcon' />
      </ul>
    </>
  )
}

export default Card