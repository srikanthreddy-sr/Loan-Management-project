import React, { useState, useMemo, useCallback } from "react";
import { FaSearch, FaMoneyBillWave, FaExchangeAlt, FaPiggyBank, FaFileExport, FaSort } from "react-icons/fa";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./index.css";

const appliedLoansData = [
  { name: "Kate Green", date: "2021-06-05", status: "Active", amount: 15000 },
  { name: "Mark Brown", date: "2021-06-04", status: "Pending", amount: 8000 },
  { name: "Lucy Adams", date: "2021-06-02", status: "Approved", amount: 12000 },
  { name: "Tom Wilson", date: "2021-05-30", status: "Rejected", amount: 5000 },
  { name: "Sara Lee", date: "2021-05-28", status: "Active", amount: 20000 },
];

const PAGE_SIZE = 5;
const COLORS = ["#4caf50", "#ff9800", "#2196f3", "#f44336"];

export default function UserDetails() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleSort = key => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') direction = 'desc';
    setSortConfig({ key, direction });
  };

  const filtered = useMemo(() => {
    return appliedLoansData
      .filter(loan =>
        (!search || loan.name.toLowerCase().includes(search.toLowerCase())) &&
        (!statusFilter || loan.status === statusFilter)
      )
      .sort((a, b) => {
        if (!sortConfig.key) return 0;
        let aVal = a[sortConfig.key];
        let bVal = b[sortConfig.key];
        if (sortConfig.key === 'date') {
          aVal = new Date(aVal);
          bVal = new Date(bVal);
        }
        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
  }, [search, statusFilter, sortConfig]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = useMemo(() => filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE), [filtered, page]);

  const statusSummary = useMemo(() => {
    const counts = {};
    filtered.forEach(({ status }) => counts[status] = (counts[status] || 0) + 1);
    return Object.entries(counts).map(([status, value]) => ({ name: status, value }));
  }, [filtered]);

  const exportCSV = () => {
    const headers = ['Name', 'Date', 'Amount', 'Status'];
    const rows = filtered.map(l => [l.name, l.date, l.amount, l.status]);
    const csv = [headers, ...rows].map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'loans.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="user-details-container">
      <h2 className="title">User Dashboard - Loans</h2>

      <div className="actions">
        <button className="action-btn">
          <FaMoneyBillWave className="icon" /> Borrow Cash
        </button>
        <button className="action-btn">
          <FaExchangeAlt className="icon" /> Transfer
        </button>
        <button className="action-btn">
          <FaPiggyBank className="icon" /> Deposit Cash
        </button>
        <button className="action-btn export" onClick={exportCSV}>
          <FaFileExport className="icon" /> Export CSV
        </button>
      </div>

      <div className="controls">
        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search by customer name..."
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1); }}
            className="search-input"
          />
        </div>
        <select
          value={statusFilter}
          onChange={e => { setStatusFilter(e.target.value); setPage(1); }}
          className="filter-select"
        >
          <option value="">All Statuses</option>
          {['Active', 'Pending', 'Approved', 'Rejected'].map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="summary-chart">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={statusSummary} dataKey="value" nameKey="name" outerRadius={80} fill={COLORS[0]} label>
              {statusSummary.map((entry, idx) => <Cell key={idx} fill={COLORS[idx % COLORS.length]} />)}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <table className="loans-table">
        <thead>
          <tr>
            {['name', 'date', 'amount', 'status'].map(col => (
              <th key={col} onClick={() => handleSort(col)}>
                {col.charAt(0).toUpperCase() + col.slice(1)} <FaSort className="sort-icon" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginated.map((loan, idx) => (
            <tr key={idx} className="loan-row">
              <td>{loan.name}</td>
              <td>{new Date(loan.date).toLocaleDateString()}</td>
              <td>${loan.amount.toLocaleString()}</td>
              <td>
                <span className={`status-badge status-${loan.status.toLowerCase()}`}>{loan.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button disabled={page===1} onClick={() => setPage(p => p-1)}>Prev</button>
        {Array.from({length: totalPages}, (_,i)=>(
          <button key={i} className={page===i+1?'active':''} onClick={()=>setPage(i+1)}>{i+1}</button>
        ))}
        <button disabled={page===totalPages} onClick={() => setPage(p => p+1)}>Next</button>
      </div>
    </div>
  );
}
