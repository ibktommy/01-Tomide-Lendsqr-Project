import React from 'react'
import { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Card from './Card'
import './DashBoard.scss'
import FilterIcon from '../../images/body-icons/png/filter-icon.png'

const Dashboard = () => {
  // Custom Hook
  const { loading, data } = useFetch()
  // Setting States
  const [page, setPage] = useState(0)
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (loading) return

    setUsers(data[page])
  }, [loading, page])

  // HandleChangePage
  function handlePageBtn(index) {
    setPage(index)
  }

  // Next Btn function
  function nextPage() {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }

  // Prev Btn function
  function prevPage() {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })
  }


  return (
    <>
      <div className="dashboard-content">
        {/* HEADER MODAL */}
        <div className="header-modal hidden">
          <form className='header-modal_form'>
            <div className="header-modal_form-div">
              <h2>Organization</h2>
              <button>
                <span>Select</span>
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
            <div className="header-modal_form-div">
              <h2>Username</h2>
              <button>
                <span>Select</span>
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
            <div className="header-modal_form-div">
              <h2>Organization</h2>
              <button>
                <span>Select</span>
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
            <div className="header-modal_form-div">
              <h2>Organization</h2>
              <button>
                <span>Select</span>
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
            <div className="header-modal_form-div">
              <h2>Organization</h2>
              <button>
                <span>Select</span>
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
            <div className="header-modal_form-div">
              <h2>Organization</h2>
              <button>
                <span>Select</span>
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
          </form>
        </div>
        {/* END OF MODAL */}

        <div className="dashboard-top">
          <header>
            <div className="header-box">
              <h2>Organization</h2>
              <img src={FilterIcon} alt="FilterIcon" />
            </div>
            <div className="header-box">
              <h2>Username</h2>
              <img src={FilterIcon} alt="FilterIcon" />
            </div>
            <div className="header-box">
              <h2>Email</h2>
              <img src={FilterIcon} alt="FilterIcon" />
            </div>
            <div className="header-box">
              <h2>Phone Number</h2>
              <img src={FilterIcon} alt="FilterIcon" />
            </div>
            <div className="header-box">
              <h2>Date Joined</h2>
              <img src={FilterIcon} alt="FilterIcon" />
            </div>
            <div className="header-box">
              <h2>Status</h2>
              <img src={FilterIcon} alt="FilterIcon" />
            </div>
          </header>
        </div>

        <div className="dashboard-userData">
          {
            users.map(({ id, ...props }) => {
              return <Card key={id} {...props} />
            })
          }
        </div>
      </div>

      <div className="dashboard-footer row-flex">
        <div className="dashboard-footer_show-filter row-flex">
          <p>Showing</p>
          <button className='row-flex'>
            <span>{page + 1}</span>
            <i className="fas fa-chevron-down"></i>
          </button>
          <p>out of {data.length}</p>
        </div>

        <div className="dashboard-footer_pagination row-flex">
          <button className="nextPage" onClick={prevPage}>
            <i className="fas fa-chevron-left"></i>
          </button>
          {!loading &&
            <div className='paginate-body'>

              {
                data.map((item, index) => {
                  return (
                    <button key={index}
                      className={`page-btn ${index === page ? 'active-btn' : null}`} onClick={() => handlePageBtn(index)}>
                      {index + 1}
                    </button>
                  )
                })
              }        
            </div>}
          <button className="prevPage" onClick={nextPage}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </>
  )
}

export default Dashboard