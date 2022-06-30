import React from 'react'
import './Card.css'
import FilterMenuIcon from '../../images/body-icons/png/filterMenuIcon.png'

const Card = ({ organization, name, email, phoneNumber, status, data }) => {
  return (
    <>
      <ul className="card">
        <li>{organization}</li>
        <li>{name}</li>
        <li>{email}</li>
        <li>{phoneNumber}</li>
        <li>{status}</li>
        <li>{data}</li>
        <li>{FilterMenuIcon}</li>
      </ul>
    </>
  )
}

export default Card