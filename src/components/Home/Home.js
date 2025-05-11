import React, { useContext, useState, useEffect } from 'react'
import SideBar from '../SideBar/SideBar'
import AdminDetails from '../AdminDetails/AdminDetails'
import UserDetails from '../UserDetails/UserDetails'
import VerifierDetails from '../VerifierDetails/VerifierDetails'
import AppForm from '../AppForm/AppForm'
import { UserRoleContext } from '../../Context/UserRoleContext'
import './index.css'

const Home = () => {
  const { userRole } = useContext(UserRoleContext)
  const [showPopup, setShowPopup] = useState(false)

  // Auto show AppForm popup when Home loads
  useEffect(() => {
    setShowPopup(true)
  }, [])

  const renderDetails = () => {
    switch (userRole) {
      case 'Admin':
        return <AdminDetails />
      case 'Verifier':
        return <VerifierDetails />
      case 'User':
        return <UserDetails />
      default:
        return <p>Please log in with a valid role.</p>
    }
  }

  // Handle form submission from AppForm
  const handleFormSubmit = (formData) => {
    console.log('Form Data:', formData)  // You can send this data to the backend here
    alert('Loan Application Submitted')  // Show success message
    setShowPopup(false)  // Close popup after submission
  }

  const handleClosePopup = () => {
    setShowPopup(false)  // Close the popup after submitting or clicking outside
  }

  return (
    <div className="home-container">
      <div className="sidebar-container">
        <SideBar />
      </div>

      <div className="content-container">
        {renderDetails()}
      </div>

      {showPopup && (
        <div
          className="popup-overlay"
          onClick={handleClosePopup}  
        >
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <AppForm 
              onSubmit={handleFormSubmit}  
              closePopup={handleClosePopup}  
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
