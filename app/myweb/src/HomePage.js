import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './App.css';

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentView, setCurrentView] = useState('topInvestors');
    const navigate = useNavigate(); 

    const companies = {
        topInvestors: [
            { name: 'บริษัท A', investment: 6209 },
            { name: 'บริษัท B', investment: 3918 },
            { name: 'บริษัท C', investment: 3065 },
            { name: 'บริษัท D', investment: 2504 },
            { name: 'บริษัท E', investment: 2060 }
        ],
        leastInvestors: [
            { name: 'บริษัท F', investment: 150 },
            { name: 'บริษัท G', investment: 120 },
            { name: 'บริษัท H', investment: 110 },
            { name: 'บริษัท I', investment: 90 },
            { name: 'บริษัท J', investment: 85 }
        ],
        mostEmployees: [
            { name: 'บริษัท K', employees: 5000 },
            { name: 'บริษัท L', employees: 4500 },
            { name: 'บริษัท M', employees: 4000 },
            { name: 'บริษัท N', employees: 3800 },
            { name: 'บริษัท O', employees: 3400 }
        ],
        leastEmployees: [
            { name: 'บริษัท P', employees: 150 },
            { name: 'บริษัท Q', employees: 130 },
            { name: 'บริษัท R', employees: 110 },
            { name: 'บริษัท S', employees: 90 },
            { name: 'บริษัท T', employees: 80 }
        ]
    };

    const handleSearch = () => {
        if (searchTerm) {
            navigate(`/search/${searchTerm}`); // ใช้ navigate แทน history.push
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleCompanyClick = (name) => {
        navigate(`/company/${name}`); // ใช้ navigate แทน history.push
    };

    const renderCompanyList = () => {
        const currentList = companies[currentView];
        return (
            <ul>
                {currentList.map((company, index) => (
                    <li key={index} onClick={() => handleCompanyClick(company.name)} className="company-name">
                        {index + 1}. {company.name}
                        <span className="data">
                            {currentView.includes('Employees')
                                ? `${company.employees} employees`
                                : `${company.investment} investments`}
                        </span>
                    </li>
                ))}
            </ul>
        );
    };
    
    return (
        <div className="container">
            <h1 className="title">MIXSIX</h1>
            <p className="description">ชุดข้อมูลที่4</p>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="กรอกชื่อบริษัท"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={handleSearch}>🔍</button>
            </div>

            <div className="top-companies">
                <div className="view-selector">
                    <button onClick={() => setCurrentView('topInvestors')}>
                        🔝 บริษัทที่มีผู้ลงทุนสูงสุด
                    </button>
                    <button onClick={() => setCurrentView('leastInvestors')}>
                        🔻 บริษัทที่มีผู้ลงทุนต่ำสุด
                    </button>
                    <button onClick={() => setCurrentView('mostEmployees')}>
                        👥 บริษัทที่มีพนักงานมากสุด
                    </button>
                    <button onClick={() => setCurrentView('leastEmployees')}>
                        🧑‍💼 บริษัทที่มีพนักงานน้อยสุด
                    </button>
                </div>

                <div className="card">
                    <h2>
                        {currentView === 'topInvestors' && "บริษัทที่มีผู้ลงทุนสูงสุด"}
                        {currentView === 'leastInvestors' && "บริษัทที่มีผู้ลงทุนต่ำสุด"}
                        {currentView === 'mostEmployees' && "บริษัทที่มีพนักงานมากสุด"}
                        {currentView === 'leastEmployees' && "บริษัทที่มีพนักงานน้อยสุด"}
                    </h2>
                    {renderCompanyList()}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
