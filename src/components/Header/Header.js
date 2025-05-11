import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaTachometerAlt, FaBook, FaCreditCard, FaRegUserCircle,
  FaBars, FaTimes
} from 'react-icons/fa'
import { TbCurrencyNaira } from 'react-icons/tb'
import { IoMdNotifications } from 'react-icons/io'
import { AiOutlineMessage } from 'react-icons/ai'
import { IoCaretDownSharp } from 'react-icons/io5'
import { UserRoleContext } from '../../Context/UserRoleContext'
import './index.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { userRole, cycleRole } = useContext(UserRoleContext)

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar" aria-label="Main navigation">
      <h1 className="logo">CREDIT APP</h1>

      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        {menuOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            <FaTachometerAlt className="icon" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/payments" onClick={closeMenu}>
            <TbCurrencyNaira className="icon" />
            Payments
          </Link>
        </li>
        <li>
          <Link to="/budget" onClick={closeMenu}>
            <FaBook className="icon" />
            Budget
          </Link>
        </li>
        <li>
          <Link to="/credit-card" onClick={closeMenu}>
            <FaCreditCard className="icon" />
            Credit Card
          </Link>
        </li>
      </ul>

      <div className="header-icons">
        <Link to="/notifications" className="icon-link" aria-label="Notifications">
          <IoMdNotifications className="icon" />
        </Link>
        <Link to="/messages" className="icon-link" aria-label="Messages">
          <AiOutlineMessage className="icon" />
        </Link>
        <div
          className="icon-link user-link"
          onClick={cycleRole}
          role="button"
          tabIndex="0"
          aria-label="Switch Role"
        >
          <FaRegUserCircle className="icon" />
          <span className="user-name">{userRole}</span>
          <IoCaretDownSharp className="icon dropdown-icon" />
        </div>
      </div>
    </nav>
  )
}

export default Header
