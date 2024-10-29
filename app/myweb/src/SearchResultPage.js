import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SearchResultPage = () => {
    const { searchTerm } = useParams();
    const navigate = useNavigate();

    const companies = [
        { name: 'ตัวอย่างบริษัท 1', views: 250 },
        { name: 'ตัวอย่างบริษัท 2', views: 180 }
    ];

    const handleCompanyClick = (name) => {
        navigate(`/company/${name}`);
    };

    return (
        <div className="container">
            <h1>ผลการค้นหาสำหรับ: {searchTerm}</h1>
            <ul>
                {companies.map((company, index) => (
                    <li key={index} onClick={() => handleCompanyClick(company.name)}>
                        {index + 1}. {company.name} <span className="views">{company.views}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResultPage;
