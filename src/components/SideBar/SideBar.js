import React from 'react';
  
import { CgProfile } from "react-icons/cg";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaUserFriends, FaMoneyCheckAlt, FaWallet, FaFileInvoiceDollar, FaChartLine, FaCogs, FaSignOutAlt, FaPiggyBank, FaCalendarAlt } from "react-icons/fa";
import { MdOutlineSettings, MdAttachMoney } from "react-icons/md";
import { RiFileSettingsLine } from "react-icons/ri";
import { BsCardChecklist } from "react-icons/bs";
import { TbSignature } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { Link , Outlet} from "react-router-dom";
import './index.css';

const DashBoard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <div className="profile-container">
          <CgProfile className="profile-icon" />
          <h1 className="profile-name">John Okah</h1>
        </div>

        <ul className="menu-list">
          <li><Link to="/" className="menu-link"><AiOutlineDashboard className="menu-icon" />Dashboard</Link></li>
          <li><Link to="/borrowers" className="menu-link"><FaUserFriends className="menu-icon" />Borrowers</Link></li>
          <li><Link to="/loan" className="menu-link"><FaFileInvoiceDollar className="menu-icon" />Loan</Link></li>
          <li><Link to="/repayments" className="menu-link"><FaWallet className="menu-icon" />Repayments</Link></li>
          <li><Link to="/loan-parameters" className="menu-link"><RiFileSettingsLine className="menu-icon" />Loan Parameters</Link></li>
          <li><Link to="/accounting" className="menu-link"><FaMoneyCheckAlt className="menu-icon" />Accounting</Link></li>
          <li><Link to="/reports" className="menu-link"><FaChartLine className="menu-icon" />Reports</Link></li>
          <li><Link to="/collateral" className="menu-link"><BsCardChecklist className="menu-icon" />Collateral</Link></li>
          <li><Link to="/access-config" className="menu-link"><FaCogs className="menu-icon" />Access Configuration</Link></li>
          <li><Link to="/savings" className="menu-link"><FaPiggyBank className="menu-icon" />Savings</Link></li>
          <li><Link to="/expenses" className="menu-link"><MdAttachMoney className="menu-icon" />Expenses</Link></li>
          <li><Link to="/e-signature" className="menu-link"><TbSignature className="menu-icon" />E-signature</Link></li>
          <li><Link to="/investor-accounts" className="menu-link"><HiOutlineUserGroup className="menu-icon" />Investor Accounts</Link></li>
          <li><Link to="/calendar" className="menu-link"><FaCalendarAlt className="menu-icon" />Calendar</Link></li>
          <li><Link to="/settings" className="menu-link"><MdOutlineSettings className="menu-icon" />Settings</Link></li>
          <li><Link to="/sign-out" className="menu-link"><FaSignOutAlt className="menu-icon" />Sign Out</Link></li>
        </ul>
      </div>

      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
