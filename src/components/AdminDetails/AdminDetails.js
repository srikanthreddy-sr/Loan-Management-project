import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar, PieChart, Pie } from "recharts";
import { FaUsers, FaMoneyBillWave, FaUserTie, FaDollarSign, FaChartLine, FaBusinessTime, FaClock } from "react-icons/fa";
import "./index.css";

// Sample Data
const repaymentsCollected = [
  { month: "Jan", value: 100 },
  { month: "Feb", value: 200 },
  { month: "Mar", value: 300 },
  { month: "Apr", value: 400 },
];

const loanData = [
  { category: "Open Loans", recoveryRate: 0.7 },
  { category: "Fully Paid Loans", recoveryRate: 1 },
  { category: "Default Loans", recoveryRate: 0.2 },
];

const recoveryRateData = [
  { category: "Open Loans", recoveryRate: 0.7, color: "#8884d8" },
  { category: "Fully Paid Loans", recoveryRate: 1, color: "#82ca9d" },
  { category: "Default Loans", recoveryRate: 0.2, color: "#d84f4f" },
];

// New Metrics Data
const additionalMetrics = [
  { icon: <FaChartLine />, label: "Loan Approval Rate", value: "85%" },
  { icon: <FaBusinessTime />, label: "Pending Loans", value: "50" },
  { icon: <FaClock />, label: "Loans Overdue", value: "12" },
  { icon: <FaMoneyBillWave />, label: "Total Amount Disbursed", value: "$1,500,000" },
];

// Recent Loans Sample Data with Random Images
const recentLoans = [
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

export default function AdminDetails() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-gray-200 p-8">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h2>

        {/* Logo and Statistics Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <FaUsers className="w-12 h-12 mx-auto mb-4 text-gray-800" />
            <h4 className="text-xl font-semibold text-gray-800">200 Active Users</h4>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <FaUserTie className="w-12 h-12 mx-auto mb-4 text-gray-800" />
            <h4 className="text-xl font-semibold text-gray-800">100 Borrowers</h4>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <FaMoneyBillWave className="w-12 h-12 mx-auto mb-4 text-gray-800" />
            <h4 className="text-xl font-semibold text-gray-800">450,000 Savings</h4>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <FaDollarSign className="w-12 h-12 mx-auto mb-4 text-gray-800" />
            <h4 className="text-xl font-semibold text-gray-800">30 Repaid Loans</h4>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          {additionalMetrics.map((metric, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4 text-gray-800">{metric.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800">{metric.label}</h4>
              <p className="text-lg text-gray-600">{metric.value}</p>
            </div>
          ))}
        </div>

        {/* Recent Loans Section */}
        <h3 className="text-2xl font-semibold mb-4 mt-6 text-gray-700">Recent Loans</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-gray-800">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">User Recenty Activity</th>
                <th className="px-4 py-2 text-left">Customer Name</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentLoans.map((loan, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 contaonter">
                    <img src={loan.image} alt={loan.name} className="w-12 h-12 rounded-full ml-3" />
                   <div className="loan-activity-container">
                      <p className="loan-activity ml-3">{loan.activity}</p>
                      <span className="loan-update">{loan.update}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2">{loan.name}</td>
                  <td className="px-4 py-2">{loan.date}</td>
                   <td className={
                      loan.action.toLowerCase() === 'pending' ? 'bg-yellow' :
                      loan.action.toLowerCase() === 'verify' ? 'bg-red' :
                      loan.action.toLowerCase() === 'approval' ? 'bg-green' :
                      ''
                    }>
                      {loan.action}
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recovery Rate Bar Chart */}
        
       
        <div className="mb-6 bar">
           <h3 className="text-2xl font-semibold mb-4 mt-6 text-gray-700">Recovery Rate (Open, Fully Paid, Default Loans)</h3>
          <BarChart width={600} height={300} data={recoveryRateData}>
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="recoveryRate" fill="#82ca9d" />
          </BarChart>
        </div>

        {/* Loan Distribution Pie Chart */}
        <h3 className="text-2xl font-semibold mb-4 mt-6 text-gray-700">Loan Distribution by Category</h3>
        <div className="mb-6">
          <PieChart width={400} height={400}>
            <Pie
              data={loanData}
              dataKey="recoveryRate"
              nameKey="category"
              outerRadius={150}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </div>

        {/* Repayments Collected Line Chart */}
        <h3 className="text-2xl font-semibold mb-4 mt-6 text-gray-700">Repayments Collected - Monthly</h3>
        <div className="mb-6">
          <LineChart width={600} height={300} data={repaymentsCollected}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#82ca9d" />
          </LineChart>
        </div>

        {/* Outstanding Loans Bar Chart */}
        <h3 className="text-2xl font-semibold mb-4 mt-6 text-gray-700">Total Outstanding Loans - Monthly</h3>
        <div className="mb-6">
          <BarChart width={600} height={300} data={repaymentsCollected}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    </div>
  );
}
