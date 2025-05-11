import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Loan from './components/Loan/Loan';
import Header from './components/Header/Header';
import UserDetails from './components/UserDetails/UserDetails'; // Import UserDetails component
import UserRoleProvider from './Context/UserRoleContext';
import './App.css';

const App = () => {
  return (
    <UserRoleProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loan" element={<Loan />} />
          <Route path="/user-details" element={<UserDetails />} /> {/* Add this route */}
        </Routes>
      </BrowserRouter>
    </UserRoleProvider>
  );
};

export default App;
