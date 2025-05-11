import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar } from "recharts";

const loansReleased = [
  { month: "1", value: 200 },
  { month: "2", value: 100 },
  { month: "3", value: 300 },
];

const outstandingLoans = [
  { month: "1", value: 500 },
  { month: "2", value: 300 },
  { month: "3", value: 700 },
];

const appliedLoans = [
  { name: "Kate Green", date: "June 5th, 2021", status: "Active" },
  { name: "Mark Brown", date: "June 5th, 2021", status: "Pending" },
];

export default function VerifierDashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Verifier Dashboard - Loans</h2>

      <h3 className="text-xl font-semibold mb-2">Applied Loans</h3>
      <ul>
        {appliedLoans.map((loan, index) => (
          <li key={index} className="border-b py-2">{loan.name} - {loan.status}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mb-4 mt-6">Loans Released Monthly</h3>
      <LineChart width={600} height={300} data={loansReleased}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" />
      </LineChart>

      <h3 className="text-xl font-semibold mb-4 mt-6">Total Outstanding Open Loans - Monthly</h3>
      <BarChart width={600} height={300} data={outstandingLoans}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
}
