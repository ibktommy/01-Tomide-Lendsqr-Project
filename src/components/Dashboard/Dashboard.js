import React from 'react'
import { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import './DashBoard.scss'
import FilterIcon from '../../images/body-icons/png/filter-icon.png'

const Dashboard = () => {
  // Custom Hook
  const { loading, data } = useFetch()


  return (
    <>
      <div className="dashboard-top">
        <header>
          <div className="header-box">
            <h2>Organization</h2>
            <img src={FilterIcon} alt="FilterIcon" />
          </div>
          <div className="header-box">
            <h2>Organization</h2>
            <img src={FilterIcon} alt="FilterIcon" />
          </div>
          <div className="header-box">
            <h2>Organization</h2>
            <img src={FilterIcon} alt="FilterIcon" />
          </div>
          <div className="header-box">
            <h2>Organization</h2>
            <img src={FilterIcon} alt="FilterIcon" />
          </div>
          <div className="header-box">
            <h2>Organization</h2>
            <img src={FilterIcon} alt="FilterIcon" />
          </div>
          <div className="header-box">
            <h2>Organization</h2>
            <img src={FilterIcon} alt="FilterIcon" />
          </div>
        </header>
      </div>
    </>
  )
}

export default Dashboard