import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import SearchResultPage from './SearchResultPage';
import CompanyDetailPage from './CompanyDetailPage';
import AddCompanyForm from './AddCompanyForm'; 
import LoginForm from './LoginForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:searchTerm" element={<SearchResultPage />} />
        <Route path="/company/:companyName" element={<CompanyDetailPage />} />
        <Route path="/add" element={<AddCompanyForm />} /> 
        <Route path="/login" element={<LoginForm />} /> 
      </Routes>
    </Router>
  );
}

export default App;
