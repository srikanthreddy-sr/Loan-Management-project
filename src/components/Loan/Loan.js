import React, { useState } from 'react';
import { FaCashRegister, FaUsers, FaMoneyBillWave, FaCheckCircle } from 'react-icons/fa';
import SideBar from '../SideBar/SideBar'; 
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, Filler } from 'chart.js';
import './index.css';


// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Filler, Title, Tooltip, Legend);

const Loan = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activityFilter, setActivityFilter] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  
  // More advanced fake data for Recent Activity with random images
  const recentActivities = [
    { name: 'John Doe', date: '2025-05-10', action: 'Verify', amount: 5000, image: 'https://randomuser.me/api/portraits/men/1.jpg',activity:"Contacted Email are Not Linked" , update: "Updated 1 day ago" },
    { name: 'Jane Smith', date: '2025-05-09', action: 'Pending', amount: 1000, image: 'https://randomuser.me/api/portraits/men/2.jpg', activity:"Adding Images to Featured Posts", update: "Updated 3 day ago" },
    { name: 'Mary Johnson', date: '2025-05-08', action: 'Approval', amount: 0, image: 'https://randomuser.me/api/portraits/men/3.jpg', activity:"Payment not going through", update: "Updated 3 day ago" },
    { name: 'James Williams', date: '2025-05-07', action: 'Pending', amount: 2000, image: 'https://randomuser.me/api/portraits/men/4.jpg', activity: "unable to add replies",update: "Updated 2 day ago" },
    { name: 'Patricia Brown', date: '2025-05-06', action: 'Verify', amount: 1500, image: 'https://randomuser.me/api/portraits/men/6.jpg', activity:"Contacted Email are Not Linked",update: "Updated 1 day ago" },
    { name: 'Michael Davis', date: '2025-05-05', action: 'Pending', amount: 1200, image: 'https://randomuser.me/api/portraits/men/8.jpg', activity:"Contacted Email are Not Linked",update: "Updated 1 day ago" },
    { name: 'Linda Wilson', date: '2025-05-04', action: 'Approval', amount: 0, image: 'https://randomuser.me/api/portraits/men/9.jpg',  activity:"Down time since last week",update: "Updated 1 day ago" },
    { name: 'David Lee', date: '2025-05-03', action: 'Verify', amount: 8000, image: 'https://randomuser.me/api/portraits/men/7.jpg', activity:"Contacted Email are Not Linked",update: "Updated 1 day ago" },
    { name: 'Elizabeth Harris', date: '2025-05-02', action: 'Verify', amount: 2500, image: 'https://randomuser.me/api/portraits/men/10.jpg' ,  activity:"Down time since last week",update: "Updated 1 day ago"},
    { name: 'Christopher Clark', date: '2025-05-01', action: 'Verify', amount: 3000, image: 'https://randomuser.me/api/portraits/men/11.jpg', activity:"Refferal Bonus",update: "Updated 1 day ago" },
    
  ];

  // Filter based on search term
  const filteredActivities = recentActivities.filter((activity) => {
    const matchesSearchTerm =
      activity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.action.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesActivityType =
      activityFilter ? activity.action.toLowerCase().includes(activityFilter.toLowerCase()) : true;

    const matchesDateRange =
      (startDate ? new Date(activity.date) >= new Date(startDate) : true) &&
      (endDate ? new Date(activity.date) <= new Date(endDate) : true);

    return matchesSearchTerm && matchesActivityType && matchesDateRange;
  });

  // Sort the filtered activities by date
  const sortedActivities = filteredActivities.sort((a, b) => {
    return sortOrder === 'asc'
      ? new Date(a.date) - new Date(b.date)
      : new Date(b.date) - new Date(a.date);
  });

  // Dummy Data for Monthly Loan Stats (Outstanding Loans, Repayments, and Monthly Loans Issued)
  const monthlyData = {
    outstandingLoans: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'Outstanding Loans',
        data: [120000, 115000, 13000, 125000, 140000, 4880909, 9000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }],
    },
    repaymentsCollected: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'Repayments Collected',
        data: [5000, 6000, 7000, 8000, 9000],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      }],
    },
    monthlyLoansIssued: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'Monthly Loans Issued',
        data: [10000, 20000, 15000, 25000, 18000],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
      }],
    },
  };

  // Area chart for loan issued
  const areaChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Loan Issued (Area Chart)',
      data: [10000, 20000, 15000, 25000, 18000],
      backgroundColor: 'rgba(70, 146, 83, 0.6)', // Light orange
      borderColor: 'rgb(45, 123, 23)', // Darker orange
      borderWidth: 2,
      fill: true, // Makes it an area chart
    }],
  };

  const toggleSortOrder = () => {
    setSortOrder(prevOrder => (prevOrder === 'desc' ? 'asc' : 'desc'));
  };

  return (
    <div className="loan-page-container">
      <SideBar /> {/* Sidebar added here */}
  
      <div className="loan-content">
        <div className='content-Dashboard'> 
          <span className='dashboard-loan'><span className='d1'>Dashborad</span> &gt; Loan</span>
        </div>
        {/* Stats */}
        <div className="loan-stats">
          <div className="stat-item">
            <FaCashRegister size={30} />
            <p className='data'><span>50</span> <br/>Loans</p>
          </div>
          <div className="stat-item">
            <FaUsers size={30} />
            <p  className='data'><span>100</span><br/>Borrowers</p>
          </div>
          <div className="stat-item">
            <FaMoneyBillWave size={30} />
            <br /> 
            <p  className='data'>
              <span>
              550,000
              </span><br/>
               Cash Disbursed</p>
          </div>
          <div className="stat-item">
            <FaMoneyBillWave size={30} />
            <br /> 
            <p  className='data'><span>450,000</span><br/> Savings</p>
          </div>
          <div className="stat-item">
            <FaCheckCircle size={30} />
            <br /> 
            <p  className='data'><span>30</span><br/> Repaid Loans</p>
          </div>
          <div className="stat-item">
            <FaCashRegister size={30} />
            <br /> 
            <p  className='data'><span>1,000,000</span><br/> Cash Received</p>
          </div>
        </div>

        {/* Loan-Related Monthly Charts */}
         <div className="chart-item">
          <h3>Loan Released Monthly </h3>
          <Line data={areaChartData} options={{ responsive: true }} />
        </div>

        <div className="chart-item">
          <h3>Loan Issued Monthly </h3>
          <Bar data={monthlyData.monthlyLoansIssued} options={{ responsive: true }} />
        </div>

        <div className="charts-container">
          <div className="chart-item">
            <h3>Outstanding Open Loans - Monthly </h3>
            <Bar data={monthlyData.outstandingLoans} options={{ responsive: true }} />
          </div>
          <div className="chart-item">
            <h3>Repayments Collected - Monthly </h3>
            <Bar data={monthlyData.repaymentsCollected} options={{ responsive: true }} />
          </div>
        </div>

        {/* Area Chart for Loan Issued */}
       

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name or action..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />

        {/* Filters for Activity Type and Date Range */}
        <div className="filter-container">
          <select
            onChange={(e) => setActivityFilter(e.target.value)}
            value={activityFilter}
            className="filter-select"
          >
            <option value="">Filter by Activity Type</option>
            <option value="Verify">Verify</option>
            <option value="Pending">Pending</option>
            <option value="Approval">Approval</option>
          </select>

          <input
            type="date"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="date-input"
          />
          <input
            type="date"
            placeholder="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="date-input"
          />
        </div>

        {/* Activities Table */}
        <div className="activities-table">
          <table>
            <thead>
              <tr>
                <th>User Recent Activity</th>
                <th>CustomerName</th>
                 <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedActivities.map((activity, index) => (
                <tr key={index}>
                  <td className="contaonter">
                    <div>
                      <img src={activity.image} alt={activity.name} className="activity-image" />
                    </div>
                    <div className="loan-activity-container">
                      <p className="loan-activity">{activity.activity}</p>
                      <span className="loan-update">{activity.update}</span>
                    </div>
                      </td>
                  <td>{activity.name}</td>
                   <td>{activity.date}</td>
                   <td className={
                      activity.action.toLowerCase() === 'pending' ? 'bg-yellow' :
                      activity.action.toLowerCase() === 'verify' ? 'bg-red' :
                      activity.action.toLowerCase() === 'approval' ? 'bg-green' :
                      ''
                    }>
                      {activity.action}
                    </td>  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Loan;
