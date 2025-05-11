import React, { useState } from 'react';
import { Line } from 'react-chartjs-2'; // Import Line chart from react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'; // Import necessary chart elements
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './index.css';

// Register chart.js elements
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AppForm = ({ onSubmit, closePopup }) => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    tenure: '',
    purpose: '',
    income: '',
    address: '',
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);  // Pass formData back to parent on submit
    closePopup();  // Close the popup after form submission
    
    // Navigate to UserDetails after form submission
    navigate('/user-details'); // Ensure '/user-details' matches the path to the UserDetails component
  };

  // Data for the line chart (example)
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'], // X-axis labels
    datasets: [
      {
        label: 'Loan Amount Over Time',
        data: [1000, 2000, 1500, 2500, 3000], // Y-axis data (example)
        fill: false,
        borderColor: 'rgba(106, 89, 255, 1)', // Line color
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="app-form-container">
      <h2>APPLY FOR A LOAN</h2>
      <form className="app-form" onSubmit={handleSubmit}>
        <label>
          Full Name as it appears on bank account
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name as it appears on bank account"
            required
          />
        </label>

        <label>
          How much do you need?
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="How much do you need?"
            required
          />
        </label>

        <label>
          Loan tenure (in months)
          <input
            type="number"
            name="tenure"
            value={formData.tenure}
            onChange={handleChange}
            placeholder="Loan tenure"
            required
          />
        </label>

        <label>
          Employment status
          <textarea
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            placeholder="Employment status"
            required
          />
        </label>

        <label>
          Reason for loan
          <input
            type="text"
            name="income"
            value={formData.income}
            onChange={handleChange}
            placeholder="Reason for loan"
            required
          />
        </label>

        <label>
          Employment address
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Employment address"
            required
          />
        </label>

        {/* Chart */}
        <div className="chart-container">
          <h3>Loan Progress Over Time</h3>
          <Line data={chartData} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AppForm;
